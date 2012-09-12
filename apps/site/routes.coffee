
routes = (app) ->
	app.get '/', (req, res) ->
		res.render('index.ejs', { title: 'Express' })

module.exports = routes