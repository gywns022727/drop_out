import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";
import ExcelDownload from "../../Components/ExcelDownload";
import { SchoolState } from "../../store/slices/schoolSlice";
import { PrivacyState } from "../../store/slices/privacySlice";
import { ReasonState } from "../../store/slices/reasonSlice";

interface total extends SchoolState, PrivacyState, ReasonState {
  school: string;
  number: string;
  name: string;
  phone: string;
  reason: string;
}

export default function Index() {
  const school = useSelector((state: RootState) => state.school);
  const privacy = useSelector((state: RootState) => state.privacy);
  const reason = useSelector((state: RootState) => state.reason);
  const total: total = [
    { school: school.school },
    { number: school.number },
    { name: privacy.name },
    { phone: privacy.phone },
    { reason: reason.reason },
  ];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/reason");
  };

  return (
    <div>
      <h1>자퇴신청서</h1>
      <p>{school.school}</p>
      <p>{school.number}</p>
      <p>{privacy.name}</p>
      <p>{privacy.phone}</p>
      <p>{reason.reason}</p>
      <button onClick={handleBack}>이전</button>
      <button>가져가기</button>
      <ExcelDownload dropOutData={total} />
      <button>주의사항(버튼이 아닌 페이지로 들어오면 pop으로 띄우기)</button>
    </div>
  );
}

export type { total };
