import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {
  const { register, handleSubmit, formState: { errors }} = useForm() 
  const capturedata = (data) => {
      //console.log(data)
      alert("¡Validación exitosa!")
  }
  
  return (
    <>
        <h2>Editar asignatura</h2>
        <form onSubmit={ handleSubmit(capturedata) } className='form-react'>
            <div className='form-control'>
                <label>Nombre</label>
                <input type="text" {...register('name',{ 
                    required:true,
                    maxLength:50
                })} />
                {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.name?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 50</small>}
            </div>
            <div className='form-control'>
                <label>Unidades de crédito</label>
                <input type="number" {...register('credit_units',{ 
                    required:true,
                    min:1,
                    max:4
                })} />
                {errors.credit_units?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.credit_units?.type === "min" && <small className='fail'>El número mínimo de unidades de crédito es 1</small>}
                {errors.credit_units?.type === 'max' && <small className='fail'>El número máximo de unidades de crédito es de 4</small>}
            </div>
            <div className='form-control'>
                <label>Profesor</label>
                <input type="text" {...register('teacher',{ 
                    required:true,
                    maxLength:50
                })} />
                {errors.teacher?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.teacher?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es de 50</small>}
            </div>
            <div className='form-control'>
                <label>Descripción</label>
                <input type="text" {...register('description',{ 
                    required:true,
                    maxLength:50
                })} />
                {errors.description?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.description?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es de 50</small>}
            </div>
            <div className='form-control'>
                <label>Horario</label>
                <input type="text" {...register('schedule',{ 
                    required:true,
                    maxLength:200
                })} />
                {errors.schedule?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.schedule?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es de 200</small>}
            </div>
            <div className='form-control'>
                <label>Aula</label>
                <input type="number" {...register('classroom', {
                    required:true,
                    min:1,
                    max:15
                })} />
                {errors.classroom?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.classroom?.type === 'min' && <small className='fail'>El número mínimo de aula es de 1</small>}
                {errors.classroom?.type === 'max' && <small className='fail'>El número máximo de aula es de 15</small>}
            </div>
            <div className='form-control'>
                <label>Prerrequisitos</label>
                <input type="text" {...register('prerequisites',{ 
                    required:true,
                    maxLength:500
                })} />
                {errors.prerequisites?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.prerequisites?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es de 500</small>}
            </div>
            <div className='form-control'>
                <label>Cupo máximo</label>
                <input type="number" {...register('maximum_quota',{ 
                    required:true,
                    min:1,
                    max:40
                })} />
                {errors.maximum_quota?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.maximum_quota?.type === "min" && <small className='fail'>El número mínimo de cupos de crédito es 1</small>}
                {errors.maximum_quota?.type === 'max' && <small className='fail'>El número máximo de cupos de crédito es de 4</small>}
            </div>
            <button type='submit'>Actualizar datos</button>
        </form>
    </>
  )
}

export default FormValidation