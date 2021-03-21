<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- menggunakan $store.state untuk memanggil object didalam vuex -->
    <div class="counter">{{$store.state.counter}}</div>
    <p>apakah ini benar?</p>
    <span>{{name}}</span>

    <div class="button">
      <!-- menggunakan commit saat memanggil mutation didalam store -->
      <!-- menggunakan dispatch saat memanggil actions didalam store -->
      <button @click="$store.dispatch('increase')">+</button>
      <button @click="$store.dispatch('decrease')">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    name() {
      // menggunakan this khusus untuk memanggil state didalam computed
      return this.$store.state.counter.length <= 1 ? "yes" : "no";
    }
  }
};
</script>


<style >
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 50px;
}
.button button {
  font-size: 50px;
  width: 50px;
  margin: 0 10px;
}
</style> 
