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
    it('Should add a new customer to the database and return the user\'s details', (done) => {
      const newCustomer = {
        name: 'Malik',
        password: 'mlkmahmud',
        email: 'almalikmahmud@gmail.com',
      };
      const { name, email } = newCustomer;
      chai.request(app)
        .post('/api/v1/auth/register/customers')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(newCustomer)
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
            .catch(() => done());
        });
    });
  });
});
