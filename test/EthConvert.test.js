const chai = require('chai')
const EthConverter = require('./../dist/assets/js/EthConvert')

const ethValInWei = 19254563000000000;
describe('Testing Wei unit and upward conversions', function() {
    it('Wei -> Kwei', function(done) {
        let result = EthConverter.convert(ethValInWei, 'Wei', 'Kwei')
        chai.assert.equal(result, 19254563000000)
        done()
    })
    it('Wei -> Mwei', function(done) {
        let result = EthConverter.convert(ethValInWei, 'Wei', 'Mwei')
        chai.assert.equal(result, 19254563000)
        done()
    })
    it('Wei -> Gwei', function(done) {
        let result = EthConverter.convert(ethValInWei, 'Wei', 'Gwei')
        chai.assert.equal(result, 19254563)
        done()
    })
    it('Wei -> Szabo', function(done) {
        let result = EthConverter.convert(ethValInWei, 'Wei', 'Szabo')
        chai.assert.equal(result, 19254.563)
        done()
    })
    it('Wei -> Finney', function(done) {
        let result = EthConverter.convert(ethValInWei, 'Wei', 'Finney')
        chai.assert.equal(result, 19.254562999999997)
        done()
    })
    it('Wei -> Ether', function(done) {
        let result = EthConverter.convert(ethValInWei, 'Wei', 'Ether')
        chai.assert.equal(result, 0.019254563)
        done()
    })
})

const ethValInEth = 0.019254563;
describe('Testing Ether unit and downward conversions', function() {
    it('Ether -> Wei', function(done) {
        let result = EthConverter.convert(ethValInEth, 'Ether', 'Wei')
        chai.assert.equal(result, 19254563000000000)
        done()
    })
    it('Ether -> Kwei', function(done) {
        let result = EthConverter.convert(ethValInEth, 'Ether', 'Kwei')
        chai.assert.equal(result, 19254563000000)
        done()
    })
    it('Ether -> Mwei', function(done) {
        let result = EthConverter.convert(ethValInEth, 'Ether', 'Mwei')
        chai.assert.equal(result, 19254563000)
        done()
    })
    it('Ether -> Gwei', function(done) {
        let result = EthConverter.convert(ethValInEth, 'Ether', 'Gwei')
        chai.assert.equal(result, 19254563)
        done()
    })
    it('Ether -> Szabo', function(done) {
        let result = EthConverter.convert(ethValInEth, 'Ether', 'Szabo')
        chai.assert.equal(result, 19254.563)
        done()
    })
    it('Ether -> Finney', function(done) {
        let result = EthConverter.convert(ethValInEth, 'Ether', 'Finney')
        chai.assert.equal(result, 19.254562999999997)
        done()
    })
})

it('Test nonsense to unit', function(done) {
    let result = EthConverter.convert(ethValInEth, 'Ether', 'Blah')
    chai.assert.isBoolean(result)
    chai.assert.equal(result, false)
    done()
})
it('Test nonsense from unit', function(done) {
    let result = EthConverter.convert(ethValInEth, 'Blah', 'Ether')
    chai.assert.isBoolean(result)
    chai.assert.equal(result, false)
    done()
})
it('Test 0 val', function(done) {
    let result = EthConverter.convert(0, 'Ether', 'Wei')
    chai.assert.equal(result, 0)
    done()
})