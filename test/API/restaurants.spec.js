/* eslint-disable no-unused-expressions */
import { describe, it } from 'mocha';
import chai from 'chai';
import sequelize from 'sequelize';
import chaiHttp from 'chai-http';
// import db from '../../server/src/config/db';
import app from '../../server/src';
import { Restaurant } from '../../server/src/models/Restaurant';

const { expect } = chai;
const { Op } = sequelize;
chai.use(chaiHttp);

describe('Restaurant API', () => {
  describe('Restaurant registration', () => {
    it('Should add a new restaurant to the DB and return its details to the user', (done) => {
      const newRestaurant = {
        name: 'Chicken Republic',
        email: 'chickenrep@gmail.com',
        password: 'refueled!',
      };
      const { name, email } = newRestaurant;
      chai.request(app)
        .post('/api/v1/auth/register/restaurant')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(newRestaurant)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('name', name);
          expect(res.body).to.have.property('email', email);
          expect(res.body).to.have.property('image');
          expect(res.body).to.have.property('menu', null);
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
          // Ensure the user with duplicate name was not add to DB
          Restaurant.findAll()
            .then((restaurants) => {
              expect(restaurants).to.have.lengthOf(1);
              done();
            })
            .catch(e => done(e));
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
});
