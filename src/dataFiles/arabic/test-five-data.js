module.exports={ 
    name:'حساسية الضوء',
    instructionMsg:'	عليك التحديد إلى أي اتجاه يشير ذلك الجانب المفتوح c في كل مرة',
    instructionItems:[
        {id:1, modalContent:'(قد تحتاج لشخص آخر لمساعدتك للضغط على السهمl) حافظ على مسافة 1 متر بينك وبين الشاشة', sideContent:'حافظ على مسافة 1 متر بينك وبين الشاشة'},
        {id:2, modalContent:'إذا كنت تلبس نظارة طبية أو العدسات فتأكد من ارتدائها أثناء الاختبار', sideContent:'إتأكد من ارتداء أثناء الاختبار'},
        {id:3, modalContent:'قم بتغطية عينك اليسرى أو اليمنى دون الضغط على الجفن.', sideContent:'قم بتغطية عينك اليسرى أو اليمنى '},
        {id:4, modalContent:' (C) في كل مرة عليك التحديد إلى أي اتجاه يشير ذلك الجانب المفتوح ', sideContent:' (C) عليك التحديد إلى أي اتجاه يشير ذلك الجانب المفتوح '}
        
    ],
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
    testCount: 20,
    numberOfCorrectAnswers:0,
    report:{
        normal:`	تهانينا، لا يبدو أن لديك مشكلة حساسية الضوء.
        لا تتردد في إعادة هذا الاختبار بانتظام لمراقبة نظرك.
        للتحقق من صحة عينيك، لا تتردد في تحديد موعد مع أخصائي رعاية العيون.
        `,
        abnormalOneEye:`	يبدو أن لديك مشكلة في احدى عينيك لحساسية الضوء
         للتأكد نوصيك بإجراء اختبار نظر مع أخصائي العيون.
        `,
        abnormalTwoEye:`3-	يبدو ان لديك مشكلة في احدى عينيك لحساسية الضوء
         للتأكد نوصيك بإجراء اختبار نظر مع أخصائي العيون.`
    }
  }