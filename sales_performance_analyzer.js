//Task 1
var sales = [3000, 4500, 8900, 5000]; //Declares the array

function calculateAverageSales(sales){
    var totalSales = sales.reduce((sum, value) => sum + value,0); //Finds the sum by summing the total of all values in the array
    var averageSales = totalSales/4; //Finds the average by dividing by the number of values in the array

    return averageSales;
}

console.log(calculateAverageSales(sales)); //Outputs the average sales from the above function

