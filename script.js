'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// Please don't delete the 'use strict' line above

function randomNum(numMax,numMin){
    let result ;
	result = Math.floor(Math.random() * (numMax -numMin)) + numMin;
    return result
}

function shadowAvoter() {
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
    const addcount = randomNum(20,2)
    // console.log("addcount", addcount)
    for(let i = 0; i <= addcount; i++){
        const addimg = document.getElementsByClassName("backGround");
        const target ="./img/ninja_hashiru.png";
        const image =  document.createElement("img")
        image.setAttribute("src", target);
        image.className ="ninjya"
        image.style.right = randomNum(650,50) + "px";
        image.style.bottom = randomNum(280,15) + "px";
        image.style.display = "block";
        addimg[0].appendChild(image);
    }
}

function transform(){
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
        let element = `<img src="${imgList[num]}" alt="" class="change"/>`;
        displayTarget[0].innerHTML = element;
    },1200,imgList,displayTarget);
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


// ------------------------------------------------------------------------------

const target = document.getElementsByClassName("btn") ;
// console.log(target)
target[0].addEventListener("click", shadowAvoter);
target[1].addEventListener("click", transform);
target[2].addEventListener("click", clear);


