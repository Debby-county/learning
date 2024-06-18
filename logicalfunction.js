const prompt = require ("prompt-sync")();
function checkRecord(){
    const record = prompt("Enter the number")
    if ( record == 1){
        let age =prompt ("please Enter your age: ");
        let balance = prompt (" How much do you hsve in your  account :")
        let criminal_record = prompt("ARE YOU A CRIMINAL")
        if (age  >= 18 && balance >= 2000 || criminal_record == "NO"){
            console.log(" You can get 20,000 naira loan")
        } 
        else{
            console.log(" SORRY lOAN NOT APPROVED ")
        }
    } 
    else {
        console.log("WE ARE SORRY TO SEE YOU GO")
    }
}
checkRecord()