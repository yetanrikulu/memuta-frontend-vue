<template>
  <div>
    <Operations/>
    <v-divider/>
    <DownloadData/>
    <v-divider/>
    <Others/>
  </div>
</template>

<script>
import Operations from "@/pages/Excel/Operations";
import DownloadData from "@/pages/Excel/DownloadData";
import Others from "@/pages/Excel/Others";

export default {
  name: 'ExcelPage',
  components: {
    Operations,
    DownloadData,
    Others
  }
}

</script>
