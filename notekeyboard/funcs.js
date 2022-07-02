function InitializeNoteKeyboard() {
    var KBPosition = notekbconfig.kbposition
    var Scale = GUIconfig.Keyboards.Scale
    var kbstr = ""

    for (i=0;i<notekbconfig.Keyboard.length;i++) {
        var relp = KBPosition[i]
        var key = notekbconfig.Keyboard[i]
        var x = relp[0] * Scale + 20;
        var y = relp[1] * Scale + 10;
        var kbid = "NoteKeyboard-" + key
        var engid = "NoteEng-" + key
        var chnid = "NoteChn-" + key

        var keyclass = "SilentKey"
        var ChnChar = notekbconfig.name[i]
        var EngChar = notekbconfig.kbname[i]
        var Engclass = "EnglishCharacter"
        // Keyboard element
        kbpart = "<div class=\"" + keyclass + "\" id=\"" + kbid
        kbpart += "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px\">"
        // English Character Element
        kbpart += "<span id=\"" + engid + "\" class = \"" + Engclass + "\">" + EngChar + "</span>"
        // Chinese Character Element
        kbpart += "<span id=\"" + chnid + "\" class=\"NoteChineseCharacter\">" + ChnChar + "</span>"
        kbpart += "</div>\n"

        // Summarize to the document
        kbstr += kbpart
    }
    document.getElementById("NoteKeyboard").innerHTML = kbstr
}

function ChangeNoteKeyboardClass(e){
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id
    if(objid == "NoteKeyboard"){
        kb = document.getElementById('NoteKeyboard')
        if (kb.className == 'NoteKeyboard'){
            kb.className = 'ActivatedNoteKeyboard'
            kb2 = document.getElementById('Keyboard')
            if (kb2.className == 'ActivatedKeyboard'){
                kb2.className = 'Keyboard'
            }
        }
        else if(kb.className == "ActivatedNoteKeyboard"){kb.className = "NoteKeyboard"}

        
    }
}

function ActivateNoteColor(keycode) {
    //Input corresponding alphabet, activate the color
    var keyid = "NoteKeyboard-" + keycode
    var engid = "NoteEng-" + keycode
    var chnid = "NoteChn-" + keycode
    document.getElementById(chnid).className = "ActivatedNoteChineseCharacter"
    document.getElementById(engid).className = "ActivatedEnglishCharacter"
    document.getElementById(keyid).className = "ActivatedKey"
}

function DeactivateNoteColor(keycode) {
    // Input alphabet and deactivate the color
    var keyid = "NoteKeyboard-" + keycode
    var engid = "NoteEng-" + keycode
    var chnid = "NoteChn-" + keycode
    document.getElementById(chnid).className = "ChineseCharacter"
    document.getElementById(engid).className = "EnglishCharacter"
    document.getElementById(keyid).className = "SilentKey"
}

function GetNoteAudioDir(keycode, major){
    var idx = notekbconfig.Keyboard.indexOf(keycode);
    var continuity = notekbconfig.continuity[idx]
    var shift = notekbconfig.shift[idx]
    var major = MajorMap[major]
    //var major = MajorMap[document.getElementById("notemajorselect").value]
    var dir = ""
    if(continuity == 1){dir = (major+shift) + "-cont.wav"}
    else if(continuity == 0){dir = (major+shift) + "-discont.wav"}
    return dir
}

function ActivateNoteMusic(keycode, major=document.getElementById("notemajorselect").value) {
    // Play the music
    if(keycode != -1){ //非休止情形
        var audioname = GetNoteAudioDir(keycode, major)
        var idx = notekbconfig.Keyboard.indexOf(keycode)
        var volume = notekbconfig.volumescale[idx]
        var audio = document.getElementById(audioname)
        audio.volume = volume
        if (!audio.ended) {
            audio.currentTime = 0
        }
        audio.play()
    }
}

function DeactivateNoteMusic(keycode, major=document.getElementById("notemajorselect").value) {
    if(keycode != -1){ //非休止情形
        var audioname = GetNoteAudioDir(keycode, major)
        var audio = document.getElementById(audioname)
        var idx = notekbconfig.Keyboard.indexOf(keycode)
        var is_continuous = notekbconfig.continuity[idx]
        if (is_continuous == 1) {
            audio.pause()
            audio.currentTime
        }
    }
}