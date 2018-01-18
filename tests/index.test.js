const should = require('should');
const evalx = require('../index');

describe('Evalx Tests', function () {
    it('calling eval should return hello world', function (done) {
        let response = eval('"hello world"')
        response.should.equal('hello world');
        done();
    });

    it('calling eval after disabling it should throw an error', function (done) {
        evalx.disableEval(true);
        try {
            let response = eval('"hello world"')
        } catch (e) {
            return done();
        }
        throw Error('failed')
    });

    it('calling eval after re-enabling should return 2', function (done) {
        evalx.disableEval(false);
        let response = eval('1+1')
        response.should.equal(2);
        done();
    });
});