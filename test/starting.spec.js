const expect = require('chai').expect

describe('Basic Mocha Test', () => {
  it('deals with objects', () => {
    const obj = {
      name: 'tony',
      gender: 'male'
    }
    const obj2 = {
      name: 'tony',
      gender: 'male'
    }
    expect(obj).to.have.property('name').equal('tony')
    expect(obj).to.deep.equal(obj2)
  })

  it('deals with null', () => {
    var myNull = null
    expect(myNull).to.not.exist
  })
})
