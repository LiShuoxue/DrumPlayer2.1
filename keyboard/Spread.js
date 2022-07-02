function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

function getScrollHeight() {
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }

    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

var btn = document.getElementById('SpreadButton')
var spread = document.getElementById('spread')
var iSpread = false
var height = spread.scrollHeight
var time = 420
var interval = 8.4
var speed = height / (time / interval)
btn.onclick = function(e) {
    btn.disabled = "disabled"
    if (!iSpread) {
        var speeds = 0

        var timer = setInterval(function() {
            speeds += speed;
            spread.style.height = speeds + "px";
            document.documentElement.scrollTop = getScrollHeight() - getWindowHeight()
            if (parseInt(spread.style.height) >= height) {
                clearTimeout(timer)
                btn.disabled = ''
            }
        }, interval)
        this.innerHTML = "收起"
    } else {
        var speeds = height
        this.innerHTML = "展开"
        var timer = setInterval(function() {
            speeds -= speed
            spread.style.height = speeds + "px"
            if (speeds <= 0) {
                clearTimeout(timer)
                btn.disabled = ''
            }
        }, interval)
    }
    iSpread = !iSpread
}