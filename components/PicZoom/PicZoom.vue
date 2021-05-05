<script>
export default {
    props: ["current_pic"],
    methods:{
        picZoomup(){
            this.$emit('picZoom','-')
        }
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>