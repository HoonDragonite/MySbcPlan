/* LocalStorage Values*/
let userName = "";
let contractDate = "";
let company = "";
let payDate = ""; // "yyyy-MM-dd"
let savedChangeDate = "";
let changeDateArr = [];

/* Amt */
let selfAmt = 0;
let companyAmt = 0;
let governmentAmt = 0;
let totalAmt = 0;

/* pointCounting */
let pointCount = 0;
const monthCount = 24;


getLocalStorageValues();
setComponentValues();
calculateAmt();


function getLocalStorageValues(){
    userName = localStorage.getItem("userName");
    contractDate = localStorage.getItem("contractDate");
    company = localStorage.getItem("company");
    payDate = localStorage.getItem("payDate");
    savedChangeDate = localStorage.getItem("changeDate");

    if(savedChangeDate == null){
        console.log("저장된 변경이력이 없습니다.");
        savedChangeDate = "";
    }
    else{
        changeDateArr = savedChangeDate.split(",").filter(n => n); // ,구분자로 나누어 날짜를 배열에 넣음
        for(i in changeDateArr){
            console.log(i + ", " + changeDateArr[i]);
        }
    }
}

function setComponentValues(){
    $("#userTitle").text(userName + "님 안녕하세요.");
}

function calculateAmt(){
    let momentPayDate = moment(payDate).format('YYYY-MM-DD');
    let momentToday = moment().format('YYYY-MM-DD');
    
    for(let i=0; i<monthCount; i++){
        if(moment(momentPayDate).isSameOrBefore(momentToday)){
            if(i+1 == 1){
                governmentAmt += 800000;
                companyAmt += 500000;
            } else if(i+1 == 6){
                governmentAmt += 1200000;
                companyAmt += 600000;
            } else if(i+1 == 12){
                governmentAmt += 1200000;
                companyAmt += 600000;
            } else if(i+1 == 18){
                governmentAmt += 1400000;
                companyAmt += 600000;
            } else if(i+1 == 24){
                governmentAmt += 1400000;
                companyAmt += 700000;
            }
            selfAmt += 125000;

            pointCount++;
            momentPayDate = moment(momentPayDate).add(1, 'months').format('YYYY-MM-DD');
        }
    }

    totalAmt = selfAmt + companyAmt + governmentAmt;
}