module.exports = {
  dev: {
  "default-src": ["'self'"],
  "style-src": [
    "'self'",
    "https://alatcrea8webappreact.azurewebsites.net/",
  ]
  },
  prod: {
  "default-src": "'self'",  // can be either a string or an array.
  "style-src": [
    "'self'",
    "https://alatcrea8webappreact.azurewebsites.net/",
  ],
  "connect-src": [
    "'self'",
    "https://alatcrea8webappreact.azurewebsites.net/"
  ]
  }
}