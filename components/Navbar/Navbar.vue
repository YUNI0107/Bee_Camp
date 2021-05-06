<script>
export default {
    props: ["link_color","logo_color","back_color"],
    data(){
        return{
            lastY: 0,
            mobile_nav: false,
        }
    },
    computed:{
        list_length(){
            let total = 0
            this.$store.state.cart.cart_list.forEach(element=>{
                total += element.num
            })
            return total
        },
        nav_hide(){
            return this.$store.state.other.nav_hide
        }
    },
    watch:{
        list_length(){
            setTimeout(()=>{
                this.$refs.ball.classList.add('num_animation')
            },0.0001)
            this.$refs.ball.classList.remove('num_animation')
        }
    },
    methods:{
        scrollHide(){
            if( window.scrollY > this.lastY && window.scrollY >  100){
                this.$store.commit('other/toggleNav', true)
            }else{
                this.$store.commit('other/toggleNav', false)
            }
            this.lastY = window.scrollY;
        },
        toggleNav(){
            this.mobile_nav = !this.mobile_nav;
        },
        mobileNav(){
            this.mobile_nav = false;
        }
    },
    mounted(){
        window.addEventListener("scroll", this.scrollHide)
    },
    destroyed(){
        window.removeEventListener("scroll", this.scrollHide)
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>