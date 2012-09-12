
routes = (app) ->
	app.namespace '/terminals', ->
		app.get '/', (req, res) ->
			if req.query.start_region? # /terminals
				# 해당 지역을 갖는 터미널 코드/터미널 명 리턴
				res_as_json(res, {test: "test"})

			# if req.query.start_terminal? # /terminals/:tcode
			# 	# 해당 터미널이 갖는 행선지(도착지역)목록 리턴

			# if req.query.arrive_region? # /terminals/:tcode?arrive_region=도착지역
			# 	# 해당 터미널과 도착지역이 갖는 도착터미널 목록 리턴

			# if req.query.arrive_terminal? # /terminals/:tcode?arrive_terminal=도착터미널
			# 	# 여기서 시간표 및 요금표 나옴
			res.send null

res_as_json = (res, json) ->
	res.format
		json: ->
			res.json json

module.exports = routes