<template>
    <b-jumbotron :header="test.name">
         <img :src=test.imgUrl
              :style="imgTransform()"
         >  
        <br>
        
        <b-row class="my-1">
            <b-col>
                <label for="numberInput">Insert The Correct Number:</label>
            </b-col>
            <b-col>
                <b-form-input v-model="value" id="numberInput" required type="number">
                </b-form-input>
                <b-button type="submit" variant="primary" 
                >Submit</b-button>
            </b-col>
    </b-row>         
        
            <b-button variant="success" @click="changeToNextTest" >Go To Next Test</b-button>
    </b-jumbotron>    
</template>

<script>
export default {
    props:['test'],
    data:function(){
        return{
            value:null
        }
    },
    methods:{
        imgTransform(n = 0, scaleValue = 1){
            return {transform:`rotate(${n * 90}deg) scale(${scaleValue})`, width:'25%', height:'25%'}
        },
        tester(val){
            this.value === null ? alert('Enter a value first'):this.$emit('getNextTestFour', val);
            this.resetValue();
        },
        resetValue(){
            this.value = null;
        },
        changeToNextTest(){
            const nextTest = this.$store.getters.getNextTest
            this.$store.commit('setCurrentTest', nextTest)
        }
    } 
}
</script>



