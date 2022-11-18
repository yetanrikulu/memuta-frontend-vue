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
          :loading="loading"
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
    download() {
      backupService.download(this.downloadUrl)
    },
    remove() {
      backupService.delete(this.deleteUrl)
    },

    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, {once: true})

      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]
      backupService.upload(this.uploadUrl, this.selectedFile)
      // do something
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