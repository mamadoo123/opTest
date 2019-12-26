import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        currentTest:{},
        allTests:[],
        generalReport:[{testName:'', testReport:''}]
    },
    mutations:{
        setCurrentTest(state, payload){
            state.currentTest = payload

        },
        setAllTests(state, payload){
            state.allTests = [...payload]
        },
        saveToGeneralReport(state, payload){
            state.generalReport = [...state.generalReport, {testName: payload.testName, testReport:payload.testReport}] 
        },
        removeFromGeneralReport(state, payload){
            state.generalReport = state.generalReport.filter(report => report.testName !==payload.testName)
        }
    },
    getters:{
        getCurrentTest(state){
            return state.currentTest
        },
        getNextTest(state){
            if(state.allTests.length !== 0){
            const indexOfCurrentTest = state.allTests.indexOf(state.currentTest);
                if(indexOfCurrentTest+1 < state.allTests.length){
                    return state.allTests[indexOfCurrentTest + 1]
                }else{
                    return state.allTests[0]
                }
            }
        }
    }
})

export default store