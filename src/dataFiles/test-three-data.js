module.exports = {
    name:'Near Vision One',
    instruction:'Can you read all the lines of text, including the smallest one?',
    tests:[
        {id:0,testText:'Being able to see well at any distance, without the need to constantly', textSize:14},
        {id:1,testText:'fiddle his glasses, is increasingly necessary when one\'s eyes are tired', textSize:12},
        {id:2,testText:'With progressives lenses all presbyopes can still have most', textSize:10},
        {id:3,testText:'of the visual acuity that they always had.', textSize:8}
      ],
      report:{
        normal:`Congratulations, you can read all the text from 40cm away. You seem to have good near vision.
        Feel free to redo this test regularly to monitor your vision. However, to verify the health of your eyes,
        don/'t hesitate to fix an appointment with an eye care professional.`,
        abnormal:`You can't read all the text from 40cm away.
        We recommend you have a vision exam with an eye care professional.`,
      }
}