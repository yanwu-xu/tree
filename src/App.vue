<template>
  <div id="app">
    <div class="model">model:  {{model}}</div>
    
    <div>
      <XTree :data="data" v-model="model" :keys="keys" :link="true"></XTree>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      model: [1, 2],
      keys: {
          titleKey: 'title',
          childrenKey: 'children',
          valueKey: 'id'
      },
      data: [{
          title: 'A-1',
          id: 1,
          render: (h, { root, node, data }) => {
            return h('span', 'THIS IS RENDER')
          },
          children: [{
              title: 'B-1-1',
              id: 2,
          }, {
              title: 'B-1-2',
              id: 3,
          }]
        }, {
          title: 'A-2',
          id: 4,
          children: [{
              title: 'B-2-1',
              id: 5,
          }, {
              title: 'B-2-2',
              id: 6,
              showDown: false,
              children: [{
                  title: 'C-2-1',
                  id: 10,
              }, {
                  title: 'C-2-2',
                  id: 11,
              }]
          }]
        }]
    }
  }
}
</script>

<style>
#app {
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 100px;
  color: #515a6e;
}
.model{
  padding: 20px 0;
}
</style>
