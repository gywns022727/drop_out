import { CSVLink } from "react-csv";
import { total } from "../../Page/DropOut";

interface propsType {
  dropOutData: total;
}

interface label {
  label: string;
  key: string;
}

export default function index(props: propsType) {
  const header: label[] = [
    { label: "학교", key: "school" },
    { label: "학번", key: "number" },
    { label: "이름", key: "name" },
    { label: "전화번호", key: "phone" },
    { label: "사유", key: "reason" },
  ];
  console.log(header, props.dropOutData);
  return (
    <div>
      <button>다운로드</button>
      {/* <CSVLink
        data={props.dropOutData}
        headers={header}
        filename="자퇴 신청서"
      /> */}
    </div>
  );
}
