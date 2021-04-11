<template>
    <div id="camp">
        <div class="container">
        <div class="item" v-for="camp in camps" >
            <h2>{{camp.index}}</h2>
            <h2>{{camp.title}}</h2>
            <br>
            <p>{{camp.addrs}}</p>
             <div></div>
            <p>{{camp.desc}}</p>
            <div class="camp_img"><img src="../assets/camp/04.jpg" alt=""></div>
            <!--<div><img src="camp.camp" alt=""></div>-->

          <!--  <div class="camp_img">
                 <img src="../assets/camp/01.jpg" alt="">
            </div>
        </div>
        <div class="item">
           <div class="camp_img">
                <img src="../assets/camp/02.jpg" alt="">
            </div>
        </div>
        <div class="item">
             <h3>那一村豪華露營</h3>
           <div class="camp_img">
                <img src="../assets/camp/03.jpg" alt="">
            </div>
        </div>
        <div class="item">
           <div class="camp_img">
                  <img src="../assets/camp/04.jpg" alt="">
            </div>
            -->
        </div>


        </div>
    </div>
</template>

<script>

import camp1 from '../assets/camp/01.jpg';
import camp2 from '../assets/camp/02.jpg';
import camp3 from '../assets/camp/03.jpg';
import camp4 from '../assets/camp/04.jpg';

export default {
    data() {
        return {
            //campStyle:{
                //[camp1,camp2,camp3,camp4],
           // },
            camps:[
               { 
                   //圖片印不出來～～～
                //camp:camp1,
               // img:URL('../assets/camp/01.jpg'),
                index:'01', 
                title:'那一村豪華露營',
                addrs:'宜蘭縣礁溪鄉',
                desc:'在地文化傳承、自然共生觀念、農務知識教學，進而以達到提升地方經濟',
                }, 
                  {  
                //camp:camp2,
                index:'02', 
                title:'那一村豪華露營',
                addrs:'宜蘭縣礁溪鄉',
                desc:'在地文化傳承、自然共生觀念、農務知識教學，進而以達到提升地方經濟',
                }, 
                  {  
                      //camp:camp3,
                index:'03', 
                title:'那一村豪華露營',
                addrs:'宜蘭縣礁溪鄉',
                desc:'在地文化傳承、自然共生觀念、農務知識教學，進而以達到提升地方經濟',
                }, 
                  {  
                      //camp:camp4,
                       index:'04', 
                title:'那一村豪華露營',
                addrs:'宜蘭縣礁溪鄉',
                desc:'在地文化傳承、自然共生觀念、農務知識教學，進而以達到提升地方經濟',
                }, 
            ],

        }
    },
     computed: {
        
     },

    
}
</script>
<style scoped src="../css/camp.css">
</style>
