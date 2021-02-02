<!--
 * @Author: your name
 * @Date: 2021-02-02 15:15:45
 * @LastEditTime: 2021-02-02 15:18:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\src\App.vue
-->

<template>
    <div>
        <div>
            解析vue文件
        </div>
        <p>
            {{name}}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const name = ref('tssss');
        return {
            name
        }
    }
})
</script>