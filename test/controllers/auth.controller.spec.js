const AuthControllerFactory = require('../../controllers/auth.controller')
const expect = require('chai').expect

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
    it('returns false if not authorized', () => {
      expect(authController.isAuthorized('admin')).to.be.false
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
})
