<template>
  <div id="app">
    <Checkbox v-model="value" :disabled="false"><span>121212121212</span></Checkbox>
    <div>
      <CheckboxGroup v-model="arr" @on-change="groupChange">
        <Checkbox :label="1"></Checkbox>
        <Checkbox :label="2"></Checkbox>
      </CheckboxGroup>
    </div>
    <div style="margin-top: 50px;">
      {{model}}
      <Tree :data="data" v-model="model" :keys="keys"></Tree>
    </div>
  </div>
</template>

<script>
import Checkbox from './components/Checkbox.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import Tree from './components/Tree.vue'

export default {
  name: 'app',
  components: {
    Checkbox,
    CheckboxGroup,
    Tree
  },
  data() {
    return {
      value: true,
      arr: [1],
      model: [1, 2],
      keys: {
          titleKey: 'title',
          childrenKey: 'children',
          valueKey: 'id'
      },
      data: [{
          title: 'aaa',
          id: 1,
          children: [{
              title: 'bbb',
              id: 2,
          }, {
              title: 'ccc',
              id: 3,
          }]
        }, {
          title: 'aaa1',
          id: 4,
          children: [{
              title: 'bbb1',
              id: 5,
          }, {
              title: 'ccc1',
              id: 6,
          }]
        }, {
          title: 'aaa2',
          id: 7,
          children: [{
              title: 'bbb2',
              id: 8,
          }, {
              title: 'ccc2',
              id: 9,
              children: [{
                  title: 'bbb3',
                  id: 10,
              }, {
                 title: 'ccc3',
                 id: 11,
              }]
          }]
      }]
    }
  },
  methods: {
    valuechange(checkedValue) {
      this.value = checkedValue
    },
    groupChange(data) {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 100px;
  /* text-align: center; */
  color: #515a6e;
}
</style>
