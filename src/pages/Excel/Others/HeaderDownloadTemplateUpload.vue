<template>
  <div class="headerDownloadTemplateUpload__content">
    <h4 class="headerDownloadTemplateUpload__header"> {{ title }}</h4>
    <v-btn
        class="white--text"
        color="green darken-1"
        elevation="2"
        @click="getTemplate(downloadUrl)"
    >
      {{ downloadButtonText }}
    </v-btn>

    <v-btn
        class="white--text"
        color="blue darken-1"
        elevation="2"
        :key="title"
        @click="uploadClickHandler"
    >
      {{ uploadButtonText }}
      <v-icon
          right
          dark
      >
        mdi-cloud-upload
      </v-icon>

    </v-btn>
    <input
        ref="uploader"
        class="d-none"
        type="file"
        accept="*/*"
        @change="onFileChanged(uploadUrl)"
    >

  </div>


</template>

<script>
import {mapActions} from "vuex";
import sheepexcelService from "@/services/sheep.excel.service";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    downloadButtonText: {
      type: String,
      default: 'TASLAK İNDİR'
    },
    downloadUrl: {
      type: String,
      required: true
    },
    uploadButtonText: {
      type: String,
      default: 'UPLOAD'
    },
    uploadUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions({
      setLoading: 'utils/setLoading',
    }),
    async getTemplate(url) {
      this.setLoading(true);
      await sheepexcelService.download(url);
      this.setLoading(false);
    },
    uploadClickHandler() {
      window.addEventListener('focus', () => {
      }, {once: true})
      this.$refs.uploader.click();
    },
    async onFileChanged(e) {
      this.selectedFile = e.target.files[0];
      this.$emit('file-selected', this.selectedFile)
    }
  }

}

</script>

<style lang="scss" scoped>
.headerDownloadTemplateUpload {

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