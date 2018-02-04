const chai = require('chai')
const AppliedBlockchainLib = require('./../dist/assets/js/AppliedBlockchain')

describe('Testing valid & invalid addresses', function() {
    it('Address valid', function(done) {
        let result = AppliedBlockchainLib.checkValidAddress('738d145faabb1e00cf5a017588a9c0f998318012')
        chai.assert.isArray(result)
        done()
    })
    it('Address valid with 0x', function(done) {
        let result = AppliedBlockchainLib.checkValidAddress('0x738d145faabb1e00cf5a017588a9c0f998318012')
        chai.assert.isArray(result)
        done()
    })
    it('Address too short', function(done) {
        let result = AppliedBlockchainLib.checkValidAddress('738d145faabb1e00cf5a017588')
        chai.assert.equal(result, null)
        done()
    })
    it('Address too long', function(done) {
        let result = AppliedBlockchainLib.checkValidAddress('738d145faabb1e00cf5a017588a9c0f99831801273467ab')
        chai.assert.equal(result, null)
        done()
    })
    it('Nonsense address', function(done) {
        //Correct amount of chars
        let result = AppliedBlockchainLib.checkValidAddress('blahblahblahblahblahblahblahblahblahblah')
        chai.assert.equal(result, null)
        done()
    })
})