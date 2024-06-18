const prompt = require ("prompt-sync")();
const age = parseFloat(prompt("Enter your AGE: "));
if (age <= 12){
    console.log ("you are a children")
}
else if (age <= 17) {
    console.log ("you are a Teen")
}


else if (age <= 50)
{
    console.log ("you are a youth")
}

else if (age <= 70)
{ 
    console.log ("you are an elderly")
}

else { 
    console.log ("you are an old citizen")
}

