<template>
    <div class="my-container">
        <div v-if="!finished && currentTest.tests.length !==0">
            <div>
                <b-button variant="primary" 
                    @click="getNextImage(directions[1])"      
                >
                {{directions[1]}}
                </b-button>
            </div>
            <div>
                <b-button variant="primary" 
                    @click="getNextImage(directions[0])"
                >
                {{directions[0]}}
                </b-button>
                <img src="../assets/lightsensitivity.jpg"
                  :style="imgTransform(currentTest.tests[0].degreeOfRotation, currentTest.tests[0].scale)"
                >
                <b-button variant="primary" 
                    @click="getNextImage(directions[2])"
                >
                {{directions[2]}}
                </b-button>
            </div>
            <div>
                <b-button variant="primary" 
                    @click="getNextImage(directions[3])"
                >
                {{directions[3]}}
                </b-button>
            </div>
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
            directions:['left','up','right','down'],
            finished: false,
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
        imgTransform(n = 1, scaleValue = 1){
            return {transform:`rotate(${n * 90}deg) scale(${scaleValue})`}
        },
        changeToNextTest(){
            const nextTest = this.$store.getters.getNextTest
            this.$store.commit('setCurrentTest', nextTest)
        },
        getNextImage(event){
            if(this.currentTest.tests.length === 1){
                this.finished = true;
                const correctAnswers = this.currentTest.numberOfCorrectAnswers;
                const totalCount = this.currentTest.testCount
                const finalResult = (correctAnswers / totalCount)*100
                if(finalResult <= 50){
                    //Add report object to generalReport array in the store
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.$store.state.allTests[4].report.abnormalTwoEye})
                }else if(finalResult <= 70){
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.$store.state.allTests[4].report.abnormalOneEye})
                    //this.report = this.$store.state.allTests[0].report.abnormalOneEye
                }else{
                    this.$store.commit('saveToGeneralReport',{testName:this.currentTest.name ,testReport:this.$store.state.allTests[4].report.normal})
                    //this.report = this.$store.state.allTests[0].report.normal
                }
            }
            if(event === this.currentTest.tests[0].correct_answer){
                this.currentTest.numberOfCorrectAnswers++;
                window.console.log("points:"+this.currentTest.numberOfCorrectAnswers)
            }
            const remainingTests = this.currentTest.tests.filter( test => test !== this.currentTest.tests[0])
            this.currentTest.tests = remainingTests
            this.$store.commit('setCurrentTest', this.currentTest)
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