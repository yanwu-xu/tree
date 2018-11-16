<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CheckboxGroup',
    props: {
        value: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            aaa: 'aaa',
            children: []
        }
    },
    mounted() {
        this.updateModel()
    },
    methods: {
        findComponentsDownward(context, componentName) {
            return context.$children.reduce((components, child) => {
                if (child.$options.name === componentName) components.push(child);
                const foundChilds = this.findComponentsDownward(child, componentName);
                return components.concat(foundChilds);
            }, []);
        },
        updateModel() {
            this.children = this.findComponentsDownward(this, 'Checkbox')
            this.children.forEach(child => {
                if (this.value.indexOf(child.label) >= 0) {
                    child.checkedValue = true
                }
            })
        }
    }
}
</script>

