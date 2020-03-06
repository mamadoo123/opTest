module.exports = {
    name:'AMD',
    instructionMsg:'Concentrate on the central point in the grid without moving your gaze. Do you see any strong distortions in certain lines ?',
    report:{
        normal:`You didn't see any distortions in the grid.
        You do not seem to have any symptoms of age-related macular degeneration (AMD). 
        Think about redoing this test regularly to monitor your vision..`,
        abnormalOneEye:`You saw distortions in the grid with one of your eyes.
        It's possible that this symptom is potentially linked to age-related macular degeneration (AMD). 
        We encourage you to consult an eye doctor as quickly as possible in order to confirm this result.`,
        abnormalTwoEye:`You saw distortions in the grid with both eyes.
        It's possible that this symptom is potentially linked to age-related macular degeneration (AMD). 
        We encourage you to consult an eye doctor as quickly as possible in order to confirm this result.`
    },
    instructionItems:[
        {id:1, modalContent:' Place yourself 40 centimeters from the screen.', sideContent:'Distance: 40 cm'},
        {id:2, modalContent:'If you have glasses for near vision or glasses with progressive lenses, keep them on. If you wear progressive lenses, lift your head in order to look through the lower part of your lenses.',
         sideContent:'Keep your glasses on'},
        {id:3,modalContent:' Without pressing on the eyelid, cover your left/right eye with your hand.', sideContent:'Cover your left eye'},
        {id:4,modalContent:'', sideContent:'Answer the question'},
 
    ],
}