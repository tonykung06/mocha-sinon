const assert = require('assert')
const AuthControllerFactory = require('../../controllers/auth.controller')

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
      assert.equal(false, authController.isAuthorized('admin'))
    })
    it('returns true if authorized', () => {
      authController.setRoles(['user', 'admin'])
      assert.equal(true, authController.isAuthorized('admin'))
    })
    it('does NOT allow a get if not authorized')
    it('allows get if authorized')
  })

  describe('isAuthorizedAsync', () => {
    it('returns false if not authorized', async function () {
      this.timeout(2500)
      const result = await authController.isAuthorizedAsync('admin')
      assert.equal(false, result)
    })
    it('returns true if authorized', async function () {
      this.timeout(2500)
      authController.setRoles(['user', 'admin'])
      const result = await authController.isAuthorizedAsync('admin')
      assert.equal(true, result)
    })
  })
})
