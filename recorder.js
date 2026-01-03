let mediaRecorder,chunks=[];
function startRecording(){
const stream=document.getElementById("scene").captureStream(30);
mediaRecorder=new MediaRecorder(stream);chunks=[];
mediaRecorder.ondataavailable=e=>chunks.push(e.data);
mediaRecorder.onstop=()=>{
const blob=new Blob(chunks,{type:"video/webm"});
const a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="coin-fx.webm";a.click();};
mediaRecorder.start();
}
function stopRecording(){mediaRecorder.stop();}
