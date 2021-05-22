<script>
export default {
    props: ["modaltype"],
    data(){
        return{
            
        }
    },
    computed:{
        info_text(){
            if(this.modaltype == "like"){
                return "收藏至口袋名單！"
            }else if(this.modaltype == "unlike"){
                return "取消口袋名單收藏！"
            }
        }
    },
    mounted(){
        setTimeout(()=>{
           this.$emit('closeInfoModal')
        },1000)
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.css"></style>