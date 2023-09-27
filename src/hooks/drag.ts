// import { ipcRenderer } from "electron";

function useDrag(){
  let animationId: number;
  let mouseX: number;
  let mouseY: number;
  let clientWidth = 0;
  let clientHeight = 0;
  let draggable = true;

  const onmousedown = (e: any) => {
    draggable = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (Math.abs(document.body.clientWidth - clientWidth) > 5) {
      clientWidth = document.body.clientWidth;
    }
    if (Math.abs(document.body.clientHeight - clientHeight) > 5) {
      clientHeight = document.body.clientHeight;
    }
    document.addEventListener('mouseup', onmouseup);
    animationId = requestAnimationFrame(moveWindow);
  }
  const onmouseup = () => {
    draggable = false;
    document.removeEventListener('mouseup', onmouseup);
    cancelAnimationFrame(animationId);
  }
  const moveWindow = () => {
    // 进程通信
    // ipcRenderer.send('msg-trigger', {
    //   type: 'windowMoving',
    //   data: { mouseX, mouseY, width: clientWidth, height: clientHeight },
    // })

    if (draggable) animationId = requestAnimationFrame(moveWindow);
  }

  return {
    onmousedown
  }
}

export default useDrag 
