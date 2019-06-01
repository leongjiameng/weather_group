window.onload = function () {
    //document.getElementById("greeting").innerHTML="Hello World from JS";

    const apiUrl = 'https://api-weather-utar18.azurewebsites.net/api/temperature/current';

    var getIoTTemperature = function () {
        const request = new Request(apiUrl, { method: 'GET' });

        // var person = prompt("Please enter your name", "Harry Potter");

        // if (person != null) {
        //     document.getElementById("greeting").innerHTML =
        //         "Hello " + person + "! How are you today?";
        // }

        fetch(request)
            .then(resp => resp.json())
            .then(jsonResp => {
                document.getElementById('currentApiTemperature').innerHTML = `IoT Temperature: ${jsonResp[0]['temperature']} °`;
            });
    }

    getIoTTemperature();
}