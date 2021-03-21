<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- menggunakan $store.state untuk memanggil object didalam vuex -->
    <div class="counter">{{$store.state.counter}}</div>

    <div class="button">
      <!-- menggunakan commit saat memanggil mutaion didalam store -->
      <button @click="$store.commit('increase')">+</button>
      <button @click="$store.commit('decrease')">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
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
