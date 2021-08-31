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
import SearchBar from "@/components/SearchBar";
import { LocationMarkerIcon } from "@heroicons/vue/outline";
import { isMobile } from "@/functions/functions";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    LocationMarkerIcon,
    SearchBar,
  },
  setup() {
    const store = useStore();
    let loading = ref(false);
    let map = ref(null);
    let filtered = ref([]);

    function buildMap() {
      map.value = new mapboxgl.Map({
        container: "map",
        style: process.env.VUE_APP_MAPBOX_STYLE_URL,
      });
      map.value.addControl(new mapboxgl.NavigationControl());
    }

    onMounted(() => {
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
      buildMap();
    });
    return {
      loading,
      map,
      filtered,
      isMobile,
      companies: computed(() => store.getters.getCompaniesMerged),
    };
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
#map-controls {
  i {
    margin: auto;
  }
}
</style>
