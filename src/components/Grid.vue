<template>
  <div class="grid">
    <slot v-for="item in items" :item="item" name="grid-item"></slot>
  </div>
</template>

<script>
export default {
  name: "grid",
  props: {
    items: Array
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
}
</style>
