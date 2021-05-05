<script>
import MapItem from "../../components/MapItem/MapItem"
export default {
    data(){
        return{
        
        }
    },
    components:{
        MapItem,
    },
    methods:{
        closeModal(){
            this.$emit("toggleModal", false)
        }
    }
}

// data設定  modal: true,
// 方法 
// toggleModal(toggle){
//       this.modal = toggle[0];
// }
// 模板 <MapModal v-if="modal" @toggleModal="toggleModal"/>

</script>
<template src="./template.html"></template>
<style scoped src="./style.css"></style>

