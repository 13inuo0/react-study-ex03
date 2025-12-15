import { useParams } from "react-router-dom";

export default function User01() {
  const { name, age, city } = useParams();
  return (
    <div>
      <h2>유저 정보</h2>
      <p>이름:{name}</p>
      <p>나이:{age}살</p>
      <p>사는 곳:{city}입니다.</p>
    </div>
  );
}
