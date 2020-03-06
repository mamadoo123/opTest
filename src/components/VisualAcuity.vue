<template>
    <b-container class="mx-auto">
         <b-modal v-once id="starter-modal" centered :title="$store.getters.getCurrentTest.name" 
                         ok-only no-close-on-esc no-close-on-backdrop hide-header-close>
                    <div class="container text-center">
                        <h3 class="my-4">Instructions</h3>

                        <b-list-group class="text-center">
                            <b-list-group-item v-for="(item, index) in instructionItems" :key="item.id">
                                <p v-if="item.modalContent"><span>{{index +1}} - </span> {{item.modalContent}}</p> 
                            </b-list-group-item>
                        </b-list-group>
                    </div>     
        </b-modal>


        <div v-if="report === null && !finished">
            <div>
                 <p>{{currentTest.instructionMsg}}</p>
                <hr>
                <b-button variant="outline-primary" 
                    @click="getNextImage(directions[1])"      
                >
                <i class="fas fa-arrow-up"></i>
                </b-button>
            </div>
            <div>
                <b-button variant="outline-primary" 
                    @click="getNextImage(directions[0])"
                >
                <i class="fas fa-arrow-left"></i>
                </b-button>
                <b-img src="https://static.electronicsweekly.com/news/wp-content/uploads/sites/16/2015/05/E1.jpg"
                  :style="imgTransform(currentTest.tests[0].degreeOfRotation, currentTest.tests[0].scale)"
                >
                </b-img>
                  <!-- <span style="font-size: 3rem">  <i class="fab fa-etsy"></i></span> -->
                <b-button variant="outline-primary" 
                    @click="getNextImage(directions[2])"
                >
                <i class="fas fa-arrow-right"></i>
                </b-button>
            </div>
            <div>
                <b-button variant="outline-primary" 
                    @click="getNextImage(directions[3])"
                >
                <i class="fas fa-arrow-down"></i>
                </b-button>
            </div>
            <div >
                <b-modal v-model="showModal" id="modal-center" centered title="Next Step" 
                         ok-only no-close-on-esc no-close-on-backdrop hide-header-close>
                    <i class="fas fa-eye px-3"></i><i class="fas fa-hand-paper px-3"></i>
                    <p class="my-4">Now Cover Your Right Eye</p>
                </b-modal>
            </div>
           
        </div>
         
        <div v-else>
            <p>
                {{report}}
            </p>
            <b-button class="mx-2 px-5" variant="outline-primary" @click="repeatCurrentTest" >Try Test Agian</b-button>
            <b-button variant="outline-primary" @click="changeToNextTest" >Go To {{nextTestName}} Test</b-button>
        </div>
    </b-container>
</template>
<script>
import testData from '../dataFiles/test-one-data.js'

export default {
    data:function(){
        return{
            directions:['left','up','right','down'],
            currentTest: testData,
            tests: testData.tests,
            count:0,
            numberOfCorrectAnswers:0,
        }
    },
    mounted(){
        this.$root.$on('changeLanguage', ()=> {
            this.repeatCurrentTest();
        });
        this.$bvModal.show('starter-modal')
    },
    computed:{
        nextTestName(){
            return this.$store.getters.getNextTest.name
        },
        instructionItems: function(){
            const currentTest = this.$store.getters.getCurrentTest;
            return currentTest.instructionItems
        },
        report: function(){
            //Find The Report Of Given Test
            const reportFound = this.$store.state.generalReport.find(report => report.testName === this.currentTest.name)
            if(!reportFound){
               // this.repeatCurrentTest();
                return null
            }else{
                return reportFound.testReport
            }
        },
        finished(){
            // this computed property always look for count if it exceeds a given value
            if(this.count === 6){
                //stage one test using one or two eyes
                return false
            }else if(this.count === 10){
                return true
            }else{
                return false
            }
        },
        showModal: function(){
            return this.count===6
        },
    }, 
    methods:{
        imgTransform(n, scaleValue = 1){
            return {transform:`rotate(${n * 90}deg) scale(${scaleValue})`, maxWidth:'50%'}
        },
        changeToNextTest(){
            const nextTest = this.$store.getters.getNextTest
            this.$store.commit('setCurrentTest', nextTest)
        },
        getNextImage(event){
            if(this.count === 9){
                const correctAnswers = this.numberOfCorrectAnswers;
                const totalCount = this.currentTest.testCount
                const finalResult = (correctAnswers / totalCount)*100
                if(finalResult <= 50){
                    //Add report object to generalReport array in the store
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.abnormalTwoEye})
                }else if(finalResult <= 70){
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.abnormalOneEye})
                    //this.report = this.$store.state.allTests[0].report.abnormalOneEye
                }else{
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.normal})
                    //this.report = this.$store.state.allTests[0].report.normal
                }
            }else{
                this.count++
                if(event === this.currentTest.tests[0].correct_answer){
                    this.numberOfCorrectAnswers++;
                   // window.console.log("points:"+this.numberOfCorrectAnswers)
                }
                const remainingTests = this.currentTest.tests.filter( test => test !== this.currentTest.tests[0])
                this.currentTest.tests = remainingTests
            }
        },
        repeatCurrentTest(){
            this.currentTest.tests = this.tests;
            this.count = 0;
            this.numberOfCorrectAnswers=0;
            this.$store.commit('removeFromGeneralReport', this.currentTest)
        }
    } 
}
</script>

<style>
    .my-container{
        background-color: gray;
        display: flex;
        flex-direction: column;
    }
</style>