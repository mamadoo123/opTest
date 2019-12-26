<template>
    <div class="container">
        <h1>
            {{msg}}    
        </h1>
        <navList />

        <testBody />
    
    
    </div>
</template>

<script>
import navList from '../components/nav-list-component';
import testBody from '../components/test-body-component';
export default {
    props:['msg'],
    components:{navList, testBody}
}
</script>

<style>
 .container{
     background-color: aqua;
     width: 600px;
     height: 600px
 }
</style>