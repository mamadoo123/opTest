module.exports = {
    name:'Color Vision',
    instructionMsg:'What number do you see ?',
    instructionItems:[
        {id:1, modalContent:' Place yourself 40 centimeters from the screen.', sideContent:'Distance: 40 cm'},
        {id:2, modalContent:'If you have glasses for near vision or glasses with progressive lenses, keep them on. If you wear progressive lenses, lift your head in order to look through the lower part of your lenses.',
         sideContent:'Keep your glasses on'},
        {id:3, sideContent:'Answer the question'},    
    ],
    tests:[
        {id:0, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur1.png', 
            correct_answer:12, correctMsg:'Your answer is correct.', 
            wrongMsg:'Your answer is incorrect.',
            constMsg:'Everyone should see the number 12.'
        },
        {id:1, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur2.png', 
            correct_answer:29,correctMsg:'Your answer is correct.', 
            wrongMsg:'Your answer is incorrect.',
            constMsg:'People with normal vision are seeing 29. Those with color deficiency may see 70 or nothing.'
        }, 
        {id:2, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur3.png', 
            correct_answer:15,correctMsg:'Your answer is correct.', 
            wrongMsg:'Your answer is incorrect.',
            constMsg: 'People with normal vision are seeing 15. Those with color deficiency may see 17 or nothing.',
        },
        {id:3, imgUrl: 'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur4.png', 
            correct_answer:97, correctMsg:'Your answer is correct.', 
            wrongMsg:'Your answer is incorrect.',
            constMsg:'People with normal vision are seeing 97. Those with color deficiency may see nothing.'
        },
        {id:4, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur5.png', 
            correct_answer:16, correctMsg:'Your answer is correct.', 
            wrongMsg:'Your answer is incorrect.',
            constMsg:'People with normal vision are seeing 16. id=4 Those with color deficiency may see nothing.'
        },
        {id:5, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur6.png', 
            correct_answer:'x', correctMsg:'Your answer is correct.', 
            wrongMsg:'Your answer is incorrect.',
            constMsg:'People with normal vision are seeing nothing. Those with color deficiency may see a 5.'
        },
        {id:7, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur5.png', 
            correct_answer:16, correctMsg:'Your answer is correct./nEveryone should see the number 12.', 
            wrongMsg:'Your answer is incorrect./n Everyone should see the number 12.',
            constMsg:'People with normal vision are seeing nothing. /n Those with color deficiency may see a 5.'

        },
        {id:8, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur5.png', 
            correct_answer:16, correctMsg:'Your answer is correct./nEveryone should see the number 12.', 
            wrongMsg:'Your answer is incorrect./n Everyone should see the number 12.',
            constMsg:'People with normal vision are seeing nothing. /n Those with color deficiency may see a 5.'

        },

    ],
    testCount: 6,
    report:{
        normal:`Congratulations, you don't seem to have a color perception problem.
        Feel free to redo this test regularly to monitor your vision.
        don/'t hesitate to fix an appointment with an eye care professional.`,
        abnormal:`You most likely have some colour vision difficulties.
        We recommend you evaluate your vision with an eye care professional.`,
    }
}