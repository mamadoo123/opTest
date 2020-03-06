module.exports={ 
    name:'Visual Acuity',
    instructionMsg:'Indicate the direction of each figure',
    instructionItems:[
        {id:1, modalContent:' Place yourself 1 meter from the screen', sideContent:'Distance: 1 meter'},
        {id:2, modalContent:'If you have glasses for distance vision or glasses with progressive lenses, keep them on.', sideContent:'Keep your glasses on'},
        {id:3, modalContent:'Without pressing on the eyelid, cover your left/right eye with your hand.', sideContent:'Cover your left eye'},
        {id:4, modalContent:' Indicate which way the open side of the (E) is facing with your keyboard or mouse.', sideContent:' Indicate the direction(E)'}
        
    ],
    tests:[
        {id:0, correct_answer:'right', degreeOfRotation:0, scale:0.1},
        {id:1, correct_answer:'down', degreeOfRotation:1, scale:0.08},
        {id:2, correct_answer:'left', degreeOfRotation:2, scale:0.06},
        {id:3, correct_answer:'right', degreeOfRotation:0, scale:0.05},
        {id:4, correct_answer:'up', degreeOfRotation:3, scale:0.04},
        {id:5, correct_answer:'down', degreeOfRotation:1, scale:0.03},
        {id:6, correct_answer:'up', degreeOfRotation:3, scale:0.08},
        {id:7, correct_answer:'left', degreeOfRotation:2, scale:0.06},
        {id:8, correct_answer:'right', degreeOfRotation:0, scale:0.04},
        {id:9, correct_answer:'down', degreeOfRotation:1, scale:0.04}
    ],
    testCount: 10,
    numberOfCorrectAnswers:0,
    report:{
        normal:'Congratulations, your visual acuity seems good in both eyes.Feel free to redo this test regularly to monitor your vision',
        abnormalOneEye:'You seem to have difficulties recognising small characters with one of your eyes.We recommend you have a vision exam with an eye care professional.',
        abnormalTwoEye:'You seem to have difficulties recognising small characters with both eyes.We recommend you have a vision exam with an eye care professional.'
    }
  }