const express = require('express')
const https = require('https')
const app = express()

const verifyToken = (token, callbackSuccess, callbackError) => {
  const googleTokenInfoURL = 'https://www.googleapis.com/oauth2/v1/tokeninfo';

  https.get(`${googleTokenInfoURL}?access_token=${token}`, ({ statusCode }) => {
    if (statusCode === 200) {
      callbackSuccess()
    } else {
      callbackError()
    }
  })
}

app.get('/verify/:token', (req, res) => {
  verifyToken(
    req.params.token,
    () => { res.send('success') },
    () => { res.send('error') }
  )
})

module.exports = {
  path: '/api',
  handler: app
}