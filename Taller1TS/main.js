"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var avrgTemps = document.getElementById("promedio-temporadas");
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderSeriesInTable(data_js_1.seriesData);
avrgTemps.innerHTML = "".concat(getAverageTemporadas(data_js_1.seriesData));
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.nombre, "</td>\n                            <td>").concat(serie.plataforma, "</td>\n                            <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var average = getAverageTemporadas(series);
    var promedio = document.createElement("tr");
    promedio.innerHTML = "<td colspan=\"3\">Promedio Temporadas: ".concat(average, "</td>");
    seriesTbody.appendChild(promedio);
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearSeriesInTable();
    var seriesFiltered = searchSerieByName(text, data_js_1.seriesData);
    renderSeriesInTable(seriesFiltered);
}
function searchSerieByName(nameKey, series) {
    return nameKey === '' ? data_js_1.seriesData : series.filter(function (c) {
        return c.nombre.match(nameKey);
    });
}
function getAverageTemporadas(series) {
    var totalTemps = 0;
    var numSeries = 0;
    series.forEach(function (serie) {
        totalTemps += serie.temporadas; // Fix: Use the += operator to accumulate total seasons
        numSeries++; // Fix: Increment the count of series
    });
    if (numSeries === 0) {
        return 0; // Avoid division by zero if there are no series
    }
    var avrg = totalTemps / numSeries;
    return avrg;
}
function clearSeriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
