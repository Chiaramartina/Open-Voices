    // LEAFLET LICENSE

    // BSD 2-Clause License
    //
    // Copyright (c) 2010-2023, Volodymyr Agafonkin
    // Copyright (c) 2010-2011, CloudMade
    // All rights reserved.
    //
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions are met:
    //
    // 1. Redistributions of source code must retain the above copyright notice, this
    //    list of conditions and the following disclaimer.
    //
    // 2. Redistributions in binary form must reproduce the above copyright notice,
    //    this list of conditions and the following disclaimer in the documentation
    //    and/or other materials provided with the distribution.
    //
    // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    // AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    // IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    // DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    // FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    // DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    // SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    // CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    // OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


    $(document).ready(function() { 
      var map_regions = L.map('map_regions').setView([42.5, 12.5], 6);
  
      // Add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map_regions);
  
      // Add legend
      // Create a new container for the legend
      var legend = L.control({ position: "bottomright" });
  
      // When the layer is added to the map
      legend.onAdd = function() {
          var div = L.DomUtil.create("div", "legend");
          div.className += "legend-item";
  
          // Add the legend items and their corresponding colors
          div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #f2acad;'></div> <div class='legend-text'>Low (0-22 %)</div></div>";
          div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #c95152;'></div> <div class='legend-text'>Medium (23-28 %)</div></div>";
          div.innerHTML += "<div class='legend-item'><div class='legend-color' style='background-color: #82080a;'></div> <div class='legend-text'>High (29+ %)</div></div>";
  
          return div;
      };
      legend.addTo(map_regions);
  
      // GetColor function
      function getColor(value) {
          // Usa il valore del cluster per determinare il colore
          if (value === "low") {
              return "#f2acad"; // Colore per low
          } else if (value === "medium") {
              return "#c95152"; // Colore per il medium
          } else {
              return "#82080a"; // Colore per il high
          }
      }
  
      // Fetch the GeoJSON data
      fetch("visualisations/maps/geomap_victimsdata.json")
          .then(function(response) {
              return response.json();
          })
          .then(function(italianRegions) {
              // Add our geojson file to the map, style with colors according to the value property
              var geojson = L.geoJson(italianRegions, {
                  style: function(feature) {
                      return {
                          fillColor: getColor(feature.properties.cluster),
                          weight: 1,
                          opacity: 1,
                          color: "white",
                          dashArray: "0",
                          fillOpacity: 0.7
                      };
                  },
                  onEachFeature: function(feature, layer) {
                      // Add the click event to the layer
                      layer.on("click", function() {
                          // Change the style of the clicked layer to make it slightly larger
                          layer.setStyle({
                              weight: 3,
                              fillOpacity: 0.9
                          });
                          // Reset the style of all other layers to their original values
                          geojson.eachLayer(function(otherLayer) {
                              if (otherLayer != layer) {
                                  otherLayer.setStyle({
                                      weight: 1,
                                      fillOpacity: 0.7
                                  });
                              }
                          });
                      });
                      // Add the original popup content
                      layer.bindPopup(feature.properties.name + " - Victims (%) " + parseFloat(feature.properties.victims).toFixed(1));
                  }
              }).addTo(map_regions);
  
              // Zoom the map to fit the GeoJSON data
  
              // Invalidate the map size to fix any issues with the map not displaying correctly
              $('.map-li').on('click', function() {
                  map_regions.invalidateSize();
              });
              map_regions.scrollWheelZoom.disable();
          });
  });
  