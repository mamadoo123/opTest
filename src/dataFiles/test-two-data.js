module.exports={
    name:"Astigmatism",
    tests:[
      {id:0, correct_answer:'no'},
      {id:1, correct_answer:'no'},
      {id:2, correct_answer:'no'},
    ],
    testCount: 2,
    numberOfCorrectAnswers:0,
    report:{
      normal:`Congratulations, you don't seem to have an astigmatism problem.
      Feel free to redo this test regularly to monitor your vision. However, to verify the health of your eyes,
      don/'t hesitate to fix an appointment with an eye care professional.`,
      abnormalOneEye:`You seem to see some lines that are darker than others with one of your eyes.
      We recommend you have a vision exam with an eye care professional.`,
      abnormalTwoEye:`You seem to see some lines that are darker than others with both of your eyes..
      We recommend you have a vision exam with an eye care professional.`
    }
  }