
addEventListener("keydown",
    function (e) {
        console.log(e)
    }
)


document.onclick = function (event) {
    // 显示事件类型、元素和点击的坐标
    console.log(event)
    console.log(event.type + " at " + event.currentTarget);
    console.log("Coordinates: " + event.clientX + ":" + event.clientY);
};

// Object.Event.UIEvent.MouseEvent.PointerEvent

// 0303

// 0308
desc = ' '
location.search = '?q=foo'
// 


//0311
//gitlens
javascript: (function () { var doc = document; var bd = doc.body; bd.onselectstart = bd.oncopy = bd.onpaste = bd.onkeydown = bd.oncontextmenu = bd.onmousemove = bd.onselectstart = bd.ondragstart = doc.onselectstart = doc.oncopy = doc.onpaste = doc.onkeydown = doc.oncontextmenu = null; doc.onselectstart = doc.oncontextmenu = doc.onmousedown = doc.onkeydown = function () { return true }; with (document.wrappedJSObject || document) { onmouseup = null; onmousedown = null; oncontextmenu = null } var arAllElements = document.getElementsByTagName('*'); for (var i = arAllElements.length - 1; i >= 0; i--) { var elmOne = arAllElements; with (elmOne.wrappedJSObject || elmOne) { onmouseup = null; onmousedown = null } } alert(unescape('%u5DF2%u4E3A%u4F60%u89E3%u9669%u7F51%u9875%u53F3%u952E%u9650%u5236')); bd.style.webkitUserSelect = 'auto!important'; bd.style.MozUserSelect = 'text!important'; })()

// 作者：LCCCC_0523
// 链接：https://www.jianshu.com/p/37417145430c
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


