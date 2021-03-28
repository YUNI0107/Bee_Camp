<script>
import axios from "axios"
export default {
    props: ["product","list_length"],
    data(){
        return{
            name: "",
            price: 0,
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