const should = require('should');
const evaless = require('../index');

describe('Evaless Tests', function () {
    it('calling eval should return hello world', function (done) {
        let response = eval('"hello world"')
        response.should.equal('hello world');
        done();
    });

    it('calling eval after disabling it should throw an error', function (done) {
        evaless.enableEval(false);
        try {
            let response = eval('"hello world"')
        } catch (e) {
            return done();
        }
        throw Error('failed')
    });

    it('calling eval after re-enabling should return 2', function (done) {
        evaless.enableEval(true);
        let response = eval('1+1')
        response.should.equal(2);
        done();
    });
});