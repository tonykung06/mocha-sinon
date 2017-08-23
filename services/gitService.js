const https = require('https')

module.exports = function () {
  const getRepos = function (userId, cb) {
    const options = {
      host: 'api.github.com',
      path: `/users/${userId}/repos`,
      headers: { 'User-Agent': 'gitExample' }
    }

    const callback = function (response) {
      let str = ''

      response.on('data', function (chunk) {
        str += chunk
      })

      response.on('end', function () {
        cb(JSON.parse(str))
      })
    }

    https.request(options, callback).end()
  }
  const getUser = function (userId) {
    return new Promise(function (resolve) {
      const options = {
        host: 'api.github.com',
        path: `/users/${userId}`,
        headers: { 'User-Agent': 'gitExample' }
      }

      const callback = function (response) {
        let str = ''

        response.on('data', function (chunk) {
          str += chunk
        })

        response.on('end', function () {
          const user = JSON.parse(str)
          getRepos(userId, function (repos) {
            user.repos = repos
            resolve(user)
          })
        })
        response.on('error', (e) => {
          console.log(`problem with request: ${e.message}`)
        })
      }

      https.request(options, callback).end()
    })
  }

  return {
    getUser: getUser
  }
}
