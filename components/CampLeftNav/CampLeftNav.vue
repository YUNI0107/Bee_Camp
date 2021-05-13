<script>
export default {
    props:["camptype","place","indoor_type","rain_type"],
    computed:{
        place_name(){
            switch(this.place){
                case "north":
                    return "北";
                    break;
                case "south":
                    return "南";
                    break;
                case "east":
                    return "東";
                    break;
                case "west":
                    return "西";
                    break;
                case "central":
                    return "中";
                    break;
            }
        },
        camptype_name(){
            if(this.camptype !== null && this.camptype == "glamping"){
                return "豪華露營"
            }else{
                return "紮營露營"
            }
        }
    },
    methods:{
        backPage(){
            this.$router.go(-1)
        }
    }
}
</script>

<template src="./template.html"></template>
<style scoped src="./style.css"></style>