<template>
  <div>
    <v-app>
      <NavigationBar/>
      <v-main>
          <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {


  name: 'App',
  components: {
    NavigationBar
  },


  data: () => ({
    //
  }),
};
</script>
