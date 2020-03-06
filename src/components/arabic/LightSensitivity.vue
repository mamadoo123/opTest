<template>
    <b-container class="mx-auto">
         <b-modal v-once id="starter-modal" centered :title="$store.getters.getCurrentArabicTest.name" 
                         ok-only no-close-on-esc no-close-on-backdrop hide-header-close>
                    <div class="container text-center">
                        <h3 class="my-4">التعليمات</h3>

                        <b-list-group class="text-center" dir="rtl">
                            <b-list-group-item v-for="(item, index) in instructionItems" :key="item.id">
                                <p v-if="item.modalContent"><span>{{index +1}} - </span> {{item.modalContent}}</p> 
                            </b-list-group-item>
                        </b-list-group>
                    </div>     
        </b-modal>

        <div v-if="!finished && report === null">
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
                <i class="fas fa-arrow-right"></i>
                </b-button>
                <b-img src="https://upload.wikimedia.org/wikipedia/ja/thumb/e/ea/Landolt_ring_0.png/480px-Landolt_ring_0.png"
                  :style="imgTransform(currentTest.tests[0].degreeOfRotation, currentTest.tests[0].scale, currentTest.tests[0].opacity)"
                ></b-img>
                <b-button variant="outline-primary" 
                    @click="getNextImage(directions[2])"
                >
                <i class="fas fa-arrow-left"></i>
                </b-button>
            </div>
            <div>
                <b-button variant="outline-primary" 
                    @click="getNextImage(directions[3])"
                >
                <i class="fas fa-arrow-down"></i>
                </b-button>
            </div>
            <div>
                <b-modal v-model="showModal" id="modal-center" 
                    centered title="Next Step" 
                    ok-only
                    no-close-on-esc no-close-on-backdrop hide-header-close>
                    <i class="fas fa-eye px-3"></i><i class="fas fa-hand-paper px-3"></i>
                    <p class="my-4">Now Cover Your Right Eye</p>
            </b-modal>
            </div>
        </div>
        <div v-else>
            <p>
                {{report}}
            </p>
            <b-button class="mx-2 px-5" variant="outline-primary" @click="repeatCurrentTest" >اعادة الاختبار</b-button>
            <b-button variant="outline-primary" @click="changeToNextTest" >  عمل اختبار {{nextTestName}}</b-button>
        </div>
    </b-container>
</template>
<script>
import testData from '../../dataFiles/arabic/test-five-data'

export default {
    data:function(){
        return{
            directions:['right','up','left','down'],
            currentTest: testData,
            tests:testData.tests,
            count:0,
            numberOfCorrectAnswers:0
        }
    },
    mounted(){
        this.$root.$on('changeLanguage', ()=> {
            this.repeatCurrentTest();
        })
        this.$bvModal.show('starter-modal')
    },
    computed:{
        //get the succesive test from the store
        //then assign it to Go To Nest test name property
        nextTestName(){
            return this.$store.getters.getNextArabicTest.name
        },
        instructionItems: function(){
            const currentTest = this.$store.getters.getCurrentArabicTest;
            return currentTest.instructionItems
        },
        report: function(){
            //Find The Report Of Given Test
            const reportFound = this.$store.state.generalArabicReport.find(report => report.testName === this.currentTest.name)
            if(!reportFound){
                //If the report is not found it means the test has
                //to be rendered 
                return null
            }else{
                // if the report are found it renders the report section instead
            return reportFound.testReport
            }
        },
        finished(){
            // here the count will be tracked to determine where 
            //where then test  will be completed
            if(this.count === 10){
                //testing one eye while the second eye will be examined
                //after 10 tests 
                return false
            }else if(this.count === 20){
                // Now the test must be done 
                return true
            }else{
                //if count is less than 10 this means the test is not done for 
                //the first eye so return flase to complete the succesive tests 
                return false
            }
        },
        showModal(){
            return this.count===10
        }
    },
    methods:{
        imgTransform(n = 1, scaleValue = 0.25, opacity = 1){
            return {transform:`rotate(${n * 90}deg) scale(${scaleValue})`, maxWidth:'50%', opacity}
        },
        changeToNextTest(){
            const nextTest = this.$store.getters.getNextArabicTest
            this.$store.commit('setCurrentArabicTest', nextTest)
        },
        getNextImage(event){
            if(this.count === 19){
                const correctAnswers = this.numberOfCorrectAnswers;
                const totalCount = this.currentTest.testCount
                const finalResult = (correctAnswers / totalCount)*100
                if(finalResult <= 50){
                    //Add report object to generalReport array in the store
                    this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.abnormalTwoEye})
                }else if(finalResult <= 70){
                    this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.abnormalOneEye})
                }else{
                    this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.normal})
                }
            }else{
                this.count++
                if(event === this.currentTest.tests[0].correct_answer){
                    this.numberOfCorrectAnswers++;
                   
                }
                const remainingTests = this.currentTest.tests.filter( test => test !== this.currentTest.tests[0])
                this.currentTest.tests = remainingTests
            }
            
        },
        repeatCurrentTest(){
            this.currentTest.tests = this.tests;
            this.count = 0;
            this.numberOfCorrectAnswers=0;
            this.$store.commit('removeFromGeneralArabicReport', this.currentTest)
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