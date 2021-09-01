p
<template>
  <div>
    <div
      v-if="loading"
      class="
        flex
        justify-center
        items-center
        w-full
        h-full
        bg-gray-300
        text-gray-400
      "
    >
      <location-marker-icon
        class="h-36 w-36 animate-pulse"
        aria-hidden="true"
      />
    </div>
    <div id="map" class="w-full h-full"></div>
    <SearchBar v-if="isMobile()" class="searchBarMobile" />
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { isMobile } from "@/functions/functions";
import SearchBar from "@/components/SearchBar";
import { LocationMarkerIcon } from "@heroicons/vue/outline";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    LocationMarkerIcon,
    SearchBar,
  },
  mounted() {
    this.companiesTest = this.getCompaniesMerged;
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
    this.buildMap();
  },
  data() {
    return {
      loading: false,
      map: null,
      filtered: [],
      isMobile,
      markers: [],
      companiesTest: [],
    };
  },
  computed: {
    ...mapState(["companiesMerged"]),
    ...mapGetters(["getCompaniesMerged"]),
  },

  methods: {
    buildMap() {
      this.map = new mapboxgl.Map({
        container: "map",
        style: process.env.VUE_APP_MAPBOX_STYLE_URL,
      });
      this.map.on("load", () => {
        this.map.addControl(new mapboxgl.NavigationControl());
        console.log(this.companiesTest);
        if (this.markers.length > 0) {
          this.resetMarkers();
        }

        if (this.companiesTest) {
          this.updateMarkers();
        }
        console.log(this.markers);
      });
    },
    resetMarkers() {
      this.markers.forEach((marker) => {
        marker.remove();
      });
      this.markers = [];
      console.log("reset");
    },
    updateMarkers() {
      this.markers = this.companiesTest.map((company) => {
        const el = document.createElement("div");
        el.className = "marker";
        const popup = this.companyPopup(company);
        return new mapboxgl.Marker(el)
          .setLngLat([
            company.address.coordinates.longitude,
            company.address.coordinates.latitude,
          ])
          .setPopup(popup)
          .addTo(this.map);
      });
      console.log("update");
    },
    companyPopup(company) {
      return new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div class="card">
        <div class="card-body">
        <p class="comapny-name font-weight-bold">${company.name}</p>
        <p class="company-city>${company.cityName}</p>



        </div>
      </div>
      `);
    },
  },
};
</script>

<style lang="scss" scoped>
.searchBarMobile {
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 90vw;
}
.map-marker-popup > div:not(:first-child) {
  padding: 4px 8px;
}
.mapboxgl-marker {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: lightblue;
}
.marker {
  content: "";
  cursor: pointer;
  position: absolute;
  width: 25px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 75% 45% 75% 0%;
  background: #3498db;
  bottom: 0;
  transform-origin: 0% 100%;
  transform: rotate(-45deg) scale(1);
}
#map-controls {
  i {
    margin: auto;
  }
}
</style>
