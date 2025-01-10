import os
from rdflib import Graph, Namespace, Literal, URIRef
from rdflib.namespace import DCTERMS, PROV, FOAF, XSD, RDF, RDFS

# Definizione dei namespace
DCATAPIT = Namespace("http://dati.gov.it/onto/dcatapit/")
DCAT = Namespace("https://www.w3.org/ns/dcat#")
ADMS = Namespace("http://www.w3.org/ns/adms#")
SKOS = Namespace("http://www.w3.org/2004/02/skos/core#")
OV = Namespace("https://github.com/Chiaramartina/Open-Voices")
CC = Namespace("http://creativecommons.org/ns#")

# Creazione del grafo
g = Graph()
catalog_g = Graph()
g.bind("dcat3", DCAT)
g.bind("dct", DCTERMS)
g.bind("prov", PROV)
g.bind("foaf", FOAF)
g.bind("adms", ADMS)
g.bind("xsd", XSD)
g.bind("skos", SKOS)
g.bind("dcatapit", DCATAPIT)
g.bind("ov", OV)
g.bind("cc", CC)

catalog_g.bind("dcat3", DCAT)
catalog_g.bind("dct", DCTERMS)
catalog_g.bind("foaf", FOAF)
catalog_g.bind("adms", ADMS)
catalog_g.bind("xsd", XSD)
catalog_g.bind("dcatapit", DCATAPIT)
catalog_g.bind("cc", CC)

# Lista dei dataset
datasets = [
    {
        "id": "D1_POPULATION",
        "title": "Resident municipal population by age, sex and marital status",
        "description": "Dataset on the resident municipal population disaggregated by age, sex, and marital status.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/POP",
        "first_production_year": "2018",
        "publisher": "https://viaf.org/viaf/1649148814291645330008/#Istituto_centrale_di_statistica_(Italy)",
        "license": "https://creativecommons.org/licenses/by/3.0/",
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/original/D1_POPULATION.csv"
    },
    {
        "id": "D2_OPINIONS_VIOLENCE_GEOAREAS",
        "title": "Opinions about gender roles and about violence against women - adults: Opinions about sexual violence - geographical areas",
        "description": "Dataset on opinions about gender roles and violence against women, focusing on geographical areas.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "first_production_year": "2018",
        "publisher": "https://viaf.org/viaf/1649148814291645330008/#Istituto_centrale_di_statistica_(Italy)",
        "license": "https://creativecommons.org/licenses/by/3.0/",
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/original/D2_OPINIONS_VIOLENCE_GEOAREAS.csv"
    },
    {
        "id": "D3_OPINIONS_PARTNER_GEOAREAS",
        "title": "Opinions about gender roles and about violence against women - adults: Acceptability of intimate partner violence - geographical areas",
        "description": "Dataset on acceptability of intimate partner violence, disaggregated by geographical areas.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "first_production_year": "2018",
        "publisher": "https://viaf.org/viaf/1649148814291645330008/#Istituto_centrale_di_statistica_(Italy)",
        "license": "https://creativecommons.org/licenses/by/3.0/",
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/original/D3_OPINIONS_PARTNER_GEOAREAS.csv"
    },
    {
        "id": "D4_VICTIMS",
        "title": "Victims turning to 1522 (anti-violence and stalking number) – sex, age class, geographical areas",
        "description": "Dataset on victims who contacted the anti-violence and stalking number, disaggregated by sex, age class, and geographical areas.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "first_production_year": "2018",
        "publisher": "https://viaf.org/viaf/1649148814291645330008/#Istituto_centrale_di_statistica_(Italy)",
        "license": "https://creativecommons.org/licenses/by/3.0/",
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/original/D4_VICTIMS.csv"
    },
    {
        "id": "D5_VIOLENCE_CAUSES",
        "title": "Opinions about gender roles and about violence against women - adults: Indication of some causes of intimate partner violence – geographical areas",
        "description": "Dataset on causes of violence against women, as perceived by adults.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "first_production_year": "2018",
        "publisher": "https://viaf.org/viaf/1649148814291645330008/#Istituto_centrale_di_statistica_(Italy)",
        "license": "https://creativecommons.org/licenses/by/3.0/",
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/original/D5_CAUSES_INDICATION.csv"
    },
    {
        "id": "D1_D4_D5",
        "distribution": "CSV",
        "title": "Regional Analysis of Violence Causes and Victimization in Italy",
        "description": "This dataset provides information on violence-related data across Italian regions. It includes the territory (representing different Italian regions), possible causes of violence, the corresponding value assigned to each cause, and the number of victims per 100,000 inhabitants for each region. The dataset aims to analyze and compare the regional variations in violence causes and their impact on the population.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "first_production_year": "2024",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "publisher": ["https://github.com/Chiaramartina", "https://github.com/Asemica-me"],
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/mashup/D1_D4_D5.csv"
    },
    {
        "id": "kmean_clusters",
        "distribution": "CSV",
        "title": "Cluster Analysis of Victim Rates across Italian Regions",
        "description": "The dataset outlines population, victim counts, and victim rates per 100,000 inhabitants across Italian regions, categorized into Low, Medium, and High intensity clusters. Regions like Lazio and Campania show higher victim rates (High), while areas such as Valle d'Aosta and Trentino Alto Adige have lower rates (Low). The Medium cluster includes regions with intermediate rates, such as Piemonte and Toscana. Cluster assignments are informed by K-Means values.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "first_production_year": "2024",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "publisher": ["https://github.com/Asemica-me"],
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/mashup/kmean_clusters.csv"
    },
    {
        "id": "D1_D4_TOTAL",
        "distribution": "CSV",
        "title": "Total Victim Rates per 100k Inhabitants by Region in Italy",
        "description": "The dataset provides victim rates per 100,000 inhabitants across Italian regions, with values ranging from 7.90% (Molise) to 21.34% (Lazio). Regions like Lazio, Abruzzo, and Campania exhibit higher rates, while Valle d'Aosta, Trentino Alto Adige, and Molise report the lowest. Most other regions show moderate rates between these extremes.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "first_production_year": "2024",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "publisher": ["https://github.com/Chiaramartina", "https://github.com/Asemica-me"],
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/mashup/D1_D4_TOTAL.csv"
    },
    {
        "id": "D1_D4_FEMALES",
        "distribution": "CSV",
        "title": "Females Victim Rates per 100k Inhabitants by Region in Italy",
        "description": "The dataset presents victim rates per 100,000 inhabitants across Italian regions. Lazio records the highest rate (20.7%), while Valle d'Aosta (7.16%) and Molise (7.57%) have the lowest. Most regions fall within a moderate range, between 10%, and 16%.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "first_production_year": "2024",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "publisher": ["https://github.com/Chiaramartina", "https://github.com/Asemica-me"],
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/mashup/D1_D4_FEMALES.csv"
    },
    {
        "id": "D1_D4_MALES",
        "distribution": "CSV",
        "title": "Males Victim Rates per 100k Inhabitants by Region in Italy",
        "description": "The dataset details male victim rates per 100,000 inhabitants across Italian regions. Lazio reports the highest rate (0.64%), followed by Basilicata, Abruzzo, and Puglia (0.53–0.54%). Calabria has the lowest rate (0.16%), while most regions fall between 0.3 and 0.4%.",
        "theme": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "first_production_year": "2024",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "publisher": ["https://github.com/Chiaramartina", "https://github.com/Asemica-me"],
        "uri": "https://github.com/Chiaramartina/Open-Voices/blob/main/data/mashup/D1_D4_MALES.csv"
    },
]

# Creazione dei dataset
for dataset in datasets:
    dataset_uri = OV[dataset["id"]]
    g.add((dataset_uri, DCAT.title, Literal(dataset["title"], lang="en")))
    g.add((dataset_uri, RDF.type, DCAT.Dataset))
    g.add((dataset_uri, RDF.type, PROV.Entity))
    g.add((dataset_uri, DCTERMS.description, Literal(dataset["description"], lang="en")))
    g.add((dataset_uri, DCAT.theme, URIRef(dataset["theme"])))
    g.add((dataset_uri, DCAT.releaseDate, Literal(dataset["first_production_year"], datatype=XSD.year)))
    g.add((dataset_uri, DCTERMS.accessRights, Literal("Public", lang="en")))
    g.add((dataset_uri, DCAT.license, URIRef(dataset["license"])))
    g.add((dataset_uri, DCAT.distribution, Literal("Excel")))
    g.add((dataset_uri, DCAT.distribution, Literal("CSV")))
    g.add((dataset_uri, DCAT.distribution, Literal("PC-axis")))
    g.add((dataset_uri, DCAT.distribution, Literal("SDMX-XML")))
    g.add((dataset_uri, DCAT.language,  Literal("it", datatype=XSD.language)))
    g.add((dataset_uri, DCAT.language,  Literal("en", datatype=XSD.language)))
for publisher in dataset["publisher"]:
    g.add((dataset_uri, PROV.wasAttributedTo, URIRef(publisher))) 


    # Aggiungi al catalogo
    catalog_g.add((URIRef("https://github.com/Chiaramartina/Open-Voices/tree/main/data"),
                   DCAT.dataset, URIRef(dataset["uri"])))

# Aggiungi informazioni al catalogo
catalog_uri = URIRef("https://github.com/Chiaramartina/Open-Voices/tree/main/data")
catalog_g.add((catalog_uri, RDF.type, DCAT.Catalog))
catalog_g.add((catalog_uri, DCTERMS.title, Literal("Open Voices OADE Project - Datasets Catalog", lang="en")))
catalog_g.add((catalog_uri, DCTERMS.description,
               Literal("Catalog containing the datasets for the Open Voices project", lang="en")))
catalog_g.add((catalog_uri, PROV.wasAttributedTo, URIRef("https://github.com/Chiaramartina/Open-Voices")))
catalog_g.add((catalog_uri, DCTERMS.issued, Literal("2025-01-01", datatype=XSD.date)))
catalog_g.add((catalog_uri, DCTERMS.modified, Literal("2025-01-01", datatype=XSD.date)))
catalog_g.add((catalog_uri, DCTERMS.license, URIRef("https://creativecommons.org/licenses/by/4.0/")))
catalog_g.add((catalog_uri, DCAT.language,  Literal("en", datatype=XSD.language)))
catalog_g.add((catalog_uri, ADMS.identifier,  Literal("OV-Catalog", datatype=XSD.string)))

# License
license_uri = URIRef("https://creativecommons.org/licenses/by/4.0/")
catalog_g.add((catalog_uri, DCTERMS.license, license_uri))

catalog_g.add((license_uri, RDF.type, CC.License))
catalog_g.add((license_uri, CC.legalcode, URIRef("http://creativecommons.org/licenses/by/4.0/")))
catalog_g.add((license_uri, CC.permits, CC.Reproduction))
catalog_g.add((license_uri, CC.permits, CC.Distribution))
catalog_g.add((license_uri, CC.permits, CC.DerivativeWorks))
catalog_g.add((license_uri, CC.requires, CC.Notice))
catalog_g.add((license_uri, CC.requires, CC.Attribution))
catalog_g.add((license_uri, RDFS.label, Literal("Creative Commons CC-BY 4.0", lang="en")))



# Creazione della directory serialisations se non esiste
output_dir = "serialization"

# Salvataggio del file nella directory
datasets_file = os.path.join(output_dir, "serial_datasets.ttl")
catalog_file = os.path.join(output_dir, "serial_catalog.ttl")

with open(datasets_file, "w", encoding="utf-8") as f:
    f.write(g.serialize(format="turtle"))

with open(catalog_file, "w", encoding="utf-8") as f:
    f.write(catalog_g.serialize(format="turtle"))

print(f"Serializzazione completata! File salvati come {datasets_file} e {catalog_file}.")
