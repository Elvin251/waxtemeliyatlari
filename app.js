function updateClock() {
    let now = new Date();

    let days = ["Bazar günü", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"];
    let months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
    
    let dayName = days[now.getDay()];
    let day = now.getDate();
    let month = months[now.getMonth()];
  let year = now.getFullYear();
    
  let  formattedDate = `${dayName}, ${day} ${month} ${year}`;
    document.getElementById("date").innerText = formattedDate;

  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm =0 ;


    if (hours<=12) {
        ampm="pm"
    } else {
        ampm="am"
    }
    let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("time").innerText = formattedTime;
}


setInterval(updateClock, 1000);

updateClock();