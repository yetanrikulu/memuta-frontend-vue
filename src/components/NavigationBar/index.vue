<template>
  <div>
    <v-app-bar
        app
        color="primary"
        dark
        elevation="4"
    >
      <div v-for="button in buttons"
           :key=button.name>

        <v-btn
            text
            plain
            @click="navigate(button.to)"
        >
          {{ button.name }}
        </v-btn>

      </div>

    </v-app-bar>
  </div>
</template>

<script>
import NavigationButtons from "@/components/NavigationBar/navigationButtons";

export default {
  name: 'NavigationBar',
  data() {
    return {
      buttons: NavigationButtons,
    }
  },
  methods: {
    navigate(url) {
      this.$router.push({name: url})
    }
  }
};
</script>

<style lang="scss" scoped>
</style>