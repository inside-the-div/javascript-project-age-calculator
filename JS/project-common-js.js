function ProjectFormValidate()
{
    RemoveAllErrorMessage();
    if(IsInputFieldEmpty("birthDate"))
    {
        ShowErrorMessageBottomOfTheInputFiled("birthDate", "Please enter valid date.");
    }
    if(IsInputFieldEmpty("toDate"))
    {
        ShowErrorMessageBottomOfTheInputFiled("toDate", "Please enter valid date.");
    }
    if(IsBirthdateGreterThenTodate())
    {
        debugger
        ShowErrorMessageBottomOfTheInputFiled("toDate", "Enter valid todate.");
    }
}

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


function IsInputFieldEmpty(feildId)
{
    var inputField = document.getElementById(feildId);
    if(inputField.value == "")
    {
        return true;
    }
    return false;
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