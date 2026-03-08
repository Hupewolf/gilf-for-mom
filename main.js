// function openEnvelope(){
//     document.querySelector(".envelope").classList.toggle("open");
// }

function openEnvelope(el){

    if(el.classList.contains("open")){
        // đóng thư
        el.classList.remove("letter-open");
        setTimeout(()=>{
            el.classList.remove("open");
        },400);
    }
    else{

        // mở thư
        el.classList.add("open");
        setTimeout(()=>{
            el.classList.add("letter-open");
        },400);
    }
}

function createFlower(){

    const flower=document.createElement("div");
    flower.className="flower";

    const flowers=["💐","🌺","🌷","🌸"];

    flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=
        6+Math.random()*6+"s";

    flower.style.fontSize=
        18+Math.random()*20+"px";

    document.body.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },12000);

}

setInterval(createFlower,700);