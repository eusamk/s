document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Permissão concedida para notificações.');
            }
        });
    }
});

function sendNotification() {
    const image = document.getElementById('imageInput').value;
    const title = document.getElementById('titleInput').value;
    const message = document.getElementById('messageInput').value;

    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showNotification(image, title, message);
            }
        });
    } else {
        showNotification(image, title, message);
    }
}

function showNotification(image, title, message) {
    const notification = new Notification(title, {
        body: message,
        icon: image
    });
}
