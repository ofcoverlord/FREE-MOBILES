// Telegram Bot Notification Configuration
const botToken = 'YOUR_TELEGRAM_BOT_TOKEN';
const chatId = 'YOUR_TELEGRAM_CHAT_ID';

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

    // Send notification
    sendBotNotification(userMessage);

    // Redirect user after verification
    window.location.href = "https://your-website.com/after-verification";
}
