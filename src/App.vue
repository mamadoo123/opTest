<template>
  <div id="app">
    <Header />
    <TestContainer />
        <b-button variant="danger" @click="handleResetBtn">Reset</b-button>
  </div>
</template>
<script>

import TestContainer from './TestContainer';
import Header from './components/Header';

import testOneData from '../src/dataFiles/test-one-data.js';
import testTwoData from '../src/dataFiles/test-two-data.js';
import testThreeData from '../src/dataFiles/test-three-data.js';
import testFourData from '../src/dataFiles/test-four-data.js';
import testFiveData from '../src/dataFiles/test-five-data.js';
import testSixData from '../src/dataFiles/test-six-data.js';

export default {
  name: 'app',
  components: { Header, TestContainer},
  computed:{
    currentTest(){
      return this.$store.state.currentTest
    }
  },
  beforeMount:function(){ 
    this.initialize()
  },
  methods:{
    getNextTest(event){
      window.console.log(event);
      if(this.testOne.tests.length ===0){
        window.console.log('finished')
        return;
      }
      if(event === this.testOne.tests[0].correct_answer){
        this.testOne.numberOfCorrectAnswers++;
        window.console.log("points:"+this.testOne.numberOfCorrectAnswers)
      }
      this.testOne.tests = this.testOne.tests.filter( test => test !== this.testOne.tests[0]);
    },
    initialize(){
      const testArray = [testOneData, testTwoData, testThreeData, testFourData, testFiveData, testSixData];
      this.$store.commit('setAllTests', testArray)
      this.$store.commit('setCurrentTest', testOneData)
    },
    handleResetBtn(){
      this.initialize();
    },
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
.astegmatism-list-item{
  border: solid 1px black;
  color:brown;
  background-color: aquamarine
}
</style>
