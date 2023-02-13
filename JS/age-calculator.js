///set today's date as toDate
document.getElementById('toDate').valueAsDate = new Date();
document.getElementById("OutputResult").style = "display: none";
document.getElementById("OutputInfo").style = "display: flex";

function CalculateResult()
{
    var count = 0;
    var fromDate = document.getElementById("birthDate").value;
    var toDate = document.getElementById("toDate").value;
    var resultYear = document.getElementById("resultYear");
    var resultMonth = document.getElementById("resultMonth");
    var resultDay = document.getElementById("resultDay");
    
    if(ProjectFormValidate())
    {
    //     var NoDayRegularMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    //     var NoDayLeapMonth = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    //     birthDate = new Date(fromDate);        
    //     currentDate = new Date(toDate);

    //     var BirthYear = birthDate.getFullYear();
    //     var CurrentYear = currentDate.getFullYear();
    //     var BirthMonth = birthDate.getMonth() + 1; 
    //     var CurrentMonth = currentDate.getMonth() + 1;
    //     var BirthDateDay = birthDate.getDate();
    //     var CurrentDay = currentDate.getDate();
        
    //     if(count == 0)
    //     {
    //         document.getElementById("OutputInfo").style = "display: none";
    //         document.getElementById("OutputResult").style = "display: flex";
    //         count++;
    //     }
        
    //     if (BirthDateDay > CurrentDay)
    //     {
    //         if (LeapYear(BirthYear))
    //         {
    //             CurrentDay = CurrentDay + NoDayLeapMonth[CurrentMonth - 1];
    //             CurrentMonth = CurrentMonth - 1;
    //         }
    //         else
    //         {
    //             CurrentDay = CurrentDay + NoDayRegularMonth[CurrentMonth - 1];
    //             CurrentMonth = CurrentMonth - 1;
    //         }
    //     }

    //     var  LeapYearCount = 0;
    //     for (var i = BirthYear; i <= CurrentYear; i++)
    //     {
    //         if (LeapYear(i))
    //         {
    //             if(BirthYear == i)
    //             {
    //                 if (BirthMonth <= 2)
    //                 {
    //                     LeapYearCount++;
    //                 }
    //             }
    //             else if (CurrentYear == i)
    //             {
    //                 if (CurrentMonth >= 3)
    //                 {
    //                     LeapYearCount++;
    //                 }
    //             }
    //             else
    //             {
    //                 LeapYearCount++;
    //             }                                        
    //         }                    
    //     }

    //     if (BirthMonth > CurrentMonth)
    //     {
    //         CurrentYear = CurrentYear - 1;
    //         CurrentMonth = CurrentMonth + 12;
    //     }

    //     var CalculatedDay = Math.trunc(CurrentDay - BirthDateDay);
    //     var CalculatedMonth = Math.trunc(CurrentMonth - BirthMonth);
    //     var CalculatedYear = Math.trunc(CurrentYear - BirthYear);

    //     if(CalculatedYear <= 1)
    //     {
    //         resultYear.innerHTML = CalculatedYear + " Year";
    //     }
    //     else
    //     {
    //         resultYear.innerHTML = CalculatedYear + " Years";
    //     }

    //     if(CalculatedMonth <= 1)
    //     {
    //         resultMonth.innerHTML = CalculatedMonth + " Month";
    //     }
    //     else
    //     {
    //         resultMonth.innerHTML = CalculatedMonth + " Months";
    //     }

    //     if(CalculatedDay <= 1)
    //     {
    //         resultDay.innerHTML = CalculatedDay + " day";
    //     }
    //     else
    //     {
    //         resultDay.innerHTML = CalculatedDay + " days";
    //     }     
    // }
    const birthDate = new Date(1996, 5, 27);
const currentDate = new Date();
const age = calculateAccurateAge(birthDate, currentDate);
console.log(`Age: ${age.years} years, ${age.months} months, ${age.days} days, Total Days: ${age.totalDays}, Leap Years: ${age.leapYears}`);

}

function calculateAccurateAge(birthDate, currentDate) {
    let ageInMilliseconds = currentDate - birthDate;
    let ageDate = new Date(ageInMilliseconds);
    let years = ageDate.getUTCFullYear() - 1970;
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;
    let leapYears = 0;
  
    for (let i = birthDate.getUTCFullYear(); i <= currentDate.getUTCFullYear(); i++) {
      if (isLeapYear(i)) {
        leapYears++;
      }
    }
    let totalDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  
    return {
      years: years,
      months: months,
      days: days,
      totalDays: totalDays,
      leapYears: leapYears
    };
  }
  
  function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }
  

function ResetAgeCalculator()
{
    document.getElementById("birthDate").value = "";;
    document.getElementById("toDate").valueAsDate = new Date();
    RemoveAllErrorMessage();
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

    var birthDate = new Date(document.getElementById("birthDate").value);
    var toDate = new Date(document.getElementById("toDate").value);

    if(IsFromDateGreterThanTodate(birthDate, toDate))
    {
        ShowErrorMessageBottomOfTheInputFiled("toDate", "Enter valid date.");
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