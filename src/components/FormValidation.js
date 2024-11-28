import React from "react";
import { useForm } from "react-hook-form";

const FormValidation = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const capturedata = (data) => {
    console.log(data)
  }

  return (
    <>
      <h2>Editar asignatura</h2>

      <form onSubmit={handleSubmit(capturedata)} className="form-react">
        <div className="form-control">
          <label>Nombre</label>
          <input type="text" {...register("name", {required:true, maxLength:50})} />
          {errors.name?.type === "required" && <small className="fail">El campo no puede estar vacio</small>}
          {errors.name?.type === "maxLength" && <small className="fail">El máximo de caracteres es 50</small>}
        </div>
        <div className="form-control">
          <label>Unidades de crédito</label>
          <input type="number" {...register("credit units")} />
          {errors}
        </div>
        <div className="form-control">
          <label>Profesor</label>
          <input type="text" {...register("teacher")} />
          {errors}
        </div>
        <div className="form-control">
          <label>Descripción</label>
          <input type="text" {...register("description")} />
          {errors}
        </div>
        <div className="form-control">
          <label>Horario</label>
          <input type="text" {...register("schedule")} />
          {errors}
        </div>
        <div className="form-control">
          <label>Aula</label>
          <input type="number" {...register("classroom")} />
          {errors}
        </div>
        <div className="form-control">
          <label>Prerrequisitos</label>
          <input type="text" {...register("prerequisites")} />
          {errors}
        </div>
        <div className="form-control">
          <label>Cupo máximo</label>
          <input type="number" {...register("maximum quota")} />
          {errors}
        </div>
        <button type="submit">Actualizar datos</button>
      </form>
    </>
  );
};

export default FormValidation;