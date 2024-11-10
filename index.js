
function validateForm() {
    let name = document.getElementById("name").value;
    let group = document.getElementById("group").value;
    let faculty = document.getElementById("faculty").value;
    let address = document.getElementById("address").value;
    let telegram = document.getElementById("telegram").value;

    let namePattern = /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ][а-яіїєґ']+$/; 
    let groupPattern = /^[А-ЯІЇЄҐ]{2}-\d{2}$/; 
    let facultyPattern = /^[А-ЯІЇЄҐ]{4}$/; 
    let addressPattern = /^м\. ?[А-ЯІЇЄҐ][а-яіїєґ']+$/; 
    let telegramPattern = /^@[A-Za-z0-9_]{3,}$/; 

    let isValid = true;
    let output = "";

    if (!namePattern.test(name)) {
        isValid = false;
        output += "Помилка в ПІБ.<br>";
        document.getElementById("name").style.borderColor = "red";
    } else {
        document.getElementById("name").style.borderColor = "";
    }

    if (!groupPattern.test(group)) {
        isValid = false;
        output += "Помилка в Групі.<br>";
        document.getElementById("group").style.borderColor = "red";
    } else {
        document.getElementById("group").style.borderColor = "";
    }

    if (!facultyPattern.test(faculty)) {
        isValid = false;
        output += "Помилка в Факультеті.<br>";
        document.getElementById("faculty").style.borderColor = "red";
    } else {
        document.getElementById("faculty").style.borderColor = "";
    }

    if (!addressPattern.test(address)) {
        isValid = false;
        output += "Помилка в Адресі.<br>";
        document.getElementById("address").style.borderColor = "red";
    } else {
        document.getElementById("address").style.borderColor = "";
    }

    if (!telegramPattern.test(telegram)) {
        isValid = false;
        output += "Помилка в Telegram.<br>";
        document.getElementById("telegram").style.borderColor = "red";
    } else {
        document.getElementById("telegram").style.borderColor = "";
    }

    if (isValid) {
        output = `Введена інформація:<br>ПІБ: ${name}<br>Група: ${group}<br>Факультет: ${faculty}<br>Адреса: ${address}<br>Telegram: ${telegram}`;
        document.getElementById("output").style.color = "black";
    } else {
        document.getElementById("output").style.color = "red";
    }

    document.getElementById("output").innerHTML = output;
}


const variant = 10; 
const tableSize = 6; 
const colorTable = document.getElementById("colorTable");
const colorPicker = document.getElementById("colorPicker");

function createTable() {
    let cellNumber = 1;
    for (let row = 0; row < tableSize; row++) {
        let tr = document.createElement("tr");
        for (let col = 0; col < tableSize; col++) {
            let td = document.createElement("td");
            td.textContent = cellNumber;
            td.dataset.number = cellNumber;
            td.addEventListener("mouseover", handleMouseOver);
            td.addEventListener("click", handleClick);
            td.addEventListener("dblclick", handleDblClick);
            tr.appendChild(td);
            cellNumber++;
        }
        colorTable.appendChild(tr);
    }
}


function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}


function handleMouseOver(event) {
    if (parseInt(event.target.dataset.number) === variant) {
        event.target.style.backgroundColor = getRandomColor();
    }
}


function handleClick(event) {
    if (parseInt(event.target.dataset.number) === variant) {
        event.target.style.backgroundColor = colorPicker.value;
    }
}

function handleDblClick(event) {
    const cellNumber = parseInt(event.target.dataset.number);
    if (cellNumber === variant) {
        const row = event.target.parentElement;
        const cells = Array.from(row.children);
        let startIndex = cells.indexOf(event.target);
       
        for (let i = startIndex; i < cells.length; i += 2) {
            cells[i].style.backgroundColor = colorPicker.value;
        }
    }
}

createTable();
