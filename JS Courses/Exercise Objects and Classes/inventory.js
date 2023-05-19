function heroRegister(heroesData){
    class Hero{
        constructor(name, level, items){
            this.name = name;
            this.level = Number(level);
            this.items = Array(items);
        }

        toString(){
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items.join(', ')}`);
        }
    }

    let heroes = [];
    heroesData.forEach(heroInfo => {
        let[name, level, itemsData] = heroInfo.split(' / ');
        let items = itemsData.split(',');
        let hero = new Hero(name, level, items);
        heroes.push(hero);
    });

    heroes.sort((a,b)=> {return a.level - b.level});

    heroes.forEach(hero => {
        hero.toString();
    });
}

heroRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);