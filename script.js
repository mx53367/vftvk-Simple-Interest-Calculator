function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0 || principal == ""){
        document.getElementById("principal").focus();
        alert("Enter a positive number");
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        //alert(interest);
        document.getElementById("result1").innerHTML = "If you deposit \<u\>"+principal+"\</u\>,\<br\>at an interest rate of \<u\>"+rate+"%\</u\>.\<br\>You will receive an amount of \<u\>"+interest+"\</u\>,\<br\>in the year \<u\>"+year+"\</u\>\<br\>";
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
    return true;
}
