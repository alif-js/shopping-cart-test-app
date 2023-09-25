function updatePhoneNumber(isIncrease){
    const previousPhoneTotalElement = document.getElementById('phone-total');
    const previousPhoneTotalStr = previousPhoneTotalElement.value;
    const previousPhoneTotal = parseInt(previousPhoneTotalStr);

    let newPhoneTotal;

    if(isIncrease){
        newPhoneTotal = previousPhoneTotal + 1;
    }
    else{
        newPhoneTotal = previousPhoneTotal - 1;
    }

    previousPhoneTotalElement.value = newPhoneTotal;

    return newPhoneTotal;
}

function updatePhoneTotalPrice(newPhoneTotal){
    const newPhoneTotalPrice = newPhoneTotal*1219;
    const previousPhoneTotalPriceElement = document.getElementById('total-phone-price');
    previousPhoneTotalPriceElement.innerText = newPhoneTotalPrice;
    return newPhoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneTotal = updatePhoneNumber(true);
    const phoneTotalPrice = updatePhoneTotalPrice(newPhoneTotal);

    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = phoneTotalPrice;
    
    const taxAmountStr = (phoneTotalPrice*0.12).toFixed(2);
    const taxAmount = parseFloat(taxAmountStr);
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxAmount;

    const finalTotalElement = document.getElementById('total');

    const newFinalTotal = phoneTotalPrice + taxAmount;
    finalTotalElement.innerText = newFinalTotal;
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneTotal = updatePhoneNumber(false);
    const phoneTotalPrice = updatePhoneTotalPrice(newPhoneTotal);

    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = phoneTotalPrice;
    
    const taxAmountStr = (phoneTotalPrice*0.12).toFixed(2);
    const taxAmount = parseFloat(taxAmountStr);
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxAmount;

    const finalTotalElement = document.getElementById('total');

    const newFinalTotal = phoneTotalPrice + taxAmount;
    finalTotalElement.innerText = newFinalTotal;
})