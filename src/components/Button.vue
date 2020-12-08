<style lang="scss">
button {
  background-color: #ffffff;
  border: none;
  border-bottom: 3px solid #dddddd;
  border-radius: 10px;
  color: $primary-color;
  margin-left: 3px;
  margin-right: 3px;
  padding: 10px;
  transition: 500ms;

  &:hover {
    color: $secondary-color-v;
    transform: scale(1.1);
    transition: 500ms;
  }

  &:active {
    background-color: #eeeeee;
    transform: scale(0.98);
    transition: 250ms;
  }
}
</style>

<template>
  <button>
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>