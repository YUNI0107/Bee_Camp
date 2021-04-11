<script>
export default {
    props:["backcolor","cate"],
    computed:{
        cate_name(){
            switch(this.cate){
                case 'camp':
                    return '帳篷類'
                    break
                case 'kitchen':
                    return '客廳/廚房類'
                    break
                case 'dishes':
                    return '料理類'
                    break
                case 'light':
                    return '照明類'
                    break
                case 'inside':
                    return '帳內'
                    break
                case 'other':
                    return '其他'
                    break
                
            }
        }
    },
    methods:{
        backPage(){
            this.$router.go(-1);
        }
    }
}
</script>
<template src="./template.html"></template>
<style scoped src="./style.css"></style>