function updateCaseNumber(isIncrease){
    const previousCaseTotalElement = document.getElementById('case-total');
    const previousCaseTotalStr = previousCaseTotalElement.value;
    const previousCaseTotal = parseInt(previousCaseTotalStr);

    let newCaseTotal;

    if(isIncrease){
        newCaseTotal = previousCaseTotal + 1;
    }
    else{
        newCaseTotal = previousCaseTotal - 1;
    }

    previousCaseTotalElement.value = newCaseTotal;

    return newCaseTotal;
}

function updateCaseTotalPrice(newCaseTotal){
    const newCaseTotalPrice = newCaseTotal*59;
    const previousCaseTotalPriceElement = document.getElementById('total-case-price');
    previousCaseTotalPriceElement.innerText = newCaseTotalPrice;
    return newCaseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseTotal = updateCaseNumber(true);
    const caseTotalPrice = updateCaseTotalPrice(newCaseTotal);

    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = caseTotalPrice;
    
    const taxAmountStr = (caseTotalPrice*0.12).toFixed(2);
    const taxAmount = parseFloat(taxAmountStr);
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxAmount;

    const finalTotalElement = document.getElementById('total');

    const newFinalTotal = caseTotalPrice + taxAmount;
    finalTotalElement.innerText = newFinalTotal;
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseTotal = updateCaseNumber(false);
    const caseTotalPrice = updateCaseTotalPrice(newCaseTotal);

    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = caseTotalPrice;

    const taxAmountStr = (caseTotalPrice*0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountStr);
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxAmount;

    const finalTotalElement = document.getElementById('total');

    const newFinalTotal = caseTotalPrice + taxAmount;
    finalTotalElement.innerText = newFinalTotal;
})