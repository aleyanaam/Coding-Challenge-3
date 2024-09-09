//Task 1
var sales = [3000, 4500, 8900, 5000]; //Declares the array

function calculateAverageSales(sales){
    
    return averageSales;
}
    var totalSales = sales.reduce((sum, value) => sum + value,0); //Finds the sum by summing the total of all values in the array
    var averageSales = totalSales/4; //Finds the average by dividing by the number of values in the array

console.log("Average sales is:", calculateAverageSales(sales)); //Outputs the average sales from the above function

//Task 2
function determinePerformanceRating(averageSales){ //Function uses the sales average to determine the performance rating
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

console.log("Sales Performance Rating:", determinePerformanceRating(averageSales)); // Outputs the performance rating

//Task 3
function findTopAndBottomPerformers(salesData){

    return (findTopAndBottomPerformers(topPerformer,bottomPerformer));
};
    var topPerformer; //Initialize the variable for top performer
    var bottomPerformer; // Initializes the varibale for bottom performer
salesData = [
    { name: 'Luke', sales: [12000, 15000, 13000] },
    { name: 'Matthew', sales: [7000, 6000, 7500] },
    { name: 'John', sales: [3000, 4000, 3500] },
    { name: 'Andrea', sales: [9000, 8500, 9200] }
];
    // Finds the indivdual sum of sales for each person
   const salesTotals = salesData.reduce((index, person) => {
        const totalSales = person.sales.reduce((sum, sale) => sum + sale, 0);
        index[person.name] = totalSales;
        return index;
    },{});
    


topSales = Math.max(...salesData); //Finds the top performer
bottomSales = Math.min(...salesData); // Finds the bottom performer

console.log({ topPerformer, bottomPerformer });