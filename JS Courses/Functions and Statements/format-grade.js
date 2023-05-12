function gradeFormat(grade){

    let state;
    let evaluation = ` (${grade.toFixed(2)})`

    if( grade < 3.00){
        console.log(`Fail (${grade})`);
        return;
    }
    else if(grade >= 3.00 && grade < 3.50){
        state = 'Poor';
    }
    else if(grade >= 3.50 && grade < 4.50){
        state = 'Good';
    }
    else if(grade >= 4.50 && grade < 5.50){
        state = 'Very good';
    }
    else{
        state = "Excellent";
    }
    console.log(state + evaluation);
}

gradeFormat(3.33);
gradeFormat(4.50);
gradeFormat(2.99);