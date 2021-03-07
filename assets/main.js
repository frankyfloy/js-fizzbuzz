// Creazione row tabelle + cell --- Dati persona;
for (var i = 1; i <= 100; i++) {

    document.getElementById('tabellaNumeri').innerHTML +=
    "<tr>";

    if (i % 3 === 0 && i % 5 === 0) {
        document.getElementById('tabellaNumeri').innerHTML += "<td class = \"bg-warning\">" + i + "</td><td class = \"FizzBuzz\">" + multipli_3_5 + "</td>";
    } else if (i % 3 === 0) {
        document.getElementById('tabellaNumeri').innerHTML += "<td>" + i + "</td><td class = \"Fizz\">" + multipli_3 + "</td>";
    } else if (i % 5 === 0) {
        document.getElementById('tabellaNumeri').innerHTML += "<td>" + i + "</td><td class = \"Buzz\">" + multipli_5 + "</td>";
    }

    document.getElementById('tabellaNumeri').innerHTML +=
    "</tr>";
}
