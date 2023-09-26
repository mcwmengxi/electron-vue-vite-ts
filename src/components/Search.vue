<template>
  <div class="qx-select">
    <a-input 
    placeholder="请输入"
    :value="searchKey"
    @input="onInputChange"
    ></a-input>
  </div>
</template>
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const searchKey = ref('')
  const onInputChange = (val: any) => {
    console.log(val);
    searchKey.value = val
  }
  </script>

<style scoped lang="less">
.qx-select {
  display: flex;
  padding-left: 10px;
  background: var(--color-body-bg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  height: 60px;
  display: flex;
  align-items: center;
  .ellipse {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
  }

  .select-tag {
    white-space: pre;
    user-select: none;
    font-size: 18px;
    border-radius: 16px;
    height: 32px;
    position: relative;
    color: #fff;
    background-color: var(--ant-primary-color);
    display: inline-flex;
    align-items: center;
    margin-right: 1px;
    padding: 0 10px;
  }

  .main-input {
    height: 40px !important;
    box-sizing: border-box;
    flex: 1;
    border: none;
    outline: none;
    box-shadow: none !important;
    background: var(--color-body-bg);
    .ant-select-selection,
    .ant-input,
    .ant-select-selection__rendered {
      height: 100% !important;
      font-size: 22px;
      border: none !important;
      background: var(--color-body-bg);
      color: var(--color-text-primary);
    }
  }

  .rubick-logo,
  .icon-tool {
    width: 40px;
    height: 40px;
    background: #574778;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    img {
      width: 32px;
    }
  }
  .icon-tool {
    background: var(--color-input-hover);
  }
  .ant-input:focus {
    border: none;
    box-shadow: none;
  }
  .suffix-tool {
    display: flex;
    align-items: center;
    .icon-more {
      font-size: 26px;
      font-weight: bold;
      cursor: pointer;
      color: var(--color-text-content);
    }
    .loading {
      color: var(--ant-primary-color);
      position: absolute;
      top: 0;
      left: 0;
    }
    .update-tips {
      position: absolute;
      right: 46px;
      top: 50%;
      font-size: 14px;
      transform: translateY(-50%);
      color: #aaa;
    }
  }
  .clipboard-tag {
    white-space: pre;
    user-select: none;
    font-size: 16px;
    height: 32px;
    position: relative;
    align-items: center;
    display: flex;
    border: 1px solid var(--color-border-light);
    padding: 0 8px;
    margin-right: 12px;
    img {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }
  }
  .clipboard-img {
    white-space: pre;
    user-select: none;
    font-size: 16px;
    height: 32px;
    position: relative;
    align-items: center;
    display: flex;
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
