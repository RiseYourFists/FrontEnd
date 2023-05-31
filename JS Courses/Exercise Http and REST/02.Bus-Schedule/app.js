function solve() {
    const departInput = document.getElementById('depart');
    const arriveInput = document.getElementById('arrive');
    const display = document.querySelector('.info');

    const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
    let isMoving = false;
    let currentStop = 'depot';
    let stopName = '';
    let nextStop = '';
    
    function depart() {

        isMoving = true;
        movingStateHandler();

        fetch(BASE_URL + currentStop)
        .then((res)=> res.json())
        .then((data)=>{
            stopName = data.name;
            nextStop = data.next;
            display.textContent = `Next stop ${stopName}`;
        });
        
    }

    async function arrive() {

        isMoving = false;
        movingStateHandler();

        currentStop = nextStop;

        display.textContent = `Arriving at ${stopName}`;
    }

    function movingStateHandler(){
        
        if(isMoving){
            arriveInput.disabled = false;
            departInput.disabled = true;
            return;
        }

        arriveInput.disabled = true;
        departInput.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();