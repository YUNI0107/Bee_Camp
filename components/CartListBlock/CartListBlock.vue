<script>
import axios from "axios"
export default {
    props: ["product","list_length","index"],
    data(){
        return{
            name: "",
            price: 0,
        }
    },
    computed:{

    },
    methods:{
        toggleNum(check){
            if(check == '-' && this.product.num> 1){
                this.$store.commit('cart/changeNum', {
                    id: this.product.id,
                    num: this.product.num - 1,
                })
            }else if(check == '+'){
                this.$store.commit('cart/changeNum', {
                    id: this.product.id,
                    num: this.product.num + 1,
                })
            }
        },
        deleteProduct(){
            this.$store.commit('cart/deleteProduct', this.product.id)
        }
        
    },
    mounted(){
        axios.get("/productInfo.json").then(res=>{
            this.name = res.data[this.product.id - 1].name
            this.price = res.data[this.product.id - 1].price
        })
    }
}
</script>
<template src="./template.html"></template>
<style scoped src="./style.css"></style>