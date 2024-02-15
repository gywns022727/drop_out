import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/config";
import { DROP } from "../../store/slices/dropSclice";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default function Index() {
  const school = useSelector((state: RootState) => state.school);
  const privacy = useSelector((state: RootState) => state.privacy);
  const reason = useSelector((state: RootState) => state.reason);
  const drop = useSelector((state: RootState) => state.drop);
  const downRef: any = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const copyUrl = () => {
    navigator.clipboard.writeText(location.href);
    alert("완료되었습니다.");
  };

  const downloadBtn = () => {
    const down = downRef.current;
    console.log(down);
    domtoimage.toBlob(down).then((props) => {
      saveAs(props, "자되신청서.png");
    });
  };

  const handleBack = () => {
    navigate("/reason");
  };

  return (
    <div>
      <div ref={downRef}>
        <h1>자퇴신청서</h1>
        <p>{school.school}</p>
        <p>{school.number}</p>
        <p>{privacy.name}</p>
        <p>{privacy.phone}</p>
        <p>{reason.reason}</p>
        <br />
      </div>
      <div>
        <button onClick={handleBack}>이전</button>
        <button onClick={downloadBtn}>다운로드</button>
      </div>
      <p onClick={copyUrl}>링크복사</p>
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
