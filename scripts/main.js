import { series } from './data.js';
var componente = document.getElementById('series');
var componentePromedio = document.getElementById('promedio');
cargarFilas();
componentePromedio.innerHTML = "Seasons average: ".concat(calcularPromedio());
function cargarFilas() {
    series.forEach(function (c) { return crearFila(c); });
}
function crearFila(serie) {
    var fila = document.createElement('tr');
    fila.innerHTML = "\n        <td style=\"font-weight: bold;\">".concat(serie.id, "</td>\n        <td style=\"color:#547dde;\">").concat(serie.nombre, "</td>\n        <td>").concat(serie.cadena, "</td>\n        <td>").concat(serie.temporadas, "</td>");
    componente.appendChild(fila);
}
function calcularPromedio() {
    var promedio = 0;
    series.forEach(function (s) { return promedio += s.temporadas; });
    promedio /= series.length;
    var promedioT = promedio.toFixed(2);
    return promedioT;
}
