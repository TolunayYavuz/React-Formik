import React from 'react'
import {Form,Formik } from 'formik'; 
import CustomInput from './CustomInput';
import {AdvanceSchema} from '../schemas/index';
import CustomSelect from './Customselect';
import CustomCheckbox from './CustomCheckbox';


const onSubmit = async (value,action) => {
  console.log(value)
  console.log(action)


  await new Promise((resolve)=> {
    setTimeout(resolve,1000)
  })

  action.resetForm();
};
function Portal() {
  return (
   <>
<Formik
       initialValues={{ userName: '', universitiy: 'red', isAccepted:false}}
        onSubmit={onSubmit}
        validationSchema={AdvanceSchema}
     >
       {() => (
         <Form>
            <CustomInput
            label="Kullanıcı Adı"
            name="userName"
            type="text"
            placeholder="Kullanıcı Adınızı Giriniz"
            
            />

            <CustomSelect 
            label="Okulunuzu"
            name='universitiy'
            placeholder='lütfen Üniversitenizi seçiniz'
            >
              
            <option value="">Lütfen Üniversitenizi Seçiniz</option>
            <option value="bogazici">Boğaziçi Üniversitesi</option>
            <option value="gsu">gsu Üniversitenizi Seçiniz</option>
            <option value="odtü">Odtü Üniversitenizi Seçiniz</option>
            <option value="itu">itu Üniversitenizi Seçiniz</option>
              
            </CustomSelect>


            <CustomCheckbox 
            type='checkbox' 
            name='isAccepted' />
         </Form>
       )}
     </Formik>
   </>
  )
}

export default Portal
