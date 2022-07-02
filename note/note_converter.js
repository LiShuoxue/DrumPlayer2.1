Note2Keyboard = {
    "C": 49,
    "D": 50,
    "E": 51,
    "F": 52,
    "G": 53,
    "A": 54,
    "B": 55,
    "e": 48,
    "R": -1 //休止符
}

function NoteParser(notestr){
    /*
    例子：
    32 C0.75 A0.25 ...
    */
    var splitscore = notestr.split(" ")
    var score = new Object()
    score.beat = parseFloat(splitscore[0])

    var scorearray = []
    var k = 1
    var scoreabspos = 0
    while (k < splitscore.length){
        var scorestr = splitscore[k]
        var scorenam = scorestr[0]
        var posstr = scorestr.slice(1)
        if(posstr.indexOf("/") == -1){
            var scorerelpos = parseFloat(scorestr.slice(1))
            scorearray.push({"name": scorenam, "position": scoreabspos})
            scoreabspos += scorerelpos
        } else{
            var splitpos = posstr.split("/")
            var scorerelpos = parseFloat(splitpos[0]) / parseFloat(splitpos[1])
            var reptime = parseInt(splitpos[1])
            for(i=0;i<reptime;i++){
                scorearray.push({"name": scorenam, "position": scoreabspos})
                scoreabspos += scorerelpos
            }
        }
        k += 1
    }
    score.scorearray = scorearray
    return score
}

function GetNote(dname="auto", tempo=60, major="F",
repeat=1, scale=false, str=null, 
starttime=0, autoname=null
){

    var obj = new Object()
    if (dname != "auto"){
        var idx = noteconfig.scorenames.indexOf(dname)
        str = noteconfig.scorestrs[idx]
        obj.name = dname
    } 
    if(autoname != null){obj.name = autoname}
    var score = NoteParser(str)
    if (scale == false){obj.score = score}
    obj.str = str
    obj.major = major
    obj.tempo = tempo
    obj.repeat = repeat
    obj.starttime = starttime
    return obj
}

function PlayNote(n){PlayScore(n)}