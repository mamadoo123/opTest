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
                <p>{{currentTest.instructionMsg}}</p>
                <hr>
            <b-button-group>
                 <b-button variant="outline-primary"
                    style="width:110px"
                    class="mx-2"
                    v-for="decision in decisions"
                    :key="decision"
                    @click="getNextImage(decision)">
                {{decision}}
                </b-button>
            </b-button-group>  
                <b-img src="https://www.essilor.com/essilor-content/themes/essilor/img/testvue-vision_de_pres.jpg"
                 :style="{width:'300px', height:'200px'}"
                 class="my-3">
                </b-img>
               
            </div>
        </div>
        <div v-else>
            <p>
                {{report}}
            </p>
            <b-button class="mx-2 px-5" variant="outline-primary" @click="repeatCurrentTest" >اعادة الاخبار</b-button>
            <b-button class="px-5" variant="outline-primary" @click="changeToNextTest" > عمل اختبار{{nextTestName}} </b-button>
        </div>
    </b-container>
</template>
<script>
import testData from '../../dataFiles/arabic/test-six-data';

export default {
    data:function(){
        return{
            decisions:['الخلفيةالحمراء','الخلفيةالخضراء','نفس الشئ'],
            finished:false,
            currentTest: testData
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
        }
    },
    methods:{
        changeToNextTest(){
            const nextTest = this.$store.getters.getNextArabicTest
            this.$store.commit('setCurrentArabicTest', nextTest)
        },
        getNextImage(event){
            if(event === 'الخلفيةالحمراء'){
                    //Add report object to generalReport array in the store
                    this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.red})
            }else if(event === 'الخلفيةالخضراء'){
                    this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.green})

            }else{
                    this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.same})
            }
            this.finished = true;
        },
        repeatCurrentTest(){
            this.finished = false;
            this.$store.commit('removeFromGeneralArabicReport', this.currentTest)
        }
    } 
}
</script>

<style>
    
</style>