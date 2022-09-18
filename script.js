console.log('got loaded!')

function readAll(){
    let allNotsDots = document.querySelectorAll('#unread-symbol')
    for (const notification of allNotsDots) {
        notification.classList.add('invis')
    }
    let allNotsContainer = document.querySelectorAll('.unread')
    for (const notificationContainer of allNotsContainer) {
        notificationContainer.classList.remove('unread')
    }
    let notificationCounter = document.getElementById("notification-counter");
    notificationCounter.innerHTML = "0";
}