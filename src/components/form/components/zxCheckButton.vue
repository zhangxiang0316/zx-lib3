/**
* create by zhangxiang on 2021-02-22 14:41
* 类注释：
* 备注：
*/
<template>
  <el-checkbox-group
      :min="item.min"
      :max="item.max"
      v-model="formData[item.prop]"
  >
    <el-checkbox-button
        v-for="option in options"
        :key="option.value ? option.value : option"
        :label="option.value ? option.value : option"
        :disabled="item.disabled"
        :style="item.style"
        @change="change"
    >
      {{ option.label ? option.label : option }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<script lang="ts">
import {computed, onBeforeMount} from "vue";

export default {
  name: "zxCheckButton",
  emits: ['event'],
  props: {
    item: {type: Object, default: {}},
    formData: {},
  },
  setup(prop, context) {
    onBeforeMount(() => {
      if (!prop.formData[prop.item.prop]) {
        prop.formData[prop.item.prop]=[]
      }
    })
    const change = () => {
      context.emit('event', {
        type: 'change',
        prop: prop.item.prop,
        value: prop.formData[prop.item.prop]
      })
    }
    const options = computed(() => {
      if (prop.item.options instanceof Array) {
        return prop.item.options
      } else {
        let list = prop.item.options.split(',')
        return list.map(item => {
          return {value: item, label: item}
        })
      }
    })
    return {
      options,
      change
    }
  },
}
</script>

<style scoped>

</style>
