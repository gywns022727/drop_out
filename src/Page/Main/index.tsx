import {Link} from 'react-router-dom'

export default function index() {
  return (
    <div>
      <h1>자퇴신청서</h1>
      <Link to={"/school"}>자퇴하기!</Link>
    </div>
  )
}
