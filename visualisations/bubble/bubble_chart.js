const data = [
{territory: "Piemonte", cause: "difficulty in managing anger", value: 70.9, victims: 16.68},
  {territory: "Piemonte", cause: "considering women to be property", value: 78.5, victims: 16.68},
  {territory: "Piemonte", cause: "having negative experiences of family violence as a child", value: 62.4, victims: 16.68},
  {territory: "Piemonte", cause: "religious reasons", value: 36.6, victims: 16.68},
  {territory: "Piemonte", cause: "not standing women’s empowerment", value: 64.4, victims: 16.68},
  {territory: "Piemonte", cause: "abuse of drugs or alcohol", value: 72.9, victims: 16.68},
  {territory: "Piemonte", cause: "need to feel superior than one’s partner/wife", value: 75.0, victims: 16.68},
  {territory: "Valle d'Aosta / Vallée d'Aoste", cause: "difficulty in managing anger", value: 72.7, victims: 7.96},
  {territory: "Valle d'Aosta / Vallée d'Aoste", cause: "considering women to be property", value: 76.1, victims: 7.96},
  {territory: "Valle d'Aosta / Vallée d'Aoste", cause: "having negative experiences of family violence as a child", value: 64.3, victims: 7.96},
  {territory: "Valle d'Aosta / Vallée d'Aoste", cause: "religious reasons", value: 35.8, victims: 7.96},
  {territory: "Valle d'Aosta / Vallée d'Aoste", cause: "not standing women’s empowerment", value: 56.7, victims: 7.96},
  {territory: "Valle d'Aosta / Vallée d'Aoste", cause: "abuse of drugs or alcohol", value: 75.3, victims: 7.96},
  {territory: "Valle d'Aosta / Vallée d'Aoste", cause: "need to feel superior than one’s partner/wife", value: 74.3, victims: 7.96},
  {territory: "Liguria", cause: "difficulty in managing anger", value: 70.2, victims: 15.26},
  {territory: "Liguria", cause: "considering women to be property", value: 76.1, victims: 15.26},
  {territory: "Liguria", cause: "having negative experiences of family violence as a child", value: 61.8, victims: 15.26},
  {territory: "Liguria", cause: "religious reasons", value: 39.8, victims: 15.26},
  {territory: "Liguria", cause: "not standing women’s empowerment", value: 62.6, victims: 15.26},
  {territory: "Liguria", cause: "abuse of drugs or alcohol", value: 72.5, victims: 15.26},
  {territory: "Liguria", cause: "need to feel superior than one’s partner/wife", value: 69.2, victims: 15.26},
  {territory: "Lombardia", cause: "difficulty in managing anger", value: 71.2, victims: 14.13},
  {territory: "Lombardia", cause: "considering women to be property", value: 80.2, victims: 14.13},
  {territory: "Lombardia", cause: "having negative experiences of family violence as a child", value: 62.4, victims: 14.13},
  {territory: "Lombardia", cause: "religious reasons", value: 37.6, victims: 14.13},
  {territory: "Lombardia", cause: "not standing women’s empowerment", value: 61.5, victims: 14.13},
  {territory: "Lombardia", cause: "abuse of drugs or alcohol", value: 78.9, victims: 14.13},
  {territory: "Lombardia", cause: "need to feel superior than one’s partner/wife", value: 78.3, victims: 14.13},
  {territory: "Trentino Alto Adige / Südtirol", cause: "difficulty in managing anger", value: 70.7, victims: 10.89},
  {territory: "Trentino Alto Adige / Südtirol", cause: "considering women to be property", value: 77.7, victims: 10.89},
  {territory: "Trentino Alto Adige / Südtirol", cause: "having negative experiences of family violence as a child", value: 64.6, victims: 10.89},
  {territory: "Trentino Alto Adige / Südtirol", cause: "religious reasons", value: 42.5, victims: 10.89},
  {territory: "Trentino Alto Adige / Südtirol", cause: "not standing women’s empowerment", value: 62.8, victims: 10.89},
  {territory: "Trentino Alto Adige / Südtirol", cause: "abuse of drugs or alcohol", value: 79.4, victims: 10.89},
  {territory: "Trentino Alto Adige / Südtirol", cause: "need to feel superior than one’s partner/wife", value: 73.9, victims: 10.89},        
  {territory: "Veneto", cause: "difficulty in managing anger", value: 67.7, victims: 12.94},
  {territory: "Veneto", cause: "considering women to be property", value: 76.0, victims: 12.94},
  {territory: "Veneto", cause: "having negative experiences of family violence as a child", value: 64.8, victims: 12.94},
  {territory: "Veneto", cause: "religious reasons", value: 37.5, victims: 12.94},
  {territory: "Veneto", cause: "not standing women’s empowerment", value: 59.8, victims: 12.94},
  {territory: "Veneto", cause: "abuse of drugs or alcohol", value: 74.5, victims: 12.94},
  {territory: "Veneto", cause: "need to feel superior than one’s partner/wife", value: 74.1, victims: 12.94},
  {territory: "Friuli-Venezia Giulia", cause: "difficulty in managing anger", value: 75.6, victims: 10.91},
  {territory: "Friuli-Venezia Giulia", cause: "considering women to be property", value: 81.2, victims: 10.91},
  {territory: "Friuli-Venezia Giulia", cause: "having negative experiences of family violence as a child", value: 63.8, victims: 10.91},     
  {territory: "Friuli-Venezia Giulia", cause: "religious reasons", value: 45.7, victims: 10.91},
  {territory: "Friuli-Venezia Giulia", cause: "not standing women’s empowerment", value: 63.7, victims: 10.91},
  {territory: "Friuli-Venezia Giulia", cause: "abuse of drugs or alcohol", value: 79.8, victims: 10.91},
  {territory: "Friuli-Venezia Giulia", cause: "need to feel superior than one’s partner/wife", value: 79.0, victims: 10.91},
  {territory: "Emilia-Romagna", cause: "difficulty in managing anger", value: 70.5, victims: 11.71},
  {territory: "Emilia-Romagna", cause: "considering women to be property", value: 80.3, victims: 11.71},
  {territory: "Emilia-Romagna", cause: "having negative experiences of family violence as a child", value: 66.3, victims: 11.71},
  {territory: "Emilia-Romagna", cause: "religious reasons", value: 38.9, victims: 11.71},
  {territory: "Emilia-Romagna", cause: "not standing women’s empowerment", value: 66.9, victims: 11.71},
  {territory: "Emilia-Romagna", cause: "abuse of drugs or alcohol", value: 74.5, victims: 11.71},
  {territory: "Emilia-Romagna", cause: "need to feel superior than one’s partner/wife", value: 78.4, victims: 11.71},
  {territory: "Toscana", cause: "difficulty in managing anger", value: 71.8, victims: 15.48},
  {territory: "Toscana", cause: "considering women to be property", value: 77.7, victims: 15.48},
  {territory: "Toscana", cause: "having negative experiences of family violence as a child", value: 61.1, victims: 15.48},
  {territory: "Toscana", cause: "religious reasons", value: 36.5, victims: 15.48},
  {territory: "Toscana", cause: "not standing women’s empowerment", value: 61.9, victims: 15.48},
  {territory: "Toscana", cause: "abuse of drugs or alcohol", value: 74.0, victims: 15.48},
  {territory: "Toscana", cause: "need to feel superior than one’s partner/wife", value: 77.7, victims: 15.48},
  {territory: "Umbria", cause: "difficulty in managing anger", value: 75.1, victims: 13.51},
  {territory: "Umbria", cause: "considering women to be property", value: 77.6, victims: 13.51},
  {territory: "Umbria", cause: "having negative experiences of family violence as a child", value: 64.4, victims: 13.51},
  {territory: "Umbria", cause: "religious reasons", value: 40.6, victims: 13.51},
  {territory: "Umbria", cause: "not standing women’s empowerment", value: 62.1, victims: 13.51},
  {territory: "Umbria", cause: "abuse of drugs or alcohol", value: 70.4, victims: 13.51},
  {territory: "Umbria", cause: "need to feel superior than one’s partner/wife", value: 72.5, victims: 13.51},
  {territory: "Marche", cause: "difficulty in managing anger", value: 67.4, victims: 15.13},
  {territory: "Marche", cause: "considering women to be property", value: 74.3, victims: 15.13},
  {territory: "Marche", cause: "having negative experiences of family violence as a child", value: 64.7, victims: 15.13},
  {territory: "Marche", cause: "religious reasons", value: 37.7, victims: 15.13},
  {territory: "Marche", cause: "not standing women’s empowerment", value: 60.4, victims: 15.13},
  {territory: "Marche", cause: "abuse of drugs or alcohol", value: 76.5, victims: 15.13},
  {territory: "Marche", cause: "need to feel superior than one’s partner/wife", value: 73.1, victims: 15.13},
  {territory: "Lazio", cause: "difficulty in managing anger", value: 72.5, victims: 21.34},
  {territory: "Lazio", cause: "considering women to be property", value: 77.6, victims: 21.34},
  {territory: "Lazio", cause: "having negative experiences of family violence as a child", value: 61.0, victims: 21.34},
  {territory: "Lazio", cause: "religious reasons", value: 37.0, victims: 21.34},
  {territory: "Lazio", cause: "not standing women’s empowerment", value: 64.2, victims: 21.34},
  {territory: "Lazio", cause: "abuse of drugs or alcohol", value: 78.5, victims: 21.34},
  {territory: "Lazio", cause: "need to feel superior than one’s partner/wife", value: 74.7, victims: 21.34},
  {territory: "Abruzzo", cause: "difficulty in managing anger", value: 67.4, victims: 17.22},
  {territory: "Abruzzo", cause: "considering women to be property", value: 71.6, victims: 17.22},
  {territory: "Abruzzo", cause: "having negative experiences of family violence as a child", value: 64.9, victims: 17.22},
  {territory: "Abruzzo", cause: "religious reasons", value: 28.5, victims: 17.22},
  {territory: "Abruzzo", cause: "not standing women’s empowerment", value: 58.0, victims: 17.22},
  {territory: "Abruzzo", cause: "abuse of drugs or alcohol", value: 74.8, victims: 17.22},
  {territory: "Abruzzo", cause: "need to feel superior than one’s partner/wife", value: 68.3, victims: 17.22},
  {territory: "Molise", cause: "difficulty in managing anger", value: 71.5, victims: 7.9},
  {territory: "Molise", cause: "considering women to be property", value: 76.6, victims: 7.9},
  {territory: "Molise", cause: "having negative experiences of family violence as a child", value: 64.5, victims: 7.9},
  {territory: "Molise", cause: "religious reasons", value: 28.9, victims: 7.9},
  {territory: "Molise", cause: "not standing women’s empowerment", value: 57.0, victims: 7.9},
  {territory: "Molise", cause: "abuse of drugs or alcohol", value: 77.6, victims: 7.9},
  {territory: "Molise", cause: "need to feel superior than one’s partner/wife", value: 75.3, victims: 7.9},
  {territory: "Campania", cause: "difficulty in managing anger", value: 71.4, victims: 17.25},
  {territory: "Campania", cause: "considering women to be property", value: 76.5, victims: 17.25},
  {territory: "Campania", cause: "having negative experiences of family violence as a child", value: 65.5, victims: 17.25},
  {territory: "Campania", cause: "religious reasons", value: 24.6, victims: 17.25},
  {territory: "Campania", cause: "not standing women’s empowerment", value: 63.5, victims: 17.25},
  {territory: "Campania", cause: "abuse of drugs or alcohol", value: 73.6, victims: 17.25},
  {territory: "Campania", cause: "need to feel superior than one’s partner/wife", value: 73.0, victims: 17.25},
  {territory: "Puglia", cause: "difficulty in managing anger", value: 69.5, victims: 15.37},
  {territory: "Puglia", cause: "considering women to be property", value: 78.3, victims: 15.37},
  {territory: "Puglia", cause: "having negative experiences of family violence as a child", value: 66.4, victims: 15.37},
  {territory: "Puglia", cause: "religious reasons", value: 24.1, victims: 15.37},
  {territory: "Puglia", cause: "not standing women’s empowerment", value: 64.4, victims: 15.37},
  {territory: "Puglia", cause: "abuse of drugs or alcohol", value: 75.8, victims: 15.37},
  {territory: "Puglia", cause: "need to feel superior than one’s partner/wife", value: 75.6, victims: 15.37},
  {territory: "Basilicata", cause: "difficulty in managing anger", value: 71.3, victims: 10.56},
  {territory: "Basilicata", cause: "considering women to be property", value: 77.8, victims: 10.56},
  {territory: "Basilicata", cause: "having negative experiences of family violence as a child", value: 68.0, victims: 10.56},
  {territory: "Basilicata", cause: "religious reasons", value: 23.6, victims: 10.56},
  {territory: "Basilicata", cause: "not standing women’s empowerment", value: 59.0, victims: 10.56},
  {territory: "Basilicata", cause: "abuse of drugs or alcohol", value: 75.2, victims: 10.56},
  {territory: "Basilicata", cause: "need to feel superior than one’s partner/wife", value: 71.2, victims: 10.56},
  {territory: "Calabria", cause: "difficulty in managing anger", value: 64.3, victims: 10.15},
  {territory: "Calabria", cause: "considering women to be property", value: 72.9, victims: 10.15},
  {territory: "Calabria", cause: "having negative experiences of family violence as a child", value: 64.3, victims: 10.15},
  {territory: "Calabria", cause: "religious reasons", value: 28.8, victims: 10.15},
  {territory: "Calabria", cause: "not standing women’s empowerment", value: 59.8, victims: 10.15},
  {territory: "Calabria", cause: "abuse of drugs or alcohol", value: 69.0, victims: 10.15},
  {territory: "Calabria", cause: "need to feel superior than one’s partner/wife", value: 70.0, victims: 10.15},
  {territory: "Sicilia", cause: "difficulty in managing anger", value: 71.2, victims: 11.51},
  {territory: "Sicilia", cause: "considering women to be property", value: 77.2, victims: 11.51},
  {territory: "Sicilia", cause: "having negative experiences of family violence as a child", value: 63.9, victims: 11.51},
  {territory: "Sicilia", cause: "religious reasons", value: 25.5, victims: 11.51},
  {territory: "Sicilia", cause: "not standing women’s empowerment", value: 62.5, victims: 11.51},
  {territory: "Sicilia", cause: "abuse of drugs or alcohol", value: 73.3, victims: 11.51},
  {territory: "Sicilia", cause: "need to feel superior than one’s partner/wife", value: 73.7, victims: 11.51},
  {territory: "Sardegna", cause: "difficulty in managing anger", value: 69.3, victims: 14.92},
  {territory: "Sardegna", cause: "considering women to be property", value: 77.3, victims: 14.92},
  {territory: "Sardegna", cause: "having negative experiences of family violence as a child", value: 61.6, victims: 14.92},
  {territory: "Sardegna", cause: "religious reasons", value: 31.5, victims: 14.92},
  {territory: "Sardegna", cause: "not standing women’s empowerment", value: 62.2, victims: 14.92},
  {territory: "Sardegna", cause: "abuse of drugs or alcohol", value: 79.6, victims: 14.92},
  {territory: "Sardegna", cause: "need to feel superior than one’s partner/wife", value: 72.9, victims: 14.92}
];

// Preparazione dei dati per il grafico
const causes = [...new Set(data.map(d => d.cause))]; // Identificare tutte le cause uniche
const regions = [...new Set(data.map(d => d.territory))]; // Identificare tutte le regioni uniche

const traces = causes.map(cause => {
  const filteredData = data.filter(d => d.cause === cause);

  return {
      x: filteredData.map(d => d.value), // Asse X: valori della causa
      y: filteredData.map(d => d.victims), // Asse Y: vittime per 100.000 abitanti
      text: filteredData.map(d => `Territory: ${d.territory}<br>Cause: ${d.cause}<br>Cause Value: ${d.value}<br>Victims: ${d.victims}`), // Testo per ogni bolla: nome della regione
      mode: 'markers', // Modalità marker per il bubble chart
      marker: {
          size: filteredData.map(d => d.victims * 1), // Dimensione della bolla proporzionale alle vittime
          color: filteredData.map(d => d.victims), // Colore in base al numero di vittime
          colorscale: [
            ['0.0', 'rgb(49,54,149)'],
            ['0.111111111111', 'rgb(69,117,180)'],
            ['0.222222222222', 'rgb(116,173,209)'],
            ['0.333333333333', 'rgb(171,217,233)'],
            ['0.444444444444', 'rgb(224,243,248)'],
            ['0.555555555556', 'rgb(254,224,144)'],
            ['0.666666666667', 'rgb(253,174,97)'],
            ['0.777777777778', 'rgb(244,109,67)'],
            ['0.888888888889', 'rgb(215,48,39)'],
            ['1.0', 'rgb(165,0,38)']
        ], // Scala di colore
          showscale: true
      },
      name: cause // Etichetta per ogni causa
  };
});

// Layout del grafico con miglioramenti per la leggibilità
const layout_bubble = {
  title: 'Victims by Region and Cause',
  xaxis: {
      title: 'Cause Value',
      range: [0, 85], // Impostare un range specifico per l'asse X
      tickmode: 'array',
      tickvals: [10, 20, 30, 40, 50, 60, 70, 80] // Etichette sull'asse X
  },
  yaxis: {
      title: 'Victims per 100k inhabitants',
      range: [0, 25], // Impostare un range per l'asse Y
      tickmode: 'array',
      tickvals: [0, 5, 10, 15, 20, 25] // Etichette sull'asse Y
  },
  showlegend: true,
  hovermode: 'closest',
  margin: { t: 40, r: 40, b: 60, l: 60 }, // Aggiungere margini per migliorare la visibilità
  plot_bgcolor: '#f8f9fa', // Colore di sfondo per il grafico
  paper_bgcolor: '#ffffff', // Colore di sfondo per l'intera area
  font: {
      family: 'Arial, sans-serif',
      size: 12
  },
  titlefont: {
      size: 18,
      family: 'Arial, sans-serif'
  },
  legend: {
      x: 1.3, // Spostare la legenda verso destra
      y: 1, // Posizionare la legenda in alto
      traceorder: 'normal',
      font: {
          family: 'Arial, sans-serif',
          size: 12
      },
      xpad: 20 // Distanza tra la colorscale e la legenda
  },
  coloraxis: {
      colorbar: {
          tickvals: [0, 5, 10, 15, 20, 25, 30],
          ticktext: ['0', '5', '10', '15', '20', '25', '30'],
          title: 'Victims per 100k'
      }
  }
};

// Creazione del grafico
Plotly.newPlot('bubble-chart', traces, layout_bubble);