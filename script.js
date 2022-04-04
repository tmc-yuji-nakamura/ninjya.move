"use strict"
// 1行目に記載している "use strict" は削除しないでください
// Please don"t delete the "use strict" line above

function randomNum(numMax,numMin){
    let result ;
	result = Math.floor(Math.random() * (numMax -numMin)) + numMin;
    return result
}

function shadowAvoter() {
    const clearImg = document.getElementsByClassName("ninjya");
    for(let i = clearImg.length -1; i >= 0; i-- ){
        clearImg[i].remove()
    }
    const clearImg2 = document.getElementsByClassName("change")
    for(const countElemnt of clearImg2 ){
        if(countElemnt !== undefined){
        clearImg2[0].remove()
    }
    }
    const removeTarget = document.getElementsByClassName("default")
    removeTarget[0].style.display = "none"
    const addcount = randomNum(20,1)
    // console.log("addcount", addcount)
    for(let i = 0; i <= addcount; i++){
        const addimg = document.getElementsByClassName("backGround");
        const target ="./img/ninja_hashiru.png";
        const image =  document.createElement("img")
        image.setAttribute("src", target);
        image.className ="ninjya"
        image.style.right = `${randomNum(650,50)}px`;
        image.style.bottom = `${randomNum(280,15)}px`;
        image.style.display = "block";
        addimg[0].appendChild(image);
    }
}

function transform(){
    const button = document.getElementsByClassName("btn") 
    for(let i = 0; i <= 3; i++){
        button[i].disabled = true;
        button[i].style.backgroundColor = "#808080";
        button[i].style.boxShadow = "0 5px #d3d3d3";
        button[i].style.fontStyle = "oblique"
        button[i].style.color = "#c0c0c0"
    }
    const clearImg2 = document.getElementsByClassName("change")
    for(const countElemnt of clearImg2 ){
        if(countElemnt !== undefined){
        clearImg2[0].remove()
        }   
    }
    const imgList =[
    "./img/ninja_chenge.png" ,
    "./img/oni_jigoku_kama.png" ,
    "./img/inari_kitsune6_makimono.png" ,
    "./img/renjishi_red.png" ,
    "./img/bushi_ochimusya.png",
    "./img/otaku.png",
    "./img/kenjutsu_shinsengumi_man.png",
    "./img/tanuki_okimono.png",
    "./img/sumo_rikishi_harite2.png",
    "./img/ojizousan.png",
    "./img/onepiece02_zoro_bandana.png",
    ]
    const clearImg = document.getElementsByClassName("ninjya")
    for(let i = clearImg.length -1; i >= 0; i-- ){
        clearImg[i].remove()
    }
    const removeTarget = document.getElementsByClassName("default")
    removeTarget[0].style.display = "none"
    const displayTarget = document.getElementsByClassName("transform")
    removeTarget[0].style.display = "none"
    let element = `<img src="${imgList[0]}" alt="" class="change"/>`;
    displayTarget[0].innerHTML = element;
    setTimeout(function(){
    const num = randomNum(11,1)
    let element = `<img src="${imgList[num]}" alt=""  class="change"/>`;
    displayTarget[0].innerHTML = element;
    for(let i = 0; i <= 2; i++){
        button[i].disabled = false;
        button[i].style.fontSize = "20px";
        button[i].style.fontWeight = "bold";
        button[i].style.fontStyle = "oblique"
        button[i].style.backgroundColor = "#00CC00";
        button[i].style.boxShadow = "0 5px #006400"
        button[i].style.color = "#ffffff";
        const clearbutton = document.getElementById("clear")
        clearbutton.disabled = false;
        clearbutton.style.fontSize = "20px";
        clearbutton.style.fontWeight = "bold";
        clearbutton.style.fontStyle = "oblique"
        clearbutton.style.color = "#ffffff"
    }
    
    return
    },650,imgList,displayTarget,button);
}

function move() {
    let nintervalId 
    let counter = 50
    const button = document.getElementsByClassName("btn") 
    for(let i = 0; i <= 3; i++){
        button[i].disabled = true;
        button[i].style.backgroundColor = "#808080";
        button[i].style.boxShadow = "0 5px #d3d3d3";
        button[i].style.fontStyle = "oblique"
        button[i].style.color = "#c0c0c0"
    }
    const clearImg = document.getElementsByClassName("ninjya")
    for(let i = clearImg.length -1; i >= 0; i-- ){
        clearImg[i].remove()
    }
    const clearImg2 = document.getElementsByClassName("change")
    for(const countElemnt of clearImg2 ){
        if(countElemnt !== undefined){
        clearImg2[0].remove()
        }
    }
    const removeTarget = document.getElementsByClassName("default")
    removeTarget[0].style.display = "none"
    // console.log("addcount", addcount)
    const addimg = document.getElementsByClassName("backGround");
    const target ="./img/ninja_hashiru.png";
    const image =  document.createElement("img")
    image.setAttribute("src", target);
    image.className ="ninjya"
    image.id = "move"
    image.style.right = "50px";
    image.style.bottom = "15px";
    image.style.display = "block";
    addimg[0].appendChild(image);
    nintervalId= setInterval(function(){
    const image = document.getElementById("move");
    image.style.right = `${counter}px`;
    counter += 5
    // console.log("counter" , counter)
    if (counter >= 650){
        clearInterval(nintervalId)
        for(let i = 0; i <= 2; i++){
            button[i].disabled = false;
            button[i].style.fontSize = "20px";
            button[i].style.fontWeight = "bold";
            button[i].style.fontStyle = "oblique"
            button[i].style.backgroundColor = "#00CC00";
            button[i].style.boxShadow = "0 5px #006400"
            button[i].style.color = "#ffffff";
        }
        const clearbutton = document.getElementById("clear")
        clearbutton.disabled = false;
        clearbutton.style.fontSize = "20px";
        clearbutton.style.fontWeight = "bold";
        clearbutton.style.fontStyle = "oblique"
        clearbutton.style.color = "#ffffff"
    }
    return
    },randomNum(15,0.2),counter,button);
}

function clear(){
    const clearImg = document.getElementsByClassName("ninjya")
    for(let i = clearImg.length -1; i >= 0; i-- ){
        clearImg[i].remove()
    }
    const clearImg2 = document.getElementsByClassName("change")
    for(const countElemnt of clearImg2 ){
        if(countElemnt !== undefined){
        clearImg2[0].remove()
        }
    }
    const removeTarget = document.getElementsByClassName("default")
    removeTarget[0].style.display = "block"
}

function expansionButton(){
    const button = this 
    // console.log(this);
    button.style.fontSize = "24px";
    button.style.fontWeight = "bold";
    button.style.fontStyle = "oblique";
    button.style.width = "150px";
    button.style.height = "80px";
    button.style.backgroundColor = "#FF6928";
    button.style.boxShadow = "none"
    
}

function shrinkageButton(){
    const button = this 
    // console.log(this)
    button.style.fontSize = "20px";
    button.style.fontWeight = "bold";
    button.style.fontStyle = "oblique";
    button.style.width = "120px";
    button.style.height = "60px";
    button.style.backgroundColor = "#00CC00";
    button.style.boxShadow = "0 5px #006400";
}

function shrinkageClearButton(){
    const button = this 
    console.log(this)
    button.style.fontSize = "20px";
    button.style.fontWeight = "bold";
    button.style.fontStyle = "oblique";
    button.style.width = "100px";
    button.style.height = "40px";
    button.style.backgroundColor = "#696969";
    button.style.boxShadow = "0 5px #708090";
}






// ------------------------------------------------------------------------------

const target = document.getElementsByClassName("btn") ;
// console.log(target)
target[0].addEventListener("click", shadowAvoter);
target[0].addEventListener("mouseenter", expansionButton)
target[0].addEventListener("mouseleave", shrinkageButton)
target[1].addEventListener("click", transform);
target[1].addEventListener("mouseenter", expansionButton)
target[1].addEventListener("mouseleave", shrinkageButton)
target[2].addEventListener("click", move);
target[2].addEventListener("mouseenter", expansionButton)
target[2].addEventListener("mouseleave", shrinkageButton)
target[3].addEventListener("click", clear);
target[3].addEventListener("mouseenter", expansionButton)
target[3].addEventListener("mouseleave", shrinkageClearButton)