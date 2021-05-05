<script>
export default {
    props:["step","price_total","cart_list_length"],
    computed:{
        next_step(){
            switch(this.step){
                case 1 : 
                    if(this.cart_list_length !== 0){
                        return "前往付款"
                    }
                    break;
                case 2 : 
                    return "下一步"
                    break;
                case 3 : 
                    return "確認結帳"
                    break;
            }
        }
    },
    methods:{
        stepToogle(control){
            this.$emit("stepToogle", control)
        }
    }
}
</script>

<template src="./template.html"></template>
<style scoped src="./style.css"></style>