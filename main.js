var table = document.getElementById("table"), sumVal = 0;
for (var i = 1; i < table.rows.length; i++) {
    sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHtml);
}
document.getElementById("val").innerHTML = "sum value = " + sumVal;
console.log(sumVal);