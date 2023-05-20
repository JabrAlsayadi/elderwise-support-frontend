<template>
    <div class="app">
        <div class="app__container">
            <router-view />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
$m_q = 2000px
.app
    width: 100%
    height: 100vh
    background: #fff0
    color: #000
    &__container
        background: #fff0
        width: 100%
        height: 100%
        

@media (min-width: $m_q)
    .app
        display: flex
        justify-content: center
        &__container
            background: #fff0
            width: 480px
            height: 100vh

</style>
