function createCatalogue(input){
    class Catalogue{
        constructor(productCollection){
            this.products = [];
            productCollection.forEach(productInfo => {
                let[name, price] = productInfo.split(' : ');
                let product = {productName: name, productPrice: price};
                this.products.push(product);
            });
            
            this.products.sort((a,b)=>{
                return a.productName.localeCompare(b.productName)
            })
            
            this.printCollection();
        }
        
        printCollection = function(){
            let currentSection = '';
            this.products.forEach(product => {
                let productName = product.productName.toUpperCase();
                
                if(productName[0] !== currentSection){
                    currentSection = productName.charAt(0)
                    console.log(currentSection);
                }
                console.log(`   ${product.productName}: ${product.productPrice}`)
            });
        }
    }
    let catalogue = new Catalogue(input);
}

createCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])