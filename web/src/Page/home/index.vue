<template>
    <div class="c-home">
        <my-header></my-header>
        <my-banner></my-banner>
    </div>
</template>
<script>
    import myHeader from 'components/header'
    import myBanner from 'components/banner'
    export default {
        components: {
            myHeader,
            myBanner
        },
        data () {
            return {}
        }
    }
</script>