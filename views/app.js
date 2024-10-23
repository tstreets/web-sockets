const graphRef = document.getElementById("graph");

const chart = new Chart(graphRef, {
  type: "bar",
  data: {
    labels: ["Green", "Red"],
    datasets: [{ label: "Buttons", data: [2, 7] }],
  },
});
