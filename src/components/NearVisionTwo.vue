<template>
    <div class="container">
        <div v-if="!finished && currentTest.tests.length !==0">
            <b-jumbotron :header="test.name">
                <h3>{{currentTest.instructionMsg}}</h3>
                <br>
                <img src="../assets/nearvisiontwo.jpg">
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
            decisions:['red','green','same'],
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
            if(event === 'red'){
                    //Add report object to generalReport array in the store
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.$store.state.allTests[5].report.red})
            }else if(event === 'green'){
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.$store.state.allTests[5].report.green})
                    //this.report = this.$store.state.allTests[0].report.normal
            }else{
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.$store.state.allTests[5].report.same})
            }
            this.finished = true;
            this.$store.commit('setCurrentTest', this.currentTest)
        }
    } 
}
</script>

<style>
    
</style>