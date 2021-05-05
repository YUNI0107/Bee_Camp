
<template>
<div>
    <!--商品種類頁籤-->
    <div id="PD_category">
        <div class="cate_item">
        <div class="item_camp"></div>
        <p>帳篷類</p>
        </div>
          <div class="cate_item">
        <div class="item_kitchen"></div>
        <p>客廳/廚房類</p>
        </div>
          <div class="cate_item">
        <div class="item_dishes"></div>
        <p>料理類</p>
        </div>
          <div class="cate_item">
        <div class="item_light"></div>
        <p>照明類</p>
        </div>
          <div class="cate_item">
        <div class="item_inside"></div>
        <p>帳內類</p>
        </div>
          <div class="cate_item">
        <div class="item_other"></div>
        <p>其他</p>
        </div>
        
        
    </div>

    <!--商品 list-->
    <div id="PD_list">
        <div v-for="(product,index) in products " :key="index" class="PD_item">
            <nuxt-link to="/product_category/product_id">
                <div><img :src="product.img" alt=""></div>
                <h3>{{product.title}}</h3>
            </nuxt-link>
            <p>NT${{product.price}}</p>
            <button>加入購物車</button>
        </div>
    </div>
</div>
</template>
<script>

import axios from "axios";

export default {
    data() {
        return {
            products:[
               {
                camp:[],
                kitchen:[],
                dishes:[],
                light:[],
                inside:[],
                other:[],
               
               }
            ],
            
        }
    },

    computed:{
    },


    mounted() {
       axios.get("/productInfo.json").then((res)=>{
           this.products.camp = res.data.slice(0,4);  
           let arr =[res.data]
           let arr2 = [res.data]
           
           arr.forEach((item)=>{
               let pushitem ={
                   id:item.id,
                   title:item.name,
                   price:item.price,       
               }
               this.products.camp.push(pushitem)
           }),
           arr2.forEach((item)=>{
               let pushitem ={
                   id:item.id,
                   title:item.name,
                   price:item.price,       
               }
               this.products.kitch.push(pushitem)
           })
           
         })
    },
   
    
}
</script>
<!--<template src="./product.html"></template> -->
<style scoped src="../../css/product.css"></style>