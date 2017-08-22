function AuthController () {
  let roles = null
  let user = null

  function setRoles (v) {
    if (user) {
      user.roles = v
    }
    roles = v
  }

  function setUser (v) {
    user = v
  }

  function isAuthorized (neededRole) {
    if (user) {
      return user.isAuthorized(neededRole)
    }
    return roles.indexOf(neededRole) > -1
  }

  function isAuthorizedAsync (neededRole) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(roles.indexOf(neededRole) > -1)
      }, 2100)
    })
  }

  function getIndex (req, res) {
    res.render('index')
  }
  return {
    isAuthorized,
    isAuthorizedAsync,
    setRoles,
    setUser,
    getIndex
  }
}

module.exports = AuthController
