<template>
  <div class="btncontainer">
    <BaseButton
      class="resetfilters"
      @click="resetButtons"
      :hasIcon="true"
      icon="far fa-eye"
    >
      Zresetuj filtry
    </BaseButton>
    <BaseButton
      class="saveasfile"
      :hasIcon="true"
      icon="fas fa-cloud-download-alt"
      >Zapisz do pliku</BaseButton
    >
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import { useStore } from "vuex";
export default {
  components: {
    BaseButton,
  },
  setup() {
    const store = useStore();

    function resetButtons() {
      store.commit("RESET_ACTIVE_TAGS");
    }
    return { resetButtons };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/_variables";

.btncontainer {
  display: flex;
  flex-direction: row;
  align-items: stretch;

  .resetfilters {
    background: $mainBlue;
    &:active {
      background-color: $mainBlueActive;
    }
  }

  .saveasfile {
    background: $softBlue;
    &:active {
      background: $softBlueActive;
    }
  }
  .resetfilters,
  .saveasfile {
    height: 50px;
    width: 100%;
    display: block;
    font-size: 16px;
    color: $white;

    & > * {
      color: $white;
    }
    & > i {
      padding-right: 15px;
    }
  }
}
</style>
