function pascalSplit(text){
    let result = text.split(/(?=[A-Z])/)
    console.log(result.join(', '))
}

pascalSplit('SplitMeIfYouCanHaHaYouCantOrYouCan');