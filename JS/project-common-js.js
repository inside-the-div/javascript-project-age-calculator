function RemoveAllErrorMessage()
{
    var allErrorBorder = document.getElementsByClassName('error-border');
	var allErrorMessage = document.getElementsByClassName('error-message');
	var i;
    for(i = (allErrorBorder.length) - 1; i>=0; i--)
    {
        allErrorBorder[i].classList.remove("error-border");
    }
    for(i = (allErrorMessage.length) - 1; i>=0; i--)
    {
        allErrorMessage[i].remove();
    }	  
}

function ShowErrorMessageBottomOfTheInputFiled(fieldID,errorMessage)
{
    var inputField = document.getElementById(fieldID);   
    inputField.classList.add("error-border");
    inputField.focus();
    
    var errorMessageElement = document.createElement("p");
    errorMessageElement.innerHTML = errorMessage;
    errorMessageElement.classList.add("error-message");
    inputField.parentNode.insertBefore(errorMessageElement, inputField.nextSibling);
}

function IsInputFieldEmpty(feildId)
{
    var inputField = document.getElementById(feildId);
    if(inputField.value == "")
    {
        return true;
    }
    return false;
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
        }
    }
    return false;    
}