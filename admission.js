let isOfAge = prompt("How old are you?")

if (isOfAge == 16 ) {
    document.getElementById("admission").innerText = " You can proceed with the registration"
}
else {
    document.getElementById("admission").innerText = " Sorry, you have to be exactly 16"
}