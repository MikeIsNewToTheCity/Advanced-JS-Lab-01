/*
Name: Mike Villeneuve
Date: 9/4/2021
*/

function validateField() 
{
    "use strict";

    let textField = document.querySelector("#textField");
    let userEnteredValue = textField.value;
    let preliminaryOutput = "The entered username is ";
    let invalidOutput = "Username is a required field!";

    if(userEnteredValue.length > 0) 
    {
        console.log(`${preliminaryOutput}` + `${userEnteredValue}`);
        textField.style.borderColor = "green";
        document.getElementById("output").innerHTML = (`<br \>` + `${preliminaryOutput}` + `${userEnteredValue}`);
    } 
    else 
    {
        console.log("Username is a required field!")
        textField.style.borderColor = "red";
        document.getElementById("output").innerHTML = (`<br \>` + `${invalidOutput}`);
    }
}