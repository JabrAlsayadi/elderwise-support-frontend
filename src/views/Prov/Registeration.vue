<!-- eslint-disable vue/multi-word-component-names #1a3045 -->
<template>
    <Header />
    <div class="registeration">
        <h1>Registeration</h1>
    </div>
</template>

<script setup >
import Header from '@/components/prov/Header.vue';
</script>

<style lang="stylus" scoped >

.registeration
    width: 95%
    min-height: 85vh
    background: #fff
    padding-bottom: 20px
    margin: 10px  auto 10px auto
    display: flex
    flex-direction: column
    box-shadow: 0 0 10px #ccc
    border-radius: 20px
    padding: 20px
</style>