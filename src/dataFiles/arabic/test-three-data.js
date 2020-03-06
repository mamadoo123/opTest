module.exports = {
    name:'قرب الرؤية',
    instructionMsg:'هل يمكنك قراءة جميع أسطر النص، بما في ذلك أصغر واحد؟',
    instructionItems:[
      {id:1, modalContent:'(قد تحتاج لشخص آخر لمساعدتك للضغط على السهمl) حافظ على مسافة40 سم بينك وبين الشاشة', sideContent:'حافظ على مسافة40 سم بينك وبين الشاشة'},
      {id:2, modalContent:'إذا كنت تلبس نظارة طبية أو العدسات فتأكد من ارتدائها أثناء الاختبار', sideContent:'إتأكد من ارتداء أثناء الاختبار'},
      {id:3, modalContent:'قم بتغطية عينك اليسرى أو اليمنى دون الضغط على الجفن.', sideContent:'قم بتغطية عينك اليسرى أو اليمنى '},
      {id:4, modalContent:' قم بقراءة جميع أسطر النص', sideContent:' قم بقراءة جميع أسطر النص'}
      
  ],
    report:{
      normal:`يمكنك قراءة النص بالكامل من مسافة 40 سم.
       يبدو أن لديك رؤية جيدة بالقرب 
      لا تتردد في إعادة هذا الاختبار بانتظام لمراقبة نظرك
      `,
      abnormal:`لا يمكنك قراءة النص بالكامل من مسافة 40 سم.
       نوصيك بتحديد موعد مع طبيب العيون
        لإجراء تقييم نظر ومعرفة المزيد عن الحلول التصحيحية المختلفة المتاحة لك.
        `,
      }
}