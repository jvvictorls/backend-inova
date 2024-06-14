const sinon = require('sinon'); 
const chai = require('chai');

function SiginTest () {
  describe('Sigin', () => {
    it('should return a 200 status code', (done) => {
      const req = {};
      const res = {
        status: sinon.spy(),
        send: sinon.spy()
      };
      const next = sinon.spy();
      Sigin(req, res, next);
      chai.expect(res.status.calledWith(200)).to.be.true;
      done();
    });
  });
}