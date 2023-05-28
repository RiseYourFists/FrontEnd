function getInfo() {
    const stopIdInput = document.querySelector('input[type="text"]#stopId');
    const stopId = stopIdInput.value;
    
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";

    const requestBusInfo = fetch(BASE_URL + stopId, { method: 'GET'})
        .then((res)=> res.json())
        .then((data)=> {
           const stationName = data['name'];
           const buses = data['buses'];
           const busKeys = Object.keys(buses);

           const stationNameWrapper = document.getElementById('stopName');
           const items = document.getElementById('buses');

           stationNameWrapper.textContent = stationName;

           for (const key of busKeys) {
                const listItem = document.createElement('li');
                listItem.textContent = `Bus ${key} arrives in ${buses[key]} minutes`;
                items.appendChild(listItem);
           }
        })
        .catch(() => {
            const errorDisplay = document.getElementById('stopName');

            errorDisplay.textContent = 'Error'
        })
}