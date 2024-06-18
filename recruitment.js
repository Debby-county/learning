const prompt = require ("prompt-sync")();
let consent = prompt ("To continue with this application press 1 for YES or press 2 for NO:  ")
if (consent == 1) {
    console.log("You've agreed to proceed with the application. Please note , all data supplied are confidential: ")
    let age =prompt ("Please,Enter your age: ");
    let Qualification =prompt ("Are you a SSCE holder,enter 1 for yes and 2 for no: ")
    let Citizenship =prompt ("Are you a citizen of Nigeria,enter 1 for yes and 2 for no: ")
    let height =prompt ("Enter your height: ")
    if (age  >=26 && Qualification  == "1" && Citizenship  == "1" && height >=1.68){
        console.log(" Congraluation you are recruited ") 
    } 
}
else {
    console.log("SORRY YOU CANNOT BE RECRUITED,TRY AGAIN LATER")
}