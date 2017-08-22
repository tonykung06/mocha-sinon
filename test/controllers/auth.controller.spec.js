const AuthControllerFactory = require('../../controllers/auth.controller')
const expect = require('chai').expect
const sinon = require('sinon')

beforeEach(function globalSetup () {
  console.log('global beforeEach is running for every unit test functions across all test files')
})

describe('AuthController', () => {
  let authController = null
  beforeEach(() => {
    authController = AuthControllerFactory()
    authController.setRoles(['user'])
  })

  // describe.only, describe.skip
  // it.only, it.skip
  // this.skip
  describe('isAuthorized', () => {
    let user = {}
    beforeEach(() => {
      user = {
        roles: ['user'],
        isAuthorized: function (needRole) {
          return this.roles.indexOf(needRole) > -1
        }
      }
      sinon.spy(user, 'isAuthorized')
      authController.setUser(user)
    })

    it.only('returns false if not authorized', () => {
      expect(authController.isAuthorized('admin')).to.be.false
      expect(user.isAuthorized.calledOnce).to.be.true
    })
    it('returns true if authorized', () => {
      authController.setRoles(['user', 'admin'])
      expect(authController.isAuthorized('admin')).to.be.true
    })
    it('does NOT allow a get if not authorized')
    it('allows get if authorized')
  })

  describe('isAuthorizedAsync', () => {
    it('returns false if not authorized', async function () {
      this.timeout(2500)
      const result = await authController.isAuthorizedAsync('admin')
      expect(result).to.be.false
    })
    it('returns true if authorized', async function () {
      this.timeout(2500)
      authController.setRoles(['user', 'admin'])
      const result = await authController.isAuthorizedAsync('admin')
      expect(result).to.be.true
    })
  })

  describe('getIndex', () => {
    it('should render index', () => {
      const req = {}
      const res = {
        render: sinon.spy()
      }
      authController.getIndex(req, res)
      expect(res.render.calledOnce).to.be.true
      expect(res.render.firstCall.args[0]).to.equal('index')
    })
  })
})
