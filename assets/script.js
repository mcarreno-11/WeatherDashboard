//913961f9b6f8b3a971a155dc97503169
/*
const weatherApi = 'https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=3&appid=913961f9b6f8b3a971a155dc97503169';

fetch(weatherApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (weatherData) {
        console.log(`This is the new response`);
        console.log(weatherData);

       
        

    })
    */
    

    //lon: -117.1573, lat: 32.7153
const weatherFive = 'https://api.openweathermap.org/data/2.5/forecast?q=San Diego&appid=913961f9b6f8b3a971a155dc97503169&units=metric';

fetch(weatherFive)
    .then(function (response) {
        return response.json();
    })
    .then(function (weatherData) {
        console.log(weatherData);

        //city name
        const { city : { name: cityName }} = weatherData;
        console.log(cityName);

        //date weather condition tempature humidity wind speed 
        const { list :[ { dt_txt: currentDay, main: { humidity, temp: tempature }, wind: { speed } } ] } = weatherData;
        
        //set the city, day, humidity ect..
        document.querySelector('#cityName').textContent = cityName;
        document.querySelector('#date').textContent = `Date: ${currentDay}`;
        document.querySelector('#humidity').textContent = `Humidity: ${humidity}`;
        document.querySelector('#temp').textContent = `Temperature: ${tempature}`;
        document.querySelector('#speed').textContent = `Speed: ${speed}`;

        

   


        

    })

     //WHEN I view current weather conditions for that city
    //THEN I am presented with the city name, the date, an icon representation of weather conditions,
    //the temperature, the humidity, the wind speed, and the UV index 
    //WHEN I view the UV index
    //THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
    //WHEN I view future weather conditions for that city
    //THEN I am presented with a 5-day forecast that displays the date, an icon representation of 
    //weather conditions, the temperature, the wind speed, and the humidity



    //https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={API key}&units=metric



/*
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history



WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
*/