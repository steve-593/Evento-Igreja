const { WebSocketServer } = require ("ws");
const dotenv = require ("dotenv");


dotenv.config();

const wss = new WebSocketServer({ port: process.env.PORT});

wss.on('connection', (ws) => {
    console.log('Usuário Conectado')
})

