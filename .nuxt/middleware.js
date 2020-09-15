const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['authNone'] = require('..\\middleware\\authNone.js')
middleware['authNone'] = middleware['authNone'].default || middleware['authNone']

middleware['session-control'] = require('..\\middleware\\session-control.js')
middleware['session-control'] = middleware['session-control'].default || middleware['session-control']

export default middleware
