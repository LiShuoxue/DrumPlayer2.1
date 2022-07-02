InitializeKeyboard()
AddAudio()
document.onkeydown = ResponseKeyDown
document.onkeyup = ResponseKeyUp

// Automatically adjust the position of keyboard
window.addEventListener("resize", function(e) {
    InitializeKeyboard()
})