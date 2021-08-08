// 처음 로딩시 post 창닫힘 상태로 만들기 
$('#content, .post-container, .post-top').addClass('close-post')
//로딩 창

let myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadDiv").style.display = "block";
}

// 시간 불러오기
function showDateTime() {
    let date = new Date();

    let clock = document.getElementById("status-clock");
    let dayList = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
    let monthNames = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
    ];
    let dayName = dayList[date.getDay()];
    let monthName = monthNames[date.getMonth()];

    let today = `${monthName} ${date.getDate()+'일'} ${dayName}`;

    let hour = date.getHours();
    let min = date.getMinutes();

    let time = hour + ":" + min;

    clock.innerText = `${today} ${time}`;
}
setInterval(showDateTime, 1);

//서브 네비바 내리고 하이라이터 해주는 js

function tophighlight(target) {
    if (target.hasClass('option')) {
        target.css({
            'background-color': 'rgba(255, 255, 255, 0.452)',
            'color': 'white'
        });
    }
    $('#nav').addClass('active');
    target.addClass('active');
    target.addClass('opened');
    target.find('.sub-menu').css('display', 'block')
}

function removehighlight() {
    $('.option').css({
        'background-color': 'transparent',
        'color': 'black'
    });
    $('.option').find('.sub-menu').css('display', 'none')
    $('.option').removeClass('active');
    $('.option').removeClass('opened');
}

function intopNav() {
    removehighlight();
    $('#nav').removeClass('active');
    $('option').removeClass('active');
}

$(document).on('click', (e) => {
    if (!$(e.target).hasClass('option')) {
        intopNav();
    }
})

$('.option').on('click', (e) => {
    if ($(e.target).hasClass('option') && $(e.target).hasClass('active')) {
        intopNav();
    } else {
        removehighlight();
        tophighlight($(e.target));
    }
})


// 창 움직일수있게 하기
dragElement(document.getElementById("mypost"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {

        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {

        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {

        document.onmouseup = null;
        document.onmousemove = null;
    }

}




// 독에서 창 열기
// 독 아이콘 클릭시 포스트 열림 
$('#dock_ibook').on('click', () => {
    if (!$('#content').hasClass('close-post')) {
        // 만약 포스트가 열려있는데 독 아이콘이 눌릴경우 창 흔들림
        $('.post-container').css({
            animation: 'postShake 600ms ease-out'
        })
        setTimeout(() => {
            $('.post-container,.post-top').css({
                animation: 'none'
            })
        }, 600)
    } else {
        $('#content,.post-container,.post-top').removeClass('close-post')
    }
})

// 포스트 닫기 버튼 
$('.button-red').on('click', () => {
    $('#content, .post-container, .post-top').addClass('close-post')
})