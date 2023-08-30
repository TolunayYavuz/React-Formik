import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const onSubmit = async (value,action) => {
  console.log(value)
  console.log(action)


  await new Promise((resolve)=> {
    setTimeout(resolve,1000)
  })

  action.resetForm();
};

function General() {

    const {values,errors,isSubmitting,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: "",
          age:"",
          password:"",
          confirmpassword:"",
        },

        validationSchema:basicSchema,
        onSubmit,
      });

 
    
  return (
    <form onSubmit={handleSubmit}>
       <div className='inputDiv'>
        <label>email</label>
        <input 
        type="email"
        value={values.email}
        id="email"
        placeholder='Mail Adresinizi Giriniz'
        onChange={handleChange}
        className={errors.email ? 'input-error' :''}
        />
        {errors.email && <p className='error'>{errors.email}</p>}
       </div>

       <div className='inputDiv'>
        <label>Yaş</label>
        <input 
        type="number"
        value={values.age}
        id="age"
        placeholder='Yaşınızı Giriniz'
        onChange={handleChange}
        className={errors.age ? 'input-error' :''}
        />
         {errors.age && <p className='error'>{errors.age}</p>}
       </div>
       <div className='inputDiv'>
        <label>Şifre</label>
        <input 
        type="password"
        value={values.password}
        id="password"
        placeholder='Lütfen şifre Giriniz'
        onChange={handleChange}
        className={errors.password ? 'input-error' :''}
        />
         {errors.password && <p className='error'>{errors.password}</p>}
       </div>
       <div className='inputDiv'>
        <label>Şifreyi Tekrar Giriniz</label>
        <input 
        type="password"
        value={values.confirmpassword}
        id="confirmpassword"
        placeholder='Lütfen Tekrar Şifre Giriniz'
        onChange={handleChange}
        className={errors.confirmpassword ? 'input-error' :''}
        />
        {errors.confirmpassword && <p className='error'>{errors.confirmpassword}</p>}
       </div>
        <button disabled={isSubmitting} type='submit'>Kaydet</button>    
    </form>
    
  )
}

export default General
