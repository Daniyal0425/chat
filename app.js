const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.getElementById('messages');

// Establish WebSocket connection to the server
const socket = new WebSocket('ws://localhost:8080'); // Change to your server URL

// Function to handle incoming messages
socket.onmessage = (event) => {
    const message = event.data; // This should be a string
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message; // Display text message
    messagesContainer.appendChild(messageElement);
};

// Function to handle message sending
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.send(message); // Send the message as a string
        messageInput.value = ''; // Clear input field
    }
});

// Optional: Send message on "Enter" key press
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
