<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="counter">{{name.counter}}</div>
    <p>apakah ini benar?</p>
    <p>{{nameCounter}}</p>

    <div class="button">
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: {
        counter: 0
      }
    };
  },

  computed: {
    nameCounter() {
      return this.name.counter.length > 1 ? "yes" : "no";
    }
  },
  methods: {
    increase() {
      this.name.counter++;
    },
    decrease() {
      this.name.counter--;
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
