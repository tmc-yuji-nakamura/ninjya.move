'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// Please don't delete the 'use strict' line above

function randomNum(numMax,numMin){
    let result ;
	result = Math.floor(Math.random() * (numMax -numMin)) + numMin;
    return result
}

function shadowAvoter() {
    const initialize = document.getElementsByClassName("ninjya")
    for(let i = initialize.length -1; i >= 0; i-- ){
      initialize[i].remove()
    }
    const addcount = randomNum(20,2)
    // console.log("addcount", addcount)
    for(let i = 0; i <= addcount; i++){
        // console.log("i" , i)
        const addimg = document.getElementsByClassName("backGround");
        const target ="./img/ninja_hashiru.png";
        const image =  document.createElement("img")
        image.setAttribute("src", target);
        image.className ="ninjya"
        image.style.right = randomNum(650,50) + "px";
        image.style.bottom = randomNum(300,15) + "px";
        addimg[0].appendChild(image);
    }
}

//ボタンクリック
//関数addImageNumで忍者表示数決定（乱数）
//関数shadowAvoter起動
//表示数分の忍者を繰り返しランダム位置に配置

const target = document.getElementsByClassName("btn") ;
// console.log(target)
target[0].addEventListener("click", shadowAvoter);