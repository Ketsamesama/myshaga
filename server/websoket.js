const ws = require('ws');

const wss = new ws.Server(
  {
    port: 5001,
  },
  () => console.log('server started on 5000')
);

wss.on('connection', function connection(ws) {
  ws.on('message', function message(message) {
    message = JSON.parse(message);
  });
});
