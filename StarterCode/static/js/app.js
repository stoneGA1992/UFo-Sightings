// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select("tbody");
// Remove all rows so we can display all data from scratch based on user input
d3.selectAll("td").remove();
tableData.forEach(ufo => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("datetime");
  filter = input.value;
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
// Call the function
d3.select("#filter-btn").on("click", () => myFunction());