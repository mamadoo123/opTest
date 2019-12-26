module.exports={ 
    name:'Visual Acuity',
    tests:[
        {id:0, correct_answer:'left', degreeOfRotation:0, scale:0.02+Math.random()},
        {id:1, correct_answer:'up', degreeOfRotation:1, scale:0.02+Math.random()},
        {id:2, correct_answer:'right', degreeOfRotation:2, scale:0.02+Math.random()},
        {id:3, correct_answer:'down', degreeOfRotation:3, scale:0.02+Math.random()},
        {id:4, correct_answer:'down', degreeOfRotation:3, scale:0.02+Math.random()},
        {id:5, correct_answer:'up', degreeOfRotation:1, scale:0.02+Math.random()},
        {id:6, correct_answer:'down', degreeOfRotation:3, scale:0.02+Math.random()},
        {id:7, correct_answer:'right', degreeOfRotation:2, scale:0.02+Math.random()},
        {id:8, correct_answer:'left', degreeOfRotation:0, scale:0.02+Math.random()},
        {id:9, correct_answer:'up', degreeOfRotation:1, scale:0.02+Math.random()}
    ],
    testCount: 10,
    numberOfCorrectAnswers:0,
    report:{
        normal:`Congratulations, your visual acuity seems good in both eyes.
        Feel free to redo this test regularly to monitor your vision. However, to verify the health of your eyes,
        don/'t hesitate to fix an appointment with an eye care professional.`,
        abnormalOneEye:`You seem to have difficulties recognising small characters with one of your eyes.
        We recommend you have a vision exam with an eye care professional.`,
        abnormalTwoEye:`You seem to have difficulties recognising small characters with both eyes.
        We recommend you have a vision exam with an eye care professional.`
    }
  }