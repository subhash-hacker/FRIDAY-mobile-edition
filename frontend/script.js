const chat = document.getElementById('chat');
const input = document.getElementById('msg');
const sendButton = document.getElementById('send');

function add(text, who) {
    const message = document.createElement('div');

    message.className = 'msg ' + who;
    message.textContent = text;

    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;

    return message;
}

function sendMessage() {
    const text = input.value.trim();

    if (!text) return;

    add('YOU: ' + text, 'user');
    input.value = '';

    const reply = add(
        'J.A.R.V.I.S: Processing...',
        'ai processing'
    );

    sendButton.disabled = true;

    setTimeout(() => {
        reply.textContent =
            'J.A.R.V.I.S: Systems online. How may I assist you, Boss?';

        reply.classList.remove('processing');
        sendButton.disabled = false;
        input.focus();
    }, 1000);
}

sendButton.addEventListener('click', sendMessage);

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
