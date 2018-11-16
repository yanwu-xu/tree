<template>
  <label :class="labelClasses">
    <span :class="outerClasses">
        <span :class="checkboxClasses">
            <input
                type="checkbox"
                :class="inputClasses"
                :checked="checkedValue"
                :disabled="disabled"
                @change="inputChange">
        </span>
    </span>
    <slot><span v-if="showSlot">{{ label }}</span></slot>
  </label>
</template>


<script>
const prefixCls = 'x-checkbox'
export default {
    name: 'Checkbox',
    props: {
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: [String, Number, Boolean]
        },
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        }
    },
    data() {
        return {
            checkedValue: this.value,
            showSlot: true,
        }
    },
    computed: {
        inputClasses() {
            return `${prefixCls}-input`
        },
        labelClasses() {
            return `${prefixCls}-label`
        },
        outerClasses() {
            return [
                `${prefixCls}-outer`,
                {
                    [`${prefixCls}-outer-checked`]: this.checkedValue,
                    [`${prefixCls}-outer-disabled`]: this.disabled,
                    // [`${prefixCls}-indeterminate`]: this.indeterminate
                }
            ]
        },
        checkboxClasses() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: this.checkedValue
                }
            ]
        }
    },
    methods: {
        inputChange(event) {
            let checked = event.target.checked
            let value = checked ? this.trueValue : this.falseValue
            this.checkedValue = checked
            this.$emit('input', value)
        }
    }
}
</script>

<style lang="less">
@prefixCls: x-checkbox;

.@{prefixCls}{
    width: 12px;
    height: 12px;
    display: inline-block;
    position: relative;
    border: 1px solid #aeaeae;
    border-radius: 2px;
    transition: all .3s;
    margin-right: 4px;
    background: #fff;
    cursor: pointer;
    &:hover{
        border: 1px solid #aaa;
    }
}

.@{prefixCls}-checked{
    cursor: pointer;
    border: 1px solid #008cff;
    background: #008cff;
    &:hover{
        border: 1px solid #008cff;
    }
    &::after{
        content: '';
        width: 2px;
        height: 6px;
        display: block;
        position: absolute;
        top: 1px;
        left: 4px;
        border: 2px solid #fff;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
    }
}

// disabled的情况
.@{prefixCls}-outer-disabled{
    .@{prefixCls}-checked{
        border: 1px solid #aeaeae;
        background: #e7e7e7;
        &::after{
            border-color: #b9b9b9;
        }
    }
    .@{prefixCls}{
        background: #e7e7e7;
        cursor: pointer;
    }
}

.@{prefixCls}-outer{
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    line-height: 1;
    position: relative;
}

.@{prefixCls}-label{
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
    margin-right: 8px;
}

.@{prefixCls}-input{
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    opacity: 0;
}
</style>

