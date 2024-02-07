import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/config";
import { ADD_NAME, DELETE_NAME } from "../store/slices/userSlice";

const Manager = () => {
  const name = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <br />
      <br />
      {name.map((name) => {
        return <span key={name}>{name} </span>;
      })}
      <div>
        <button onClick={() => dispatch(DELETE_NAME("Kim"))}>Delete Kim</button>
        <button onClick={() => dispatch(ADD_NAME("John"))}>Add John</button>
      </div>
    </div>
  );
};

export default Manager;
