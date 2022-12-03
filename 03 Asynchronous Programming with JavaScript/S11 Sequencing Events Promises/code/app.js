const getWeatherData = () => {
  return fetch(
    "https://archive-api.open-meteo.com/v1/era5?latitude=24.69&longitude=46.72&start_date=2022-10-28&end_date=2022-10-28&hourly=temperature_2m"
  ).then((res) => res.json());
};

const generateChart = (data) => {
  const ctx = document.getElementById("chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.hourly.time,
      datasets: [
        {
          label: "Weather in Riyadh",
          data: data.hourly.temperature_2m,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: false,
    },
  });
};

const export_csv = (arrayHeader, arrayData, delimiter, fileName) => {
  let header = arrayHeader.join(delimiter) + "\n";
  let csv = header;
  arrayData.forEach((array) => {
    csv += array.join(delimiter) + "\n";
  });

  let csvData = new Blob([csv], { type: "text/csv" });
  let csvUrl = URL.createObjectURL(csvData);

  let hiddenElement = document.createElement("a");
  hiddenElement.href = csvUrl;
  hiddenElement.target = "_blank";
  hiddenElement.download = fileName + ".csv";
  hiddenElement.click();
};

const exportCSVButton = document.getElementById("btn");
exportCSVButton.addEventListener("click", async () => {
  const weatherDataArray = [];
  weatherData.hourly.temperature_2m.forEach((el, i) => {
    if (el) {
      weatherDataArray.push([
        i,
        weatherData.hourly.time[i],
        weatherData.hourly.temperature_2m[i],
      ]);
    }
  });

  export_csv(["no", "time", "temperature"], weatherDataArray, ",", "weather");
});

let weatherData;
(async ()=>{
    weatherData = await getWeatherData();
    console.log(weatherData);
    generateChart(weatherData);

})()

//https://www.chartjs.org/
//https://open-meteo.com/en/docs