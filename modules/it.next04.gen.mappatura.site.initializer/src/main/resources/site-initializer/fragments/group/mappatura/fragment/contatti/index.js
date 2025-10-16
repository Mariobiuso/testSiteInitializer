$(document).ready(function(){
  var map = L.map('contatti-map', { scrollWheelZoom: false }).setView([41.9042989, 12.5155263], 13);
	
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
	
	var marker = L.marker([41.9042989, 12.5155263]).addTo(map);
	marker.bindPopup('<b>Istituto Superiore di Sanit&agrave;</b><br>Viale Regina Elena 299, 00161 - Roma').openPopup();
});