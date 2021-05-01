var tbody = d3.select("#selectTable")
var tbody2 = d3.select("#nineteenTable")
var tbody3 = d3.select("#twentyTable")
var tbody4 = d3.select("#affectedTable")
function optionChanged(selOption) {
  tbody.html("");
  tbody2.html("");
  tbody3.html("");
  tbody4.html("");


  const tbl_header = tbody.append("tr");
  let header = tbl_header.append("th");
  header.text("Country");
  header = tbl_header.append("th");
  header.text("Happiness Rank ");
  header = tbl_header.append("th");
  header.text("Happiness Score ");

  label_list = [];
  data_list = [];


  if (selOption == "happy2019") {


    let tbl_row = tbody2.append("tr");
    let cell = tbl_row.append("td");
    cell.text("Finland");
    cell = tbl_row.append("td");
    cell.text(1);
    cell = tbl_row.append("td");
    cell.text(7.8087);

    tbl_row = tbody2.append("tr");
    cell = tbl_row.append("td");
    cell.text("Denmark");
    cell = tbl_row.append("td");
    cell.text(2);
    cell = tbl_row.append("td");
    cell.text(7.6456);

    tbl_row = tbody2.append("tr");
    cell = tbl_row.append("td");
    cell.text("Switzerland");
    cell = tbl_row.append("td");
    cell.text(3);
    cell = tbl_row.append("td");
    cell.text(7.5599);

    tbl_row = tbody2.append("tr");
    cell = tbl_row.append("td");
    cell.text("Iceland");
    cell = tbl_row.append("td");
    cell.text(4);
    cell = tbl_row.append("td");
    cell.text(7.5045);

    tbl_row = tbody2.append("tr");
    cell = tbl_row.append("td");
    cell.text("Norway");
    cell = tbl_row.append("td");
    cell.text(5);
    cell = tbl_row.append("td");
    cell.text(7.392);

    label_list.push(["Finland", "Denmark", "Switzerland", "Iceland","Norway"])
    data_list.push(7.8087, 7.6456, 7.5599, 7.5045, 7.392 );
  }


  if (selOption == "happy2020") {


    let tbl_row = tbody3.append("tr");
    let cell = tbl_row.append("td");
    cell.text("Finland");
    cell = tbl_row.append("td");
    cell.text(1);
    cell = tbl_row.append("td");
    cell.text(7.842);

    tbl_row = tbody3.append("tr");
    cell = tbl_row.append("td");
    cell.text("Denmark");
    cell = tbl_row.append("td");
    cell.text(2);
    cell = tbl_row.append("td");
    cell.text(7.62);

    tbl_row = tbody3.append("tr");
    cell = tbl_row.append("td");
    cell.text("Switzerland");
    cell = tbl_row.append("td");
    cell.text(3);
    cell = tbl_row.append("td");
    cell.text(7.57);

    tbl_row = tbody3.append("tr");
    cell = tbl_row.append("td");
    cell.text("Iceland");
    cell = tbl_row.append("td");
    cell.text(4);
    cell = tbl_row.append("td");
    cell.text(7.554);

    tbl_row = tbody3.append("tr");
    cell = tbl_row.append("td");
    cell.text("Netherlands");
    cell = tbl_row.append("td");
    cell.text(5);
    cell = tbl_row.append("td");
    cell.text(7.464);

    label_list.push(["Finland", "Denmark", "Switzerland", "Iceland", "Netherlands"])
    data_list.push(7.842, 7.62, 7.57, 7.554, 7.464);
  }

  if (selOption == "mostaffect2019") {

    let tbl_row = tbody4.append("tr");
    let cell = tbl_row.append("td");
    cell.text("Mexico");
    cell = tbl_row.append("td");
    cell.text(24);
    cell = tbl_row.append("td");
    cell.text(6.465);

    tbl_row = tbody4.append("tr");
    cell = tbl_row.append("td");
    cell.text("Bangladesh");
    cell = tbl_row.append("td");
    cell.text(107);
    cell = tbl_row.append("td");
    cell.text(4.832);

    tbl_row = tbody4.append("tr");
    cell = tbl_row.append("td");
    cell.text("Afghanistan");
    cell = tbl_row.append("td");
    cell.text(153);
    cell = tbl_row.append("td");
    cell.text(2.5669);


    label_list.push(["Mexico", "Bangladesh", "Afghanistan"])
    data_list.push(6.465, 4.832, 2.5669 );
  }

  if (selOption == "mostaffect2020") {

    let tbl_row = tbody4.append("tr");
    let cell = tbl_row.append("td");
    cell.text("Mexico");
    cell = tbl_row.append("td");
    cell.text(36);
    cell = tbl_row.append("td");
    cell.text(6.317);

    tbl_row = tbody4.append("tr");
    cell = tbl_row.append("td");
    cell.text("Bangladesh");
    cell = tbl_row.append("td");
    cell.text(101);
    cell = tbl_row.append("td");
    cell.text(5.024);

    tbl_row = tbody4.append("tr");
    cell = tbl_row.append("td");
    cell.text("Afghanistan");
    cell = tbl_row.append("td");
    cell.text(149);
    cell = tbl_row.append("td");
    cell.text(2.523);


    label_list.push(["Mexico", "Bangladesh", "Afghanistan"])
    data_list.push(6.317, 5.024, 2.523 );
  }

}

optionChanged();