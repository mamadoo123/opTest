module.exports = {
    name:'عمى الألوان',
    instructionMsg:'ما الرقم الذي تراه؟',
    instructionItems:[
        {id:1, modalContent:'- ابعد مسافة 40 سم عن الشاشة.', sideContent:'حافظ على مسافة 40 سم بينك وبين الشاشة'},
        {id:2, modalContent:'إذا كنت تلبس نظارة طبية أو العدسات فتأكد من ارتدائها أثناء الاختبار', sideContent:'إتأكد من ارتداء أثناء الاختبار'},
        {id:3, modalContent:'قم بتغطية عينك اليسرى أو اليمنى دون الضغط على الجفن.', sideContent:'قم بتغطية عينك اليسرى أو اليمنى '},
        {id:4, modalContent:' في كل مرة عليك كتابة الرقم الذي تراه في الصورة ', sideContent:' في كل مرة عليك كتابة الرقم الذي تراه في الصورة '}
        
    ],
    tests:[
        {id:0, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur1.png', 
            correct_answer:12, 
            wrongMsg:'يجب أن يرى اي شخص الرقم 12 اجابتك خاطئة ',
            correctMsg:' يجب أن يرى اي شخص الرقم 12    إجابتك صحيحة '
        },
        {id:1, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur2.png', 
            correct_answer:29,
            wrongMsg:` اجابتك خاطئة 
            الأشخاص الذين لديهم رؤية طبيعية للون يرون 29.
            أولئك الذين يعانون من عمى الألوان قد يرون 70 أو لا شيء
            `,
            correctMsg:`   إجابتك صحيحة 
            الأشخاص الذين لديهم رؤية طبيعية للون يرون 29.
            أولئك الذين يعانون من عمى الألوان قد يرون 70 أو لا شيء
            `
        },
        {id:2, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur3.png', 
            correct_answer:15,
            wrongMsg:` اجابتك خاطئة 
            الأشخاص الذين لديهم رؤية طبيعية للون يرون 15.
            أولئك الذين يعانون من عمى الألوان قد يرون 17 أو لا شيء
            `,
            correctMsg:`   إجابتك صحيحة 
            الأشخاص الذين لديهم رؤية طبيعية للون يرون 15.
            أولئك الذين يعانون من عمى الألوان قد يرون 17 أو لا شيء
            ` ,
        },
        {id:3, imgUrl: 'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur4.png', 
            correct_answer:97, 
            wrongMsg:` اجابتك خاطئة 
            الأشخاص الذين لديهم رؤية طبيعية للون يرون 97.
            أولئك الذين يعانون من عمى الألوان قد لا يرون شيء
            `,
            correctMsg:`   إجابتك صحيحة 
            الأشخاص الذين لديهم رؤية طبيعية للون يرون 97.
            أولئك الذين يعانون من عمى الألوان قد لا يرون شيء
            ` ,
        },
        {id:4, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur5.png', 
            correct_answer:16, 
            wrongMsg:` اجابتك خاطئة 
            الأشخاص الذين لديهم رؤية طبيعية للون يرون 16.
            أولئك الذين يعانون من عمى الألوان قد لا يرون شيء
            `,
            correctMsg:`   إجابتك صحيحة 
            الأشخاص الذين لديهم رؤية طبيعية للون يرون 16.
            أولئك الذين يعانون من عمى الألوان قد لا يرون شيء
            ` ,
        },
        {id:6, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur6.png', 
            correct_answer:'x',
            wrongMsg:` اجابتك خاطئة 
            الأشخاص الذين لديهم رؤية طبيعية للون لا يرون شئ.
            أولئك الذين يعانون من عمى الألوان قد يرون 5
            `,
            correctMsg:`   إجابتك صحيحة 
            الأشخاص الذين لديهم رؤية طبيعية للون لا يرون شيء
            ` ,
        },
        {id:7, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur5.png', 
            correct_answer:16,
            wrongMsg:'Your answer is incorrect./n Everyone should see the number 12.',
            correctMsg:'People with normal vision are seeing nothing. /n Those with color deficiency may see a 5.'

        },
        {id:8, imgUrl:'https://www.essilor.com/essilor-content/themes/essilor/img/visionCouleur5.png', 
            correct_answer:16, correctMsg:'Your answer is correct./nEveryone should see the number 12.', 
            wrongMsg:'Your answer is incorrect./n Everyone should see the number 12.',
            constMsg:'People with normal vision are seeing nothing. /n Those with color deficiency may see a 5.'

        },

    ],
    testCount: 6,
    report:{
        normal:` لا يبدو أن لديك مشكلة عمى الالوان.
        لا تتردد في إعادة هذا الاختبار بانتظام لمراقبة نظرك او تحديد موعد مع أخصائي رعاية العيون.
        `,
        abnormal:`على الأرجح لديك بعض الصعوبات في رؤية الألوان،
         نوصيك بتقييم نظرك مع أخصائي العيون.`,
    }
}