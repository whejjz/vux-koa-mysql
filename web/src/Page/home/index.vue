<template>
    <div class="c-home">
        <my-header></my-header>
        <my-banner></my-banner>
        <my-type></my-type>
    </div>
</template>
<script>
    import myHeader from 'components/header'
    import myBanner from 'components/banner'
    import myType from 'components/type'
    export default {
        components: {
            myHeader,
            myBanner,
            myType
        },
        data () {
            return {}
        }
    }
</script>