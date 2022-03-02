
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

<style>
  body {
    height: 200px;
    background: beige;
  }
  .dot {
    height: 8px; width: 8px;
    border-radius: 4px; /* rounds corners */
    background: blue;
    position: absolute;
  }
</style>
<script>
  window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  });
</script>