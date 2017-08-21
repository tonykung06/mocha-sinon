function AuthController () {
  let roles = null

  function setRoles (v) {
    roles = v
  }

  function isAuthorized (neededRole) {
    return roles.indexOf(neededRole) > -1
  }
  function isAuthorizedAsync (neededRole) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(roles.indexOf(neededRole) > -1)
      }, 2100)
    })
  }
  return {
    isAuthorized,
    isAuthorizedAsync,
    setRoles
  }
}

module.exports = AuthController
