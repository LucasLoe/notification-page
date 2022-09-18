console.log('got loaded!')

function countUnreadMessages() {
    let countUnread = (document.querySelectorAll('.unread')).length
    console.log(countUnread)
    let notificationCounter = document.getElementById("notification-counter");
    notificationCounter.innerHTML = countUnread;
}

function readAll(){
    let allNotsDots = document.querySelectorAll('#unread-symbol')
    for (const notification of allNotsDots) {
        notification.classList.add('invis')
    }
    let allUnreadNotsContainer = document.querySelectorAll('.unread')
    for (const notificationContainer of allUnreadNotsContainer) {
        notificationContainer.classList.remove('unread')
    }
    let notificationCounter = document.getElementById("notification-counter");
    notificationCounter.innerHTML = "0";
}

function readSingle(e){
    if (e.target.classList.contains('unread')) {
        e.target.classList.remove('unread')
        e.target.querySelector('#unread-symbol').classList.add('invis')

        countUnreadMessages()
    }
}