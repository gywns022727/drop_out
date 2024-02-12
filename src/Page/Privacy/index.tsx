import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NAME, PHONE } from "../../store/slices/privacySlice";
import { RootState } from "../../store/config";

type Inputs = {
  name: string;
  phone: string;
};

export default function index() {
  const privacyData = useSelector((state: RootState) => state.privacy);
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
    if (privacyData) {
      setValue("name", String(privacyData.name) || "");
      setValue("phone", String(privacyData.phone) || "");
    }
  }, [privacyData, setValue]);

  const updateValue = () => {
    dispatch(NAME(getValues("name")));
    dispatch(PHONE(getValues("phone")));
  };

  const onSubmit: SubmitHandler<Inputs> = () => {
    updateValue();
    navigate("/reason");
  };

  const handleBack = () => {
    updateValue();
    navigate("/school");
  };

  const autoHyphen = () => {
    if (getValues("phone").length == 11) {
      setValue(
        "phone",
        getValues("phone").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    } else if (getValues("phone").length === 13) {
      setValue(
        "phone",
        getValues("phone")
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>이름</p>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="이름을 입력해주세요."
            {...register("name", { required: "이름을 입력해주세요." })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>

        <label>
          <p>전화번호</p>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="전화번호를 입력해주세요."
            minLength={13}
            maxLength={13}
            {...register("phone", {
              required: "전화번호를 입력해주세요.",
              pattern: { value: /^[0-9]/, message: "숫자만 입력해주세요." },
              onChange: () => {
                autoHyphen();
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </label>
        <button type="button" onClick={handleBack}>
          이전
        </button>
        <button type="submit">다음</button>
      </form>
    </div>
  );
}
