$(document).ready(function(){
    console.log("document ready");

    getLocalStorageValues();
    
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

    $("#clearBtn").click(function(){
        store.clearAll();
        window.location.reload();
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
    let payDay = $("#payDay").val();

    store.set("userName", userName);
    store.set("contractDate", contractDate);
    store.set("company", company);
    store.set("payDate", payDate);
    store.set("payDay", payDay);
}

function getLocalStorageValues(){
    $("#userName").val(store.get("userName"));
    $("#contractDate").val(store.get("contractDate"));
    $("#company").val(store.get("company"));
    $("#payDate").val(store.get("payDate"));
    $("#payDay").val(store.get("payDay"));
}

function moveToReserves(){
    location.href ="./reserves.html";
}