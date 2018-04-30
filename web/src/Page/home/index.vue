<template>
    <div class="c-home">
        <my-header></my-header>
        <my-footer></my-footer>
    </div>
</template>
<script>
    import myHeader from 'components/header'
    import myFooter from 'components/footer'
    export default {
        components: {
            myHeader,
            myFooter
        },
        data () {
            return {}
        }
    }
</script>