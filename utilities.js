function findDiscount(inputName , priceName)
{

    const discountInput = document.getElementById(inputName);
    const discountString = discountInput.value;
    discountInput.value = '';

    if(discountString != 'DOM'){
        alert('Enter a valid discount code');
        return;
    }
    const currentPrice = document.getElementById(priceName);
    const currentPriceString = currentPrice.innerText;
    const currentPriceValue = parseFloat(currentPriceString);
    const discountPrice = currentPriceValue - currentPriceValue * (30/100);
    currentPrice.innerText = discountPrice;
    



}