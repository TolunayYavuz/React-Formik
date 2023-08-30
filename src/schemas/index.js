import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema=yup.object().shape({
    email:yup
    .string()
    .email('Geçerli bir email Giriniz')
    .required('Email Girmek zorunludur'),

    age:yup
    .number()
    .positive('Lütfen pozitif yaş giriniz')
    .integer('Lütfen Yaşınızı Tam giriniz')
    .required('Lütfen yaşınızı giriniz'),

    password:yup
    .string()
    .min(5,'Lütfen Minumun 5 karekter giriniz').matches
    (passwordRules,{
        message:'Lütfen en az bir 1 büyük 1 küçük  harf ve sayı giriniz',
    }).required('Şifre Giriniz'),


    confirmpassword:yup
    .string()
    .oneOf([yup.ref('password')],'Şifreler Eşleşmiyor')
    .required('Lütfen Tekrar şifre Giriniz')

});


export const AdvanceSchema=yup.object().shape({
    userName:yup
    .string()
    .min(3,'Kullanıcı Adı minumun 3 karakter uzunluğunda olmalıdır')

    .required('Kullanıcı adı zorunludur'),

    universitiy:yup
    .string()
    .oneOf(['bogazici','gsu','odtü','itu'],'Lütfen Üniversitenizi seçiniz')
    .required('Lüften Üniversitenizi seçiniz'),

    isAccepted:yup
    .boolean().oneOf([true],'Kullanım Koşullarını kabul ediniz')

});