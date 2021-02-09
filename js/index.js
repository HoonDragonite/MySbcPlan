localStorage = window.localStorage;

loadEvents();
getValues();
getHistory();
setDatePicker();

function setDatePicker(){
    $("#contractDate").datepicker({dateformat: "yyyy-mm-dd"});
    $("#payDate").datepicker({});
    $("#changeDate").datepicker({});
}

function loadEvents(){
    $("#saveBtn").click(function(){
        setValues();
    });

    $("#resultBtn").click(function(){
        seeResult();
    });

    $("#historyAddBtn").click(function(){
        setHistory();
    });
}

function setValues(){
    let userName = document.getElementById('userName').value;
    let contractDate = document.getElementById('contractDate').value;
    let company = document.getElementById('company').value;
    let payDate = document.getElementById('payDate').value;

    localStorage.setItem("userName", userName);
    localStorage.setItem("contractDate", contractDate);
    localStorage.setItem("company", company);
    localStorage.setItem("payDate", payDate);
}

function getValues(){
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
    let savedChangeDate = localStorage.getItem("changeDate");
    if(savedChangeDate == null){
        console.log("저장된 변경이력이 없습니다.");
        savedChangeDate = "";
    }
    
    let changeDateArr = savedChangeDate.split(",").filter(n => n);
    console.log(changeDateArr);

    for(i in changeDateArr){
        console.log(i + ", " + changeDateArr[i]);
        $("#historyList").append("<li class=\"history-item\"> <div>" + changeDateArr[i] + "</div></li>");
    }
}

function seeResult(){
    location.href ="./result.html";
}

