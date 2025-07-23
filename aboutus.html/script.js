//    feedback form js
       
function validate()
{
    const naam = document.getElementById("naam");
    const email = document.getElementById("email");
    const text = document.getElementById("text");


    if (naam.value.trim() == "")
        {
            alert ("Please enter your name")
            return false;
        }
        else if (email.value.trim() == "")
        {
            alert ("Please enter your Email")
            return false;
        }
        else if (text.value.trim() == " ")
        {
            alert ("Please give your feedback")
            return false;
        }
        else
        {
            alert ("Your feedback was submitted")
            return true;
        }

        
}