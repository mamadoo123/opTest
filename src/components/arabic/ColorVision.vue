<template> 
     <b-container class="mx-auto">
          <!-- Starter Modal  -->
        <!-- ==================== -->
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
        <!-- Test Body and Logic -->
        <!-- ==================== -->
        <div v-if="!finished && report === null">
            <div>
                 <p>{{currentTest.instructionMsg}}</p>
                <hr>
                <b-img :src=currentTest.tests[0].imgUrl :style="{width:'200px', height:'200px'}">
                </b-img>  
                <br>
                <div class="my-3">
                    <form @submit.prevent="getNextImage">
                        <label for="numberInput">أنا أرى :</label>
                        <input class="mx-4" v-model="value" id="numberInput" required type="text">
                        <p> إذا كنت لا ترى أي رقم، أدخل حرف X</p>
                        <b-button type="submit" variant="outline-primary">تأكيد</b-button>
                    </form>
                </div>         
            </div>
            <div>

                <!-- Internal Modal For Each Image -->
                    <!-- ==================== -->
                <b-modal id="internal-modal" 
                    centered title="Next" 
                    ok-only
                    no-close-on-esc no-close-on-backdrop hide-header-close>
                    <i class="fas fa-eye px-3"></i><i class="fas fa-hand-paper px-3"></i>
                   <!-- Message That appear inside the modal after each submit -->
                    <!-- ============================================================== -->
                    <p class="my-4" style="text-align: right">{{testMsg}}</p>
                </b-modal>
            </div>
        </div>
        <div v-else>
            <b-modal id="external-modal" 
                    centered title="Next" 
                    ok-only
                    no-close-on-esc no-close-on-backdrop hide-header-close>
                    <i class="fas fa-eye px-3"></i><i class="fas fa-hand-paper px-3"></i>
                    <!-- Message That appear inside the modal after each submit -->
                    <!-- ============================================================== -->
                    <p class="my-4">{{testMsg}}</p>
            </b-modal>
            <p>{{report}}</p>
            <b-button class="mx-2 px-5" variant="outline-primary" @click="repeatCurrentTest" >اعادة الاختبار</b-button>
            <b-button variant="outline-primary" @click="changeToNextTest" > {{nextTestName}} عمل اختبار</b-button>
        </div>

     </b-container>    
</template>

<script>
import testData from '../../dataFiles/arabic/test-four-data';

export default {
    data:function(){
        return{
            value:null, 
            currentTest:testData,
            tests: testData.tests, 
            numberOfCorrectAnswers:0, 
            count:0,
            testMsg:'',
        }
    },
    mounted(){
        this.$root.$on('changeLanguage', ()=> {
            this.repeatCurrentTest();
        })
        this.$bvModal.show('starter-modal')
    },
    computed:{
        nextTestName(){
            return this.$store.getters.getNextArabicTest.name
        },
        report: function(){
            //Find The Report Of Given Test
            const reportFound = this.$store.state.generalArabicReport.find(report => report.testName === this.currentTest.name)
            if(!reportFound){
                return null
            }else{
            return reportFound.testReport
            }
        },
        instructionItems: function(){
            const currentTest = this.$store.getters.getCurrentArabicTest;
            return currentTest.instructionItems
        },
        finished:function(){
            // this computed property always look for count if it exceeds a given value
            if(this.count === 7){
                //stage one test using one or two eyes
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        getNextImage(){
                this.$bvModal.show('internal-modal')
                this.count++
                if(this.count === 6){
                    this.$bvModal.show('external-modal')
                    if(this.value == this.currentTest.tests[0].correct_answer){
                        this.numberOfCorrectAnswers++;
                        this.testMsg = this.currentTest.tests[0].correctMsg + this.currentTest.tests[0].constMsg
                        
                    }else{
                        this.testMsg = this.currentTest.tests[0].wrongMsg + this.currentTest.tests[0].constMsg
                        
                    }
                    if(this.numberOfCorrectAnswers < 6){
                    //Add report object to generalReport array in the store
                        this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.abnormal})
                    }else{
                        this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.normal})
                    }
                }else{
                    
                    if(this.value == this.currentTest.tests[0].correct_answer){
                        this.numberOfCorrectAnswers++;
                        this.testMsg = this.currentTest.tests[0].correctMsg
                        
                    }else{
                        this.testMsg = this.currentTest.tests[0].wrongMsg
                        
                    }
                const remainingTests = this.currentTest.tests.filter( test => test !== this.currentTest.tests[0])
                this.currentTest.tests = remainingTests
                }
            this.value = null
        },
        changeToNextTest(){
            const nextTest = this.$store.getters.getNextArabicTest
            this.$store.commit('setCurrentArabicTest', nextTest)
        },
        repeatCurrentTest(){
            this.currentTest.tests = this.tests;
            this.count = 0;
            this.value = null;
            this.showModal=false;
            this.numberOfCorrectAnswers=0;
            this.$store.commit('removeFromGeneralArabicReport', this.currentTest)
        }
    } 
}
</script>



