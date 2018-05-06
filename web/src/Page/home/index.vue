<template>
    <div class="c-home">
        <my-header></my-header>
        <my-banner></my-banner>
        <my-type></my-type>
        {{test}}
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
            return {
                test: 1
            }
        },
        mounted () {
            console.log(this)
            this._data.test = 2
        }
    }
</script>