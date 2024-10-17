function getSum(acccumlator, item){
    return acccumlator += parseFloat(item.value)
}


function totup(myForm){
    let total = 0;
    entries = Array.from (myForm.elements.entry);
    total = entries.reduce(getSum, 0)
    total = total * (1 - (myForm.elements.d1.value/100))

    document.getElementById("totalled").innerHTML = total.toFixed(2);
}