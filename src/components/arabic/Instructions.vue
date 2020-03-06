<template>
    <div class="bg-light pt-4" style="font-size:12px">
        <b-list-group>
            <b-list-group-item>التعليمات</b-list-group-item>

            <b-list-group-item class="border-bottom-0">
                <i class="fas fa-eye px-1"></i> <span class="line-span"></span> <i class="fas fa-desktop px-1"></i>
            </b-list-group-item>
            <b-list-group-item>{{instructionItems[0].sideContent}}</b-list-group-item>

            <b-list-group-item class="border-bottom-0 pb-0">
                <i class="fas fa-glasses" style="font-size:1.5rem"></i>
            </b-list-group-item>
            <b-list-group-item>{{instructionItems[1].sideContent}}</b-list-group-item>


            <b-list-group-item v-if="instructionItems[2]" class="border-bottom-0">
               <i class="fas fa-eye px-3"></i><i class="fas fa-hand-paper px-3"></i>
            </b-list-group-item>
            <b-list-group-item v-if="instructionItems[2]">{{instructionItems[2] ? instructionItems[2].sideContent : ''}}</b-list-group-item>
           
            <b-list-group-item v-if="instructionItems[3]" class="border-bottom-0">
              <i class="fas fa-arrows-alt"></i>  
            </b-list-group-item>
            <b-list-group-item v-if="instructionItems[3]">{{instructionItems[3] ? instructionItems[3].sideContent : ''}}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    computed:{
        instructionItems: function(){
            const currentTest = this.$store.getters.getCurrentArabicTest;
            return currentTest.instructionItems
        }
    }
}
</script>

<style scoped>
    .line-span{
        border: 1px solid black;
        display: inline-block;
        width: 20%;
    }
</style>