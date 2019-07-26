//计时器
let oTime = document.querySelector("#TTM .time");
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

// //范围随机数
// function _randomValue(start, end) {
//     if (typeof start == "undefined") {
//         start = 0;
//     }
//     if (typeof end == "undefined") {
//         end = start + 100;
//     }
//     return start + Math.round(Math.random() * (end - start));
// }

// //随机生成背景渐变色
// function _randomGradientBgColor() {
//     var _h = this._randomValue(0, 360);
//     var _h1 = _h + this._randomValue(20, 60);
//     var _s = this._randomValue(40, 60);
//     var _l = this._randomValue(50, 80);
//     var _ang = this._randomValue(0, 180);
//     var _gradient = 'linear-gradient(' + _ang + 'deg, hsl(' + _h + ', ' + _s + '%, ' + _l + '%), hsl(' + _h1 + ', ' + _s + '%, ' + _l + '%))';
//     return _gradient;
// }

// //改变背景色
// function changeBg(){
//     let bgColor = _randomGradientBgColor();
//     console.bgColor;
//     $('.question').css('color',bgColor);
// }

//状态栏更新
// let iq = 0;
// let eq = 0;
// let st = 0;
// let ch = 0;
// let pressure = 0;
// let money = 100000;
// let aIq = document.querySelectorAll("#TTM .status .iq .star li");
// let aEq = document.querySelectorAll("#TTM .status .eq .star li");
// let aSt = document.querySelectorAll("#TTM .status .st .star li");
// let aCh = document.querySelectorAll("#TTM .status .ch .star li");
// let oPressure = document.querySelector("#TTM .status .pressure .data");
// let oMoney = document.querySelector("#TTM .status .money .data");

// function statusAdd(iq, eq, st, ch, pressure, money) {
//     for (let i = 0; i < iq; i++) {
//         aIq[i].className = "light";
//     }
//     for (let i = 0; i < eq; i++) {
//         aEq[i].className = "light";
//     }
//     for (let i = 0; i < st; i++) {
//         aSt[i].className = "light";
//     }
//     for (let i = 0; i < ch; i++) {
//         aCh[i].className = "light";
//     }
//     oPressure.innerHTML = pressure;
//     oMoney.innerHTML = money;
// }
// statusAdd(iq, eq, st, ch, pressure, money);
let momStar = 0;
let aMomStar = document.querySelectorAll("#TTM .status .mom .star li");

function momStarAdd(para) {
    for (let i = 0; i < para; i++) {
        aMomStar[i].className = 'light';
    }
}
momStarAdd(momStar);

//偷懒para
let lazy = 0;

//ending generate
function endingGen(where, para) {
    $('#' + where).append(para);
};

//scene1起名
let babyName = "没有名字";
let babySex = "中性";
let babyTA = "TA";
let babyLove = "LOVE";
let aBabyName = document.querySelectorAll("p");
$("#scene1Btn").click(function () {
    if (!$('#babyName').val()) {
        alert('先起名！');
        return;
    }

    babyName = $('#babyName').val() || "没有名字";
    //替换姓名

    if ($('#scene1 input:radio:checked').val() == 0) {
        babySex = "女";
        babyTA = "她";
        babyLove = "男";
    } else if ($('#scene1 input:radio:checked').val() == 1) {
        babySex = "男";
        babyTA = "他";
        babyLove = "女";
        lazy = 1;
    }
    for (let i = 0; i < aBabyName.length; i++) {
        console.log(aBabyName[i].innerHTML);
        aBabyName[i].innerHTML = aBabyName[i].innerHTML.replace(/庄晓曼/g, babyName).replace(/TA/g, babyTA).replace(/LOVE/g, babyLove);
    }
    console.log(babyName + babySex);
    // sceneSwitch("scene1", "scene2");
    sceneSwitch("scene1", "scene2");
});

//scene2诞生
$('#scene2btn').click(function () {
    sceneSwitch("scene2", "scene3");
})

//scene3幼儿园
$('#scene3BtnA').click(function () {
    swal({
        title: '【费力不讨好】',
        text: "本以为花钱送上兴趣班可以让孩子得到锻炼，但是没想到孩子好的不学，坏习惯学习了一大堆。孩子进入普通小学。",
        icon: "success"
    }).then(() => {
        momStar += 2;
        momStarAdd(momStar);
        endingGen("ending2", "面对‘假期’ ，你选择花钱去上兴趣班，培养兴趣爱好。");
        sceneSwitch("scene3", "scene5");
        // sceneSwitch("scene3", "scene11");
    });;
})

$('#scene3BtnB').click(function () {
    swal({
        title: '【寓教于乐】',
        text: "家人的陪伴，让孩子得以更好的成长，但也牺牲了很多时间。孩子进入重点小学。",
        icon: "success"
    }).then(() => {
        momStar += 1;
        momStarAdd(momStar);
        endingGen("ending2", "面对‘假期’ ，你选择亲自陪伴，寓教于乐。");
        sceneSwitch("scene3", "scene4");
    });;
})

$('#scene3BtnC').click(function () {
    swal({
        title: '【得不偿失】',
        text: "从幼儿园就开始补课，还真是狠啊！孩子因厌学进入普通小学。",
        icon: "warning"
    }).then(() => {
        momStar += 3;
        momStarAdd(momStar);
        endingGen("ending2", "面对‘假期’ ，你选择报名学前班，先苦后甜。");
        sceneSwitch("scene3", "scene5");
    });;
})

$('#scene3BtnD').click(function () {
    swal({
        title: '【焉知非福】',
        text: "你无忧虑，父母很开心，但孩子被宠坏了！孩子进入普通小学。",
        icon: "warning"
    }).then(() => {
        momStar += 1;
        momStarAdd(momStar);
        endingGen("ending2", "面对‘假期’ ，你选择交给父母，因为你信任他们。");
        sceneSwitch("scene3", "scene5");
    });;
})

$('#scene3BtnE').click(function () {
    swal({
        title: '【天才】',
        text: "居然敢把3岁孩子锁在家里！把墙壁都涂花了！无意发现他的天赋--绘画。进入HomeSchool选择。",
        icon: "success"
    }).then(() => {
        momStar += 0;
        momStarAdd(momStar);
        endingGen("ending2", "面对‘假期’ ，你选择锁在家里，因为你出于好奇。");
        sceneSwitch("scene3", "scene6");
    });;
})

//scene4重点小学
$('#scene4BtnA').click(function () {
    swal({
        title: '【不知所云】',
        text: "你和孩子说家委会成“拼爹会”，但小学生怎懂？孩子进入普通初中。",
        icon: "success"
    }).then(() => {
        momStar += 1;
        momStarAdd(momStar);
        endingGen("ending3", "面对‘攀比’，你选择努力沟通，但似乎有些心累。");
        sceneSwitch("scene4", "scene8");
    });;
})

$('#scene4BtnB').click(function () {
    swal({
        title: '【潜水员】',
        text: "你不愿面对的事情，孩子迟早有一天会需要亲自处理。孩子进入普通初中。",
        icon: "success"
    }).then(() => {
        momStar += 0;
        momStarAdd(momStar);
        endingGen("ending3", "面对‘攀比’，你选择置身事外，但也不希望孩子因此而吃亏。");
        sceneSwitch("scene4", "scene8");
    });;
})

$('#scene4BtnC').click(function () {
    swal({
        title: '【多劳多得】',
        text: "因为家委付出多，孩子获照顾。没错，这也是一种中国特色。孩子进入重点初中。",
        icon: "success"
    }).then(() => {
        momStar += 2;
        momStarAdd(momStar);
        endingGen("ending3", "面对‘攀比’，你选择积极参与，希望孩子因此受益。");
        sceneSwitch("scene4", "scene7");
    });;
})

//scene5普通小学
$('#scene5BtnA').click(function () {
    swal({
        title: '【考虑不周】',
        text: "你不想管孩子这么严，但小学生“轰趴”让孩子产生了攀比心理。孩子进入普通初中。",
        icon: "success"
    }).then(() => {
        momStar += 0;
        momStarAdd(momStar);
        endingGen("ending3", "面对‘攀比’，你选择放手，或者你根本没有多想。");
        sceneSwitch("scene5", "scene8");
    });;
})

$('#scene5BtnB').click(function () {
    swal({
        title: '【顾此失彼】',
        text: "你不希望孩子有攀比心理，但孩子被孤立的风险大大增加。孩子进入普通初中。",
        icon: "success"
    }).then(() => {
        momStar += 2;
        momStarAdd(momStar);
        endingGen("ending3", "面对‘攀比’，你选择不放手，希望孩子不要过早接触这些。");
        sceneSwitch("scene5", "scene8");
    });;
})

$('#scene5BtnC').click(function () {
    swal({
        title: '【孩子王】',
        text: "你通过买礼物的机会，不仅增加了亲子间的信任，也让孩子成为了孩子王。孩子进入重点初中。",
        icon: "success"
    }).then(() => {
        momStar += 0;
        momStarAdd(momStar);
        endingGen("ending3", "面对‘攀比’，你选择积极参与，抓住机会教育。");
        sceneSwitch("scene5", "scene7");
    });;
})

//scene6HomeSchool
$('#scene6BtnA').click(function () {
    swal({
        title: '【真的勇士】',
        text: "我不知道HomeSchool的后果，但我敬佩这份勇气！",
        icon: "success"
    }).then(() => {
        momStar += 0;
        momStarAdd(momStar);
        endingGen("ending3", "面对‘HomeSchool‘，你选择做个理想的现实主义者。");
        sceneSwitch("scene6", "scene7");
    });;
})

$('#scene6BtnB').click(function () {
    swal({
        title: '【假的勇士】',
        text: "你敢把3岁小孩锁在家里，却不敢真的面对未知！",
        icon: "success"
    }).then(() => {
        momStar += 2;
        momStarAdd(momStar);
        endingGen("ending3", "面对’HomeSchool‘，你选择做个现实的理想主义者。");
        sceneSwitch("scene6", "scene7");
    });;
})

//scene7重点初中
$('#scene7BtnA').click(function () {
    swal({
        title: '【一厢情愿】',
        text: "结果孩子只是一厢情愿，是不是和父母学的？",
        icon: "warning"
    }).then(() => {
        momStar += 0;
        momStarAdd(momStar);
        endingGen("ending4", "面对’暗恋‘，你并不反对，因为你相信积极的一面。");
        if (lazy == 0) {
            sceneSwitch("scene7", "scene9");
        } else {
            sceneSwitch("scene7", "scene10");
        }
    });;
})

$('#scene7BtnB').click(function () {
    swal({
        title: '【一厢情愿】',
        text: "孩子一厢情愿而已，想要劝阻也是一厢情愿罢了。",
        icon: "warning"
    }).then(() => {
        momStar += 2;
        momStarAdd(momStar);
        endingGen("ending4", "面对‘暗恋’，你坚决反对，因为你也是为了孩子好。");
        if (lazy == 0) {
            sceneSwitch("scene7", "scene9");
        } else {
            sceneSwitch("scene7", "scene10");
        }
    });;
})

//scene8普通初中
$('#scene8BtnA').click(function () {
    swal({
        title: '【情窦初开】',
        text: "你始终相信事情积极的一面，这也深深的影响了孩子。",
        icon: "success"
    }).then(() => {
        momStar += 0;
        momStarAdd(momStar);
        endingGen("ending4", "面对’早恋‘，你并不反对，因为你相信积极的一面。");
        if (lazy == 0) {
            sceneSwitch("scene8", "scene9");
        } else {
            sceneSwitch("scene8", "scene10");
        }
    });;
})

$('#scene8BtnB').click(function () {
    swal({
        title: '【有缘无分】',
        text: "相见是有缘，分别是无分。但你相信你做出了正确的选择。",
        icon: "success"
    }).then(() => {
        momStar += 2;
        momStarAdd(momStar);
        endingGen("ending4", "面对‘早恋’，你坚决反对，因为你也是为了孩子好。");
        if (lazy == 0) {
            sceneSwitch("scene8", "scene9");
        } else {
            sceneSwitch("scene8", "scene10");
        }
    });;
})

//scene9省重点高中
$('#scene9BtnA').click(function () {
    swal({
        title: '【教子有方】',
        text: "头马教你’有力的劝说‘，你学会了吗？",
        icon: "success"
    }).then(() => {
        momStar += 3;
        momStarAdd(momStar);
        endingGen("ending5", "面对‘娱乐沉迷’，你竭尽全力，与孩子达成共识。");
        endingGen("ending6", "最终重点大学录取可能性" + momStar + "0%");
        sceneSwitch("scene9", "scene11");
    });;
})

$('#scene9BtnB').click(function () {
    swal({
        title: '【教子无方】',
        text: "还不赶紧来备稿？",
        icon: "warning"
    }).then(() => {
        momStar += 0;
        momStarAdd(momStar);
        endingGen("ending5", "面对‘娱乐沉迷’，你竭尽全力，但收效甚微。");
        endingGen("ending6", "最终重点大学录取可能性" + momStar + "0%");
        sceneSwitch("scene9", "scene11");
    });;
})

//scene10普通高中
$('#scene10BtnA').click(function () {
    swal({
        title: '【教子有方】',
        text: "头马教你’有力的劝说‘，你学会了吗？",
        icon: "success"
    }).then(() => {
        momStar += 3;
        momStarAdd(momStar);
        endingGen("ending5", "面对‘电子游戏’，你竭尽全力，与孩子达成共识。");
        endingGen("ending6", "最终重点大学录取可能性" + momStar + "0%");
        sceneSwitch("scene10", "scene11");
    });;
})

$('#scene10BtnB').click(function () {
    swal({
        title: '【教子无方】',
        text: "还不赶紧来备稿？",
        icon: "warning"
    }).then(() => {
        momStar += 0;
        momStarAdd(momStar);
        endingGen("ending5", "面对‘电子游戏’，你竭尽全力，但收效甚微。");
        endingGen("ending6", "最终重点大学录取可能性" + momStar + "0%");
        sceneSwitch("scene10", "scene11");
    });;
})