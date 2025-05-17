


document.getElementById('click').onclick = () => {
    ws = new WebSocket('ws://localhost:8080');
        ws.onmessage = processMessage;

        ws.onopen = () => {
            ws.send('teste');
    }
}
