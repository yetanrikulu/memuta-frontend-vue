<template>
  <div class="backupItem">
    <v-card
        class="card"
        elevation="3"
    >
      <v-card-title class="card__title">{{ title }}</v-card-title>

      <v-btn
          color="primary"
          @click="download"
      >
        TÜM DATAYI İNDİR
      </v-btn>


      <v-btn
          color="blue-grey"
          class="ma-2 white--text"
          @click="onButtonClick"
      >
        UPLOAD
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
          @change="onFileChanged"
      >

      <v-btn
          class="ma-1"
          color="error"
          @click="remove"
      >
        TÜM DATAYI SİL
      </v-btn>

    </v-card>
  </div>
</template>

<script>
import backupService from '@/services/backup.service';
import {mapActions} from "vuex";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    downloadUrl: {
      type: String,
      required: true,
    },
    uploadUrl: {
      type: String,
      required: true,
    },
    deleteUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      setLoading: 'utils/setLoading',
    }),

    async download() {
      this.setLoading(true);
      await backupService.download(this.downloadUrl);
      this.setLoading(false);
    },
    async remove() {
      this.setLoading(true);
      await backupService.delete(this.deleteUrl);
      this.setLoading(false);
    },

    onButtonClick() {
      window.addEventListener('focus', () => {
      }, {once: true})
      this.$refs.uploader.click();
    },
    async onFileChanged(e) {
      this.selectedFile = e.target.files[0];
      this.setLoading(true);
      await backupService.upload(this.uploadUrl, this.selectedFile);
      this.setLoading(false);

    }
  }

}

</script>

<style lang="scss" scoped>

.backupItem {
  margin: 20px;
  flex-direction: column;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  &__title {
    word-break: break-word;
    text-align: center;
    height: 100px;
  }
}

</style>