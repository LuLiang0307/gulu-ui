<template>
    <div :size="size">
        <button v-bind="rest">
            <slot/>
        </button>
    </div>
</template>
<script lang='ts'>
    export default{
        inheritAttrs:false,//禁止继承父组件的属性
        setup(props, context){
            const {size,...rest} = context.attrs;
            return {size, rest}
        }
    }
</script>
<style lang="scss" scoped>
     
</style>