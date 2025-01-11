// Dati delle vittime femminili, maschili e totali per 100.000 abitanti

var regioni = [
    "Piemonte", "Valle d'Aosta", "Liguria", "Lombardia", 
    "Trentino-Alto Adige", "Veneto", "Friuli-Venezia Giulia", 
    "Emilia-Romagna", "Toscana", "Umbria", "Marche", "Lazio", "Abruzzo", 
    "Molise", "Campania", "Puglia", "Basilicata", "Calabria", "Sicilia", "Sardegna"
];

var vittimeFemminili = [
    16.38, 7.16, 14.87, 13.73, 10.52, 12.57, 10.57, 11.5, 15.1, 
    13.28, 14.87, 20.7, 16.68, 7.57, 16.72, 14.84, 10.03, 9.99, 11.18, 14.49
];

var vittimeMaschili = [
    0.3, 0.8, 0.39, 0.41, 0.37, 0.37, 0.33, 0.2, 0.38, 
    0.23, 0.26, 0.64, 0.54, 0.33, 0.52, 0.53, 0.54, 0.16, 0.33, 0.43
];

const percentualiTotale = [
    16.68, 7.96, 15.26, 14.13, 10.89, 12.94, 10.91, 11.71, 15.48, 
    13.51, 15.13, 21.34, 17.22, 7.9, 17.25, 15.37, 10.56, 10.15, 11.51, 14.92
];

var dati = [
    {
        type: 'bar',
        name: 'Total',
        x: regioni,
        y: percentualiTotale,
        marker: {
            color: 'rgb(100, 149, 237)' // Colore delle barre totali
        }
    },
    {
        type: 'bar',
        x: regioni,
        y: vittimeFemminili,
        name: 'Females',
        marker: { color: 'brown' }
    },
    {
        type: 'bar',
        x: regioni,
        y: vittimeMaschili,
        name: 'Males',
        marker: { color: 'rgb(206, 174, 14)' }
    }
];

var layout = {
    barmode: 'group', // barre separate
    xaxis: {
        tickangle: 45, // Imposta l'angolo delle etichette delle regioni a 45 gradi
    },
    yaxis: {
        title: 'Victims value (%)',
    }
};

// Creazione del grafico
Plotly.newPlot('grafico', dati, layout);
