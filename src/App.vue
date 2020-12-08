<style lang="scss">
* {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
  outline: none;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

body {
  overflow: hidden;
}

.background {
  background-attachment: fixed;
  background-image: url("/img/background.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -9999;
}
</style>

<template>
  <div>
    <div class="background"></div>
    <router-view />
  </div>
</template>
