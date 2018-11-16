<template>
  <div id="app">
    <Checkbox :value="value" @input="valuechange" :disabled="false"><span>121212121212</span></Checkbox>
    {{value}}
    <div>
      <CheckboxGroup v-model="arr">
        <Checkbox :label="1"></Checkbox>
        <Checkbox :label="2"></Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script>
import Checkbox from './components/Checkbox.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'

export default {
  name: 'app',
  components: {
    Checkbox,
    CheckboxGroup
  },
  data() {
    return {
      value: true,
      arr: [1]
    }
  },
  methods: {
    valuechange(checkedValue) {
      this.value = checkedValue
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #515a6e;
}
</style>
