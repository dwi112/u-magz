<style lang="scss" scoped>
.header {
  padding: 15px;

  #search-magazine {
    background-color: $primary-color;
    border: 1px solid #ffffff;
    border-radius: 10px;
    color: #ffffff;
    display: block;
    font-weight: 400;
    margin: 0 auto;
    padding: 15px;
    transition: 500ms;

    &::-webkit-input-placeholder {
      color: #ffffff;
    }

    &:hover::-webkit-input-placeholder,
    &:focus::-webkit-input-placeholder {
      color: $primary-color;
    }

    &:hover,
    &:focus {
      background-color: #ffffff;
      color: $primary-color;
      transform: scale(1.05);
    }
  }
}
</style>

<template>
  <div class="header">
    <input
      id="search-magazine"
      type="search"
      name="search-magazine"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default { name: "Header" };
</script>