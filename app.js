// Telegram Bot Notification Configuration
const botToken = '7764036823:AAEcppXhFnseCzXMO3478C68jbqDKt58wrw';
const chatId = '7407431042';

// Function to send notification to Telegram
function sendBotNotification(message) {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => console.log('Notification sent:', data))
        .catch(error => console.error('Error:', error));
}

// Function triggered on "Joined" button click
function verifyJoin() {
    // Custom message for notification
    const userMessage = "New user has completed channel join verification.";

    // Send notification to Telegram
    sendBotNotification(userMessage);

    // Array of channel links for verification
    const channels = [
        "https://t.me/gIftforyou001",   // Replace with the first channel link
        "https://t.me/gIftforyou001",   // Replace with the second channel link
        "https://t.me/gIftforyou001"    // Replace with the third channel link
    ];

    // Open each channel link in a new tab
    channels.forEach(channel => {
        window.open(channel, "_blank");
    });

    // Redirect user after they have joined all channels
    window.location.href = "https://t.me/gIftforyou001";  // Replace with the final redirect link
}

