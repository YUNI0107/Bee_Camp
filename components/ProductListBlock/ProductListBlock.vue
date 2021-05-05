<script>

import axios from "axios";

export default {
    props:[ "product_info" ],
    data() {
        return {
            
        }
    },
    computed:{
        product_name(){
            return this.product_info.name.slice(0, 25) + "..."
        }
    },
    methods:{
        addCart(){
            this.$store.commit('cart/addCart', {
                id: this.product_info.id,
                num: 1,
            })
        }
    },
    mounted() {

    },
   
    
}
</script>
<template src="./product.html"></template>
<style scoped src="./style.css"></style>