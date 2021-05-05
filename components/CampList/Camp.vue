

<script>

import camp1 from "../../assets/camp/01.jpg";
import camp2 from "../../assets/camp/02.jpg";
import camp3 from "../../assets/camp/03.jpg";
import camp4 from "../../assets/camp/04.jpg";
export default {

    data() {
        return {
           
            camps:[
               {  
                camp:camp1,
                index:'01', 
                title:'那一村豪華露營',
                addrs:'宜蘭縣礁溪鄉',
                desc:'在地文化傳承、自然共生觀念、農務知識教學，進而以達到提升地方經濟',
                }, 
                  {  
                camp:camp2,
                index:'02', 
                title:'那一村豪華露營',
                addrs:'宜蘭縣礁溪鄉',
                desc:'在地文化傳承、自然共生觀念、農務知識教學，進而以達到提升地方經濟',
                }, 
                  {  
                camp:camp3,
                index:'03', 
                title:'那一村豪華露營',
                addrs:'宜蘭縣礁溪鄉',
                desc:'在地文化傳承、自然共生觀念、農務知識教學，進而以達到提升地方經濟',
                }, 
                  {  
                      camp:camp4,
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
      methods: {
       glamp(){
         
       },
       camp(){

       },
     },

    
}
</script>
<template src="./camp.html"></template>
<style scoped src="../../css/camp.css"></style>

