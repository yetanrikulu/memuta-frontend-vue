<template>
  <div class="outerCage">
    <h3> Veri İndir</h3>
    <div class="cage">
      <v-btn
          class="white--text"
          color="green darken-1"
          v-for="button in sheepExcelServiceDownloadButtons"
          elevation="2"
          :key="button.name"
          @click="sheepExcelServiceDownloadClickHandler(button.downloadUrl)"
      >
        {{ button.name }}
      </v-btn>

      <v-btn
          class="white--text"
          color="green darken-1"
          v-for="button in earringNumberServiceDownloadButtons"
          elevation="2"
          :key="button.name"
          @click="earringNumberServiceDownloadClickHandler(button.downloadUrl)"
      >
        {{ button.name }}
      </v-btn>
    </div>
  </div>


</template>

<script>
import {mapActions} from "vuex";
import sheepExcelService from "@/services/sheep.excel.service";
import earringNumberService from "@/services/earring.number.service";

export default {

  data() {
    return {
      sheepExcelServiceDownloadButtons: [
        {name: 'TÜM VERİ', downloadUrl: 'whole-data'},
        {name: 'SOY AĞACI', downloadUrl: 'family-tree'},
        {name: 'SON 100 50 20 10 GÜN', downloadUrl: 'last-certain-days-milk-data'},
        {name: 'AĞILLARA GÖRE', downloadUrl: 'get-according-to-barn'},
        {name: 'CHIP VERİ', downloadUrl: 'chip-data-excel'},
        {name: 'KÜÇÜK KUZU', downloadUrl: 'get-small-sheep-excel'},
        {name: 'RASYON İÇİN', downloadUrl: 'get-barn-distribution-excel'},
        {name: 'DOĞUM VE SÜTTEN KESİM', downloadUrl: 'birth-and-weaning-excel'},
        {name: 'CANLI AĞIRLIK', downloadUrl: 'all-weight-data'},
        {name: 'X İNDİR', downloadUrl: 'get-x-data'},
      ],
      earringNumberServiceDownloadButtons: [
        {name: 'BOŞ KÜPE NUMARALARINI İNDİR', downloadUrl: 'empty-earring-number-as-excel'},
      ],
    };
  },
  methods: {
    ...mapActions({
      setLoading: 'utils/setLoading',
    }),
    async sheepExcelServiceDownloadClickHandler(url) {
      this.setLoading(true)
      await sheepExcelService.download(url)
      this.setLoading(false)
    },
    async earringNumberServiceDownloadClickHandler(url) {
      this.setLoading(true)
      await earringNumberService.download(url)
      this.setLoading(false)
    }
  }
}


</script>

<style>
.cage {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  column-gap: 10px;
  row-gap: 20px;
}

.outerCage {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>