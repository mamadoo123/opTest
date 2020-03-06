module.exports={
    name:"Astigmatism",
    instructionItems:[
      {id:1, modalContent:' Place yourself 1 meter from the screen', sideContent:'Distance: 1 meter'},
      {id:2, modalContent:'If you have glasses for distance vision or glasses with progressive lenses, keep them on.', sideContent:'Keep your glasses on'},
      {id:3, modalContent:'Without pressing on the eyelid, cover your left/right eye with your hand.', sideContent:'Cover your left eye'},
      {id:4, modalContent:' Indicate if you see lines that are darker.', sideContent:' Answer the question'}
      
  ],
    report:{
      normal:'Congratulations, you don\'t seem to have an astigmatism problem.',
      abnormalOneEye:'You seem to see some lines that are darker than others with one of your eyes.We recommend you have a vision exam with an eye care professional.',
      abnormalTwoEye:'You seem to see some lines that are darker than others with both of your eyes.We recommend you have a vision exam with an eye care professional.'
    },
    instructionMsg:'Do you see a line (1-2-3-4-5-6-7) that is darker or sharper ?'
  }