<template>
  <div>

    <v-btn
        color="primary"
        @click="clickHandler"
    >
      Anasayfa
    </v-btn>

    <v-btn
        depressed
        color="primary"
    >
      Primary
    </v-btn>

    <v-btn
        depressed
        color="error"
    >
      Error
    </v-btn>

    Hello
  </div>
</template>

<script>

export default {
  name: 'HomePage',

  methods: {
    clickHandler() {
      console.log("Deneme sayfasına gidiş")
      this.$router.push({name:'denemePage'})
    }
  }
}


</script>
