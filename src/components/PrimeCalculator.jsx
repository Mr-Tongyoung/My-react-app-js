import React, { useState, useMemo } from "react";

function calculatePrimes(limit) {
  console.log(`limit: ${limit} 에 대한 소수 계산`);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

export default function PrimeCalculator(props) {
  const [limit, setLimit] = useState(10);
  const [toggle, setToggle] = useState(false);

  // const primes = calculatePrimes(limit);
  // useMemo를 사용하여 소수 계산 결과를 메모이제이션합니다.

  const primes = useMemo(() => {
    return calculatePrimes(limit);
  }, [limit]);

  return (
    <div>
      <button
        onClick={(e) => {
          setToggle((prev) => !prev);
        }}
      >
        버튼
      </button>

      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <p>계산된 소수: {primes.join(", ")}</p>
    </div>
  );
}
