<script>
import img2 from "../assets/homepage/about2.svg";
import img3 from "../assets/homepage/about3.svg";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios"

export default {
  data() {
    return {
      searcharea: [],
      cate: [],
      device: [],
      about: [
        {
          img: require("../assets/homepage/about1.svg"),
          title: "台灣山林露營秘境",
          content1: "在山林間來場的小旅行吧！",
          content2:
            "搜尋台灣特色露營地為露營咖們整理了2020最夯的山林美景，該起身出發挑戰囉!"
        },
        {
          img: img2,
          title: "大自然旅行口袋",
          content1: "專屬口袋名單，開始安排即將到來的週末吧!",
          content2: "可以搜尋到符合自己需求的露營地，並且快速連接到訂房資訊"
        },
        {
          img: img3,
          title: "露營咖必帶裝備",
          content1: "你是第一次的首露族？清點完裝備清單再出發吧！",
          content2: "各大精選露營品牌，讓您挑選最齊全、最優惠的露營設備商品!"
        }
      ],
      recommend_product_list:[]
    };
  },
  components: {
    Navbar,
    FooterSection: () => import("@/components/FooterSection/FooterSection"),
    Camp: () => import("@/components/CampList/Camp"),
    ProductListBlock: () =>
      import("@/components/ProductListBlock/ProductListBlock")
  },
  mounted(){
      axios.get("/productInfo.json").then((res)=>{
          let range = Math.floor( Math.random() * 17 );
          if(range > 13) range = 13; 
           this.recommend_product_list = res.data.slice(range,range+4).map((item)=>{
               return {
                   id: item.id,
                   name: item.name,
                   price: item.price,
               }
           }) 
         })
  }
};
</script>
<template src="./homepage.html"></template>
<style scoped src="./style.css"></style>
