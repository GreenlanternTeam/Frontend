const Websocket = require('ws')

var endpoint = 'wss://' + 'greenb.site' + '/ws/connect/'
const chatSocket = new Websocket(endpoint)

//보내는것
chatSocket.onopen = function (event) {
	chatSocket.send(
		JSON.stringify({
			message: "Here's some text that the server is urgently awaiting!"
		})
	)
}

//받는것
chatSocket.onmessage = function (e) {
	const data = JSON.parse(e.data)
	console.log(data)
}

//닫는것
chatSocket.onclose = function (e) {
	console.error('websocket close')
}
