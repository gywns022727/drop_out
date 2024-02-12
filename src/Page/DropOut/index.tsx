import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";

export default function Index() {
  const schoolData = useSelector((state: RootState) => state.school);
  const privacyData = useSelector((state: RootState) => state.privacy);
  const reasonData = useSelector((state: RootState) => state.reason);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/reason");
  };

  return (
    <div>
      <h1>자퇴신청서</h1>
      <p>{schoolData.school}</p>
      <p>{schoolData.class}</p>
      <p>{privacyData.name}</p>
      <p>{privacyData.phone}</p>
      <p>{reasonData.reason}</p>
      <button onClick={handleBack}>이전</button>
      <button>가져가기</button>
      <button>주의사항(버튼이 아닌 페이지로 들어오면 pop으로 띄우기)</button>
    </div>
  );
}
