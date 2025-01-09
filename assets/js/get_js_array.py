import csv
import os

# Definisci il percorso del file CSV nella cartella 'mashup'
file_path = os.path.join("data", "mashup", "D1_D4_D5.csv")  # Sostituisci "dati.csv" con il nome del tuo file CSV

# Verifica se il file esiste
if os.path.exists(file_path):
    # Leggi il file CSV
    with open(file_path, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        # Converti i dati nel formato desiderato
        data = []
        for row in reader:
            territory = row['Territory']
            cause = row['Possible causes']
            value = float(row['Causes Value (%)'])
            victims = round(float(row['Victims per 100.000 inhabitants (%)']), 2)
            
            data.append({
                "territory": territory,
                "cause": cause,
                "value": value,
                "victims": victims
            })

    # Crea l'array in formato JavaScript
    js_array = "const data = [\n"
    for item in data:
        js_array += f'  {{territory: "{item["territory"]}", cause: "{item["cause"]}", value: {item["value"]}, victims: {item["victims"]}}},\n'
    js_array = js_array.rstrip(",\n") + "\n];"

    # Stampa l'array JavaScript
    print(js_array)
else:
    print(f"Il file {file_path} non esiste.")
