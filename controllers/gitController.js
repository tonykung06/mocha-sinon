
const gitService = require('../services/gitService')()

module.exports = function () {
  const userGet = async function (req, res) {
    const user = await gitService.getUser(req.params.userId)
    res.json(user)
  }
  return {
    userGet
  }
}
