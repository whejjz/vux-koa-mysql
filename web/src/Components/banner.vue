<template>
    <div class="c-banner">
        <swipe :auto="0">
            <swipe-item>
                <img src="../Images/banner-1.jpg"/>
            </swipe-item>
            <swipe-item>
                <img src="../Images/banner-2.jpg"/>
            </swipe-item>
        </swipe>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    export default {
        components: {
            Swipe,
            SwipeItem
        },
    }
</script>
<style>
    .c-banner{
        height: 100px;
        overflow: hidden;
        img{
            display: block;
            height: auto;
            width: 100%;
        }
    }
</style>