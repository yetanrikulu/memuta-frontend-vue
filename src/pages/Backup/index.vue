<template>
  <div>

    <v-btn
        text
        plain
        @click="clickHandler"
    >
      Anasayfa
    </v-btn>


    Hello
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',

  methods: {
    clickHandler() {
      console.log("Deneme sayfasına gidiş")
      this.$router.push({name:'denemePage'})
    }
  }
}


</script>
