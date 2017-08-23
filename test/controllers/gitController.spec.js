const rewire = require('rewire')

const GitCtrl = rewire('../../controllers/gitController')
const gitController = GitCtrl()
const chai = require('chai')
const sinon = require('sinon')

chai.should()

describe('gitController', function () {
  let getUser = null

  beforeEach(function () {
    const gitService = GitCtrl.__get__('gitService')
    getUser = sinon.spy(gitService, 'getUser')
    GitCtrl.__set__('gitService', gitService)
  })

  it('should get user and repos from git service', function (done) {
    this.timeout(10000)
    const req = {params: {userId: 'tonykung06'}}
    const res = {json: test}

    function test (user) {
      getUser.getCall(0).args[0].should.equal('tonykung06')
      getUser.calledOnce.should.be.true
      user.login.should.equal('tonykung06')
      done()
    }
    gitController.userGet(req, res)
  })
})
