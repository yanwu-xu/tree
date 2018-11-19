<template>
    <div :class="prefixCls">
        {{stateTree}}
        <div>{{nodeKeyItem}}--7878</div>
        <CheckboxGroup v-model="model" @on-change="modelChange">
            <Tree-Node 
                v-for="(item, i) in data"
                :data="item"
                :keys="keys"
                :key="i">
            </Tree-Node>
        </CheckboxGroup>
        {{flatTree}}
    </div>
</template>

<script>
const prefixCls = 'x-tree'
import CheckboxGroup from './CheckboxGroup.vue'
import TreeNode from './Node.vue'

export default {
    name: 'Tree',
    props: {
        data: {
            type: Array,
            default: []
        },
        value: {
            type: Array,
            default: []
        },
        keys: {
            type: Object,
            defult: {
                titleKey: 'title',
                childrenKey: 'children',
                valueKey: 'value'
            }
        }
    },
    data() {
        return {
            prefixCls: prefixCls,
            stateTree: this.data,
            model: this.value,
            checkedItem: '',
            nodeKeyItem: '',
            flatTree: []
        }
    },
    components: {
        TreeNode,
        CheckboxGroup
    },
    mounted() {
        this.flatTree = this.compileFlatState()
    },
    methods: {
        compileFlatState () {
            let keyCounter = 0
            let childrenKey = this.keys.childrenKey
            const flatTree = []
            function flattenChildren(node, parent) {
                node.nodeKey = keyCounter++;
                flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey };
                if (typeof parent != 'undefined') {
                    flatTree[node.nodeKey].parent = parent.nodeKey;
                    flatTree[parent.nodeKey][childrenKey].push(node.nodeKey);
                }

                if (node[childrenKey]) {
                    flatTree[node.nodeKey][childrenKey] = [];
                    node[childrenKey].forEach(child => flattenChildren(child, node));
                }
            }
            this.stateTree.forEach(rootNode => {
                flattenChildren(rootNode);
            });
            return flatTree;
        },
        modelChange(data) {
            let {nodeKeyItem, checkedItem} = this
            const valueKey = this.keys.valueKey
            this.flatTree[nodeKeyItem].children.forEach(i => {
                if (checkedItem) {
                    this.model.push(this.flatTree[i].node[valueKey])
                } else {

                }
            })
            this.$emit('input', data)
        }
    }
}
</script>

<style lang="less">
ul, li{
    padding: 0;
    margin: 0;
    list-style: none;
}
</style>


