<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="medicine">
        <div class="medicine__titles">
        </div>
        <div class="medicine__box">
            medicine
        </div>
    </div>
</template>

<script setup >
import Header from '@/components/admin/header.vue';

</script>

<style lang="stylus" scoped>
.medicine
    width: 95%
    min-height: 85vh
    background: #ccc
    padding-bottom: 20px
    margin: 10px auto 10px auto
    display: flex
    flex-direction: column
    box-shadow: 0 0 10px #ccc
    border-radius: 20px
    padding: 10px

    &__box
        background: #fff
        border-radius: 10px
        padding: 10px
        box-shadow: 0 0 10px #ccc
</style>