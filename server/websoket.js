// const { Server } = require('ws');
// const uuid = require('uuid').v4;

// const wss = new Server({ port: 8000 });

// const openWs = () => {
//   wss.on('connection', (ws) => {
//     // const { refreshToken } = req.cookies;
//     // const userData = tokenService.validateRefreshToken(refreshToken);

//     const id = uuid();
//     clients[id] = ws;

//     console.log(`new clients ${id}`);

//     ws.on('message', (rawMessage) => {
//       console.log();
//     });

//     ws.on('close', () => {
//       delete clients[id];
//     });
//   });
// };

// module.exports = { openWs };
