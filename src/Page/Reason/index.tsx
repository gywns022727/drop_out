import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REASON } from "../../store/slices/reasonSlice";
import { RootState } from "../../store/config";

type Inputs = {
  reason: string;
};

export default function index() {
  const reasonData = useSelector((state: RootState) => state.reason);
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
    if (reasonData) {
      setValue("reason", String(reasonData.reason) || "");
    }
  }, [reasonData, setValue]);

  const updateValue = () => {
    dispatch(REASON(getValues("reason")));
  };

  const onSubmit: SubmitHandler<Inputs> = () => {
    updateValue();
    navigate("/dropout");
  };

  const handleBack = () => {
    updateValue();
    navigate("/privacy");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>사유</p>
          <textarea
            autoFocus
            placeholder="사유를 입력해주세요."
            {...register("reason", { required: "사유를 입력해주세요." })}
          />
          {errors.reason && <p>{errors.reason.message}</p>}
        </label>
        <button type="button" onClick={handleBack}>
          이전
        </button>
        <button type="submit">다음</button>
      </form>
    </div>
  );
}
