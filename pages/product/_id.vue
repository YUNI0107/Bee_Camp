<script>
import axios from "axios"
import { mapState } from 'vuex'
import Navbar from "../../components/Navbar/Navbar"
import ProductLeftNav from "../../components/ProductLeftNav/ProductLeftNav"
import PicZoom from "../../components/PicZoom/PicZoom"
import FooterSection from "../../components/FooterSection/FooterSection"
export default {
    data(){
        return{
            product_info: null,
            cate: null,
            smallpic_num: 1,
            current_pic: null,
            current_pic_num: 0,
            pic_ani: false,
            toggle: 'standard',
            rendering: true,
            piczoom: false,
            num: 1,
        }
    },
    computed:{
        id(){
            return this.$route.params.id
        },
        show_tablecontent(){
            if(this.toggle == 'standard'){
                return this.product_info.standard
            }else if(this.toggle == 'ship'){
                return this.product_info.ship
            }
        },
        ...mapState("cart", {
            cart_list: "cart_list"
        })
    },
    watch:{

    },
    components:{
        ProductLeftNav,
        FooterSection,
        PicZoom,
        Navbar,
    },
    methods:{
        changeBigImg(num){
            this.pic_ani = false
            this.current_pic_num = num;
            if(num == 0){
                this.current_pic = require(`../../assets/ProductImage/${this.product_info.id}_bigimg.jpeg`)
                this.pic_ani = true;
            }else{
                this.current_pic = require(`../../assets/ProductImage/${this.product_info.id}_small${num}.jpeg`)
                this.pic_ani = true;
            }

            let timer = setTimeout(()=>{
                if(this.pic_ani){
                    this.pic_ani = false
                    clearTimeout(timer)
                }else{
                    clearTimeout(timer)
                }
            },500)
        },
        toggleTable(toggle){
            this.toggle = toggle
        },
        picZoom(check){
            check == '+' ? this.piczoom = true : this.piczoom = false;
        },
        toggleNum(check){
            (check == '-' && this.num !== 1) ? this.num-- : (check == '-' && this.num == 1) ? this.num == 0 : this.num++;
        },
        addCart(){
            this.$store.commit('cart/addCart', {
                id: Number(this.id),
                num: this.num,
            })
        }
    },
    mounted(){
        axios.get("/Bee_Camp/productInfo.json").then(res=>{
            this.product_info = res.data.filter(item => item.id == this.id)[0];
            this.cate = this.product_info.cate;
            this.smallpic_num = this.product_info.smallpic_num;
            this.current_pic = require(`../../assets/ProductImage/${this.product_info.id}_bigimg.jpeg`)
            this.rendering = false
        })
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>