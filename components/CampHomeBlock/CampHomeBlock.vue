<script>
export default {
    props:["dark_back","camp_info"],
    data(){
        return{
            
        }
    },
    computed:{
        type_text(){
            if(this.camp_info.glamping){
                return "豪華露營"
            }else{
                return "紮營露營"
            }
        },
        type_pic(){
            if(this.camp_info.glamping){
                return "g_pic"
            }else{
                return "c_pic"
            }
        },
        route_text(){
            if(this.camp_info.glamping){
                return "glamping"
            }else{
                return "camping"
            }
        },
        route_link(){
            return `/camp/central/${this.route_text}/${this.camp_info.number}`;
        }
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>