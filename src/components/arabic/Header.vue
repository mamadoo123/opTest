<template>
        <b-nav>
            <b-button
                v-for="test in tests" 
                :key="test.name"
                :class="{active: test.name === currentTest.name}"
                @click="changeTest(test)" 
                variant="outline-info" 
                squared
                >
            {{test.name}}
            </b-button>
        </b-nav>
</template>
<script>
export default {
    computed:{
        currentTest(){
            return this.$store.state.currentArabicTest
        },
        tests(){
            return this.$store.state.allArabicTests
        }
    },
    methods:{
        changeTest(event){
            this.$store.commit('setCurrentArabicTest', event)
        }
    }
}
</script>

<style>
    
</style>