<template>
  <div id="app">
        <!-- English Container -->
    <!-- ========================== -->
    <div v-if="currentLanguage==='en'" class="englishContainer">
      <ul class="d-flex" style="margin-left:75px">
          <b-link  class="pr-2 bg-primary text-light">En</b-link>
          <b-link class="border-left border-primary px-2 mx-2" @click="onLanguageArabic">عربي</b-link>
      </ul>

    <b-container>
      
      <b-container class="px-0">
        <Header />  
      </b-container>
      <b-container class="row">
        <TestContainer class="col-7"/>
        <Instructions class="col-2 ml-3"/>
      </b-container>
    </b-container>
    </div>
        <!-- Arabic Container -->
    <!-- ========================== -->
    <div v-else class="arabicContainer" dir="rtl">
      <ul class="d-flex" style="margin-right:100px">
          <b-link class="pr-2 bg-primary text-light" >عربي</b-link>
          <b-link class="border-right border-primary mx-2 px-2" @click="onLanguageEnglish">En</b-link>
      </ul>

    <b-container>
      
      <b-container class="px-0">
        <ArabicHeader style="margin-right:-15px"/>  
      </b-container>
      <b-container class="row mx-2">
        <ArabicTestContainer class="col-6"/>
        <div style="width:4%"></div>
        <ArabicInstructions class="col-2 ml-3"/>
      </b-container>
    </b-container>
    </div>
    
  </div>
</template>
<script>

import TestContainer from './TestContainer';
import ArabicTestContainer from'./arabicTestContainer'
import Header from './components/Header';
import ArabicHeader from './components/arabic/Header';
import Instructions from './components/Instructions';
import ArabicInstructions from './components/arabic/Instructions';

import testOneData from '../src/dataFiles/test-one-data.js';
import testTwoData from '../src/dataFiles/test-two-data.js';
import testThreeData from '../src/dataFiles/test-three-data.js';
import testFourData from '../src/dataFiles/test-four-data.js';
import testFiveData from '../src/dataFiles/test-five-data.js';
import testSixData from '../src/dataFiles/test-six-data.js';
import testSevenData from '../src/dataFiles/test-seven-data.js';

import arabicTestOneData from '../src/dataFiles/arabic/test-one-data.js';
import arabicTestTwoData from '../src/dataFiles/arabic/test-two-data.js';
import arabicTestThreeData from '../src/dataFiles/arabic/test-three-data.js';
import arabicTestFourData from '../src/dataFiles/arabic/test-four-data.js';
import arabicTestFiveData from '../src/dataFiles/arabic/test-five-data.js';
import arabicTestSixData from '../src/dataFiles/arabic/test-six-data.js';
import arabicTestSevenData from '../src/dataFiles/arabic/test-seven-data.js';

export default {
  name: 'app',
  components: { Header, ArabicHeader, TestContainer,ArabicTestContainer, Instructions,ArabicInstructions},
  computed:{
    currentTest(){
      return this.$store.state.currentTest
    },
    currentLanguage:{
      get: function(){
        return this.$store.getters.getCurrentLanguage;
      },
      set: function(val="en"){
        this.$store.commit('setCurrentLanguage', val)
      }
      
    }
  },
  mounted:function(){ 
    this.initialize()
    this.$store.commit('setCurrentTest', testOneData)
  },
  methods:{
    initialize(){
      const testArray = [testOneData, testTwoData, testThreeData, testFourData, testFiveData, testSixData, testSevenData];
      const arabicTestArray = [arabicTestOneData, arabicTestTwoData, arabicTestThreeData, arabicTestFourData, arabicTestFiveData, arabicTestSixData, arabicTestSevenData];
      this.$store.commit('setAllTests', testArray);
      this.$store.commit('setAllArabicTests', arabicTestArray)
      // we will not set the arabic current test here cuz by default the language is in english
      this.$store.commit('setCurrentTest', testOneData)
      this.$store.commit('setCurrentLanguage', 'ar')
    },
    onLanguageArabic(){
      this.$store.commit('setCurrentLanguage', 'ar')
      this.$store.commit('setCurrentArabicTest', arabicTestOneData)
      this.$store.commit('deleteAllReport');
      this.$root.$emit('changeLanguage')
    },
    onLanguageEnglish(){
      this.$store.commit('setCurrentLanguage', 'en')
      this.$store.commit('setCurrentTest', testOneData)
      this.$store.commit('deleteAllArabicReport')
      this.$root.$emit('changeLanguage')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
</style>
