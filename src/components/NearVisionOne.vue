<template>
    <b-container class="mx-auto">
        <b-modal v-once id="starter-modal" centered :title="$store.getters.getCurrentTest.name" 
                         ok-only no-close-on-esc no-close-on-backdrop hide-header-close>
                    <div class="container text-center">
                        <h3 class="my-4">Instructions</h3>

                        <b-list-group class="text-center">
                            <b-list-group-item v-for="(item, index) in instructionItems" :key="item.id">
                                <p v-if="item.modalContent" ><span>{{index +1}} - </span> {{item.modalContent}}</p> 
                            </b-list-group-item>
                        </b-list-group>
                    </div>
                    
        </b-modal>
        
        <div v-if="!finished && report ===null">
            <div>
                <p :style="{fontSize:'14px'}">{{currentTest.instructionMsg}}</p>
                <hr>
                <ul>
                    <li :style="{fontSize:'14px'}">Being able to see well at any distance, without need to</li>
                    <li :style="{fontSize:'12px'}">fiddle his glasses, is increasingly necessary when one eye are tired</li>
                    <li :style="{fontSize:'10px'}">With progressives lenses all presbyopes can still have most</li>
                    <li :style="{fontSize:'9px'}">of the visual acuity that they always had.</li>
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
            <b-button class="mx-2 px-5" variant="outline-primary" @click="repeatCurrentTest" >Try Test Agian</b-button>
            <b-button variant="outline-primary" @click="changeToNextTest" >Go To {{nextTestName}} Test</b-button>
        </div>
    </b-container>
</template>
<script>
import testData from '../dataFiles/test-three-data.js'

export default {
    data:function(){
        return{
            decisions:['yes','no'],
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
                return null
            }else{
            return reportFound.testReport
            }
        }

    },
    methods:{
        changeToNextTest(){
            const nextTest = this.$store.getters.getNextTest
            this.$store.commit('setCurrentTest', nextTest)
        },
        getNextImage(event){
            if(event === 'yes'){
                    //Add report object to generalReport array in the store
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.normal})
            }else{
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.currentTest.report.abnormal})
            }
            this.finished = true;
        },
         repeatCurrentTest(){
            this.finished = false;
            this.$store.commit('removeFromGeneralReport', this.currentTest)
        }
    } 
}
</script>

<style>
    
</style>