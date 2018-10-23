
function calculateTip()
{
    var BillAmount = document.getElementById("BillAmount").value;
    var ServiceQuality = document.getElementById("ServiceQuality").value;
    var NumPeople = document.getElementById("TotalPeople").value;
    
    if(BillAmount === "" || ServiceQuality === 0)
        {
            window.alert("Please Enter the Values");
            return;
        }
    if(NumPeople === "" || NumPeople <=1)
        {
           NumPeople = 1;
            document.getElementById("each").style.display = "none";
        }
    else
        {
            document.getElementById("each").style.display = "block";
        }
    
    var Total = (BillAmount * ServiceQuality) / NumPeople;
    Total = Math.round(Total *100) / 100;
    Total = Total.toFixed(2);
    window.alert(Total);
    
    document.getElementById("TotalTip").style.display = "block";
    document.getElementById("Tip").innerHTML = Total;
    
    
} 



document.getElementById("TotalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("Calculate").onclick = function() { calculateTip();}