///set today's date as toDate
document.getElementById('toDate').valueAsDate = new Date();

function CalculateResult()
{
    ProjectFormValidate();
    var fromDate = document.getElementById("birthDate");
    var toDate = document.getElementById("toDate"); 
}

function ResetAgeCalculator(){
    document.getElementById("birthDate").value = "";;
    document.getElementById("toDate").valueAsDate = new Date();
    RemoveAllErrorMessage();
}

function IsBirthdateGreterThenTodate()
{
    var birthDate = new Date(document.getElementById("birthDate").value);
    var toDate = new Date(document.getElementById("toDate").value);
    if(birthDate>toDate)
    {
        return true;
    }
    return false;
}
