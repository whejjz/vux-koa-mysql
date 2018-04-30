<template>
    <div class="c-header">
        <Header>
            <Button icon="more" slot="left"></Button>
            <Button slot="right">登录</Button>
        </Header>
    </div>
</template>
<script>
    import { Header, Button } from 'mint-ui'
    export default {
        components: {
            Header,
            Button
        },
    }
</script>