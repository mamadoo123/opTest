module.exports={ 
    name:'Light Sensitivity',
    instructionMsg:'Indicate the direction of each figure',
    tests:[
        {id:0, correct_answer:'right', degreeOfRotation:0, scale:0.25, opacity: 1},
        {id:1, correct_answer:'down', degreeOfRotation:1, scale:0.22, opacity:0.9},
        {id:2, correct_answer:'left', degreeOfRotation:2, scale:0.12,opacity:0.6},
        {id:3, correct_answer:'up', degreeOfRotation:3, scale:0.12,opacity:0.5},
        {id:4, correct_answer:'up', degreeOfRotation:3, scale:0.11, opacity:0.9},
        {id:5, correct_answer:'down', degreeOfRotation:1, scale:0.11, opacity:0.4},
        {id:6, correct_answer:'up', degreeOfRotation:3, scale:0.09, opacity:0.7},
        {id:7, correct_answer:'left', degreeOfRotation:2, scale:0.09, opacity:0.5},
        {id:8, correct_answer:'right', degreeOfRotation:0, scale:0.08, opacity:0.4},
        {id:9, correct_answer:'down', degreeOfRotation:1, scale:0.07, opacity:0.2},
        {id:10, correct_answer:'right', degreeOfRotation:0, scale:0.25, opacity:1},
        {id:11, correct_answer:'down', degreeOfRotation:1, scale:0.22, opacity:0.6},
        {id:12, correct_answer:'left', degreeOfRotation:2, scale:0.12, opacity:0.8},
        {id:13, correct_answer:'up', degreeOfRotation:3, scale:0.12, opacity:0.9},
        {id:14, correct_answer:'right', degreeOfRotation:0, scale:0.11, opacity:0.6},
        {id:15, correct_answer:'down', degreeOfRotation:1, scale:0.11, opacity:0.5},
        {id:16, correct_answer:'up', degreeOfRotation:3, scale:0.09, opacity:0.9},
        {id:17, correct_answer:'left', degreeOfRotation:2, scale:0.09, opacity:1},
        {id:18, correct_answer:'right', degreeOfRotation:0, scale:0.08, opacity:0.7},
        {id:19, correct_answer:'down', degreeOfRotation:1, scale:0.07, opacity:0.5},
        {id:20, correct_answer:'right', degreeOfRotation:0, scale:0.15, opacity:0.4},
        {id:21, correct_answer:'down', degreeOfRotation:1, scale:0.11, opacity:0.3},
    ],
    instructionItems:[
        {id:1, modalContent:' Place yourself 1 meter from the screen', sideContent:'Distance: 1 meter'},
        {id:2, modalContent:'If you have glasses for distance vision or glasses with progressive lenses, keep them on.', sideContent:'Keep your glasses on'},
        {id:3, modalContent:'Without pressing on the eyelid, cover your left/right eye with your hand.', sideContent:'Cover your left eye'},
        {id:4, modalContent:' Indicate which way the open side of the (C) is facing with your keyboard or mouse.', sideContent:' Indicate the direction (C)'}
        
    ],
    testCount: 20,
    numberOfCorrectAnswers:0,
    report:{
        normal:'Congratulations, your sensitivity to contrasts in both eyes seems good.',
        abnormalOneEye:`You seem to have difficulties in seeing subtle contrasts with one of your eyes.
        We recommend you have a vision exam with an eye care professional.`,
        abnormalTwoEye:`You have difficulties in seeing subtle contrasts with both eyes.
        We recommend you have a vision exam with an eye care professional.`
    }
  }