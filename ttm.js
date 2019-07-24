//计时器
let oTime = document.querySelector("#TTM .status .time");
let sVal = 600;

setInterval(() => {
    oTime.innerHTML = --sVal;
}, 1000);

//type effect
function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

//场景转换
function sceneSwitch(preSceneId, nextSceneId) {
    $('#' + preSceneId).css('display', 'none');
    $('#' + nextSceneId).css('display', 'flex');

    // application
    var speed = 15;
    var h1 = $('#' + nextSceneId + ' h1')[0];
    var aP = $('#' + nextSceneId + ' p');
    var delay = h1.innerHTML.length * speed;
    // type affect to header
    typeEffect(h1, speed);

    for (let i = 0; i < aP.length; i++) {
        setTimeout(function () {
            aP[i].style.display = "inline-block";
            typeEffect(aP[i], speed);
        }, delay);
        delay += aP[i].innerHTML.length * speed;
    }

    setTimeout(function () {
        $('#' + nextSceneId + 'BtnGroup').css('display', 'flex');
    }, delay);
}

//状态栏更新
let iq = 0;
let eq = 0;
let st = 0;
let ch = 0;
let pressure = 0;
let money = 0;
let aIq = document.querySelectorAll("#TTM .status .iq .star li");
let aEq = document.querySelectorAll("#TTM .status .eq .star li");
let aSt = document.querySelectorAll("#TTM .status .st .star li");
let aCh = document.querySelectorAll("#TTM .status .ch .star li");
let oPressure = document.querySelector("#TTM .status .pressure .data");
let oMoney = document.querySelector("#TTM .status .money .data");
console.log(aIq);

function iqAdd(iq){
    for(let i = 0;i<iq;i++){
        aIq[i].className = "light";
    }
}
iqAdd(iq);

function eqAdd(eq){
    for(let i = 0;i<eq;i++){
        aEq[i].className = "light";
    }
}
eqAdd(eq);

function stAdd(st){
    for(let i = 0;i<st;i++){
        aSt[i].className = "light";
    }
}
stAdd(st);

function chAdd(ch){
    for(let i = 0;i<ch;i++){
        aCh[i].className = "light";
    }
}
chAdd(ch);

console.log( oPressure.innerHTML);

function pressureAdd(pressure){
    oPressure.innerHTML = pressure;
}
pressureAdd(pressure);

function moneyAdd(money){
    oMoney.innerHTML = money;
}
moneyAdd(money);

//scene1
let babyName = "没有名字";
let babySex = "中性";
let aBabyName = document.querySelectorAll("p");
$("#scene1Btn").click(function () {
    babyName = $('#babyName').val() || "没有名字";
    //替换姓名
    for (let i = 0; i < aBabyName.length; i++) {
        console.log(aBabyName[i].innerHTML);
        aBabyName[i].innerHTML = aBabyName[i].innerHTML.replace(/庄晓曼/g, babyName);
    }

    if ($('#scene1 input:radio:checked').val() == 0) {
        babySex = "女";
    } else if ($('#scene1 input:radio:checked').val() == 1) {
        babySex = "男";
    }
    console.log(babyName + babySex);
    sceneSwitch("scene1", "scene2");
});

//scene2
$('#scene2btn').click(function () {
    sceneSwitch("scene2", "scene3");
})

//scene3
$('#scene3BtnA').click(function () {
    swal({
        text: "",
    }).then(() => {
        iq++;
        st++;
        pressure++;
        money+=100;
        iqAdd(iq);
        stAdd(st);
        pressureAdd(pressure);
        moneyAdd(money);
        sceneSwitch("scene3", "scene5");
    });;

})