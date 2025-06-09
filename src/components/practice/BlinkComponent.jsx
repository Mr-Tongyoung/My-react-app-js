import React, { useEffect, useState } from 'react'

export default function BlinkCompnent({text}) {
  const [showText, setShowText] = useState(true);

  useEffect(()=>{
    // setInterval(callbackFn, millisecond): millisecond마다 callbackFn을 실행시키는 함수

    const timeoutId = setInterval(()=>{
      setShowText(showText=>!showText);
    }, 1000)
    
    return () => {clearInterval(timeoutId)} // 컴포넌트가 사라질 때 setInterval을 해제하는 함수
  }, [])
  
  return (
    <div>
      {showText? text : null}
    </div>
  )
}