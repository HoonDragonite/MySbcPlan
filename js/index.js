/* LocalStorage 불러오기 */
localStorage = window.localStorage;

$(document).ready(function(){
    console.log("document ready");
    getLocalStorageValues();
    getHistory();
    
    $(".input_date").focusout(function(){
        if(moment(this.value).isValid() == true){
            $(this).val(moment(this.value).format('YYYY-MM-DD'));
        }
    });
    
    $("#resultBtn").click(function(){
        if(checkValidation() == false){
            alert("날짜의 형식이 잘 못 되었거나 입력되지 않았습니다.");
            return;
        }
        setLocalStorageValues();
        moveToReserves();
    });

    $("#historyAddBtn").click(function(){
        setHistory();
        getHistory();
        $("#changeDate").val('');
    });

    $('#payDay').on({
        'focus' : function () {
            $(this).parent().addClass('focus');
        },
        'blur' : function () {
            $(this).parent().removeClass('focus');
        }
    });
    

});

$(window).load(function () {
    console.log("windows load");
    $('body').sakura();
});

function checkValidation(){
    let result = true;

    if(moment($("#contractDate").val()).isValid() == false){
        result = false;
    }

    if(moment($("#payDate").val()).isValid() == false){
        result = false;
    }

    return result;
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