//base on https://raw.githubusercontent.com/nuxt-community/auth-module/dev/demo/api/auth.js

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')

// Create app
const app = express()

// Install middleware
app.use(cookieParser())
app.use(bodyParser.json())

// JWT middleware
app.use(
  jwt({
    secret: 'dummy',
     algorithms: ['HS256']
  }).unless({
    path: ['/api/auth/login', '/api/auth/refresh']
  })
)

// Refresh tokens
const refreshTokens = {}

// -- Routes --

// [POST] /login
app.post('/login', (req, res) => {
  const { login, password } = req.body
  const valid = login.length && password === '123'
  const expiresIn = 3600*24
  const refreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1

  if (!valid) {
    throw new Error('Invalid login or password')
  }

  const accessToken = jsonwebtoken.sign(
    {
      login,
      picture: 'https://github.com/nuxt.png',
      name: 'User ' + login,
      scope: ['test', 'user']
    }, 'dummy', {
      expiresIn
    }
  )

  refreshTokens[refreshToken] = {
    accessToken,
    user: {
      login,
      picture: 'https://github.com/nuxt.png',
      name: 'User ' + login
    }
  }

  res.json({
    token: {
      accessToken,
      refreshToken
    }
  })
})

app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body

  if ((refreshToken in refreshTokens)) {
    const user = refreshTokens[refreshToken].user
    const expiresIn = 15
    const newRefreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
    delete refreshTokens[refreshToken]
    const accessToken = jsonwebtoken.sign(
      {
        user: user.username,
        picture: 'https://github.com/nuxt.png',
        name: 'User ' + user.username,
        scope: ['test', 'user']
      }, 'dummy', {
        expiresIn
      }
    )

    refreshTokens[newRefreshToken] = {
      accessToken,
      user
    }

    res.json({
      token: {
        accessToken,
        refreshToken: newRefreshToken
      }
    })
  } else {
    res.sendStatus(401)
  }
})

// [GET] /user
app.get('/user', (req, res) => {
  res.json({ user: req.user })
})

// [POST] /logout
app.post('/logout', (_req, res) => {
  res.json({ status: 'OK' })
})

// Error handler
app.use((err, _req, res) => {
  console.error(err) // eslint-disable-line no-console
  res.status(401).send(err + '')
})


// -- export app --
module.exports = {
  path: '/api/auth',
  handler: app
}