import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  school: string;
  number: string;
};

export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          autoComplete="off"
          placeholder="학교 명을 적어주세요."
          {...register("school", { required: "학교 명을 적어주세요." })}
        />
        {errors.school && <span>{errors.school.message}</span>}

        <input
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="학번을 적어주세요."
          {...register("number", {
            required: "학번을 적어주세요.",
            pattern: { value: /^[0-9]/, message: "숫자만 입력해주세요." },
          })}
        />
        {errors.number && <span>{errors.number.message}</span>}
        <button type="button" onClick={handleBack}>
          이전
        </button>
        <button type="submit">다음</button>
      </form>
    </div>
  );
}
