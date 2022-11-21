<template>
  <div>
    <v-app>
      <Loading/>
      <NavigationBar/>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import Loading from "@/components/Loading";

export default {


  name: 'App',
  components: {
    Loading,
    NavigationBar
  },


  data: () => ({
    //
  }),
};
</script>
