function attachEvents() {

    const BASE_URL='http://localhost:3030/jsonstore/forecaster/locations';
    let FORECAST_URL='http://localhost:3030/jsonstore/forecaster/today/';
    let UPCOMING_FORECAST_URL='http://localhost:3030/jsonstore/forecaster/upcoming/';
    const locationInput=document.getElementById('location');
    const submitButton=document.getElementById('submit');
    const forecastDiv=document.getElementById('forecast');
    const currentConditionDiv=document.getElementById('current');
    const upcomingDiv=document.getElementById('upcoming');



    submitButton.addEventListener('click', getWeather)

    function getWeather(){

       const search =locationInput.value;
        forecastDiv.style.display='block';

        fetch(BASE_URL)
        .then(res=> res.json())
        .then((locations) =>{
            for (const key in locations) {
    
                
               const {name, code}= locations[key];

                console.log(name ,'ss', code);
                console.log(name===search);
                
                

                if(name===search){
     
                    fetch(FORECAST_URL+code)
                    .then((res) => res.json())
                    .then((location) =>{

                        const {forecast , name }= location;
                        const {condition, high ,low}= forecast;                       
                        
                        const forecastsDiv= document.createElement('div');
                        forecastsDiv.classList.add('forecasts');

                        const conditionSymbolSpan= document.createElement('span');
                        conditionSymbolSpan.classList.add('condition' ,'symbol');
                        conditionSymbolSpan.textContent=condition;
                        forecastsDiv.appendChild(conditionSymbolSpan);

                        const conditionSpan= document.createElement('span');
                        conditionSpan.classList.add('condition');
                        forecastsDiv.appendChild(conditionSpan);

                        const locationSpan= document.createElement('span');
                        locationSpan.classList.add('forecast-data');
                        locationSpan.innerHTML=name;
                        conditionSpan.appendChild(locationSpan);

                        const degreeSpan= document.createElement('span');
                        degreeSpan.classList.add('forecast-data');
                        degreeSpan.innerHTML=low+'&#176'+'/'+high+'&#176';
                        conditionSpan.appendChild(degreeSpan);

                        const conditionWordSpan= document.createElement('span');
                        conditionWordSpan.classList.add('forecast-data');
                        conditionWordSpan.innerHTML=condition;
                        conditionSpan.appendChild(conditionWordSpan);


                        currentConditionDiv.appendChild(forecastsDiv);
                    })

                    fetch(UPCOMING_FORECAST_URL+code)
                    .then((res)=> res.json())
                    .then((threeDays) => {
                        const {forecast , name}= threeDays;

                        const forecastInfoDiv= document.createElement('div');
                        forecastInfoDiv.classList.add('forecast-info');                            
                        upcomingDiv.appendChild(forecastInfoDiv);

                        for (const key in forecast) {
                            const {condition , high, low} = forecast[key];
                            
                        
                            const upcomingSpan= document.createElement('span');
                            upcomingSpan.classList.add('upcoming');
                            forecastInfoDiv.appendChild(upcomingSpan);    

                            const symbolSpan= document.createElement('span');
                            symbolSpan.classList.add('symbol');
                            symbolSpan.textContent=condition;

                            const degreeSpan= document.createElement('span');
                            degreeSpan.classList.add('forecast-data');
                            degreeSpan.innerHTML=low+'&#176'+'/'+high+'&#176';;

                            const conditionSpan= document.createElement('span');
                            conditionSpan.classList.add('forecast-data');
                            conditionSpan.textContent=condition;

                            upcomingSpan.appendChild(symbolSpan);    
                            upcomingSpan.appendChild(degreeSpan);    
                            upcomingSpan.appendChild(conditionSpan);  

                        }
                    })
                    
                }

            }
    })
    }
}

attachEvents();