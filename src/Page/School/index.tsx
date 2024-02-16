import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SCHOOL, NUMBER } from "../../store/slices/schoolSlice";
import { RootState } from "../../store/config";
import { Container } from "./style";
import Pigeon from "../../assets/images/pigeon.png";

type Inputs = {
  school: string;
  number: string;
};

export default function index() {
  const schoolData = useSelector((state: RootState) => state.school);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (schoolData) {
      setValue("school", String(schoolData.school) || "");
      setValue("number", String(schoolData.number) || "");
    }
  }, [schoolData, setValue]);

  const updateValue = () => {
    dispatch(SCHOOL(getValues("school")));
    dispatch(NUMBER(getValues("number")));
  };

  const onSubmit: SubmitHandler<Inputs> = () => {
    updateValue();
    navigate("/privacy");
  };

  return (
    <Container>
      <header>
        {/* <img src={Pigeon} alt="Pigeon" /> */}
        <h1>자퇴 신청서</h1>
        <img src={Pigeon} alt="Pigeon" />
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>학교</p>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="학교 명을 입력해주세요."
            {...register("school", { required: "학교 명을 입력해주세요." })}
          />
          {errors.school && <p>{errors.school.message}</p>}
        </label>

        <label>
          <p>학번</p>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="학번을 입력해주세요."
            {...register("number", {
              required: "학번을 입력해주세요.",
              pattern: { value: /^[0-9]/, message: "숫자만 입력해주세요." },
            })}
          />
          {errors.number && <p>{errors.number.message}</p>}
        </label>
        <button type="submit">다음</button>
      </form>
    </Container>
  );
}
