///set today's date as toDate
document.getElementById('toDate').valueAsDate = new Date();
document.getElementById("OutputResult").style = "display: none";
document.getElementById("OutputInfo").style = "display: flex";
function CalculateResult()
{
    var count = 0,totalLeapYear = 0;
    var fromDate = document.getElementById("birthDate").value;
    var toDate = document.getElementById("toDate").value;
    var resultYear = document.getElementById("resultYear");
    var resultMonth = document.getElementById("resultMonth");
    var resultDay = document.getElementById("resultDay");
    var year,month,day,totalDay;

    if(ProjectFormValidate())
    {
        if(count == 0)
        {
            document.getElementById("OutputInfo").style = "display: none";
            document.getElementById("OutputResult").style = "display: flex";
            count++;
        }
        birthDate = new Date(fromDate);
        scondDate = new Date(toDate);
        
        for(var i = birthDate.getFullYear(); i <= scondDate.getFullYear(); i++)
        {
            if(LeapYear(i))
            {
                totalLeapYear++;
            }
        }
        debugger
        totalDay = Math.ceil(Math.abs(birthDate - scondDate)/(1000*60*60*24));
        year = (totalDay - totalLeapYear)/365;
        month = (totalDay - (year * 365 + totalLeapYear))/30;
        day = (totalDay - ((year * 365) + totalLeapYear + (month * 30)));
        resultYear.innerHTML = year;
        resultMonth.innerHTML = month;
        resultDay.innerHTML = day;
    }
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
function ProjectFormValidate()
{
    RemoveAllErrorMessage();
    if(IsInputFieldEmpty("birthDate"))
    {
        ShowErrorMessageBottomOfTheInputFiled("birthDate", "Please enter valid date.");
        return false;
    }
    
    if(IsInputFieldEmpty("toDate"))
    {
        ShowErrorMessageBottomOfTheInputFiled("toDate", "Please enter valid date.");
        return false;
    }

    if(IsBirthdateGreterThenTodate())
    {
        ShowErrorMessageBottomOfTheInputFiled("toDate", "Enter valid todate.");
        return false;
    }
    return true;
}

function LeapYear(BirthYear)
{
    if (BirthYear % 4 == 0)
    {
        if (BirthYear % 100 != 0)
        {
            return true;
        }
        else
        {
            if (BirthYear % 400 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
    else
    {
        return false;
    }
}