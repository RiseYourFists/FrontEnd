function createCats(catsInfo){
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = Number.parseInt(age);
        }

        sayMeow = function(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    catsInfo.forEach(catInfo => {
        let[name, age] = catInfo.split(' ');
        let cat = new Cat(name, age);
        cat.sayMeow();
    });
}

createCats(['Mellow 2', 'Tom 5']);