
# Module dependencies.
express = require 'express'
require 'express-namespace'

ejs_locals = require 'ejs-locals'

GLOBAL._ = require 'underscore'

app = module.exports = express()

# Configuration
app.engine 'ejs', ejs_locals

app.configure ->
  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'ejs'
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static(__dirname + '/public')

app.configure 'development', ->
  app.use express.errorHandler({ dumpExceptions: true, showStack: true })

app.configure 'production', ->
  app.use express.errorHandler()

# Routes
require('./apps/site/routes')(app)

port = null
if app.settings.env is 'production'
  port = 80
else
  port = 3000

app.listen port
  
console.log "Express server listening on port %d in %s mode", port, app.settings.env
