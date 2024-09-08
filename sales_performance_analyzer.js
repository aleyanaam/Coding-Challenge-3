//Task 1
var sales = [3000, 4500, 8900, 5000]; //Declares the array

function calculateAverageSales(sales){
    return averageSales;
}
var totalSales = sales.reduce((sum, value) => sum + value,0); //Finds the sum by summing the total of all values in the array
var averageSales = totalSales/4; //Finds the average by dividing by the number of values in the array

console.log("Average sales is:", calculateAverageSales(sales)); //Outputs the average sales from the above function

//Task 2
function determinePerformanceRating(averageSales){
    if (averageSales > 10000){
        return ("Excellent");
    }else if (averageSales > 7000 && averageSales <10000){
        return ("Good");
    }else if (averageSales > 4000 && averageSales < 7000 ){
        return ("Satisfactory");
    }else if (averageSales < 4000){
        return ("Needs improvement");
    }
}
console.log("Sales Performane Rating:", determinePerformanceRating(averageSales));