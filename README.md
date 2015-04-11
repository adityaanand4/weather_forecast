															Weather_forecast

                                This app returns the weather of the cities that are fed as a input.

# Prerequisites

1. Install node from https://nodejs.org/download/ and follow the instructions from there only.
2. Download or clone this project.
3. Navigate to the package.json file (from command line) and run "npm install" with admin rights
4. Now run "node www" after navigating to the bin folder.
5. Open your browser and navigate to "localhost:3000".

# Input
In the Input field type a JSON of the city names of whom you want to see weather forecast. Sample Input is shown
```javascript
{
    "cities": [
        "Delhi",
        "banglore"
    ]
}
```

# Output

sample output for 2 days is as shown
```javascript
{"result":[{
    "city": {
        "id": "1277935",
        "name": "banglore",
        "coord": {
            "lon": 77.8662,
            "lat": 12.8301
        },
        "country": "India"
    },
    "list": [
        {
            "dt": "2015-04-11T06:00:00.000Z",
            "temp": {
                "day": 292.65,
                "min": 292.65,
                "max": 292.65,
                "night": 292.65,
                "eve": 292.65,
                "morn": 292.65
            },
            "pressure": 928.89,
            "humidity": 95,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain"
                }
            ],
            "speed": 2.66,
            "deg": 293,
            "clouds": 92,
            "rain": 0.3
        },
        {
            "dt": "2015-04-12T06:00:00.000Z",
            "temp": {
                "day": 297.29,
                "min": 291.94,
                "max": 297.29,
                "night": 294.3,
                "eve": 295.74,
                "morn": 291.94
            },
            "pressure": 930.84,
            "humidity": 80,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain"
                }
            ],
            "speed": 2.51,
            "deg": 278,
            "clouds": 92,
            "rain": 1.76
        }
    ]
}]}
```
# Error

If there is some error there will be a error message with city name in the result Array

```javascript
{"result":[{"error":"Sorry,Something went wrong for hhhhhhh"}]}
```
