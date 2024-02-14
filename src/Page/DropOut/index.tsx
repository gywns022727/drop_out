import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/config";
import { DROP } from "../../store/slices/dropSclice";

export default function Index() {
  const school = useSelector((state: RootState) => state.school);
  const privacy = useSelector((state: RootState) => state.privacy);
  const reason = useSelector((state: RootState) => state.reason);
  const drop = useSelector((state: RootState) => state.drop);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const copyUrl = () => {
    navigator.clipboard.writeText(location.href);
    alert("완료되었습니다.");
  };

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
      <div>
        <button onClick={handleBack}>이전</button>
        <button>다운로드</button>
      </div>
      <a href="#" onClick={copyUrl}>
        링크복사
      </a>
      {drop.drop ? (
        <div>
          <p>주의 사항</p>
          <div>대충 주의사항</div>
          <button onClick={() => dispatch(DROP(!drop))}>닫기</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
