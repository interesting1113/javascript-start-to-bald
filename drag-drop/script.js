//1.获取节点
const fill = document.querySelector(".fill");
const empyties = document.querySelectorAll(".empty")

//2.fill的事件监听
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('dragstart', dragStart);

//4.循环empty盒子并设置事件监听
for(const empty of empyties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
//3.fill拖动函数
function dragStart() {
    //console.log('start');
    this.className += " hold";
    setTimeout(() => {
        this.className = "invisible";
    }, 0);
}

function dragEnd() {
    this.className = "fill";
}

//5.empty函数
function dragOver(e) {
    e.preventDefault();
   
}
function dragEnter(e) {
    //console.log('enter');
    e.preventDefault();
    this.className += " hovered";

}
function dragLeave() {
    this.className = "empty";
}
function dragDrop() {
    this.className = "empty";
    this.append(fill);
}
