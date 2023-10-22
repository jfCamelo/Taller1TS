import { Serie } from './Serie.js';

import { seriesData } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const avrgTemps: HTMLElement = document.getElementById("promedio-temporadas")!;


btnfilterByName.onclick = () => applyFilterByName();

renderSeriesInTable(seriesData);

avrgTemps.innerHTML = `${getAverageTemporadas(seriesData)}`


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.nombre}</td>
                            <td>${serie.plataforma}</td>
                            <td>${serie.temporadas}</td>`;

    seriesTbody.appendChild(trElement);
  });

  const average = getAverageTemporadas(series);

  let promedio = document.createElement("tr");
  promedio.innerHTML = `<td colspan="4">Promedio Temporadas: ${average}</td>`;
  seriesTbody.appendChild(promedio);
}
 

 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearSeriesInTable();
  let seriesFiltered: Serie[] = searchSerieByName(text, seriesData);
  renderSeriesInTable(seriesFiltered);
}

function searchSerieByName(nameKey: string, series: Serie[]) {
  return nameKey === '' ? seriesData : series.filter( c => 
    c.nombre.match(nameKey));
}


function getAverageTemporadas(series: Serie[]): number {
    let totalTemps: number = 0;
    let numSeries: number = 0;
  
    series.forEach((serie) => {
      totalTemps += serie.temporadas; // Fix: Use the += operator to accumulate total seasons
      numSeries++; // Fix: Increment the count of series
    });
  
    if (numSeries === 0) {
      return 0; // Avoid division by zero if there are no series
    }
  
    let avrg = totalTemps / numSeries;
    return avrg;
  }

function clearSeriesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
      seriesTbody.removeChild(seriesTbody.firstChild);
     
    }
  }
}