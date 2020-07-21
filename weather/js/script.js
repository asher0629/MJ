url = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.57&lon=126.98&exclude=minutely&appid=28981aff47d330d87837128734f55567';
$.getJSON(url, function() {
        var  Now = new Date(),
            StrNow = String(Now),
            nowYear = String(Now.getFullYear()),
            nowMon = String(Now.getMonth()+1),
            nowDay = String(Now.getDate());
            if(nowMon.length == 1) {
            nowMon = "0"+nowMon
            }
        var NowToday = nowYear+nowMon+nowDay;
        var week = new Array('일','월','화','수','목','금','토');
        var nowTimestamp = Math.floor(Date.now() / 1000);
        var weatherClass = 'wi wi-owm-';
        weatherClass += (nowTimestamp >= data.sunrise && nowTimestamp <= data.sunset ? 'day' : 'night');
        weatherClass += ('-' + weather[0].id);

        $('#weather_info .dtempd').html(parseInt(daily[0].temp.day-273.15)+'&deg;');

    });