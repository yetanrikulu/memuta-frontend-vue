<template>
  <div class="operations__content">
    <v-btn
        class="white--text"
        color="green darken-1"
        elevation="2"
        @click="getTemplate"
    >
      TASLAK İNDİR
    </v-btn>

    <div class="operations__cage">
      <v-btn
          class="white--text"
          color="blue darken-1"
          v-for="button in uploadButtons"
          elevation="2"
          :key="button.name"
          @click="uploadClickHandler"
      >
        {{ button.name }}
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
          @change="onFileChanged(button.uploadUrl)"
      >

    </div>
  </div>

</template>

<script>

import {mapActions} from "vuex";
import sheepexcelService from "@/services/sheep.excel.service";

export default {
  name: 'Operations',
  data() {
    return {
      uploadButtons: [
        {name: 'KÜPE NUMARASI DEĞİŞTİR', uploadUrl: 'change-earring-number'},
        {name: 'SÜT VERİSİ GİRİŞİ', uploadUrl: 'milk'},
        {name: 'ÇİP İŞLEMLERİ', uploadUrl: 'set-chip-number'},
        {name: 'TEKİL YER DEĞİŞTİRME', uploadUrl: 'barn-change'},
        {name: 'TOPLU YER DEĞİŞTİRME', uploadUrl: 'transfer-all-sheep'},
        {name: 'YENİ KUZU', uploadUrl: 'create-sheep'},
        {name: 'SÜTÜ BİTTİ', uploadUrl: 'set-lactation-end'},
        {name: 'KOYUN GÜNCELLE', uploadUrl: 'update-sheep'},
        {name: 'KOÇ KATIM', uploadUrl: 'set-breeding'},
        {name: 'KOÇ AYRIM', uploadUrl: 'set-breeding-separation'},
        {name: 'ULTRASON', uploadUrl: 'set-ultrasound'},
        {name: 'AĞIRLIK EKLE', uploadUrl: 'add-weight-by-excel'},
        {name: 'ÖLÜM TARİHİ', uploadUrl: 'set-death-date'},
        {name: 'SATIŞ TARİHİ', uploadUrl: 'set-sell-date'},
        {name: 'YENİ KUZU KÜPESİZ', uploadUrl: 'create-sheep-without-earring'},
      ],
    };
  },
  methods: {
    ...mapActions({
      setLoading: 'utils/setLoading',
    }),
    async getTemplate() {
      this.setLoading(true);
      await sheepexcelService.download("all-excel-template");
      this.setLoading(false);
    },

    uploadClickHandler() {
      window.addEventListener('focus', () => {
      }, {once: true})
      this.$refs.uploader.click();
    },
    async onFileChanged(e,url) {
      this.selectedFile = e.target.files[0];
      this.setLoading(true);
      await sheepexcelService.upload(url, this.selectedFile);
      this.setLoading(false);
    }
  }


}

</script>

<style lang="scss" scoped>


.operations {

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px
  }

  &__cage {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px;
    column-gap: 10px;
    row-gap: 20px;
  }

}
</style>

