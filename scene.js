let scene,camera,renderer;let coins=[];
const colors=[0xffd700,0x00ffff,0xff00ff,0x00ff00,0xff4500];

function initScene(){
const canvas=document.getElementById("scene");
scene=new THREE.Scene();
camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
camera.position.z=5;
renderer=new THREE.WebGLRenderer({canvas,alpha:true});
renderer.setSize(innerWidth,innerHeight);
scene.add(new THREE.AmbientLight(0xffffff,0.6));
const light=new THREE.PointLight(0xffd700,2,10);
light.position.set(0,2,3);scene.add(light);
animate();
}

function createCoin(){
const geo=new THREE.CylinderGeometry(0.3,0.3,0.05,32);
const mat=new THREE.MeshStandardMaterial({
color:colors[Math.floor(Math.random()*colors.length)],
metalness:1,roughness:0.2,emissive:0x111111});
const coin=new THREE.Mesh(geo,mat);
coin.position.x=(Math.random()-0.5)*4;
coin.position.y=4;
scene.add(coin);coins.push(coin);
if(navigator.vibrate)navigator.vibrate(30);
}

function animate(){
requestAnimationFrame(animate);
coins.forEach((c,i)=>{
c.position.y-=0.05;
c.rotation.x+=0.1;c.rotation.y+=0.1;
c.material.emissiveIntensity=0.5+Math.sin(Date.now()*0.01)*0.5;
if(c.position.y<-5){scene.remove(c);coins.splice(i,1);}
});
renderer.render(scene,camera);
}
