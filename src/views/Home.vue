<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- menggunakan $store.state untuk memanggil object didalam vuex -->
    <div :style="{color: $store.state.colorCode}" class="counter">{{$store.state.counter}}</div>
    <div class="counter-square">
      {{$store.state.counter}}
      <sup>2</sup>=
      <!-- memanggil getters -->
      {{$store.getters.counterSquare}}
    </div>

    <p>apakah ini benar?</p>
    <span>{{name}}</span>

    <div class="button">
      <!-- menggunakan commit saat memanggil mutation didalam store -->
      <!-- menggunakan dispatch saat memanggil actions didalam store -->
      <button @click="$store.dispatch('increase')">+</button>
      <button @click="$store.dispatch('decrease')">-</button>
    </div>

    <div>
      <!-- cara menambahkan v-model ada 2 yaitu -->
      <!-- 1.di dalam v-model isi menggunakan properti $store.state.colorCode untuk menambahkan state yang ada didlm store -->
      <!-- 2.di dalam v-model di isi colorCodes dari computed-> -->
      <input v-model="colorCodes" type="text" placeholder="enter your color code" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    name() {
      // menggunakan this khusus untuk memanggil state didalam computed
      // menggunakan ternary ? dengan respon yes dan no
      return this.$store.state.counter.length <= 1 ? "yes" : "no";
    },
    colorCodes: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.commit("setNewCode", newValue);
      }
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
