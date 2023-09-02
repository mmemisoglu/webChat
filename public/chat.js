const socket = io.connect('http://localhost:3000')

/* İlgili elementler seçilir ve bir değişkene atanır. */
const sender = document.getElementById('sender')
const message = document.getElementById('message')
const submitBtn = document.getElementById('submitBtn')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')

/* Gönder'e tıklandığında  */
submitBtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value ,
        sender: sender.value 
    })
})

/* Socket'den gelen bilgiyi işlememiz gerekiyor. */
socket.on('chat', data => {
    feedback.innerHTML = ''
    output.innerHTML += '<p><strong>' + data.sender + ' : </strong>' + data.message + '</p>'
    message.value = '' /*Mesaj kutusunu temizler.*/ 
})

/* Kullanıcı mesaj yazdığında yazıyor şeklinde gösterilmesi */
message.addEventListener('keypress', () => {
    socket.emit('typing', sender.value)
})

/*Browser tarafından yazıyor bilgisi yakalanır. */
socket.on('typing', data => {
    feedback.innerHTML = '<p>' + data + ' yaziyor...</p>'
} )