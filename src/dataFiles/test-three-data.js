module.exports = {
    name:'Near Vision One',
    instructionMsg:'Can you read all the lines of text, including the smallest one ?',
    instructionItems:[
      {id:1, modalContent:' Place yourself 40 centimeters from the screen.', sideContent:'Distance: 40 cm'},
      {id:2, modalContent:'If you have glasses for near vision or glasses with progressive lenses, keep them on. If you wear progressive lenses, lift your head in order to look through the lower part of your lenses.',
       sideContent:'Keep your glasses on'},
      {id:3, sideContent:'Answer the question'},    
  ],
  
    report:{
      normal:`Congratulations, you can read all the text from 40cm away. You seem to have good near vision.`,
      abnormal:`You can't read all the text from 40cm away.
        We recommend you have a vision exam with an eye care professional.`,
      }
}