<script>
import RightBar from "../../components/RightBar/RightBar"
import axios from "axios"
export default {
    data(){
        return{
            product_info: null,
            cate: null,
        }
    },
    computed:{
        id(){
            return this.$route.params.id
        },

    },
    components:{
        RightBar,
    },
    mounted(){
        axios.get("/productInfo.json").then(res=>{
            this.product_info = res.data.filter(item => item.id == this.id)[0];
            this.cate = this.product_info.cate
        })
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>