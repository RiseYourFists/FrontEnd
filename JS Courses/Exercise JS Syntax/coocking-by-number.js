function cook(initialValue, operation, operation2, operation3, operation4, operation5){
    let commands = [operation, operation2, operation3, operation4, operation5];
    let num = Number.parseFloat(initialValue)
    commands.forEach(command => {
       switch(command) {
        case 'chop':
            num /= 2;
            break;
        case 'dice':
            num = Math.sqrt(num);
            break;
        case 'spice':
            num += 1;
            break;
        case 'bake':
            num *= 3;
            break;
        case 'fillet':
            num *= 0.80;
            break;
       }
       console.log(num);
    });
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');