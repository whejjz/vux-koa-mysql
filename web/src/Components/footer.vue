<template>
    <Tabbar class="c-footer" v-model="selected">
        <tab-item id="main" class="c-footer__main">
            <img slot="icon" src="">
            首页
        </tab-item>
        <tab-item id="type" class="c-footer__type">
            <img slot="icon" src="">
            分类
        </tab-item>
        <tab-item id="find" class="c-footer__find">
            <img slot="icon" src="">
            发现
        </tab-item>
        <tab-item id="shop" class="c-footer__shop">
            <img slot="icon" src="">
            购物车
        </tab-item>
        <tab-item id="my" class="c-footer__my">
            <img slot="icon" src="">
            我的
        </tab-item>
    </Tabbar>
</template>
<script>
    import { Tabbar, TabItem } from 'mint-ui';
    export default {
        components: {
            Tabbar,
            TabItem
        },
        data () {
            return {
                selected: 'main'
            }
        }
    }
</script>
<style>
    .c-footer{
        box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
    }
</style>