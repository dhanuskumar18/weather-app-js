let key = "816aa3407ef75fa520d744feb1fa199a";
let city;
let img = document.querySelector(".img");
let ph=document.createElement("img");
img.appendChild(ph);
async function api() {
  city = document.querySelector("input").value;
  try {
    let b = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );
    console.log(b);
    let s = await b.json();
    console.log(s);

    let t = document.querySelector(".temp");
    let h = document.querySelector(".hum");
    
    let p = document.querySelector(".pres");
    let w = document.querySelector(".wind");
    let d = document.querySelector(".desc");
    let cn = document.querySelector(".cityname");
    cn.innerHTML = `<i class="fa-solid fa-globe"></i> ${city}`;
    t.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> ${s.main.temp}`;
    h.innerHTML = `<i class="fa-solid fa-droplet"></i> ${s.main.humidity}`;
    p.innerHTML = `Pressure:${s.main.pressure}`;
    w.innerHTML = `<i class="fa-solid fa-wind"></i> ${s.wind.speed}`;
    let i = s.weather[0].icon;
    console.log(i);

ph.setAttribute("src",`https://openweathermap.org/img/wn/${i}@2x.png`)
    d.innerHTML = `${s.weather[0].description}`;
    document.querySelector("input").value = "";
  } catch (err) {
    let cn = document.querySelector(".cityname");
    let t = document.querySelector(".temp");
    let h = document.querySelector(".hum");
    let p = document.querySelector(".pres");
    let w = document.querySelector(".wind");
    let d = document.querySelector(".desc");
    cn.innerHTML = `<i class="fa-solid fa-globe"></i> 0`;
    t.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> 0`;
    h.innerHTML = `<i class="fa-solid fa-droplet"></i> 0`;
    p.innerHTML = `Pressure:0`;
    w.innerHTML = `<i class="fa-solid fa-wind"></i> 0`;
    d.innerHTML = "Not Available";
    ph.setAttribute("src"," ")

    document.querySelector("input").value = "";

    alert("enter a valid country name");
  }
  // console.log(s);
  // let s= await b.json();
  // let t=document.querySelector(".temp")
  // let h=document.querySelector(".hum")
  // let p=document.querySelector(".pres")
  // let w=document.querySelector(".wind")
  // let d=document.querySelector(".desc")
  // let cn=document.querySelector(".cityname")
  // cn.innerHTML=`Country name:${city}`
  // t.innerHTML=`Temperature:${s.main.temp}`;
  // h.innerHTML=`humidity:${s.main.humidity}`;
  // p.innerHTML=`Pressure:${s.main.pressure}`;
  // w.innerHTML=`Wind speed:${s.wind.speed}`;
  // d.innerHTML=`Description:${s.weather[0].description}`;
  // console.log(s);
  // console.log(s.main.temp);
  // console.log(s.main.humidity);
  // console.log(s.main.pressure);
  // console.log(s.wind.speed);
  // console.log(s.weather[0].description);
  // document.querySelector('input').value="";
}
