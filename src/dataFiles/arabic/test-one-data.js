module.exports={ 
    name:'حدة البصر',
    instructionMsg:'عليك التحديد إلى أي اتجاه يشير ذلك الجانب المفتوح E في كل مرة',
    instructionItems:[
        {id:1, modalContent:'(قد تحتاج لشخص آخر لمساعدتك للضغط على السهمl) حافظ على مسافة 1 متر بينك وبين الشاشة', sideContent:'حافظ على مسافة 1 متر بينك وبين الشاشة'},
        {id:2, modalContent:'إذا كنت تلبس نظارة طبية أو العدسات فتأكد من ارتدائها أثناء الاختبار', sideContent:'إتأكد من ارتداء أثناء الاختبار'},
        {id:3, modalContent:'قم بتغطية عينك اليسرى أو اليمنى دون الضغط على الجفن.', sideContent:'قم بتغطية عينك اليسرى أو اليمنى '},
        {id:4, modalContent:'  في كل مرة عليك التحديد إلى أي اتجاه يشير ذلك الجانب المفتوح (E)', sideContent:'  عليك التحديد إلى أي اتجاه يشير ذلك الجانب المفتوح (E)'}
        
    ],
    tests:[
        {id:0, correct_answer:'right', degreeOfRotation:0, scale:0.1},
        {id:1, correct_answer:'down', degreeOfRotation:1, scale:0.08},
        {id:2, correct_answer:'left', degreeOfRotation:2, scale:0.06},
        {id:3, correct_answer:'right', degreeOfRotation:0, scale:0.05},
        {id:4, correct_answer:'up', degreeOfRotation:3, scale:0.04},
        {id:5, correct_answer:'down', degreeOfRotation:1, scale:0.03},
        {id:6, correct_answer:'up', degreeOfRotation:3, scale:0.08},
        {id:7, correct_answer:'left', degreeOfRotation:2, scale:0.06},
        {id:8, correct_answer:'right', degreeOfRotation:0, scale:0.04},
        {id:9, correct_answer:'down', degreeOfRotation:1, scale:0.04}
    ],
    testCount: 10,
    numberOfCorrectAnswers:0,
    report:{
        normal:`نظرك جيد في كلتا العينين
        ننصح بإعادة هذا الاختبار بانتظام لمراقبة صحة نظرك وتحديد موعد مع أخصائي العيون للاطمئنان`,
        abnormalOneEye:`	يبدو أنك تواجه صعوبات في التعرف على الرموز الصغيرة بإحدى عينيك.
        نوصيك بإجراء اختبار نظر مع أخصائي العيون.`,
        abnormalTwoEye:`	يبدو أنك تواجه صعوبات في التعرف على الرموز الصغيرة بكلتا عينيك.
        نوصيك بإجراء اختبار نظر مع أخصائي العيون`
    }
  }