function cityTaxes(name, population, treasury){
    let city={
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function(){
            this.treasury += population * this.taxRate;
        },

        applyGrowth: function(percentage){
            percentage = 1 + (percentage / 100);
            this.population *= percentage;
        },

        applyRecession: function(percentage){
            percentage = 1 - (percentage / 100);
            this.treasury *= percentage;
        }
    }

    return city;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);