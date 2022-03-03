
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

