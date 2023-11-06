function loadMap(){
    var map = L.map('map').setView([37.0902 , -95.7129], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    var lat1 = getRandomInRange(30, 35, 3);
    var lat2 = getRandomInRange(30, 35, 3);
    var lat3 = getRandomInRange(30, 35, 3);

    var long1 = getRandomInRange(-90, -100, 3);
    var long2 = getRandomInRange(-90, -100, 3);
    var long3 = getRandomInRange(-90, -100, 3);

    var marker1 = L.marker([lat1,long1]).addTo(map)
    var marker2 = L.marker([lat2,long2]).addTo(map)
    var marker3 = L.marker([lat3,long3]).addTo(map)

    document.getElementById('marker1').innerHTML = `Marker 1: Latitude: ${lat1}, Longitude: ${long1}`;
    document.getElementById('marker2').innerHTML = `Marker 2: Latitude: ${lat2}, Longitude: ${long2}`;
    document.getElementById('marker3').innerHTML = `Marker 3: Latitude: ${lat3}, Longitude: ${long3}`;
   
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat1}&longitude=${long1}&localityLanguage=en`)
    .then((res) => res.json())
    .then((res) => {
        document.getElementById("marker1-details").innerHTML =  "Locality: " + res.locality
    })

    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat2}&longitude=${long2}&localityLanguage=en`)
    .then((res) => res.json())
    .then((res) => {
        document.getElementById("marker2-details").innerHTML =  "Locality: " + res.locality
    })

    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat3}&longitude=${long3}&localityLanguage=en`)
    .then((res) => res.json())
    .then((res) => {
        document.getElementById("marker3-details").innerHTML = "Locality: " +  res.locality
    })
}

function getRandomInRange(from, to, fixed){
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}
window.onload = loadMap;