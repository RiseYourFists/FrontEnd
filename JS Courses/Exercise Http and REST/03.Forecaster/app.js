function attachEvents() {
    
    const emoji = {
        'Sunny': '☀',
        "Partly sunny": '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'deg': '°'
    }

    const SEARCH_LIST_URL = "http://localhost:3030/jsonstore/forecaster/locations";
    const BASE_FORECASTER_URL = "http://localhost:3030/jsonstore/forecaster/upcoming/";
    const BASE_TODAY_URL = "http://localhost:3030/jsonstore/forecaster/today/";

    const locationInput = document.getElementById('location');
    const forecastWrapper = document.getElementById('forecast');
    const currForecastWrapper = document.getElementById('current');
    const upcomingForecastWrapper = document.getElementById('upcoming');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', onClickHandler);

    let cityId = '';
    function onClickHandler(){

        fetch(SEARCH_LIST_URL)
        .then((res)=> res.json())
        .then((data)=> {
            let result = data.find((obj)=> obj.name === locationInput.value);

            if(result === undefined) return;

            cityId = result.code;
        })
        .then(()=> displayHandler());
    }

    function displayHandler(){
        forecastWrapper.style.display = 'block';
        
        fetch(BASE_TODAY_URL + cityId)
        .then((res)=> res.json())
        .then((data)=>{

            let high = data.forecast.high;
            let low = data.forecast.low;
            let weather = data.forecast.condition;

            const forecasts = createHtmlElementWithAttribute('div', 'class', 'forecasts');
            const conditionWithSymbol = createHtmlElementWithAttribute('span', 'class', 'condition symbol');
            const condition = createHtmlElementWithAttribute('span', 'class', 'condition');
            const location = createHtmlElementWithAttribute('span', 'class', 'forecast-data');
            const temperature = createHtmlElementWithAttribute('span', 'class', 'forecast-data');
            const weatherStatus = createHtmlElementWithAttribute('span', 'class', 'forecast-data');

            conditionWithSymbol.textContent = emoji[weather];
            location.textContent = data.name;
            weatherStatus.textContent = weather;
            temperature.textContent = getTemperature(low, high)

            condition.appendChild(location);
            condition.appendChild(temperature);
            condition.appendChild(weatherStatus);
            forecasts.appendChild(conditionWithSymbol);
            forecasts.appendChild(condition);
            currForecastWrapper.appendChild(forecasts);

        });

        fetch(BASE_FORECASTER_URL + cityId)
        .then((res)=> res.json())
        .then((data)=> {
            const forecastInfo = createHtmlElementWithAttribute('div', 'class', 'forecast-info');
            for (const info of data.forecast) {
                let status = info.condition;
                let high = info.high;
                let low = info.low;

                const infoWrapper = createHtmlElementWithAttribute('span', 'class', 'upcoming');
                const statusSymbol = createHtmlElementWithAttribute('span', 'class', 'symbol');
                const temperature = createHtmlElementWithAttribute('span', 'class', 'forecast-data');
                const statusInfo = createHtmlElementWithAttribute('span', 'class', 'forecast-data')

                statusSymbol.textContent = emoji[status];
                temperature.textContent = getTemperature(low, high);
                statusInfo.textContent = status;

                infoWrapper.appendChild(statusSymbol);
                infoWrapper.appendChild(temperature);
                infoWrapper.appendChild(statusInfo);
                forecastInfo.appendChild(infoWrapper);
            }
            upcomingForecastWrapper.appendChild(forecastInfo);
        })
    }

    function createHtmlElementWithAttribute(elementType, attributeType, attributeContent){
        const element = document.createElement(elementType);

        element.setAttribute(attributeType, attributeContent);

        return element;
    }

    function getTemperature(low, high){
        return `${low}${emoji['deg']}/${high}${emoji['deg']}`;
    }
}

attachEvents();