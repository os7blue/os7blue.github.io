

document.addEventListener('click', handleEvent);
document.addEventListener('mousemove', handleEvent);
document.addEventListener('keydown', handleEvent);

function handleEvent() {
  document.getElementById("bg-video").play()
}



let v = config.videoList[config.videoList.length-1]
document.getElementById("bg-video").src = `/Users/codecv/index/video/${v.no}.mp4`
document.getElementById("content").style.color = `${v.color}`
document.getElementById("bg-video").style.objectFit = `${v.fit}`

document.getElementById("scrolling-text").textContent  = config.text




var dragging = false;
var dragStartX, dragStartY;
var containerElem = document.body;
var dragElem = document.getElementById("content");

// 长按开始拖动
function startDragging(e) {
  e.preventDefault();
  dragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;

  mouseEnter()
}

// 拖动中
function doDragging(e) {
  if (!dragging) return;

  var offsetX = e.clientX - dragStartX;
  var offsetY = e.clientY - dragStartY;

  dragElem.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
}

// 鼠标松开
function stopDragging(e) {
  if (!dragging) return;

  dragging = false;
  dragElem.style.transform = "translate(-50%, -50%)";

  mouseLeave()
}

// 添加事件监听器
containerElem.addEventListener("mousedown", startDragging);
containerElem.addEventListener("mousemove", doDragging);
containerElem.addEventListener("mouseup", stopDragging);



var hoverDiv = document.getElementById("content");

// 鼠标进入
function mouseEnter() {
  hoverDiv.style.backgroundColor = config.hoverColor;
}

// 鼠标离开
function mouseLeave() {
  hoverDiv.style.backgroundColor = "";
}

// 添加事件监听器
hoverDiv.addEventListener("mouseenter", mouseEnter);
hoverDiv.addEventListener("mouseleave", mouseLeave);
