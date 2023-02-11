/* Functions for Keyboard Control */
/* Author: Shuoxue Li <1620480103@qq.com> */

var keyPressed = new Array(500).fill(false);

function AddAudio() {
    var lenkb = drumconfig.Keyboard.length
        //var audio_content = document.getElementById("audio").innerHTML

    var audiostr = ""
    for (var i = 0; i < lenkb; i++) {
        var filename = drumconfig.Filename[i]

        // Write HTML document of drum audio.
        var audiopart = "<audio id=\"" + filename + "\">";
        audiopart += "<source src=\"" + "drum/" + filename + "\""
        audiopart += " type=\"audio/wav\"/></audio>"

        audiostr += audiopart
    }

    // Write notes into "Audio"
    for (var i=-8; i<=12; i++){
        audiopart = "<audio id=\"" + i + "-cont.wav" + "\">"
        + "<source src=\"" + "drum/" + i + "-cont.wav" + "\""
        + " type=\"audio/wav\"/></audio>"
        audiostr += audiopart

        audiopart = "<audio id=\"" + i + "-discont.wav" + "\">"
        + "<source src=\"" + "drum/" + i + "-discont.wav" + "\""
        + " type=\"audio/wav\"/></audio>"
        audiostr += audiopart
    }
    document.getElementById("Audio").innerHTML = audiostr
}

function ChangeKeyboardClass(e){
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id
    if('QWERTYUIOPASDFGHJKLZXCVBNM'.includes(objid[objid.length-1])){

    } else {
        kb = document.getElementById('Keyboard')
        if (kb.className == 'Keyboard'){
            kb.className = 'ActivatedKeyboard'
            kb2 = document.getElementById('NoteKeyboard')
            if(kb2.className == 'ActivatedNoteKeyboard'){
                kb2.className = 'NoteKeyboard'
            }
        }
        else if(kb.className == "ActivatedKeyboard"){kb.className = "Keyboard"}
    }
}

function InitializeKeyboard() {
    var KBPosition = GUIconfig.Keyboards.KBPosition
    var Scale = GUIconfig.Keyboards.Scale
    var kbstr = ""
    var kbabspos = document.getElementById("Keyboard").getBoundingClientRect()
    var kbapleft = kbabspos.left
    var kbaptop = kbabspos.top

    for (key in KBPosition) {
        var relp = KBPosition[key]
        var x = relp[0] * Scale + 20;
        var y = relp[1] * Scale + 10;
        var kbid = "Keyboard-" + key
        var engid = "Eng-" + key
        var chnid = "Chn-" + key
        var charidx = drumconfig.EnglishName.indexOf(key)
        var Chnchar = ""
        var keyclass = "SilentKey"
        var Engclass = "EnglishCharacterNoChinese"
        if (charidx != -1) {
            Chnchar = drumconfig.ChineseName[charidx]
            Engclass = "EnglishCharacter"
        }

        // Keyboard element
        kbpart = "<div class=\"" + keyclass + "\" id=\"" + kbid
        kbpart += "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px\">"

        // English Character Element
        kbpart += "<span id=\"" + engid + "\" class = \"" + Engclass + "\">" + key + "</span>"

        // Chinese Character Element
        kbpart += "<span id=\"" + chnid + "\" class=\"ChineseCharacter\">" + Chnchar + "</span>"
        kbpart += "</div>\n"

        // Summarize to the document
        kbstr += kbpart
    }
    document.getElementById("Keyboard").innerHTML = kbstr
}

function ActivateColor(alphabet) {
    //Input corresponding alphabet, activate the color
    var keyid = "Keyboard-" + alphabet
    var engid = "Eng-" + alphabet
    var chnid = "Chn-" + alphabet
    document.getElementById(chnid).className = "ActivatedChineseCharacter"
    document.getElementById(engid).className = "ActivatedEnglishCharacter"
    document.getElementById(keyid).className = "ActivatedKey"
}

function DeactivateColor(alphabet) {
    // Input alphabet and deactivate the color
    var keyid = "Keyboard-" + alphabet
    var engid = "Eng-" + alphabet
    var chnid = "Chn-" + alphabet
    document.getElementById(chnid).className = "ChineseCharacter"
    document.getElementById(engid).className = "EnglishCharacter"
    document.getElementById(keyid).className = "SilentKey"
}

function ActivateMusic(eventindex) {
    // Play the music
    var audioname = drumconfig.Filename[eventindex]
    var audio = document.getElementById(audioname)
    var volume = drumconfig.VolumeScale[eventindex]
    audio.volume = volume
    if (!audio.ended) {
        audio.currentTime = 0
    } // Solve the problem that  
    audio.play()
}

function DeactivateMusic(eventindex, ctm=0) {
    var audioname = drumconfig.Filename[eventindex]
    var audio = document.getElementById(audioname)
    var is_continuous = drumconfig.Continuity[eventindex]
    if (is_continuous == 1) {
        audio.pause()
        audio.currentTime = ctm
    }
}

function ResponseMouseDown(e) {
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id

    kb = document.getElementById('Keyboard')
}

function ResponseMouseUp(e) {
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id

    kb = document.getElementById('Keyboard')
}

function ResponseKeyDown(e) {
    var ev = e || window.event
    if(ev.keyCode == 13){PoolActOnEnter()}
    if(ev.keyCode == 27){PoolActOnEsc()}
    if(ev.keyCode == 46){PoolActOnDelete()}

    if(keyPressed[ev.keyCode])
        return
    keyPressed[ev.keyCode] = true

    kb = document.getElementById('Keyboard')
    notekb = document.getElementById('NoteKeyboard')

    if(kb.className == "ActivatedKeyboard"){
        var eventindex = drumconfig.Keyboard.indexOf(ev.keyCode)
        if (eventindex != -1) {
            ActivateMusic(eventindex)
            var alphabet = drumconfig.EnglishName[eventindex]
            ActivateColor(alphabet)
        }
    }
    if(notekb.className == "ActivatedNoteKeyboard"){
        ActivateNoteColor(ev.keyCode)
        ActivateNoteMusic(ev.keyCode)
    }
}

function ResponseKeyUp(e) {
    ev = e || window.event
    kb = document.getElementById('Keyboard')
    notekb = document.getElementById('NoteKeyboard')

    keyPressed[ev.keyCode] = false

    if(kb.className == "ActivatedKeyboard"){
        var eventindex = drumconfig.Keyboard.indexOf(ev.keyCode)
        if (eventindex != -1) {
            DeactivateMusic(eventindex)
            var alphabet = drumconfig.EnglishName[eventindex]
            DeactivateColor(alphabet)
        }
    }
    if(notekb.className == "ActivatedNoteKeyboard"){
        DeactivateNoteColor(ev.keyCode)
        DeactivateNoteMusic(ev.keyCode)
    }
}