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
let selfPointCount = 0;
let compPointCount = 0;
let govPointCount = 0;
const totalMonthCount = 24;
const totalCompCount = 5;
const totalGovCount = 5;

getLocalStorageValues();
calculateAmt();
setComponentValues();

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

function calculateAmt(){
    let momentPayDate = moment(payDate).format('YYYY-MM-DD');
    let momentToday = moment().format('YYYY-MM-DD');
    
    for(let i=0; i<totalMonthCount; i++){
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

            if(i+1 == 1 || i+1 == 6 || i+1 == 12 || i+1 == 18 || i+1 == 24){
                compPointCount++;
                govPointCount++;
            }
            selfPointCount++;
        }

        momentPayDate = moment(momentPayDate).add(1, 'months').format('YYYY-MM-DD');
    }

    totalAmt = selfAmt + companyAmt + governmentAmt;
}

function setComponentValues(){
    $("#userTitle").text(userName + "님 안녕하세요.");
    $("#totalAmt").text(totalAmt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
    $("#selfAmt").text(selfAmt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
    $("#governmentAmt").text(governmentAmt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
    $("#companyAmt").text(companyAmt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));

    $("#pointCount").text(selfPointCount + "/" + totalMonthCount);
    $("#selfPointCount").text(selfPointCount + "/" + totalMonthCount);
    $("#compPointCount").text(compPointCount + "/" + totalCompCount);
    $("#govPointCount").text(govPointCount + "/" + totalGovCount);

    let momentPayDate = moment(payDate).format('YYYY-MM-DD');
    let momentToday = moment().format('YYYY-MM-DD');
    let card = "";

    for(let i=0; i<totalMonthCount; i++){
        if(moment(momentPayDate).isSameOrBefore(momentToday)){
            card = "<li class=\"summary-card\"> " + 
                        "<img src=\"./image/stamp-solid.svg\" class=\"summary-card_stamp\">" +
                        "<span class=\"summary-card_date small-font\">" + momentPayDate + "</span>" +
                    "</li>";
            $("#summaryCardList").append(card);
        }
        else{
            card = "<li class=\"summary-card\"> " + 
                        "<img src=\"./image/stamp-gray.svg\" class=\"summary-card_stamp\">" +
                        "<span class=\"summary-card_date small-font\">" + momentPayDate + "</span>" +
                    "</li>";
            $("#summaryCardList").append(card);
        }
        
        console.log(card);
        momentPayDate = moment(momentPayDate).add(1, 'months').format('YYYY-MM-DD');
    }
}
