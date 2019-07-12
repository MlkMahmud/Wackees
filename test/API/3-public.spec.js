import { describe, before, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { Restaurant } from '../../server/src/models/Restaurant';
import app from '../../server/src';

chai.use(chaiHttp);
const { expect } = chai;

describe('PUBLIC ROUTES', () => {
  describe('FETCH ALL RESTAURANTS', () => {
    it('Should return an array of all restaurants', (done) => {
      chai.request(app)
        .get('/api/v1/restaurants')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(1);
          done();
        });
    });
  });
  describe('FETCH RESTAURANT', () => {
    let id;
    before((done) => {
      Restaurant.findOne({
        where: { name: 'Chicken Republic' },
      })
        .then(({ id: rId }) => {
          id = rId;
          done();
        })
        .catch(e => done(e));
    });
    it('Should return the selected restaurant\'s menu', (done) => {
      chai.request(app)
        .get(`/api/v1/restaurants/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('name', 'Chicken Republic');
          res.body.menu.forEach(item => expect(item).to.have.property('available', true));
          done();
        });
    });
  });
});
