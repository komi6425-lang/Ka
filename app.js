const startBtn=document.getElementById("startBtn");
const recBtn=document.getElementById("recBtn");
let started=false,recording=false,storm=null;

startBtn.onclick=()=>{
initScene();startBtn.style.display="none";
recBtn.style.display="block";started=true;
};

window.addEventListener("click",()=>{if(started)createCoin();});

window.addEventListener("mousedown",()=>{
if(!started)return;
storm=setInterval(()=>{for(let i=0;i<5;i++)createCoin();},100);
});
window.addEventListener("mouseup",()=>clearInterval(storm));

recBtn.onclick=()=>{
if(!recording){startRecording();recBtn.textContent="STOP";recording=true;}
else{stopRecording();recBtn.textContent="REC";recording=false;}
};
