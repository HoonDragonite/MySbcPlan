/* LocalStorage 불러오기 */
localStorage = window.localStorage;

/* 메소드 실행 */
loadEvents();
getLocalStorageValues();
getHistory();
setDatePicker();

$(window).load(function () {
    $('body').sakura();
});

function setDatePicker(){
    $("#contractDate").datepicker({
        dateformat: "yyyy-mm-dd"
    });
    $("#payDate").datepicker({
        dateformat: "yyyy-mm-dd"
    });
    $("#changeDate").datepicker({
        dateformat: "yyyy-mm-dd"
    });
}

function loadEvents(){
    $(".input_date").focusout(function(){
        $(this).val(moment(this.value).format('YYYY-MM-DD'));
    });
    
    $("#resultBtn").click(function(){
        setLocalStorageValues();
        moveToReserves();
    });

    $("#historyAddBtn").click(function(){
        setHistory();
        getHistory();
        $("#changeDate").val('');
    });
}

function setLocalStorageValues(){
    let userName = document.getElementById('userName').value;
    let contractDate = document.getElementById('contractDate').value;
    let company = document.getElementById('company').value;
    let payDate = document.getElementById('payDate').value;

    localStorage.setItem("userName", userName);
    localStorage.setItem("contractDate", contractDate);
    localStorage.setItem("company", company);
    localStorage.setItem("payDate", payDate);
}

function getLocalStorageValues(){
    $("#userName").val(localStorage.getItem("userName"));
    $("#contractDate").val(localStorage.getItem("contractDate"));
    $("#company").val(localStorage.getItem("company"));
    $("#payDate").val(localStorage.getItem("payDate"));
}

function setHistory(){
    let newChangeDate = $("#changeDate").val().trim();
    let changeDate = localStorage.getItem("changeDate");

    if(changeDate == null){
        console.log("저장된 변경이력이 없습니다.");
        changeDate = "";
    }

    changeDate = changeDate + newChangeDate + ",";

    localStorage.setItem("changeDate", changeDate);
}

function getHistory(){
    $("#historyList").children().remove();

    let savedChangeDate = localStorage.getItem("changeDate");
    if(savedChangeDate == null){
        console.log("저장된 변경이력이 없습니다.");
        savedChangeDate = "";
    }
    
    let changeDateArr = savedChangeDate.split(",").filter(n => n);

    for(i in changeDateArr){
        $("#historyList").append("<li class=\"history-item\"> <div>" + changeDateArr[i] + "</div></li>");
    }
}

function moveToReserves(){
    /*
    if($("#userName").val() == ""){
        alert("이름을 입력하세요.");
    }
    */
    location.href ="./reserves.html";
}