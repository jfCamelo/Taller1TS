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
        trElement.innerHTML = "<td>".concat(serie.nombre, "</td>\n                           <td>").concat(serie.plataforma, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
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
    series.forEach(function (serie) { return totalTemps = totalTemps + serie.temporadas; }, numSeries = numSeries + 1);
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
