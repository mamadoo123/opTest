<template>
    <div class="container">
        <div v-if="!finished && currentTest.tests.length !==0">
            <b-jumbotron :header="test.name">
                <h3>{{currentTest.instructionMsg}}</h3>
                <br>
                <ul>
                    <li v-for="testItem in currentTest.tests" :key="testItem.id"
                        v-bind:style="{fontSize:testItem.textSize+'px'}"
                    >
                        {{testItem.testText}}
                    </li>
                </ul>
                <br>
            
                <b-button variant="primary"
                    v-for="decision in decisions"
                    :key="decision"
                    @click="getNextImage(decision)"                   
                >
                {{decision}}
                </b-button>
            </b-jumbotron>
        </div>
        <div v-else>
            <p>
                {{report}}
            </p>
            <b-button variant="success" @click="changeToNextTest" >Go To {{nextTestName}} Test</b-button>
        </div>
    </div>
</template>
<script>
export default {
    props:['test'],
    data:function(){
        return{
            decisions:['yes','no'],
            finished:false
        }
    },
    computed:{
        currentTest: function(){
            return this.$store.state.currentTest
        },
        nextTestName(){
            return this.$store.getters.getNextTest.name
        },
        report: function(){
            //Find The Report Of Given Test
            const reportFound = this.$store.state.generalReport.find(report => report.testName === this.currentTest.name)
            if(!reportFound){
                return 'Test Not Done'
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
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.$store.state.allTests[2].report.normal})
            }else{
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.$store.state.allTests[2].report.abnormal})
                    //this.report = this.$store.state.allTests[0].report.normal
            }
            this.finished = true;
            this.$store.commit('setCurrentTest', this.currentTest)
        }
    } 
}
</script>

<style>
    
</style>