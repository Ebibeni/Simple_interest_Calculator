function compute()
{
    //Create references to the input(principal) elements we wish to validate
    var principal = document.getElementById("principal").value;
    
    
        //Check if Principal field is empty
        if(principal <= "0"){
              alert("Enter a positive number");
              principal.focus();
              return false;
        } else {
            // If the Principal Field is not empty then run the else condition
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //Display the values of Principal, rate, interest and year to the repective HTML tag id's.
    
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
         }
}

// Create an update function to display the Range Value for the range sider.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}