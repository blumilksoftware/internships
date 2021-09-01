function buildLayer(result, layer, image) {
  return {
    id: layer,
    type: "symbol",
    source: {
      type: "geojson",
      data: result,
    },
    layout: {
      "icon-image": image,
      "icon-allow-overlap": true,
      "icon-ignore-placement": true,
      "icon-anchor": "bottom",
    },
  };
}
const layer = { name: "companies", icon: "marker", offset: [12, -16] };

export default {
  methods: {
    buildMarkers() {
      this.map.on("load", async () => {
        await this.map.loadImage(
          require("@/assets/marker.png"),
          (error, image) => {
            if (error) {
              console.log("Image not loaded.");
            }
            this.map.addImage("marker", image);
          }
        );
      });
    },
  },
};
