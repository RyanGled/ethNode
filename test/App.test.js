const chai = require('chai')
const request = require('request')

describe('Page Status/Content', function () {
    it('Page Status', function(done) {
        request('http://localhost:3000' , function(error, response, body) {
            chai.expect(response.statusCode).to.equal(200)
            done()
        });
    });

    it('Page Content', function(done) {
        request('http://localhost:3000' , function(error, response, body) {
            chai.expect(body).to.contain('Applied Blockchain')
            done()
        });
    });
})