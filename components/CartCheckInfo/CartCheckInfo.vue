<script>
import axios from "axios";
export default {
  props: ["cart_list","all_checkinfo"],
  data() {
    return {
      check_list: [],
      toogleopen: false,
    };
  },
  computed:{
    invoice(){
      if(this.all_checkinfo.invoice == "phone"){
        return "電子發票（手機條碼載具）"
      }else if(this.all_checkinfo.invoice == "people"){
        return "電子發票（自然人憑證歸戶）"
      }else if(this.all_checkinfo.invoice == "tax"){
         return "統編發票"
      }else{
        return "無填寫"
      }
    },
    pay(){
      if(this.all_checkinfo.trans_way == "card"){
        return "信用卡付款"
      }else{
        return "無填寫"
      }
    },
    trans_way(){
      if(this.all_checkinfo.trans_way == "car"){
        return "宅配（ 需負擔運費NT$70 ）"
      }else{
        return "無填寫"
      }
    }
  },
  watch: {
    cart_list() {
        this.getList()
    }
  },
  methods: {
    getList() {
      axios.get("/productInfo.json").then(res => {
        this.cart_list.forEach(item => {
          let each_item = res.data.filter(product => product.id == item.id)[0];
          this.check_list.push(each_item);
        });
      });
    }
  },
  mounted() {
      this.getList()
  }
};
</script>

<template src="./template.html"></template>
<style scoped src="./style.css"></style>
