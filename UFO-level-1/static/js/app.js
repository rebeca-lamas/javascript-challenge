// from data.js
const tableData = data;

const tbody = d3.select("tbody");
console.log(data);

tableData.forEach((sighting) => {
    console.log(sighting);
    const tr = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        tr.append("td").text(value);
    });
});

const button = d3.select("#filter-btn");
button.on("click", () => {
    const inputElement = d3.select("#datetime");
    const inputValue = inputElement.property("value");
    const filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    tbody.html("");
    filteredData.forEach((sighting) => {
        const tr = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
            tr.append("td").text(value);
        });
    });
});