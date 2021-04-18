var obj = [
  {
    name: "John's meeting",
    nop: 5,
    date: "20/08/2021",
    start: "9:00 AM",
    end: "11:00 AM",
  },
  {
    name: "John's meeting",
    nop: 5,
    date: "20/08/2021",
    start: "9:00 AM",
    end: "11:00 AM",
  },
  {
    name: "John's meeting",
    nop: 5,
    date: "20/08/2021",
    start: "9:00 AM",
    end: "11:00 AM",
  },
  {
    name: "John's meeting",
    nop: 5,
    date: "20/08/2021",
    start: "9:00 AM",
    end: "11:00 AM",
  },
];
function populate() {
  var tbody = document.getElementById("tbody");
  obj.forEach((row,index) => {
    var tableRow =
      "<tr><td id='id'>" +
    (parseInt(index)+1) +
      "</td><td>" +
      row.name +
      "</td><td>" +
      row.nop +
      "</td><td>" +
      row.date +
      "</td><td>" +
      row.start +
      "</td><td>" +
      row.end+
      "</td><td><i id='delIcon' class='material-icons'>delete</i> </td></tr>";
    tbody.innerHTML += tableRow;
  });
}
populate()
