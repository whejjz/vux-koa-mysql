<template>
    <nav class="c-type">
        <a class="type__col" href="" v-for="n in 10">
            <img class="o-img" src="../Images/type-1.png" />
            <span class="o-text">京东超市</span>
        </a>
    </nav>
</template>
<script>
    export default {
        components: {
        },
        data () {
            return {
            }
        },
        mounted () {
        }
    }
</script>
<style>
    .c-type{
        padding:10px 5vw;
        .type__col{
            display: inline-block;
            width: 18vw;
            height: 18vw;
            margin-top: 5px;
        }
        .o-img{
            display: block;
            width: 10vw;
            height: 10vw;
            margin: auto;
        }
        .o-text{
            display: block;
            margin-top: 5px;
           text-align: center;
        }
    }
</style>