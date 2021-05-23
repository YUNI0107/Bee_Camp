<script>
export default {
  props: ["camplittle_img", "camptype_pic", "big_img"],
  data() {
    return {
      // 控制目前的trans
      slide_distance: 0,
      // 存取原本距離
      origin_distance: 0,
      // 每次手指滑動的距離
      startPointX: 0,
      currentPointX: 0,
      // 控制每次手指下去只能移動一次
      slide_change: false,
      container_width: 0,
      no_trans: false,
      current_num: 0
    };
  },
  computed: {
    bouth_distance() {
      return this.currentPointX - this.startPointX;
    }
  },
  watch:{
    camplittle_img(){
      this.container_width = this.$refs.container.offsetWidth;
    },
    container_width(){
      this.slidePic(0)
    }
  },
  methods: {
    resizeChange() {
      if(this.camplittle_img && this.camptype_pic && this.big_img){
        this.container_width = this.$refs.container.offsetWidth;
      }
    },
    slidePic(num) {
      //  點選小點導覽，換目前的所在數字
      this.slide_distance = -(this.container_width * (num + 1));
      this.current_num = num;
    },
    touchStart(e) {
      // 設定觸控起始點，設定原始所在位置
      this.startPointX = e.changedTouches[0].pageX;
      this.origin_distance = this.slide_distance;
    },
    touchMove(e) {
      this.currentPointX = e.changedTouches[0].pageX;
      //   判斷此次點選是否滑動過
      if (!this.slide_change) {
        //   小於50小滑動 0-50 -50-0
        if (0 < this.bouth_distance && this.bouth_distance < 50) {
          this.slide_distance += this.bouth_distance;
        } else if (0 > this.bouth_distance && this.bouth_distance > -50) {
          this.slide_distance += this.bouth_distance;
        }
        // 大於50小於-50，完整大滑動
        if (50 < this.bouth_distance) {
          this.touchSlidePic("-");
        } else if (this.bouth_distance < -50) {
          this.touchSlidePic("+");
        }
      }
    },
    touchSlidePic(toggle) {
      //  設置滑動過
      this.slide_change = true;
      if (toggle == "+") {
        this.slide_distance = this.origin_distance - this.container_width;
        this.current_num++;
        // 如果是最後一張
        if (this.slide_distance == this.container_width * -7) {
          this.no_trans = true;
          this.current_num = 0;
          this.slide_distance = this.container_width * -1;
          setTimeout(() => {
            this.no_trans = false;
          }, 100);
        }
      } else {
        this.slide_distance = this.origin_distance + this.container_width;
        this.current_num--;
        // 如果是第一張
        if (this.slide_distance == 0) {
          this.no_trans = true;
          this.current_num = 5;
          this.slide_distance = this.container_width * -6;
          setTimeout(() => {
            this.no_trans = false;
          }, 100);
        }
      }
    },
    touchEnd() {
      //   彈回去 0-50 -50-0
      if (-50 < this.bouth_distance && this.bouth_distance < 50) {
        this.slide_distance = this.origin_distance;
      }
      //   準備下次滑動
      this.slide_change = false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.resizeChange();
      this.slide_distance = -this.$refs.container.offsetWidth;
    });
    window.addEventListener("resize", this.resizeChange);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeChange);
  }
};
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>
