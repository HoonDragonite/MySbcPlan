let userName = "";
let contractDate = "";
let company = "";
let payDate = "";
let changeDateArr = [];
let today = "";
let selfAmt = 0;
let companyAmt = 0;
let governmentAmt = 0;

getLocalStorageValues();
setUI();
calcYMD();

function getLocalStorageValues(){
    userName = localStorage.getItem("userName");
    contractDate = localStorage.getItem("contractDate");
    company = localStorage.getItem("company");
    payDate = localStorage.getItem("payDate");

    let savedChangeDate = localStorage.getItem("changeDate");
    if(savedChangeDate == null){
        console.log("저장된 변경이력이 없습니다.");
        savedChangeDate = "";
    }
    
    changeDateArr = savedChangeDate.split(",").filter(n => n);

    for(i in changeDateArr){
        console.log(i + ", " + changeDateArr[i]);
    }
}

function setUI(){
    $("#userTitle").text(userName + "님 안녕하세요.");
}

function calcYMD(){
    let replacedDate = payDate.replace(/-/g, '');
    alert(replacedDate + ' to ' + getToday());
}

function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + month + day;
}

function calcSelfAmt(){
    
}

function calcCompanyAmt(){

}

function calcGovernmentAmt(){
    
}

/*
계산할 것

1. 본인납부금 24회 12.5
2. 취업지원금 5회  80 120 120 140 140
3. 기업기여금 5회  50, 60, 60, 60, 70


*/