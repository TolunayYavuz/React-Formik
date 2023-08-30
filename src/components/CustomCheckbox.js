import { useField } from 'formik'
import React from 'react'

function CustomCheckbox({label,...props}) {

    const [field,meta] = useField(props)
  return (
    <>
        <div className="checkbox">
            <input 
                {...field}
                {...meta}

                className={meta.error ? 'input-error' : ''}
            
            />
              {meta.error && <div className='error'>{meta.error}</div>}
        </div>
    </>
  )
}

export default CustomCheckbox;
