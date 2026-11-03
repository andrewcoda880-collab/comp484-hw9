// PART 1
//function gets todays date
function getTodaysDate() {
    const date = new Date();

    let day = date.getDate();
    let month = 1 + date.getMonth();
    let year = date.getFullYear();

    //adds a leading zero so month and day are always two digits
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    return month + "/" + day + "/" + year;
}

//sends the function to the html
document.getElementById("dateOutput").textContent = "Today is " + getTodaysDate();

// PART 2
//takes a value and converts it to an integer if possible. Displays original value, converted value, if the value is a valid number, and if the converted value is an integer. Uses a conditional to determine if the number is valid or not. 
function convertToNum(input) {
    let convertedNum = Number(input);
    if (isNaN(convertedNum)) {
        return "Original Value: " + input + "<br>Converted Value: " + convertedNum + "<br><b>Not</b> a Valid Number" + "<br>Is an integer?: " + Number.isInteger(convertedNum);
    }
    else {
        return "Original Value: " + input + "<br>Converted Value: " + convertedNum + "<br>Is a Valid Number" + "<br>is integer?: " + Number.isInteger(convertedNum);
    }


}

//multiple instances of the number conversion function
document.getElementById("numberConversion42").innerHTML = convertToNum("42");
document.getElementById("numberConversion56").innerHTML = convertToNum("56");
document.getElementById("numberConversionHello").innerHTML = convertToNum("hello");
document.getElementById("numberConversion19.75").innerHTML = convertToNum("19.75");

//PART 3
//function takes price, tax %, and shipping cost, then calculates subTotal, tax amount, and total. Uses a conditional to determine if the inputs are positive numbers. 
function priceCalculator(price, tax, shippingCost) {
    this.price = price;
    this.tax = tax;
    this.shippingCost = shippingCost;

    let subTotal = this.price;
    let taxAmount = subTotal * this.tax;
    let total = subTotal + this.tax + this.shippingCost;

    if (this.price >= 0 && this.tax >= 0 && this.shippingCost >= 0) {return "Price of item: $" + this.price.toFixed(2) + "<br>Tax Rate: " + (100 * this.tax.toFixed(2)) + "%<br>ShippingCost: $" + this.shippingCost.toFixed(2) + "<br>Subtotal: $" + subTotal.toFixed(2) + "<br>Taxes: $" + taxAmount.toFixed(2) + "<br>Total: $" + total.toFixed(2);}
    
    else {
        return "Price of item: $" + this.price.toFixed(2) + "<br>Tax Rate: " + (100 *this.tax.toFixed(2)) + "%<br>ShippingCost: $" + this.shippingCost.toFixed(2) + "<br>Subtotal: $" + subTotal.toFixed(2) + "<br>Taxes: $" + taxAmount.toFixed(2) + "<br>Total: " + "Error, cannot have negative value";
    }

}

// Two instances of the function, one with a negative input. 
document.getElementById("PriceCalculator").innerHTML = priceCalculator(19.99, 0.09, 4.99);
document.getElementById("PriceCalculatorError").innerHTML = priceCalculator(5.99, -.09, 1.99);