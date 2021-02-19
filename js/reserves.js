/* LocalStorage Values*/
let userName = "";
let contractDate = "";
let company = "";
let payDate = ""; // "yyyy-MM-dd"
let payDay = ""; // 5, 10, 15 

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

/* 메소드 실행 */
$(document).ready(function(){
    getLocalStorageValues();
    calculateAmt();
    setComponentValues();
});

function getLocalStorageValues(){
    userName = localStorage.getItem("userName");
    contractDate = localStorage.getItem("contractDate");
    company = localStorage.getItem("company");
    payDate = localStorage.getItem("payDate");
    payDay = localStorage.getItem("payDay");
    
    console.log(userName);
    console.log(contractDate);
    console.log(company);
    console.log(payDate);
    console.log(payDay);
}

function calculateAmt(){
    let momentPayDate = moment(payDate).format('YYYY-MM-DD'); // 최초납부일부터의 납부일들
    let momentToday = moment().format('YYYY-MM-DD');
    let momentCurrentPayDate = moment().date(payDay).format('YYYY-MM-DD'); // 당월납부일
    let i = 1;

    while(moment(momentPayDate).isSameOrBefore(momentToday)){
        if(moment(momentPayDate).month() == moment(momentToday).month()){
            if(moment(momentToday).isBefore(momentCurrentPayDate)){
                break;
            }
        }
            
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

        i++;
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

    let card = "";

    for(let i=0; i<selfPointCount; i++){
        card = "<li class=\"summary-card\"> " + 
                    "<img src=\"./image/stamp-solid.svg\" class=\"summary-card_stamp\">"
                "</li>";
        $("#summaryCardList").append(card);
    }
    for(let i=0; i<totalMonthCount - selfPointCount; i++){
        card = "<li class=\"summary-card\"> " + 
                    "<img src=\"./image/stamp-gray.svg\" class=\"summary-card_stamp\">"
                "</li>";
        $("#summaryCardList").append(card);
    }

}
