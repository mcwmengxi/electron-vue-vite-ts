<script setup lang="ts">
import useDrag from '@/hooks/drag'
import Search from './components/Search.vue'

const {onmousedown} = useDrag()
</script>

<template>
  <div id="layout" @mousedown="onmousedown">
    <div class="color">test</div>
    <Search  />
  </div>
</template>

<style lang="less">
#layout {
  height: 50*2vh;
  overflow: hidden;
  background: var(--color-body-bg);
  ::-webkit-scrollbar {
    width: 0;
  }
  // 优化mac拖拽
  &.drag {
    -webkit-app-region: drag;
  }
}
.color {
  color: @arcoblue-6;
}
</style>
