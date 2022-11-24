<template>
  <div>
    <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        elevation="2"
        @click="onButtonClick"
    >
      {{ name }}
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
    <input
        ref="uploader"
        class="d-none"
        type="file"
        accept="*/*"
        @change="onFileChanged()"
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {type: String, default: 'Upload'},
  },
  methods: {
    onButtonClick() {
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

