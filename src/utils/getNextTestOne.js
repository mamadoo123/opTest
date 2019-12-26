module.exports= (event)=>{
    window.console.log(event);
      if(this.testOne.tests.length ===0){
        window.console.log('finished')
        return;
      }
      if(event === this.testOne.tests[0].correct_answer){
        this.testOne.numberOfCorrectAnswers++;
        window.console.log("points:"+this.testOne.numberOfCorrectAnswers)
      }
      this.testOne.tests = this.testOne.tests.filter( test => test !== this.testOne.tests[0]);
}
