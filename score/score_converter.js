function DEMO(){ //演示函数
    pool1 = document.getElementById("Pool1")
    pool2 = document.getElementById("Pool2")
    if(pool1.scorepool != []){PlayScorePool(pool1.scorepool)}
    if(pool2.scorepool != []){PlayScorePool(pool2.scorepool)}
}

function ExportPools(){
    pool1 = document.getElementById("Pool1")
    pool2 = document.getElementById("Pool2")
    if(pool1.scorepool.length != 0 || pool2.scorepool.length != 0){
        var str = "Pool1:\n" + ExportPool(pool1) + "Pool2:\n" + ExportPool(pool2)
        str += "END"
        var flag = copyText(str);
        alert(flag ? "曲谱已成功导出到剪贴板！" : "曲谱未能够导出到剪贴板。")
    }
}

function copyText(text){
    var textarea = document.createElement("textarea") 
    // 新建input不能换行，需要改成textarea才能换行！
    var currentFocus = document.activeElement
    document.body.appendChild(textarea)
    textarea.value = text
    textarea.focus()
    if(textarea.setSelectionRange){
        textarea.setSelectionRange(0, textarea.value.length)
    } else{
        textarea.select()
    }
    try{
        var flag = document.execCommand('copy')
    } catch(eo){
        var flag = false
    }
    document.body.removeChild(textarea)
    currentFocus.focus();
    return flag
}

function ImportPools(str){
    var splitstr = str.split("\n")
    console.log(splitstr)
    pool1 = document.getElementById("Pool1")
    pool2 = document.getElementById("Pool2")
    var ptrend = splitstr.indexOf("END")
    if(ptrend == -1){ptrend = splitstr.indexOf("END\r")}
    var ptrpool1 = splitstr.indexOf("Pool1:\r")
    var ptrpool2 = splitstr.indexOf("Pool2:\r")
    for(i=ptrpool1+1;i<ptrpool2;i++){
        var seq = i-ptrpool1
        var targetstr = splitstr[i]
        var newstr = targetstr.split("\r")[0]
        //console.log(targetstr)
        var score = SavedScoreParser(newstr)
        AddScore(pool1, score, seq, "create")
    }
    // 不要使用和前面一样的指标，否则可能会认为是前一个的
    for(j=ptrpool2+1;j<ptrend;j++){
        var seq = j-ptrpool2
        var targetstr = splitstr[j]
        var newstr = targetstr.split("\r")[0]
        var score = SavedScoreParser(newstr)
        AddScore(pool2, score, seq, "create")
    }

}

function SavedScoreParser(str){
    splitstr = str.split("@")
    if(splitstr[0].indexOf("D") != -1){
        var name = splitstr[1]
        var tempo = splitstr[2]
        var repeat = splitstr[3]
        var nstr = splitstr[4]
        var score = GetScore("auto", tempo, repeat, false, nstr, 0, name)
    } else if(splitstr[0].indexOf("K") != -1){
        var name = splitstr[1]
        var major = splitstr[2]
        var tempo = splitstr[3]
        var repeat = splitstr[4]
        var nstr = splitstr[5]
        console.log(splitstr[0])
        var score = GetNote("auto", tempo, major, repeat, false, nstr, 0, name)
    }
    return score
}

function ExportPool(pool){
    var length = pool.scorepool.length
    var poolstr = ""
    for(var i=0;i<length;i++){
        score = pool.scorepool[i]
        poolstr += ExportScore(score)
    }
    return poolstr
}

function ExportScore(score){
    var str = ""
    if(score.major){
        str +="[KOTO]@"+score.name+"@"+score.major+"@"
    }
    else{
        str += "[DRUM]@"+score.name+"@"
    }
    str += score.tempo+"@"+score.repeat+"@"+score.str+"\n"

    return str
}

function PlayScorePool(scores){
    timecnt = 500 // 从0.5s开始播放
    
    for(var j = 0; j < scores.length; j++){
        var integratedscore = scores[j]
        var score = integratedscore.score
        var tempo = integratedscore.tempo
        var repeat = integratedscore.repeat
        var dur = score.beat * 60 / tempo * 1000 * repeat
        timecnt += integratedscore.starttime * 1000
        
        setTimeout(PlayScore, timecnt, integratedscore)
        timecnt += dur
    }
}

function GetScore(dname="auto", tempo=60, 
repeat=1, scale=false, str=null,
starttime=0, autoname=null
){
    /* 
    dname: 锣鼓的原本名称
    tempo: 锣鼓节奏，每分钟若干拍
    repeat: 锣鼓重复数目
    scale: 数组
    str: 自定义的锣鼓字符串
    starttime: 锣鼓相对前一个锣鼓的起始时间，可以提前（负数）或延后（正数），单位：秒
    autoname: 自定义的锣鼓名称
    */

    var obj = new Object()
    if (dname != "auto"){
        var idx = scoreconfig.scorenames.indexOf(dname)
        str = scoreconfig.scorestrs[idx]
        obj.name = dname
    } 
    if(autoname != null){obj.name = autoname}
    var score = ScoreParser(str)
    if (scale == false){obj.score = score}
    obj.str = str
    obj.tempo = tempo
    obj.repeat = repeat
    obj.starttime = starttime
    return obj
}

function PlayScore(integratedscore){
    // 锣鼓和月琴均可
    var score = integratedscore.score
    var tempo = integratedscore.tempo
    var repeat = integratedscore.repeat
    var major = integratedscore.major
    var dur = score.beat * 60 / tempo * 1000
    var array = score.scorearray
    for(var i = 0; i < repeat; i++){
        var continue_score_count = 0
        for(var j = 0; j < array.length; j++){
            s = array[j]
            var scorenam = s.name
            var scorepos = s.position
            var scorectm = scorepos * 60 / tempo * 1000

            if(major){ // 若有major,则为月琴；若无，则为锣鼓。
                var keycode = Note2Keyboard[scorenam]
                setTimeout(ActivateNoteMusic, scorectm+dur*i, keycode, major)
            } else{
                var eventindex = drumconfig.EnglishName.indexOf(scorenam)        
                // For continuous notes, play when it appears odd times, stop when it appears even times.
                var is_continuous = drumconfig.Continuity[eventindex]
                if(is_continuous){continue_score_count += 1}
                if(is_continuous && continue_score_count%2==0){
                    setTimeout(DeactivateMusic, scorectm+dur*i, eventindex)
                } else{
                    setTimeout(ActivateMusic, scorectm+dur*i, eventindex)
                }
            }
        }
    }
}

function ScoreParser(scorestring){
    // Convert the score string into the score class
    var splitscore = scorestring.split(" ")
    var score = new Object()
    score.beat = parseFloat(splitscore[0])

    var scorearray = []
    var k = 1
    while (k < splitscore.length){
        var scorestr = splitscore[k]
        var scorenam = scorestr[0]
        var scorepos = parseFloat(scorestr.slice(1))
        scorearray.push({"name": scorenam, "position": scorepos})
        k += 1
    }
    score.scorearray = scorearray
    return score
}

