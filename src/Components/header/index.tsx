import { Header } from "./style";
import Pigeon from "../../assets/images/pigeon.png";

export default function index() {
  return (
    <Header>
      {/* <img src={Pigeon} alt="Pigeon" /> */}
      <h1>자퇴 신청서</h1>
      <img src={Pigeon} alt="Pigeon" />
    </Header>
  );
}
