function createTable() {
    //Write your code here
  let rn = window.prompt("Input number of rows", 1);
  let  cn = window.prompt("Input number of columns", 1);
  let table = document.getElementById("myTable");

  // Clear existing table content (important if the button is clicked multiple times)
  table.innerHTML = "";

  for (let r = 0; r < parseInt(rn); r++) {
    let row = table.insertRow(r);
    for (let c = 0; c < parseInt(cn); c++) {
      let cell = row.insertCell(c);
      cell.innerHTML = "Row-" + r + " Column-" + c;
    }
  }
}
