var express = require('express');
var router = express.Router();
var request = require('request')
/* GET users listing. */
router.post('/', function (req, res, next) {
    var reqJson = req.body.cities;
    console.log(reqJson)
    reqJson = JSON.parse(reqJson);
    var reqJsonLength = reqJson.cities.length;

    var count = 0
    var forecast = [];
    for (var i = 0; i < reqJsonLength; i++) {
        (function (i) {
            request("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + reqJson.cities[i].toString() + "&cnt=14&APPID=d9f4177e720b1b7c0913cd10cef5443e&mode=json", function (err, forecastRecieved) {
                console.log(err + "     " + this.i)
                count++


                if (!err) {

                    var body = JSON.parse(forecastRecieved.body)

                    //If Api result do not contain a error code
                    if (body.cod === "200") {

                        //Remove unnecessary data
                        for (var i = 0; i < body.cnt; i++) {

                            //Creating UTC time from epoch time
                            body.list[i].dt = new Date(body.list[i].dt * 1000 );

                            for (var j = 0; j < body.list[i].weather.length; j++) {
                                delete body.list[i].weather[j].icon;
                            }

                        }
                        delete body.cod
                        delete body.message
                        delete body.cnt
                        delete body.city.population
                        delete body.city.sys

                        body.city.name= reqJson.cities[this.i]


                        //push the final data
                        forecast.push(body)
                    } else {
                        //Generate a error for that city
                        var errObj ={"error": "Sorry,Something went wrong for " + reqJson.cities[this.i]};
                        forecast.push(errObj);
                    }

                    //If all the requests are completed and this is the last callback
                    if (count === reqJsonLength) {
                            res.send(JSON.stringify({"result": forecast}))
                    }
                }
            }.bind({"i": i}));

        })(i)
    }
    ;
});
//d9f4177e720b1b7c0913cd10cef5443e
module.exports = router;
