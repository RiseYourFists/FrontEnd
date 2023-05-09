function substring(target, text){
    if(text.toLowerCase().includes(target.toLowerCase())){
        console.log(target);
        return;
    }
    console.log(`${target.toLowerCase()} not found!`)
}

substring('javascript','JavaScript is the best programming language');
substring('python','JavaScript is the best programming language');