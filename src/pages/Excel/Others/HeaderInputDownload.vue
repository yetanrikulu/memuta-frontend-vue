<template>
  <div class="headerInputDownload__content">
    <h4 class="headerInputDownload__header">
      {{ title }}
    </h4>

    <v-text-field
        :label=inputPlaceHolder
        outlined
        @change="updateInput"
    ></v-text-field>

    <v-btn
        class="white--text"
        color="green darken-1"
        elevation="2"
        @click="downloadData()"
    >
      İNDİR
    </v-btn>

  </div>

</template>

<script>
import {api} from '@/api';
import {mapActions} from "vuex";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    inputPlaceHolder: {
      type: String,
      required: true,
    },
    buttonDownloadUrl: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions({
      setLoading: 'utils/setLoading',
    }),
    async downloadData() {
      this.setLoading(true);
      await api.download(this.buttonDownloadUrl + '/' + this.input);
      this.setLoading(false);
    },
    updateInput(e) {
      this.input = e
    }
  }
}
</script>

<style lang="scss" scoped>
.headerInputDownload {

  &__content {
    display: grid;
    alignment: center;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 10px;
    column-gap: 10px;
    row-gap: 20px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
  }


}


</style>