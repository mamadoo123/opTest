<template>
  <b-card>
    <b-card-header>{{currentTest.name}}</b-card-header>
    <b-card-body>
    <VisualAcuity v-if="currentTest.name === 'Visual Acuity'" :test="currentTest"/>
    <Astigmatism v-if="currentTest.name === 'Astigmatism'" :test="currentTest"/>
    <NearVisionOne v-if="currentTest.name === 'Near Vision One'" :test="currentTest"/>
    <ColorVision v-if="currentTest.name === 'Color Vision'" :test="currentTest"/>
    <LightSensitivity v-if="currentTest.name === 'Light Sensitivity'" :test="currentTest"/>
    <NearVisionTwo v-if="currentTest.name === 'Near Vision Two'" :test="currentTest"/>
    <AMD v-if="currentTest.name === 'AMD'" :test="currentTest"/>
    </b-card-body>
  </b-card>
</template>
<script>
import VisualAcuity from './components/VisualAcuity';
import Astigmatism from './components/Astigmatism'
import NearVisionOne from './components/NearVisionOne';
import ColorVision from './components/ColorVision';
import LightSensitivity from './components/LightSensitivity';
import NearVisionTwo from './components/NearVisionTwo';
import AMD from './components/AMD';

  export default {
    components:{VisualAcuity, Astigmatism, NearVisionOne, ColorVision, LightSensitivity, NearVisionTwo, AMD},
    computed:{
      currentTest(){
        return this.$store.state.currentTest
      }
    }
  }

</script>

<style>
ul {
  list-style: none;
}
.astegmatism-list-item{
  border: solid 1px black;
  color:brown;
  background-color: aquamarine
}
</style>
