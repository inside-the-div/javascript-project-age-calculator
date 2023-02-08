

function CalculateResult(){
    
    var fromDate = document.getElementById("birthDate");
    var toDate = document.getElementById("toDate");    
    var fromDateValue = fromDate.value;
    var toDateValue = toDate.value;

    if(fromDateValue == "")
    {
        alert("Select Your Birthday.");
    }    
    else if(toDateValue == "")
    {
        alert("Select The To Date.");
    }

}

function ResetFunction(){
    var fromDate = document.getElementById("birthDate");
    var toDate = document.getElementById("toDate");
    fromDate.value = "";
    toDate.value = "";
}