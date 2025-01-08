document.addEventListener("DOMContentLoaded", () => {
  console.log("D3 version:", d3.version);
  
  // Configurations
const width = 800;
const height = 600;
const margin = { top: 20, right: 30, bottom: 50, left: 50 };

// Dati integrati direttamente nel codice
const data = [
  { Territory: "Piemonte", Cause: "difficulty in managing anger", "Causes Value": 70.9, "Victims Value": 722 },
  { Territory: "Piemonte", Cause: "considering women to be property", "Causes Value": 78.5, "Victims Value": 722 },
  { Territory: "Piemonte", Cause: "having negative experiences of family violence as a child", "Causes Value": 62.4, "Victims Value": 722 },
  { Territory: "Piemonte", Cause: "religious reasons", "Causes Value": 36.6, "Victims Value": 722 },
  { Territory: "Piemonte", Cause: "not standing women’s empowerment", "Causes Value": 64.4, "Victims Value": 722 },
  { Territory: "Piemonte", Cause: "abuse of drugs or alcohol", "Causes Value": 72.9, "Victims Value": 722 },
  { Territory: "Piemonte", Cause: "need to feel superior than one’s partner/wife", "Causes Value": 75.0, "Victims Value": 722 },
  { Territory: "Liguria", Cause: "difficulty in managing anger", "Causes Value": 70.2, "Victims Value": 234 },
  { Territory: "Liguria", Cause: "considering women to be property", "Causes Value": 76.1, "Victims Value": 234 },
  { Territory: "Liguria", Cause: "having negative experiences of family violence as a child", "Causes Value": 61.8, "Victims Value": 234 },
  { Territory: "Liguria", Cause: "religious reasons", "Causes Value": 39.8, "Victims Value": 234 }
];

// Filtra i dati per causa selezionata
const filterData = (cause) => {
  return cause === "all" ? data : data.filter(d => d.Cause === cause);
};

// Aggiorna le scale in base ai dati filtrati
const updateScales = (filteredData) => {
  xScale.domain([0, d3.max(filteredData, d => d["Victims Value"])]);
  yScale.domain([0, d3.max(filteredData, d => d["Causes Value"])]);
};

// Funzione per rendere il grafico
const renderChart = (filteredData) => {
  svg.selectAll("*").remove();

  // Aggiorna le scale
  updateScales(filteredData);

  // Griglia orizzontale
  svg.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,0)`)
    .call(d3.axisLeft(yScale)
      .tickSize(-width + margin.left + margin.right)
      .tickFormat("")
    )
    .selectAll("line")
    .attr("stroke", "#ccc")
    .attr("stroke-dasharray", "4");

  // Griglia verticale
  svg.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale)
      .tickSize(-height + margin.top + margin.bottom)
      .tickFormat("")
    )
    .selectAll("line")
    .attr("stroke", "#ccc")
    .attr("stroke-dasharray", "4");

  // Assi
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale))
    .append("text")
    .attr("x", width / 2)
    .attr("y", 40)
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .text("Victims Value");

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale))
    .append("text")
    .attr("x", -height / 2)
    .attr("y", -40)
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Causes Value (%)");

  // Bolle
  svg.selectAll("circle")
    .data(filteredData)
    .join("circle")
    .attr("cx", d => xScale(d["Victims Value"]))
    .attr("cy", d => yScale(d["Causes Value"]))
    .attr("r", 10)
    .attr("fill", "steelblue")
    .attr("opacity", 0.7)
    .on("mouseover", (event, d) => {
      tooltip.style("visibility", "visible")
        .html(`
          <strong>Region:</strong> ${d.Territory}<br>
          <strong>Cause Value:</strong> ${d["Causes Value"].toFixed(1)}%<br>
          <strong>Victim Value:</strong> ${d["Victims Value"]}
        `)
        .style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY - 20}px`);
    })
    .on("mousemove", event => {
      tooltip.style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY - 20}px`);
    })
    .on("mouseout", () => {
      tooltip.style("visibility", "hidden");
    });
};

// Inizializzazione
const svg = d3.select("#chart-bubble")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const tooltip = d3.select("#tooltip");

const xScale = d3.scaleLinear().range([margin.left, width - margin.right]);
const yScale = d3.scaleLinear().range([height - margin.bottom, margin.top]);

// Primo rendering con tutti i dati
renderChart(data);

// Event listener per la casella di selezione
d3.select("#cause-select").on("change", function () {
  const selectedCause = this.value;
  const filteredData = filterData(selectedCause);
  renderChart(filteredData);
});

});
