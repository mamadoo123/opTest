<template>
    <b-container >
        <b-list-group class="border border-light rounded">
            <b-list-group-item class="bg-light border-bottom-0 border-top-0 border-secondary" v-for="reportItem in generalReport" :key="reportItem.testName">
                <h4>{{reportItem.testName}}</h4>   
                <p>{{reportItem.testReport}}</p>
            </b-list-group-item>
        </b-list-group>
    </b-container>
</template>

<script>
    export default{
        computed:{
            generalReport:function(){
                return this.$store.state.generalReport
            }
        }
    }
</script>