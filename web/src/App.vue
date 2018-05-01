<template>
    <section class="l-main">
        <div class="l-content">
            <router-view></router-view>
        </div>
        <my-footer></my-footer>
    </section>
</template>
<script>
    import myFooter from 'components/footer'
    export default {
        components: {
            myFooter
        },
        beforeCreate () {

        },
        created () {

        },
        beforeMount () {

        },
        mounted () {
        },
        beforeUpdate () {

        },
        updated () {

        },
        beforeDestroy () {

        },
        destroyed () {

        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .l-content{
        position: absolute;
        top: 0;
        bottom: 55px;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>