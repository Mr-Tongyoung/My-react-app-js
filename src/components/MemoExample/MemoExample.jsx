import { useState } from "react";
import { MemoizedGreeter, RegularGreeter } from "./RegularGretter";

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Alice"); // MemoizedGreeter에 전달될 prop
  console.log("ParentComponent is rendering!");
  return (
    <div>
      <p>
        아래 버튼을 클릭하면 ParentComponent의 'count' 상태가 변경됩니다. <br />
        콘솔 로그를 확인하여 각 Greeter 컴포넌트가 언제 리렌더링되는지
        관찰하세요.
      </p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count: {count}
      </button>
      <button
        onClick={() => setUser(user === "Alice" ? "Bob" : "Alice")}
        style={{ marginLeft: "10px" }}
      >
        Change User (for MemoizedGreeter): {user}
      </button>
      {/* 이 컴포넌트는 count가 변경될 때마다 리렌더링될 필요는 없지만, 부모가 리렌더링되면 props가 같더라도 함께 리렌더링 됩니다. */}
      <h3>일반 자식 컴포넌트:</h3>
      <RegularGreeter name="Guest" /> {/* props가 항상 "Guest"로 고정 */}
      {/* 이 컴포넌트는 React.memo로 감싸져 있습니다. 'user' prop이 변경되지 않는 한, 부모의 'count' 상태 변경으로 인해 ParentComponent가 리렌더링 되어도 MemoizedGreeter는 리렌더링되지 않습니다. */}
      <h3>React.memo 사용 자식 컴포넌트:</h3>
      <MemoizedGreeter name={user} />
    </div>
  );
}
