// from data.js
const tableData = data;

const tbody = d3.select("tbody");
// console.log(data);

tableData.forEach((sighting) => {
    // console.log(sighting);
    const tr = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(`${key}: ${value}`);
        tr.append("td").text(value);
    });
});

const button = d3.select("#filter-btn");

button.on("click", () => {
    const inputDate = d3.select("#datetime");
    const inputDateValue = inputDate.property("value");
    console.log(inputDateValue);
    
    const inputCity = d3.select("#city");
    const inputCityValue = inputCity.property("value");
    console.log(inputCityValue);

    const inputState = d3.select("#state");
    const inputStateValue = inputState.property("value");
    console.log(inputStateValue);

    const inputCountry = d3.select("#country");
    const inputCountryValue = inputCountry.property("value");
    console.log(inputCountryValue);

    const inputShape = d3.select("#shape");
    const inputShapeValue = inputShape.property("value");
    console.log(inputShapeValue);

    let filteredDate = [];
    let filteredCity = [];
    let filteredState = [];
    let filteredCountry = [];
    let filteredShape = [];

    if (inputDateValue !== "") {
        filteredDate = tableData.filter(sighting => sighting.datetime === inputDateValue);
        // console.log(filteredDate);
        console.log('input date');
    } else {
        filteredDate = tableData;
    }

    if (inputCityValue !== "") {
        filteredCity = tableData.filter(sighting => sighting.city === inputCityValue);
        // console.log(filteredCity);
        console.log('input city');
    } else {
        filteredCity = tableData;
    }

    if (inputStateValue !== "") {
        filteredState = tableData.filter(sighting => sighting.state === inputStateValue);
        // console.log(filteredState);
        console.log(`input state`);
        // console.log(filteredState);
    } else {
        filteredState = tableData;
    }

    if (inputCountryValue !== "") {
        filteredCountry = tableData.filter(sighting => sighting.country === inputCountryValue);
        // console.log(filteredCountry);
        console.log('input country');
    } else {
        filteredCountry = tableData;
    }

    if (inputShapeValue !== "") {
        filteredShape = tableData.filter(sighting => sighting.shape === inputShapeValue);
        console.log('input shape');
        // console.log(filteredShape);
    } else {
        filteredShape = tableData;
    }

    console.log(filteredDate);
    console.log(filteredCity);
    console.log(filteredState);
    console.log(filteredCountry);
    console.log(filteredShape);

    
    
    let filteredData = tableData.filter(value => (filteredDate.includes(value)) && (filteredCity.includes(value)) && 
        (filteredState.includes(value)) && (filteredCountry.includes(value)) && (filteredShape.includes(value)));
    console.log('intersection of sets');
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