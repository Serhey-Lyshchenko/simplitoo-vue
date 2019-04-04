<template>
  <div class="notification" :style="{'background-color': notification.color}">
    <img :src="getSrc">
    <div class="notification-text">{{notification.text}}</div>
  </div>
</template>

<script>
export default {
  name: "notification-panel",
  props: {
    notification: Object
  },
  computed: {
    getSrc() {
      return require(`../assets/${this.notification.icon}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 10px 10%;
  font-size: 14px;
  color: #fff;
  margin: 20px 0;
  img {
    margin: 0 20px;
  }
}
</style>
