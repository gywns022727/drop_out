import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/config";
import { DROP } from "../../store/slices/dropSclice";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import Header from "../../Components/header";
import { Container, PopUpBox, Background } from "./style";

export default function Index() {
  const school = useSelector((state: RootState) => state.school);
  const privacy = useSelector((state: RootState) => state.privacy);
  const reason = useSelector((state: RootState) => state.reason);
  const drop = useSelector((state: RootState) => state.drop);
  const downRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const copyUrl = () => {
    navigator.clipboard.writeText(location.href);
    alert("완료되었습니다.");
  };

  const downloadBtn = () => {
    const down = downRef.current;
    if (down !== null) {
      domtoimage.toBlob(down).then((props) => {
        saveAs(props, "자퇴신청서.png");
      });
    }
  };

  const handleBack = () => {
    navigate("/reason");
  };

  return (
    <Container>
      <Header />
      <div ref={downRef}>
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
        <Background>
          <PopUpBox>
            <h2>자퇴하기 전에 생각했나요?</h2>
            <hr />
            <div>
              <p>- 이 앱은 법적으로 아무런 효력이 없습니다.</p>
              <p>- 장난이라도 절대 선생님께 보내지 마세요.</p>
              <p>- 친구들과 장난치는 용도로만 사용해 주세요.</p>
              <p>- 본 서비스는 당사자의 선택에 책임지지 않습니다.</p>
            </div>
            <button onClick={() => dispatch(DROP(!drop))}>닫기</button>
          </PopUpBox>
        </Background>
      ) : (
        ""
      )}
    </Container>
  );
}
