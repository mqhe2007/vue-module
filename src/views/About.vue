<template>
  <div class="about">
    <h1>关于页面</h1>
  </div>
</template>
<script>
export default {
  name: 'about',
  mounted() {
    setTimeout(() => {
      this.$eventBus.emit('visitedAbout')
    }, 500)
  }
}
</script>

