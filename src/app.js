function displayTemperature(response){
    console.log(response.data.main.temp);
}

let apiKey="5896d233f9e55e1c655460c4b3724e91";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apikey}&units=metric";
axios.get(apiUrl).then(displayTemperature);





