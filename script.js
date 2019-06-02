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
                var gauge1=new LinearGauge({
                    renderTo: 'gauge1',   
                    width: 160,
                    height: 600,
                    units: '°C',
                }).draw();
                gauge1.value=jsonResp[0]['temperature'];
            });
    }

    getIoTTemperature();
}
function calendar(){
    var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var d=new Date();
    setText('calendar-day', day[d.getDay()]);
    setText('calendar-date', d.getDate());
    setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
};

//this function will set the text value of 
function setText(id, val){
    if(val < 10){
        val = '0' + val;    //add leading 0 if val < 10
    }
    document.getElementById(id).innerHTML = val;
};

//call calendar() when page load
window.onload = calendar;