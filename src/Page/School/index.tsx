import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SCHOOL_NAME, SCHOOL_NUMBER } from "../../store/slices/schoolSlice";
import { RootState } from "../../store/config";

type Inputs = {
  school: string;
  number: string;
};

export default function index() {
  const schoolName = useRef<HTMLInputElement | null>(null);
  const schoolNumber = useRef<HTMLInputElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schoolData = useSelector((state: RootState) => state.school);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleBack = () => {
    if (
      schoolName.current?.value != null &&
      schoolNumber.current?.value != null
    ) {
      dispatch(SCHOOL_NAME(schoolName.current.value));
      dispatch(SCHOOL_NUMBER(schoolNumber.current.value));
    }
    // navigate("/", {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{schoolData.nameValue}</h1>
        <h1>{schoolData.numberValue}</h1>
        <input
          type="text"
          autoComplete="off"
          value={schoolData ? schoolData.nameValue : ""}
          placeholder="학교 명을 적어주세요."
          {...register("school", { required: "학교 명을 적어주세요." })}
          ref={schoolName}
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
          ref={schoolNumber}
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
