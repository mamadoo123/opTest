module.exports = {
    name:'Near Vision Two',
    instruction:'Do you see darker circles on',
    tests:[
        {id:0,testText:'Being able to see well at any distance, without the need to constantly', textSize:14},
        {id:1,testText:'fiddle his glasses, is increasingly necessary when one\'s eyes are tired', textSize:12},
      ],
      report:{
        red:`Your correction for near vision is probably too strong or you are myopic and have taken your glasses off to do this test.
        Feel free to redo this test regularly to monitor your vision. However, to verify the health of your eyes,
        don/'t hesitate to fix an appointment with an eye care professional.`,
        green:`Your correction for near vision is probably too strong or you are myopic and have taken your glasses off to do this test.
        We recommend you have a vision exam with an eye care professional.`,
        same:`You are probably not yet presbyopic or you already have the right correction for near vision.
        don/'t hesitate to fix an appointment with an eye care professional.`
      }
}