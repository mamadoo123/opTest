<template>
    <div class="container">
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
    </div>
</template>
<script>
export default {
    computed:{
        currentTest(){
            return this.$store.state.currentTest
        },
        tests(){
            return this.$store.state.allTests
        }
    },
    methods:{
        changeTest(event){
            this.$store.commit('setCurrentTest', event)
        }
    }
}
</script>

<style>
    
</style>