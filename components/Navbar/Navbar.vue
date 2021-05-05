<template>
    <div>
        <div class="container">
            <nuxt-link to="/"> <div class="logo"><img src="../../assets/logo.svg" alt=""></div></nuxt-link>
        <div class="navbar">
             <div>關於露營蜂</div>
             <nuxt-link to="/camp_category/">
             <div>特色露營地</div>
             </nuxt-link>
            <div>我的露營地圖</div>
                <nuxt-link to="/product_category/">
                <div>露營商品</div>
                </nuxt-link>
               <nuxt-link to="/ShoppingCart/">
               <div>購物車</div>
               </nuxt-link>
        </div>
        </div>
    </div>
</template>
<style scoped>
/* lr */
.container{
    display: flex;
    justify-content: space-between;
    margin: 10px 70px;
}
.logo{
    width: 100px;
}
.navbar{
 display: flex;
 width: 50%;
 justify-content: space-around;
}
a{
     text-decoration:none;
    color: black;
}

/* lr */
    
</style>