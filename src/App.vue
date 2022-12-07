<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="container">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>
#app{
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.container {
  max-width: 975px;
  margin-left: auto;
  margin-right: auto;
}

.footer {
  background-color: rgb(250, 250, 250);
}
</style>
