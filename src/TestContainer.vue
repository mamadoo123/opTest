<template>
  <div>
    <VisualAcuity v-if="currentTest.name === 'Visual Acuity'" :test="currentTest"/>
    <Astigmatism v-if="currentTest.name === 'Astigmatism'" :test="currentTest"/>
    <NearVisionOne v-if="currentTest.name === 'Near Vision One'" :test="currentTest"/>
    <ColorVision v-if="currentTest.name === 'Color Vision'" :test="currentTest"/>
    <LightSensitivity v-if="currentTest.name === 'Light Sensitivity'" :test="currentTest"/>
    <NearVisionTwo v-if="currentTest.name === 'Near Vision Two'" :test="currentTest"/>

  </div>
</template>
<script>
import VisualAcuity from './components/VisualAcuity';
import Astigmatism from './components/Astigmatism'
import NearVisionOne from './components/NearVisionOne';
import ColorVision from './components/ColorVision';
import LightSensitivity from './components/LightSensitivity';
import NearVisionTwo from './components/NearVisionTwo';

  export default {
    components:{VisualAcuity, Astigmatism, NearVisionOne, ColorVision, LightSensitivity, NearVisionTwo},
    computed:{
      currentTest(){
        return this.$store.state.currentTest
      }
    }
  }

//   computed:{
//     getTestNameArray:function(){
//       let testNameArray = [testOneData.name, testTwoData.name, testThreeData.name, testFourData.name];
//       return testNameArray;
//     },
//   },
//   beforeMount:function(){ 
//     this.initialize()
//   },
//   methods:{
//     getNextTest(event){
//       window.console.log(event);
//       if(this.testOne.tests.length ===0){
//         window.console.log('finished')
//         return;
//       }
//       if(event === this.testOne.tests[0].correct_answer){
//         this.testOne.numberOfCorrectAnswers++;
//         window.console.log("points:"+this.testOne.numberOfCorrectAnswers)
//       }
//       this.testOne.tests = this.testOne.tests.filter( test => test !== this.testOne.tests[0]);
//     },
//     getNextTestTwo(event){
//       const userStateData = this.testTwo.userState;
//       window.console.log(event)
//       if(event === 'yes'){
//         userStateData.push(this.testTwo.tests[0].condition);
//         if(userStateData.length !== 0){
//           userStateData.forEach(item => window.console.log(item))
//         }
//       }
//       this.testTwo.tests = this.testTwo.tests.filter( test => test !== this.testTwo.tests[0]);
//     },
//     getNextTestThree(event){
//       window.console.log('test three event value: '+event);
//       if(event ==='no'){
//         this.testThree.userState.problemMsg = 'You Have A Near Vision Problems'
//       }else{
//         this.testThree.userState.problemMsg = 'Normal Near Vision'
//       }
//       this.testThree.passed = true
//     },
//     getNextTestFour(event){
//       window.console.log(event);
//       if(this.testFour.tests.length ===0){
//         window.console.log('finished')
//         return;
//       }
//       if(event == this.testFour.tests[0].correct_answer){
//         this.testFour.numberOfCorrectAnswers++;
//         window.console.log("points:"+this.testFour.numberOfCorrectAnswers)
//       }
//       this.testFour.tests = this.testFour.tests.filter( test => test !== this.testFour.tests[0]);
//     },
//     initialize(){
//       this.testOne = testOneData,
//       this.testTwo = testTwoData,
//       this.testThree = testThreeData,
//       this.testFour = testFourData
//     },
//     handleResetBtn(){
//       this.testOne={},
//       this.testTwo={},
//       this.testThree={},
//       this.testFour={},
//       this.initialize();
//       window.console.log(this.testOne)
//     }
//   }
// }
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
