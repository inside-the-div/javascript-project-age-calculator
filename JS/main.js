

function CalculateResult(){
    
    var fromDate = document.getElementById("birthDate");
    var toDate = document.getElementById("toDate");
    var isValid = true;
    if(isValid)
    {  var fromDateValue = fromDate.value;      
        if(fromDateValue == "")
        {
            alert("Select Your Birthday.");
            fromDate.focus();
            fromDate.style.border = "2px solid red";
            isValid = false;
        }
    }
    
    if(isValid)
    {
        var toDateValue = toDate.value;
        if(toDateValue == "")
        {
            alert("Select The To Date.");
            toDate.focus();
            toDate.style.border = "2px solid red";
            isValid = false;
        }
    }
    if(isValid)
    {
        // calculation method
    }
}

function ResetFunction(){
    var fromDate = document.getElementById("birthDate");
    var toDate = document.getElementById("toDate");
    fromDate.value = "";
    toDate.value = "";
    toDate.style.border = "2px solid white";
    fromDate.style.border = "2px solid white";
}