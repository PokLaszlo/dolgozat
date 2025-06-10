/*
File: app.js
Author: Pók László
Copyright: 2025, Pók László
Group: Szoft I/N
Date: 2025-06-04
Github: https://github.com/poklaszlo/
Licenc: MIT
*/

const about = document.getElementById("about")
const table = document.getElementById("shipTable")

const url = 'http://localhost:8000/api/shipments'

about.addEventListener("click",()=>{
    alert("Név: Pók László\nOsztály: Szoft 1/N\nDátum: 2025-06-10")
})

function getShipCargo(){
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        renderTabla(result.data)
    })
    .catch(err =>{
        console.error("Hiba a lekérés során: ", err);
        table.innerHTML = "<p>Hiba történt az adatok lekérésekor.</p>"
    })
}

function renderTabla(adatok) {
    if (!Array.isArray(adatok) || adatok.length === 0) {
        table.innerHTML = "<p>Nincs adat.</p>";
        return;
    }

    let html = "<table border='1'><thead><tr>";
    for (let kulcs in adatok[0]) {
        html += `<th> ${kulcs}</th>`;
    }
    html += "</tr></thead><tbody>";

    adatok.forEach(sor => {
        html += "<tr>";
        for (let kulcs in sor) {
          html += `<td>${sor[kulcs]}</td>`;
        }
        html += "</tr>";
      });
    html += "</tbody></table>";
    table.innerHTML = html;
}
getShipCargo()