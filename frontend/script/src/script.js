const container = document.querySelector('.container');
const tela_de_escolhas = document.querySelector('.tela');
const nome_usuario = document.getElementById('login_name');
const cpf_usuario = document.getElementById('login_cpf');
const submit_login = document.getElementById('login_button');
const login_form = document.getElementById('login_form');
const opcao_1 = document.getElementById('opcao_1');
const opcao_2 = document.getElementById('opcao_2');
const opcao_3 = document.getElementById('opcao_3');

let ws;

submit_login.addEventListener('click', botao_login_ativado)

let dados_do_usuario = {
    nome: '',
    cpf: '',
    senha: ''
}

export function botao_login_ativado(evento) {
    
    dados_do_usuario.nome = nome_usuario.value;
    dados_do_usuario.cpf = cpf_usuario.value;

    ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = processMessage;

    ws.onopen = () => {
        ws.send(JSON.stringify({
            
        }))
    }
}


