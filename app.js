        const apiKey="5ac1625ab365d1eb796f215c681ecd67";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const ImageCloud=document.querySelector(".img-weather");
        const SearchBox=document.querySelector(".search input");
        const SearchBtn=document.querySelector(".search button");
        

        async function Weather(city){
            const response =await fetch(apiUrl + city +`&appid=${apiKey}`);
            var data = await response.json();

            console.log(data);
            document.querySelector(".temperature").innerHTML=Math.round(data.main.temp) + "°c";
            document.querySelector(".humid-measure").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind-measure").innerHTML=data.wind.speed+"km/h";
            document.querySelector(".city").innerHTML=data.name;   
        }
        if(SearchBtn){
            SearchBtn.addEventListener("click",()=>{
                Weather(SearchBox.value);
            })
        }