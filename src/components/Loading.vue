<template>
  <div
      v-if="loading"
      class="loading"
  >
    <img
        src="../assets/img/sheep-loading.gif"
        alt="this slowpoke moves"
        width="25%"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Loading',
  computed: {
    ...mapGetters({
      loading: 'utils/getLoading',
    }),
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.4);
  z-index: 9999999;
}
</style>
