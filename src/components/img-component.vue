<template>
  <div class="img-container">
    <img src="../assets/letter.jpg"
         :style="imgTransform(rotationNumber, scaleValue)"
    >
  </div>
</template>

<script>
export default {
props:['rotationNumber','scaleValue'],
methods:{
  imgTransform(n, scaleValue){
    return {transform:`rotate(${n * 90}deg) scale(${scaleValue})`}
  }
}
}
</script>

<style>
.img-container{
  width:200px;
  height:200px;
  margin-top:-10px;
}
</style>