
document.getElementById('gettext').addEventListener
    ('click', gettext);
function gettext() {
    fetch("https://localhost:44306/api/Film")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //H�r kommer man �t och kan anv�nda informationen
            console.log(data);

            //Anv�nd data + .v�rdet i arrayn man vill komma �t
            console.log("data.value �r: " + data.value);
            console.log("data.icon_url = : " + data.icon_url);

            //Exempel p� hur man �ndrar html-koden:
            document.getElementById("output").innerHTML = data.value;
            document.getElementById("bild").src = data.icon_url;
        });
       
}
document.getElementById('gettext1').addEventListener
    ('click', gettext1);
function gettext1() {
    fetch("https://localhost:44306/api/Film/Saw/90")
        .then((res) => res.text())
        .then((data1) => { document.getElementById('output1').innerHTML = data1 })
}

document.getElementById('gettext2').addEventListener
    ('click', gettext2);
function gettext2() {
    fetch("https://localhost:44306/api/Film/Into%20the%20blue/50")
        .then((res) => res.text())
        .then((data2) => { document.getElementById('output2').innerHTML = data2 })
}

document.getElementById('gettext3').addEventListener
    ('click', gettext3);
function gettext3() {
    fetch("https://localhost:44306/api/Film/Wrong%20turn")
        .then((res) => res.text())
        .then((data3) => { document.getElementById('output3').innerHTML = data3 })
}