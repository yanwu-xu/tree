<template>
    <div>
        <ul>
            <li>
                <Checkbox :label="data[keys.valueKey]" @input="checkChange">{{data[keys.titleKey]}}</Checkbox>
            </li>
            <Tree-node
                class="tree-node"
                v-if="data[keys.childrenKey].length"
                v-for="(item, i) in data[keys.childrenKey]"
                :keys="keys"
                :key="i"
                :data="item">
            </Tree-node>
        </ul>
    </div>
</template>

<script>
import Checkbox from './Checkbox'
export default {
    name: 'TreeNode',
    props: {
        data: {
            type: Object,
            default: {}
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
    components: {
        Checkbox
    },
    data() {
        return {
            nodeKey: '22'
        }
    },
    methods: {
        findComponentUpward(context, componentName, componentNames) {
            if (typeof componentName === 'string') {
                componentNames = [componentName]
            } else {
                componentNames = componentName
            }

            let parent = context.$parent
            let name = parent.$options.name
            while (parent && (!name || componentNames.indexOf(name) < 0)) {
                parent = parent.$parent
                if (parent) name = parent.$options.name
            }
            return parent
        },
        checkChange(value) {
            let tree = this.findComponentUpward(this, 'Tree')
            tree.nodeKeyItem = this.data.nodeKey
            tree.checkedItem = value
        }
    }
}
</script>

<style>
.tree-node{
    margin-left: 25px;
}
</style>


