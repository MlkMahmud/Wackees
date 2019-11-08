/* eslint-disable no-unused-expressions */
import {
  describe, it, before, after,
} from 'mocha';
import chai from 'chai';
import sequelize from 'sequelize';
import chaiHttp from 'chai-http';
import app from '../server/src';
import db from '../server/src/config/db';
import { Restaurant, Meal } from '../server/src/models/Restaurant';

const { expect } = chai;
const { Op } = sequelize;
chai.use(chaiHttp);
const agent = chai.request.agent(app);

before((done) => {
  db.sync({ force: true })
    .then(() => done())
    .catch(() => done());
});

describe('Restaurant API', () => {
  describe('Restaurant registration', () => {
    it('Should add a new restaurant to the DB and return its details to the user', (done) => {
      const newRestaurant = {
        name: 'Chicken Republic',
        email: 'chickenrep@gmail.com',
        password: 'refueled!',
      };
      const { name, email } = newRestaurant;
      chai
        .request(app)
        .post('/api/v1/auth/register/restaurant')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(newRestaurant)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('name', name);
          expect(res.body).to.have.property('email', email);
          expect(res.body).to.have.property('image');
          Restaurant.findOne({ where: { [Op.or]: [{ email }, { name }] } })
            .then((restaurant) => {
              expect(restaurant).to.be.not.null;
              expect(restaurant).to.have.property('name', name);
              expect(restaurant).to.have.property('email', email);
              done();
            })
            .catch(e => done(e));
        });
    });
    it("Should not create a new restaurant with an existing user's name/email", (done) => {
      const user = {
        name: 'Chicken Republic',
        email: 'chickenrep@gmail.com',
        password: 'refueled!',
      };
      chai
        .request(app)
        .post('/api/v1/auth/register/restaurant')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property(
            'message',
            'restaurant with given email/name already exists',
          );
          done();
        });
    });
    it('Should prompt the user with an error message if email is invalid', (done) => {
      const user = {
        name: 'Jon Snow',
        password: 'winterfell!!!',
        email: 'theking@beyondthewall',
      };
      chai
        .request(app)
        .post('/api/v1/auth/register/restaurant')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property(
            'message',
            'Please provide a valid email address.',
          );
          done();
        });
    });
    it('Should prompt the user with an error message if password is invalid', (done) => {
      const user = {
        name: 'Cersie Lannister',
        password: 'prideoflannister',
        email: 'jamies@lannisport.com',
      };
      chai
        .request(app)
        .post('/api/v1/auth/register/restaurant')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property(
            'message',
            "Password must contain at least 8 characters not including user's name",
          );
          done();
        });
    });
    it('Should prompt the user with an error message if name is invalid', (done) => {
      const user = {
        name: '',
        password: 'thenorthremembers',
        email: 'agirl@yahoo.com',
      };
      chai
        .request(app)
        .post('/api/v1/auth/register/restaurant')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property(
            'message',
            'Name cannot be blank or contain alphanumeric characters',
          );
          done();
        });
    });
  });
  describe('Restaurant Login', () => {
    it('Should log an existing user in', (done) => {
      const existingUser = {
        email: 'chickenrep@gmail.com',
        password: 'refueled!',
      };
      chai
        .request(app)
        .post('/api/v1/auth/login/restaurant')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(existingUser)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('name', 'Chicken Republic');
          expect(res.body).to.have.property(
            'email',
            'chickenrep@gmail.com',
          );
          expect(res.body).to.have.property('image');
          expect(res.body.meals).to.have.lengthOf(0);
          done();
        });
    });
    it("Should return an error message if user doesn't exist", (done) => {
      const nonExistentUser = {
        email: 'random@email.com',
        password: 'arandomstring',
      };
      chai
        .request(app)
        .post('/api/v1/auth/login/restaurant')
        .set('Contetn-Type', 'application/x-www-form-urlencoded')
        .send(nonExistentUser)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          expect(res.body).to.have.property(
            'message',
            "Can't find a restaurant with the given email address.",
          );
          done();
        });
    });
    it('Should return an error message if password is incorrect', (done) => {
      const user = {
        email: 'chickenrep@gmail.com',
        password: 'wrongpassword',
      };
      chai
        .request(app)
        .post('/api/v1/auth/login/restaurant')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(user)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message', 'Incorrect password.');
          done();
        });
    });
  });
  describe('Fetch Restaurants', () => {
    it('Should return an array of all resturants', (done) => {
      chai.request(app)
        .get('/api/v1/restaurants')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(1);
          done();
        });
    });
  });
  describe('GET Meals', () => {
    before((done) => {
      const user = {
        email: 'chickenrep@gmail.com',
        password: 'refueled!',
      };
      agent
        .post('/api/v1/auth/login/restaurant')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(user)
        .end(() => done());
    });
    it('Should return an array of a restaurant\'s meals', (done) => {
      agent
        .get('/api/v1/meals')
        .end((err, res) => {
          expect(res).to.have.status(200);
          // We have not added any meals so its empty here
          expect(res.body).to.have.lengthOf(0);
          done();
        });
    });
  });
  describe('POST meals', () => {
    it('Should add a meal to a restaurant\'s DB', (done) => {
      agent
        .post('/api/v1/meals')
        .field('name', 'Chickwizz')
        .field('price', '1000')
        .field('available', 'true')
        .attach('image', './test/API/test.jpg', 'test.jpg')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.redirect;
          expect(res.body).to.have.lengthOf(1);
          done();
        });
    });
    it('Should set a default image for a new meal if image field is null', (done) => {
      agent
        .post('/api/v1/meals')
        .field('name', 'Refuel Meal')
        .field('price', '500')
        .field('available', 'true')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.redirect;
          expect(res.body).to.have.lengthOf(2);
          res.body.forEach((meal) => {
            expect(meal.image).to.not.be.null;
          });
          done();
        });
    });
    it('Should return a 400 error if an invalid name is provided', (done) => {
      agent
        .post('/api/v1/meals')
        .field('name', '')
        .field('price', '500')
        .field('available', 'true')
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message', 'Name Cannot be blank or contain numbers.');
          done();
        });
    });
    it('Should return a 400 error if an invalid price is provided', (done) => {
      agent
        .post('/api/v1/meals')
        .field('name', 'Fried Rice')
        .field('price', 'five hundred')
        .field('available', 'true')
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message', 'Please Input a valid price.');
          done();
        });
    });
  });
  describe('PUT meal', () => {
    let mealId;
    // Get the meal id for the first meal in the db
    before(((done) => {
      Meal.findOne({ where: { name: 'Chickwizz' } })
        .then(({ id }) => {
          mealId = id;
          done();
        })
        .catch(e => done(e));
    }));
    it('Should update the selected meal', (done) => {
      agent
        .put(`/api/v1/meals/${mealId}`)
        .field('name', 'Double Chickwizz')
        .field('price', '1500')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.redirect;
          // Updated meal will be last in meals array
          const updatedMeal = res.body[res.body.length - 1];
          expect(updatedMeal).to.have.property('name', 'Double Chickwizz');
          expect(updatedMeal).to.have.property('price', '1500');
          expect(updatedMeal).to.have.property('available', false);
          expect(updatedMeal).to.have.property('id', mealId);
          expect(updatedMeal.image).to.not.be.null;
          done();
        });
    });
  });
  describe('DELETE meal', () => {
    let mealId;
    before(((done) => {
      Meal.findOne({ where: { name: 'Double Chickwizz' } })
        .then(({ id }) => {
          mealId = id;
          done();
        })
        .catch(e => done(e));
    }));
    it('Should delete a single meal from the DB', (done) => {
      agent
        .delete(`/api/v1/meals/${mealId}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body).to.have.lengthOf(1);
          res.body.forEach(meal => expect(meal).to.not.have.property('name', 'Double Chickwizz'));
          done();
        });
    });
  });
  describe('GET MENU', () => {
    before((done) => {
      agent
        .post('/api/v1/meals')
        .field('name', 'Pasta')
        .field('price', '1200')
        .end((err, res) => {
          expect(err).to.be.null;
          const newMeal = res.body[res.body.length - 1];
          expect(newMeal).to.have.property('name', 'Pasta');
          expect(newMeal).to.have.property('available', false);
          done();
        });
    });
    it('Should return an array of a restaurant\'s available meals', (done) => {
      agent
        .get('/api/v1/menu')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(1);
          res.body.forEach(meal => expect(meal.available).to.be.true);
          done();
        });
    });
  });
  describe('Get Orders', () => {
    it('Should return all orders made to a restaurant', (done) => {
      agent
        .get('/api/v1/orders')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(0);
          done();
        });
    });
  });
  describe('Update profile photo', () => {
    let oldPhoto;
    let newPhoto;
    before((done) => {
      Restaurant.findOne({
        where: { name: 'Chicken Republic' },
      })
        .then(({ image }) => {
          oldPhoto = image;
          done();
        })
        .catch(e => done(e));
    });
    it('Should update a restaurant\'s profile picture', (done) => {
      agent
        .post('/api/v1/upload')
        .attach('image', './test/API/test.jpg', 'test.jpg')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message', 'Success');
          expect(res.body.image).to.not.be.null;
          newPhoto = res.body.image;
          done();
        });
    });
    after((done) => {
      Restaurant.findOne({
        where: { name: 'Chicken Republic' },
      })
        .then(({ image }) => {
          expect(oldPhoto).to.not.equal(image);
          expect(newPhoto).to.equal(image);
          done();
        })
        .catch(e => done(e));
    });
  });
  describe('Log Out', () => {
    it('Should log a user out', (done) => {
      agent
        .get('/api/v1/auth/logout')
        .end(() => done());
    });
    after((done) => {
      // Try accessing a protected route
      agent
        .get('/api/v1/meals')
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message', 'You must be logged in');
          done();
        });
    });
  });
});
