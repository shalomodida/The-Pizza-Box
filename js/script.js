function getSizeValue() {
    let selectedValue = document.getElementById("size").value;

    if(selectedValue === 'large'){
        return {price:2000, size: 'large'}
    } else if(selectedValue === 'medium'){
        return {price:1500, size: 'medium'}
    } else if (selectedValue === 'small') {
        return {price:1000, size: 'small'}
    } 
}

function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}
function getPieces() {
    var selectedPieces = document.getElementById("pieces").value;
    return parseInt(selectedPieces);
}
function getTotalAmount() {
    let pizzaSize = getSizeValue();
    var totalAmount = (pizzaSize.price + getCrust() + getToppings()) * getPieces();
    alert("We have received your order of " + getPieces() + ' ' + pizzaSize.size +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
    prompt("Please enter your location")
    alert("Delivery fee is 200/=")
    alert("Your order will be delivered shortly")
    alert("Thank you! Continue shoppping with us and have a great time")
}




