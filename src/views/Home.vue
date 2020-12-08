<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column;
  height: 100vh;
}
</style>

<template>
  <div class="home">
    <MagazineContainer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Header from "@/components/Header.vue";
import MagazineContainer from "@/components/MagazineContainer.vue";

export default {
  name: "Home",
  components: {
    // Header,
    MagazineContainer,
  },
};
</script>
