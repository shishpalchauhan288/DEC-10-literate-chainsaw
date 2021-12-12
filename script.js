


var entry = document.getElementById("entry")
entry.addEventListener("click", displayDetails);
var row = 1;
function displayDetails() {
    var name = document.getElementById("name").Value;
    var age = document.getElementById("age").Value;
    var grade = document.getElementById("grade").Value;
 

    if(!name || !age || !grade){
        alert("Please fill all the boxes");
        return;
    }
    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var Cell1 = newRow.insertCell(0);
    var Cell2 = newRow.insertCell(1);
    var Cell3 = newRow.insertCell(2);

    Cell1.innerHTML = name;
    Cell2.innerHTML = age;
    Cell3.innerHTML = grade;
    row++;

}