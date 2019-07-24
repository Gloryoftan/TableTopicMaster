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
    var speed = 75;
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
        $('#' + nextSceneId + 'BtnGroup').css('display', 'block');
    }, delay);
}

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