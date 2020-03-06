module.exports = {
    name:'Near Vision Two',
    instructionMsg:'Do you see darker circles on',
    report:{
      red:`Your correction for near vision is probably too strong or you are myopic and have taken your glasses off to do this test.`,
      green:`Your correction for near vision is probably too strong or you are myopic and have taken your glasses off to do this test.
        We recommend you have a vision exam with an eye care professional.`,
      same:`You are probably not yet presbyopic or you already have the right correction for near vision.
        don/'t hesitate to fix an appointment with an eye care professional.`
      },
    instructionItems:[
        {id:1, modalContent:' Place yourself 40 centimeters from the screen.', sideContent:'Distance: 40 cm'},
        {id:2, modalContent:'If you have glasses for near vision or glasses with progressive lenses, keep them on. If you wear progressive lenses, lift your head in order to look through the lower part of your lenses.',
         sideContent:'Keep your glasses on'},
        {id:3, sideContent:'Answer the question'},    
    ],
}