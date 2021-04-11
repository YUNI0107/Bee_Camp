
<template>
<div>
    <Navbar />
   <section id="Banner">
<div class="bannerpic">
      <div class="light">
           <img src="~/assets/homepage/light.svg" alt="light">
       </div>
       <div class="leftimg">
           <img src="~/assets/homepage/banner2.svg" alt="">
       </div>
 <div class="centerimg">
           <img src="~/assets/homepage/banner3.svg" alt="">
       </div>
        <div class="rightimg">
           <img src="~/assets/homepage/banner4.svg" alt="">
       </div>
</div>
<div class="searchbox">
    <table>
         <tr>
        <td>
              
    <input type="checkbox" v-model="area" value="north">北部
   <input type="checkbox" v-model="area" value="west">中部
   <input type="checkbox" v-model="area" value="south">南部
    <input type="checkbox" v-model="area" value="east">東部
        </td>
     
    </tr>
    
    </table>
   
</div>
     
   </section>
   <!-- 關於露營蜂 -->
   <section id="About">
       <h1>關於露營蜂</h1>
       <p>如蜜蜂般，一起搭件屬於全家人的快樂時光，享受與大自然為舞之樂！</p>
        <br>
       <div class="aboutus">
           <div>
               <div class="aboutimg">
               <img src="~/assets/about1.svg" alt="">
           </div>
           </div>
           <div>
               <ul>
                   <li v-for="item in about">               
                          <image src="item.img" alt=""></image>
                            <h2>{{item.title}}</h2>
                            <p> {{item.content}}</p>
                    <br>
                   </li>
               </ul>
           </div>
       </div>
   </section>

    <!-- 露營地 -->
   <section id="Camp">
       <h1>今晚睡帳棚！ 必訪特色露營地</h1>
       <p>翩翩飛舞的螢火蟲，滿天星光，
不論是只要人到場的豪華網美露營地，或是透過親自動手紮營的營地，都讓能讓人體驗親近大自然的生活。</p>
 <br>
 <Camp />
 <nuxt-link to="/camp_category/">
    <div class="LearnMore"> 看更多<img src="../assets/arrow.svg" alt="">
       
        </div>
 </nuxt-link>

 <!-- 地圖 -->
   </section>
   <section  id="Map">地圖123123123</section>

 <!-- 產品 -->
   <section  id="Product">
       <h1>露營用品</h1>
       <p>享受快樂露營時光必備的用具！</p>
        <br>
 <Product />
       <nuxt-link to="/product_category/">
        <div class="LearnMore"> 看更多<img src="../assets/arrow.svg" alt="">
       
        </div>
       </nuxt-link>
   </section>
   <!-- <Footer /> -->
</div>
</template>


<script>
import img1 from "../assets/homepage/about1.svg";
import img2 from "../assets/homepage/about2.svg";
import img3 from "../assets/homepage/about3.svg";

export default {
    data() {
        return {
            about:[
                {
                    img:img1,
                    title:'台灣山林露營秘境',
                    content:'在山林間來場的小旅行吧！搜尋台灣特色露營地為露營咖們整理了2020最夯的山林美景，該起身出發挑戰囉!',
                },
                {
                     img:img2,
                    title:'大自然旅行口袋',
                    content:'專屬口袋名單，開始安排即將到來的週末吧!可以搜尋到符合自己需求的露營地，並且快速連接到訂房資訊',
                },
                 {
                    img:img3,
                    title:'露營咖必帶裝備',
                    content:'你是第一次的首露族？清點完裝備清單再出發吧！<br>各大精選露營品牌，讓您挑選最齊全、最優惠的露營設備商品!',
                },

            ]
        }
    },
 components:{ 
    Navbar: () => import("@/components/Navbar"),
    Footer:()=>import("@/components/FooterSection/FooterSection"),
    Camp:() => import("@/components/Camp"),
    Product:() => import("@/components/Product"),

    },
css:[ '@/css/main.css',
    ],
      
};
</script>
<style scoped src="../css/style.css"></style>
