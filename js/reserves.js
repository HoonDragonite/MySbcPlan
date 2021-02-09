let userName = "";
let contractDate = "";
let company = "";
let payDate = "";
let changeDateArr = [];

getAllValues();
setUI();

function getAllValues(){
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