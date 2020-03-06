<template>
  <b-card>
    <b-card-header>{{currentTest.name}}</b-card-header>
    <b-card-body>
    <VisualAcuity v-if="currentTest.name === 'حدة البصر'" :test="currentTest"/>
    <Astigmatism v-if="currentTest.name === 'الإستجماتزم'" :test="currentTest"/>
    <NearVisionOne v-if="currentTest.name === 'قرب الرؤية'" :test="currentTest"/>
    <ColorVision v-if="currentTest.name === 'عمى الألوان'" :test="currentTest"/>
    <LightSensitivity v-if="currentTest.name === 'حساسية الضوء'" :test="currentTest"/>
    <NearVisionTwo v-if="currentTest.name === 'قرب الرؤية 2'" :test="currentTest"/>
    <AMD v-if="currentTest.name === 'AMD التنكس البقعي المرتبط بالعمر'" :test="currentTest"/>
    </b-card-body>
  </b-card>
</template>
<script>
import VisualAcuity from './components/arabic/VisualAcuity';
import Astigmatism from './components/arabic/Astigmatism'
import NearVisionOne from './components/arabic/NearVisionOne';
import ColorVision from './components/arabic/ColorVision';
import LightSensitivity from './components/arabic/LightSensitivity';
import NearVisionTwo from './components/arabic/NearVisionTwo';
import AMD from './components/arabic/AMD';

  export default {
    components:{VisualAcuity, Astigmatism, NearVisionOne, ColorVision, LightSensitivity, NearVisionTwo, AMD},
    computed:{
      currentTest(){
        return this.$store.state.currentArabicTest
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
