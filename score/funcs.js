function InitializeScoreSelectionPallete() {
    var pallete = document.getElementById("ScoreSelectArea")
    var notepallete = document.getElementById("NoteSelectArea")

    var keyclass = "SilentScoreSelectionButton"
    var palletestr = ""
    var notepalletestr = ""
    var nrow = 3
    var scorenames = scoreconfig.scorenames

    // 初始化锣鼓池及其属性
    // scorepool: 乐谱存放处
    // totaltime: 总时长（单位；秒）
    pool1 = document.getElementById("Pool1")
    pool1.scorepool = []
    pool1.timelst = []
    pool1.totaltime = 0

    pool2 = document.getElementById("Pool2")
    pool2.scorepool = []
    pool2.timelst = []
    pool2.totaltime = 0

    // 初始化锣鼓选择区
    for (j=0; j<scorenames.length; j++){
        
        if(j%nrow==0){palletestr += "<div>"}
        var scorename = scorenames[j]
        var id = "score" + "-" + scorename
        palletestr += "<div onmouseover=\"ScoreSelectionOnMouseOver()\" "
        palletestr += "draggable=true "
        palletestr += "onmouseout=\"ScoreSelectionOnMouseOut()\" "
        palletestr += "onmouseup=\"ScoreSelectionOnMouseUp()\" "
        palletestr += "title=\"" + scoreconfig.details[j] + "\" " 
        palletestr += "onmousedown=\"ScoreSelectionOnMouseDown()\" "
        palletestr += "class=\"" + keyclass + "\" id=\"" + id + "\">"
        palletestr += "<span class=\"noselectiontext\">" + scorename + "</span></div>"
        if(j%nrow==nrow-1 || j==scorenames.length-1){palletestr += "</div>"}
    }

    // 初始化月琴选择区
    for(i=0; i<noteconfig.scorenames.length; i++){
        var notename = noteconfig.scorenames[i]
        var id = "note" + "-" + notename
        notepalletestr += "<div onmouseover=\"ScoreSelectionOnMouseOver()\" "
        notepalletestr += "onmouseout=\"ScoreSelectionOnMouseOut()\" "
        notepalletestr += "onmousedown=\"ScoreSelectionOnMouseDown()\" "
        notepalletestr += "onmouseup=\"ScoreSelectionOnMouseUp()\" "
        notepalletestr += "draggable=true "
        notepalletestr += "title=\"" + noteconfig.details[i] + "\" " 
        notepalletestr += "class=\"" + keyclass + "\" id=\"" + id + "\">"
        notepalletestr += "<span class=\"noselectiontext\">" + notename + "</span></div>"
        if(i%nrow==nrow-1 || i==noteconfig.scorenames.length-1){notepalletestr += "</div>"}
    }
    pallete.innerHTML = palletestr
    notepallete.innerHTML = notepalletestr
}

function MakeNewPrompt(poolobj, fname, seq=null, scorestr=null, 
    tempo=null, repeat=null, mode="create", note=false, major=null){
    // 创建对话框

    // 判断是否有主调来确定config是哪一个

    console.log(note)
    if(note == false){config = scoreconfig}
    else{config = noteconfig}

    var idx = config.scorenames.indexOf(fname)
    if(scorestr == null){ // 检测是否为自动生成/用户自定义生成
        var scorestr = config.scorestrs[idx]
        var tempo = config.DefaultTempo[idx]
        var repeat = config.DefaultRepeat[idx]
        if(note){
            var major = config.DefaultMajor[idx]
        }
    } else{
        tempo = parseFloat(tempo)   
        repeat = parseFloat(repeat)
        if(note){major = parseFloat(major)}
    }
    // 创建一个对话框
    const ScorePrompt = document.createElement("div")
    ScorePrompt.id = "ScorePrompt"
    if(note){ScorePrompt.className = "NotePrompt"}
    else{ScorePrompt.className = "ScorePrompt"}
    ScorePrompt.poolid = poolobj.id
    ScorePrompt.mode = mode     // 模式：创建(create)或者修改(modify)
    ScorePrompt.seq = seq      
    var promptstr = 

    "<b>设置属性（按Enter完成）</b><br/>名称：<input type=\"text\" id=\"InputName\" value=\"" + fname 
    if(note){ // 设置了major，表明月琴已添加
        promptstr += 
        "\"> <br/> 调式：<input type=\"text\" id=\"InputMajor\" value=\"" + major
    }
    promptstr += 
    "\"> <br/> 节奏：<input type=\"text\" id=\"InputTempo\" value=\"" + tempo + 
    "\"> <br/> 重复：<input type=\"text\" id=\"InputRepeat\" value=\"" + repeat + 
    "\"> <br/> 表记：<input type=\"text\" id=\"InputStr\" value=\"" + scorestr + "\">"


    ScorePrompt.innerHTML = promptstr
    var midXY = calcmidpos()
    ScorePrompt.style.setProperty("position", "absolute")
    ScorePrompt.style.setProperty("left", (midXY.midX)+"px")
    ScorePrompt.style.setProperty("top", (midXY.midY)+"px")
    document.body.appendChild(ScorePrompt)
} // 创建对话框

/*鼠标与锣鼓选择区的交互*/

function ScoreSelectionOnMouseOver(e){
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id
    document.getElementById(objid).className = "SelectedScoreSelectionButton"
}
function ScoreSelectionOnMouseDown(e){
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id
    document.getElementById(objid).className = "ActivatedScoreSelectionButton"
    // Create an element that can move with mouse
}
function ScoreSelectionOnMouseUp(e){
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id
    document.getElementById(objid).className = "SelectedScoreSelectionButton"

    var objslice = objid.slice(0, 4)
    if (ev.button==0){
        if(objslice == "scor"){ // 鼓谱
            var scorename = objid.slice(6)
            var idx = scoreconfig.scorenames.indexOf(scorename)
            var tempo = scoreconfig.DefaultTempo[idx]
            var repeat = scoreconfig.DefaultRepeat[idx]
            var score = GetScore(scorename, tempo, repeat)
            PlayScore(score)
        } else if(objslice == "note"){ // 月琴谱
            var notename = objid.slice(5)
            var idx = noteconfig.scorenames.indexOf(notename)
            var repeat = noteconfig.DefaultRepeat[idx]
            var tempo = noteconfig.DefaultTempo[idx]
            var major = noteconfig.DefaultMajor[idx]
            var note = GetNote(notename, tempo, major, repeat)
            PlayScore(note)
        }
    }
}
function ScoreSelectionOnMouseOut(e){
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id
    document.getElementById(objid).className = "SilentScoreSelectionButton"
}

// 锣鼓池中的元素
function PoolButtonOnMouseOut(e){
    var ev = e || window.event
    var target = ev.target || ev.srcElement
    if(target.className == "ActivatedPoolButton"){
        target.className = "SilentPoolButton"
    }
}
function PoolButtonOnMouseOver(e){
    var ev = e || window.event
    var target = ev.target || ev.srcElement
    if(target.className == "SilentPoolButton"){
        target.className = "ActivatedPoolButton"
    }
}
function PoolButtonOnMouseDown(e){
    var ev = e || window.event
    var target = ev.target || ev.srcElement
}
function PoolButtonOnMouseUp(e){
    var ev = e || window.event
    var target = ev.target || ev.srcElement

    if(target.className == "ActivatedPoolButton"){
        target.className = "SelectedPoolButton"

        // 修改其它select的属性为silent
        for(i=1;i<=2;i++){
            pool = document.getElementById("Pool" + i)
            var length = pool.timelst.length
            for(j=0;j<length;j++){
                var id = "Pool" + i + "-" + (j+1)
                node = document.getElementById(id)
                if(node != target && node.className == "SelectedPoolButton"){
                    node.className = "SilentPoolButton"
                }
            }
        }
        return 
    }
    else if(target.className == "SelectedPoolButton"){
        target.className = "SilentPoolButton"
        
        var seq = target.seq
        
        var poolid = target.poolid
        scorepool = document.getElementById(poolid).scorepool
        var score = scorepool[seq-1]
        if(score.major){ // 通过score有无调式判断其是否为月琴
            MakeNewPrompt(
                document.getElementById(poolid),
                target.innerText.split(" ")[1],
                seq, // 在对话框中保存顺序
                score.str, score.tempo, score.repeat,
                "modify", true, score.major
            ) 
        } else{
            MakeNewPrompt(
            document.getElementById(poolid),
            target.innerText.split(" ")[1],
            seq, // 在对话框中保存顺序
            score.str, score.tempo, score.repeat,
            "modify",
            )
        }
    }
} //若未单击，则变为选中；若选中，则弹出对话框
function PoolButtonOnDragOver(e){
    var ev = e || window.event
    ev.preventDefault()
    var objid = ev.target.id || ev.srcElement.id
    
    button = document.getElementById(objid)
    button.className = "ActivatedPoolButton"
}
function PoolButtonOnDragLeave(e){
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id
    button = document.getElementById(objid)
    button.className = "SilentPoolButton"
    ev.preventDefault()
}
function PoolButtonOnDrop(e){
    var ev = e || window.event
    ev.preventDefault()
    var objid = ev.target.id || ev.srcElement.id
    var data = ev.dataTransfer.getData("Text");
    draggednode = document.getElementById(data)
    var parentid = draggednode.parentNode.id
    var fname = draggednode.innerText
    button = document.getElementById(objid)
    button.className = "SilentPoolButton"

    var idinfo = objid.split("-")
    var poolid = idinfo[0]
    var seq = parseInt(idinfo[1])

    pool = document.getElementById(poolid)

    if(parentid == "NoteSelectArea"){
        MakeNewPrompt(pool, fname, seq, null, null, null, "create", true)
    } else{MakeNewPrompt(pool, fname, seq)}
} //若被拖拽对象放在了按钮上，则生成


/*锣鼓与锣鼓池的交互*/
function PoolOnDragOver(e){
    var ev = e || window.event
    ev.preventDefault()
    var objid = ev.target.id || ev.srcElement.id

    // 拖拽时，针对div内部的元素也会有效，因此需要指定objid仅为池子元素
    if(objid == "Pool1" || objid == "Pool2"){
        poolobj = document.getElementById(objid)
        poolobj.className = "SelectedPool"
    }
}
function PoolOnDragLeave(e){
    var ev = e || window.event
    var objid = ev.target.id || ev.srcElement.id
    if(objid == "Pool1" || objid == "Pool2"){
        document.getElementById(objid).className = "SilentPool"
        ev.preventDefault()
    }
}
function PoolOnDrop(e){
    var ev = e || window.event
    ev.preventDefault()
    var objid = ev.target.id || ev.srcElement.id

    if(objid == "Pool1" || objid == "Pool2"){
        //在dataTransfer中保存的被拖拽按钮id
        var data = ev.dataTransfer.getData("Text");
        draggednode = document.getElementById(data)
        var parentid = draggednode.parentNode.id
        var fname = draggednode.innerText
        poolobj = document.getElementById(objid)
        poolobj.className = "SilentPool"
        if(parentid == "NoteSelectArea"){
            MakeNewPrompt(poolobj, fname, poolobj.scorepool.length+1,
                null, null, null, "create", true)
        } else{
            MakeNewPrompt(poolobj, fname, poolobj.scorepool.length+1)
        }
         // 在末尾添加新提示
    }
}
// Esc退出编辑对话框；Delete删除乐池中选定目标；Enter保存编辑
function PoolActOnEsc(){
    // 删除对话框
    node = document.getElementById("ScorePrompt")
    if(node){document.body.removeChild(node)}
}
function PoolActOnDelete(){ //删除选定的目标
    node = document.getElementsByClassName("SelectedPoolButton")[0]
    if(node){
        var idinfo = node.id.split("-")
        var poolid = idinfo[0]
        var seq = parseInt(idinfo[1])

        pool = document.getElementById(poolid)

        var preinterv = 0 //计算所用时间
        if(seq != pool.scorepool.length){preinterv = pool.timelst[seq] - pool.timelst[seq-1]}
        else{preinterv = pool.totaltime - pool.timelst[seq-1]}
        pool.totaltime -= preinterv
        for(i=seq-1;i<pool.timelst.length;i++){pool.timelst[i] -= preinterv}

        pool.scorepool.splice(seq-1, 1)
        pool.timelst.splice(seq-1, 1)

        pool.removeChild(node)

        for(i=seq-1;i<pool.timelst.length;i++){
            afternodeid = poolid + "-" + (i+2)
            afternode = document.getElementById(afternodeid)
            afternode.seq -= 1
            afternode.innerHTML = "<font size=\"-1\" style=\"user-select:none\">" + afternode.seq + " " + pool.scorepool[i].name + "</font>"
            afternode.id = poolid + "-" + (i+1)
            afternode.style.setProperty("left", (pool.timelst[i]*15)+"px")
        }
    }
}
function PoolActOnEnter(){
    
    node = document.getElementById("ScorePrompt") // 对话框的节点
    if(node){
        var poolid = node.poolid
        pool = document.getElementById(poolid)  // 池子节点
        var name = document.getElementById("InputName").value
        var tempo = document.getElementById("InputTempo").value
        var repeat = document.getElementById("InputRepeat").value
        var str = document.getElementById("InputStr").value
        var seq = node.seq
        var mode = node.mode
        var score = null
        if(document.getElementById("InputMajor") != null){
            major = document.getElementById("InputMajor").value
            score = GetNote("auto", parseFloat(tempo), major, parseFloat(repeat),
            false, str, 0, name)
        } else{
            score = GetScore("auto", parseFloat(tempo), parseFloat(repeat),
            false, str, 0, name)
        }

        // pool mode score seq
        //在池子里创建一个新的可拖拽按钮，宽度正比于时间
        AddScore(pool, score, seq, mode)
        // 删除对话框
        document.body.removeChild(node)
    }
}

function AddScore(pool, score, seq, mode='create'){
    var timesecond = score.score.beat * 60 / score.tempo * score.repeat

    var timeptr = 0 //时间指针
    var poolid = pool.id
    if(mode == "create"){ // 
        pool.scorepool.splice(seq-1, 0, score)//pool.scorepool.push(score)
        if(seq == pool.scorepool.length){timeptr = pool.totaltime}
        else{timeptr = pool.timelst[seq-1]}

        pool.totaltime += timesecond
        pool.timelst.splice(seq-1, 0, timeptr)//pool.timelst.push(timeptr)
        for(var i=seq;i<pool.scorepool.length;i++){
            pool.timelst[i] += timesecond
        }
        for(var j=seq;j<pool.scorepool.length;j++){
            afternodeid = poolid + "-" + j
            afternode = document.getElementById(afternodeid)
            afternode.seq += 1
            afternode.id = poolid + "-" + (j+1)
        }

        widthlst = []
        for(var i=seq;i<pool.scorepool.length;i++){
            afternodeid = poolid + "-" + (i+1)
            afternode = document.getElementById(afternodeid)

            var score2 = pool.scorepool[i]

            afternode.innerHTML = "<font size=\"-1\" style=\"user-select:none\">" + afternode.seq + " " + pool.scorepool[i].name + "</font>"
            
            afternode.style.setProperty("left", (pool.timelst[i]*15)+"px")
            width = 15 * (score2.score.beat * 60 / score2.tempo * score2.repeat) - 2
            widthlst.push(width)
            afternode.style.setProperty("width", width+"px")
        }

        for(var j=seq;j<pool.scorepool.length;j++){
            width = widthlst[j-seq]
            afternode.style.setProperty("width", width+"px")
        }
    }
    if(mode == "modify"){ //修改pool中的元素
        pool.scorepool[seq-1] = score

        if(seq != pool.scorepool.length){preinterv = pool.timelst[seq] - pool.timelst[seq-1]}
        else{preinterv = pool.totaltime - pool.timelst[seq-1]}
        var delta = timesecond - preinterv
        pool.totaltime += delta
        for(var i=seq;i<pool.scorepool.length;i++){
            pool.timelst[i] += delta
        }
    }

    var scorewidth = timesecond * 15
    PoolButton = GetPoolButton(seq, score.name, scorewidth-2, timeptr*15, poolid)

    prevnode = document.getElementById(poolid + "-" + PoolButton.seq)
    if(mode == "modify" && prevnode){pool.removeChild(prevnode)} // 删除旧button
    pool.appendChild(PoolButton) // 创建新button

    // 修改所有button的位置
    if(mode == "modify"){
        for(i=0;i<pool.timelst.length;i++){
            button = document.getElementById(poolid + "-" + (i+1))
            button.style.setProperty("left", (pool.timelst[i]*15)+"px")
            }
        }
}

function GetPoolButton(seq, name, width, left, poolid){
    // 获得池子中的锣鼓按钮
    const PoolButton = document.createElement("span")
    PoolButton.className = "SilentPoolButton"
    PoolButton.seq = seq
    PoolButton.name = name
    PoolButton.id = poolid + "-" + PoolButton.seq
    PoolButton.innerHTML = "<font size=\"-1\" style=\"user-select:none\">" + PoolButton.seq + " " + name + "</font>"
    PoolButton.poolid = poolid
    PoolButton.style.setProperty("width", width + "px")
    PoolButton.style.setProperty("max-width", width + "px")
    PoolButton.style.setProperty("left", left+"px")

    PoolButton.onmousedown = PoolButtonOnMouseDown
    PoolButton.onmouseup = PoolButtonOnMouseUp
    PoolButton.onmouseover = PoolButtonOnMouseOver
    PoolButton.onmouseout = PoolButtonOnMouseOut
    PoolButton.ondrop = PoolButtonOnDrop
    PoolButton.ondragover = PoolButtonOnDragOver
    PoolButton.ondragleave = PoolButtonOnDragLeave

    return PoolButton
}
function calcRelativePos(poolobj, ev){
    var poolleft = poolobj.getBoundingClientRect().left
    var scrolltop = poolobj.scrollTop
    var mousepos = ev.clientX
    var relativepos = mousepos - poolleft + scrolltop
    return relativepos
}
function calcmidpos(){
    var scrolltop = window.scrollY
    var scrollleft= window.scrollX
    var width = document.body.clientWidth
    var height= document.body.clientHeight
    var midX = (width + scrollleft) * 0.4
    var midY = (height + scrolltop) * 0.4
    return {"midX": midX, "midY": midY}
}
document.onscroll = function(e){
    prompt = document.getElementById("ScorePrompt")
    if(prompt){
        var midXY = calcmidpos()
        prompt.style.setProperty("left", midXY.midX + "px")
        prompt.style.setProperty("top", midXY.midY + "px")
    }
}
document.ondragstart = function(event) { //拖拽时，储存对应的信息
    event.dataTransfer.setData("Text", event.target.id);
}
document.onmouseup = function(e){
    var ev = e || window.event
    var target = ev.target
    var id = target.id
    if(id.search("Pool") == -1){ //点到非pool区域
        node = document.getElementsByClassName("SelectedPoolButton")[0]
        if(node){node.className = "SilentPoolButton"}
    }
}