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

        <div v-if="!finished && report ===null">
            <div>
                <p style="font-size:12px">{{currentTest.instructionMsg}}</p>
                <hr>
            <b-button-group fluid>
                <b-button variant="outline-primary" 
                    class="mx-2"
                    style="width:80px"
                    v-for="decision in decisions"
                    :key="decision"
                    @click="getNextImage(decision)"                   
                >
                {{decision}}
                </b-button>
            </b-button-group>
                <b-img src="https://www.essilor.com/essilor-content/themes/essilor/img/testvue-dmla.gif" 
                    :style="{width:'300px', height:'300px'}"
                    class="py-4">
                </b-img>
            </div>
            <div>
                <b-modal v-model="showModal" id="modal-center" 
                    centered title="Next Step" 
                    ok-only
                    no-close-on-esc no-close-on-backdrop hide-header-close>
                    <i class="fas fa-eye px-3"></i><i class="fas fa-hand-paper px-3"></i>
                    <p class="my-4">الان أغمض عينك اليمنى</p>
                </b-modal>
            </div>
        </div>
        <div v-else>
            <p>{{report}}</p>
            <b-button class="mx-2 px-5" variant="outline-primary" @click="repeatCurrentTest" >اعادة الاختبار</b-button>
            <b-button class="px-5" variant="outline-primary" @click="generateUserReport" >التقرير الكامل</b-button>
        </div>
        
        <div v-if="finishedAll" class="mt-4">
            <GeneralArabicReport />
        </div>
    </b-container>
</template>
<script>
import testData from '../../dataFiles/arabic/test-seven-data';
import GeneralArabicReport from './GeneralArabicReport';
export default {
    components:{GeneralArabicReport},
    data:function(){
        return{
            currentTest: testData,
            decisions:['نعم','لا'],
            firstAnswer:'',
            secondAnswer:'',
            finishedAll:false,
            count:0,
            generalReport:[]
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
            return this.$store.getters.getNextِArabicTest.name
        },
        instructionItems: function(){
            const currentTest = this.$store.getters.getCurrentArabicTest;
            return currentTest.instructionItems
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
        finished(){
            // this computed property always look for count if it exceeds a given value
            if(this.count === 1){
                //stage one test using one or two eyes
                //alert('Now Cover Left Eye')
                return false
            }else if(this.count === 2){
                return true
            }else{
                return false
            }
        },
        showModal(){
            return this.count===1
        }
    },
    methods:{
        changeToNextTest(){
            const nextTest = this.$store.getters.getNextArabicTest
            this.$store.commit('setCurrentArabicTest', nextTest)
        },
        getNextImage(event){
            this.count++
            if(this.count === 1){this.firstAnswer = event}
            else if (this.count === 2){
                this.secondAnswer = event
                if(this.firstAnswer === 'نعم' && this.secondAnswer === 'نعم'){
                this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.abnormalTwoEye})
                }else if(this.firstAnswer === 'لا' && this.secondAnswer === 'لا'){
                this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.normal})
                }else{
                this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.abnormalOneEye})
                }
            }   
        },
        generateUserReport(){
            this.finishedAll =true
            this.generalReport =  this.$store.state.generalArabicReport
        },
         repeatCurrentTest(){
            this.count = 0;
            this.numberOfCorrectAnswers=0;
            this.firstAnswer = '';
            this.secondAnswer = '';
            this.finishedAll = false
            this.$store.commit('removeFromGeneralArabicReport', this.currentTest)
        }
        
    } 
}
</script>

<style>
    
</style>