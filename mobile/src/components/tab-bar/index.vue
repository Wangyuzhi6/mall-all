<template>
    <div class="tab-bar">
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
            <van-tabbar-item icon="shop-o" to='/category'>分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to='/cart'>购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" to='/user'>个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name: "TabBar",
    data() {
        return {
            active: 0
        }
    }
};
</script>