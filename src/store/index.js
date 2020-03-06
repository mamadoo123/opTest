import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key:'vision test',
    storage: window.localStorage
});

Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        currentTest:{},
        currentArabicTest:{},
        allTests:[],
        allArabicTests:[],
        generalReport:[],
        generalArabicReport:[],
        currentLanguage:''
    },
    mutations:{
        setCurrentLanguage(state, payload='en'){
            state.currentLanguage = payload
        },
        setCurrentTest(state, payload){
            state.currentTest = payload
        },
        setCurrentArabicTest(state, payload){
            state.currentArabicTest = payload
        },
        setAllTests(state, payload){
            state.allTests = [...payload]
        },
        setAllArabicTests(state, payload){
            state.allArabicTests = [...payload]
        },
        saveToGeneralReport(state, payload){
            state.generalReport = [...state.generalReport, {testName: payload.testName, testReport:payload.testReport}]
        },
        saveToGeneralArabicReport(state, payload){
            state.generalArabicReport = [...state.generalArabicReport, {testName: payload.testName, testReport:payload.testReport}]
        },
        removeFromGeneralReport(state, payload){
            state.generalReport = state.generalReport.filter(report => report.testName !==payload.name)
        },
        removeFromGeneralArabicReport(state, payload){
            state.generalArabicReport = state.generalArabicReport.filter(report => report.testName !==payload.name)
        },
        deleteAllReport(state){
            state.generalReport = [];
        },
        deleteAllArabicReport(state){
            state.generalArabicReport = [];
        },
        deleteAllTests(state){
            state.allTests = []
        },
        deleteAllArabicTests(state){
            state.allArabicTests = []
        },

    },
    getters:{
        getCurrentLanguage(state){
            return state.currentLanguage
        },
        getCurrentTest(state){
            return state.currentTest
        },
        getCurrentArabicTest(state){
            return state.currentArabicTest
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
        },
        getNextArabicTest(state){
            if(state.allArabicTests.length !== 0){
            const indexOfCurrentTest = state.allArabicTests.indexOf(state.currentArabicTest);
                if(indexOfCurrentTest+1 < state.allArabicTests.length){
                    return state.allArabicTests[indexOfCurrentTest + 1]
                }else{
                    return state.allArabicTests[0]
                }
            }
        }
    },
    plugins:[vuexPersist.plugin]
})

export default store