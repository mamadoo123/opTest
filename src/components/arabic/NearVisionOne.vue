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
                <p :style="{fontSize:'14px'}">{{currentTest.instructionMsg}}</p>
                <hr>
                <ul>
                    <li :style="{fontSize:'14px'}">هل ترى الأشياء البعيدة بشكل مشوش وغير واضح؟</li>
                    <li :style="{fontSize:'12px'}">هل تلجأ لتقليص عينك بهدف رؤية الأشياء بوضوح؟</li>
                    <li :style="{fontSize:'10px'}">هذا أمر طبيعي تمامًا بعد سن معين، يتيح لك اختبار قرب الرؤية الاطمئنان على نظرك.     </li>
                </ul>
                <br>
                <b-btn-group fluid>
                    <b-button class="mx-2" 
                        style="width:60px"
                        variant="outline-primary" 
                        v-for="decision in decisions" 
                        :key="decision" 
                        @click="getNextImage(decision)">
                        <span>{{decision}}</span>
                    </b-button>
                </b-btn-group>
            </div>
        </div>
        <div v-else>
            <p>
                {{report}}
            </p>
            <b-button class="mx-2 px-5" variant="outline-primary" @click="repeatCurrentTest" >اعادة الاختبار</b-button>
            <b-button variant="outline-primary" @click="changeToNextTest" > {{nextTestName}} عمل اختبار</b-button>
        </div>
    </b-container>
</template>
<script>
import testData from '../../dataFiles/arabic/test-three-data'

export default {
    data:function(){
        return{
            decisions:['نعم','لا'],
            currentTest: testData,
            finished:false
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
            if(event === 'نعم'){
                    //Add report object to generalReport array in the store
                    this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.normal})
            }else{
                    this.$store.commit('saveToGeneralArabicReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.abnormal})
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