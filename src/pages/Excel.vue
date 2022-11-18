<template>
  <div>

    <v-btn
        text
        plain
        @click="clickHandler"
    >
      Anasayfa
    </v-btn>


    Excel PAge
  </div>
</template>

<script>

export default {
  name: 'ExcelPage',

  methods: {
    clickHandler() {
      console.log("Deneme sayfasına gidiş")
      this.$router.push({name:'backup-page'})
    }
  }
}


</script>
