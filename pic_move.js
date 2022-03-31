'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// Please don't delete the 'use strict' line above

// 画像を好きな位置に表示
function positionRight(){
    let result ;
    const numMax = 750
    const numMin = 50
	result = Math.floor(Math.random() * (numMax -numMin)) + numMin;
    return result
}

function positionBottom(){
    let result ;
    const numMax = 350
    const numMin = 15
	result = Math.floor(Math.random() * (numMax -numMin)) + numMin;
    // console.log("result", result)
    return result
}

function addImageNum(){
    const numMax = 20
    const numMin = 2
	return Math.floor(Math.random() * (numMax -numMin)) + numMin;
}

function shadowAvoter() {
    // const addcount = addImageNum()
    // for(let i = 0; i <= addcount; i++){
    const addimg = document.getElementsByClassName("backGround");
    const target ="./img/ninja_hashiru.png";
    const image =  document.createElement("img")
    image.setAttribute("src", target);
    image.style.width = "80px";
    image.style.height ="80px"
    image.style.position = "absolute"
    image.style.right = positionRight() + "px";
    image.style.bottom = positionBottom() + "px";
    addimg[0].appendChild(image);
    // }
}

//ボタンクリック
//関数addImageNumで忍者表示数決定（乱数）
//関数shadowAvoter起動
//表示数分の忍者を繰り返しランダム位置に配置