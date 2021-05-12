<script>
export default {
    props:["dark_back","camp_info","index"],
    data(){
        return{
            like: false,
        }
    },
    computed:{
        glamping(){
            return this.camp_info.glamping ? 'g_pic' : 'c_pic'
        },
        cate_text(){
            return this.camp_info.glamping ? '豪華露營' : '紮營露營'
        },
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>