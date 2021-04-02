<template>
    <div>
        <Navbar />
        這裡是商品主頁～～～～
    </div>
</template>
<script>
export default {
    components:{
         Navbar: () => import("@/components/Navbar"),
    },
}
</script>