import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';


dotenv.config();

const wss = new WebSocketServer({ port: process.env.PORT});

wss.on('connection', (ws) => {
    console.log('Usuário Conectado')
    ws.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);
    });
})

