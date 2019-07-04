/* eslint-disable no-unused-expressions */
import { describe, it, before } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import db from '../../server/src/config/db';
import app from '../../server/src';
import { Customer } from '../../server/src/models/Customer';

const { expect } = chai;
chai.use(chaiHttp);

before((done) => {
  db.sync({ force: true })
    .then(() => done())
    .catch(() => done());
});

describe('Customer API', () => {
  describe('Customer registration', () => {
    it("Should add a new customer to the database and return the user's details", (done) => {
      const user = {
        name: 'Malik',
        password: 'mlkmahmud',
        email: 'almalikmahmud@gmail.com',
      };
      const { name, email } = user;
      chai
        .request(app)
        .post('/api/v1/auth/register/customers')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(user)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('name', name);
          expect(res.body).to.have.property('email', email);
          expect(res.body).to.have.property('cart', null);
          expect(res.body).to.have.property('image');
          // CHECK THE DB TO ENSURE OUR USER WAS ADDED
          Customer.findOne({ where: { name } })
            .then((customer) => {
              expect(customer).to.not.be.null;
              expect(customer).to.have.property('email', email);
              expect(customer).to.have.property('name', name);
              done();
            })
            .catch(e => done(e));
        });
    });
    it("Should not create a new user with an existing user's name/email", (done) => {
      const user = {
        name: 'Malik',
        email: 'mlkmahmud@yahoo.co.uk',
        password: 'itsasecretshh',
      };
      chai
        .request(app)
        .post('/api/v1/auth/register/customers')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property(
            'message',
            'User with given email/name already exists',
          );
          // Ensure the user with duplicate name was not add to DB
          Customer.findAll()
            .then((customers) => {
              expect(customers).to.have.lengthOf(1);
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
        .post('/api/v1/auth/register/customers')
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
        .post('/api/v1/auth/register/customers')
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
        .post('/api/v1/auth/register/customers')
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
  describe('Customer Login', () => {
    it('Should log an existing user in', (done) => {
      const existingUser = {
        email: 'almalikmahmud@gmail.com',
        password: 'mlkmahmud',
      };
      chai.request(app)
        .post('/api/v1/auth/login/customers')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(existingUser)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('name', 'Malik');
          expect(res.body).to.have.property('email', 'almalikmahmud@gmail.com');
          expect(res.body).to.have.property('image');
          expect(res.body).to.have.property('cart', null);
          done();
        });
    });
    it("Should return an error message if user doesn't exist", (done) => {
      const nonExistentUser = {
        email: 'random@email.com',
        password: 'arandomstring',
      };
      chai.request(app)
        .post('/api/v1/auth/login/customers')
        .set('Contetn-Type', 'application/x-www-form-urlencoded')
        .send(nonExistentUser)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message', "Can't find a customer with the given email address.");
          done();
        });
    });
    it('Should return an error message if password is incorrect', (done) => {
      const user = {
        email: 'almalikmahmud@gmail.com',
        password: 'wrongpassword',
      };
      chai.request(app)
        .post('/api/v1/auth/login/customers')
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
});
