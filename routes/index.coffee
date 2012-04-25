
# GET home page.

exports.index = (req, res) ->
  res.render('index.ejs', { title: 'Express' })