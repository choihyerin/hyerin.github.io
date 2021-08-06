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


//로딩 창

let myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadDiv").style.display = "block";
}