///set today's date as toDate
document.getElementById('toDate').valueAsDate = new Date();
_cmnHideElement("OutputResult");

function CalculateResult()
{
  _cmnHideElement('OutputInfo');
  _cmnShowElement('OutputResult','flex');
    var count = 0;
    var fromDate = document.getElementById("birthDate").value;
    var toDate = document.getElementById("toDate").value;
    var resultYear = document.getElementById("resultYear");
    var resultMonth = document.getElementById("resultMonth");
    var resultDay = document.getElementById("resultDay");
    
    if(ProjectFormValidate())
    {
      const birthDate = new Date(1996, 5, 27);
      const currentDate = new Date();
      const age = calculateAccurateAge(birthDate, currentDate);
    }  

    _cmnHideElement("OutputInfo");
    _cmnShowElement("OutputResult", "flex");
}

function calculateAccurateAge(birthDate, currentDate) {
    let ageInMilliseconds = currentDate - birthDate;
    let ageDate = new Date(ageInMilliseconds);
    let years = ageDate.getUTCFullYear() - 1970;
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;
    let _cmnLeapYears = 0;
  
    for (let i = birthDate.getUTCFullYear(); i <= currentDate.getUTCFullYear(); i++) {
      if (_cmnLeapYear(i)) {
        _cmnLeapYears++;
      }
    }
    let totalDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  
    return {
      years: years,
      months: months,
      days: days,
      totalDays: totalDays,
      _cmnLeapYears: _cmnLeapYears
    };
  }
  
function ResetAgeCalculator()
{
    document.getElementById("birthDate").value = "";;
    document.getElementById("toDate").valueAsDate = new Date();
    
    _cmnRemoveAllErrorMessage();

    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
}

function ProjectFormValidate()
{
    _cmnRemoveAllErrorMessage();

    if(_cmnIsInputFieldEmpty("birthDate"))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("birthDate", "Please enter valid date.");
        return false;
    }
    
    if(_cmnIsInputFieldEmpty("toDate"))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("toDate", "Please enter valid date.");
        return false;
    }

    var birthDate = new Date(document.getElementById("birthDate").value);
    var toDate = new Date(document.getElementById("toDate").value);

    if(IsFromDateGreterThanTodate(birthDate, toDate))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("toDate", "Enter valid date.");
        return false;
    }

    return true;
}

function IsFromDateGreterThanTodate(FromDate, Todate){
    var FromDate = new Date(FromDate);
    var Todate = new Date(Todate);

    if(FromDate > Todate)
    {
        return true;
    }

    return false;
}