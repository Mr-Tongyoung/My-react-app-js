import { useState, useEffect } from "react";

export default function UserPublicApi() {
  //

  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserArray(data);
      });
  }, []);

  const addUser = ({ username, email }) => {
    // const newUserArray = [...userArray, { username, email }];
    // setUserArray(newUserArray);

    // state는 얕은 비교 사용하기 때문에 아래처럼하면 배열 주소값 안바뀜 => 렌더링 다시 안함
    // userArray.push({ username, email });
    // setUserArray(userArray);

    setUserArray(prev => [...prev, { username, email }]);
  };

  return (
    <ul>
      <button
        onClick={() => {
          addUser({ username: "새로운 유저", email: "sample@naver.com" });
        }}
      >
        유저 추가
      </button>
      {userArray.map((user) => {
        return (
          <li>
            {user.username} ({user.email})
          </li>
        );
      })}
    </ul>
  );
}
