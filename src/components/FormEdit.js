import { useForm } from "react-hook-form";

const FormEdit = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <h2>Editar asignatura</h2>

      <form className="form-react">
        <div className="form-control">
          <label>Nombre</label>
          <input type="text" {...register("name")} />
        </div>
        <div className="form-control">
          <label>Unidades de crédito</label>
          <input type="number" {...register("credit units")} />
        </div>
        <div className="form-control">
          <label>Profesor</label>
          <input type="text" {...register("teacher")} />
        </div>
        <div className="form-control">
          <label>Descripción</label>
          <input type="text" {...register("description")} />
        </div>
        <div className="form-control">
          <label>Horario</label>
          <input type="text" {...register("schedule")} />
        </div>
        <div className="form-control">
          <label>Aula</label>
          <input type="number" {...register("classroom")} />
        </div>
        <div className="form-control">
          <label>Prerrequisitos</label>
          <input type="text" {...register("prerequisites")} />
        </div>
        <div className="form-control">
          <label>Cupo máximo</label>
          <input type="number" {...register("maximum quota")} />
        </div>
        <button type="submit">Actualizar datos</button>
      </form>
    </>
  );
};

export default FormEdit;