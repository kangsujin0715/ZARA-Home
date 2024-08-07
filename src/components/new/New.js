import React, { useState } from 'react'
import './New.css';

export const newData = { 
  id: 1,
  src: `${process.env.PUBLIC_URL}/images/new01.svg`,
  title: `MIMI THORISSON의\n` + `이탈리아 요리 레시피를 만나보세요`,
  text: `Mimi Thorisson과 그녀의 가족은 토리노 도시에서 가장 붐비는 광장의 하나인 Piazza Vittorio Veneto에 삽니다.\n` + `알프스 아래 위치한 대조적인 매력으로 넘치는 도시입니다.  에디토리얼을 통해 Mimi는 그녀가 좋아하는 공간과 맛있는\n` + `이탈리아 음식 레시피 4가지를 소개하기 위해 우리를 그녀의 집으로 초대합니다.`,
};

const New = () => {
  return (
    <div className={`w-full flex flex-col items-center`}>
      <h2 className='main-title'>NEW STORY</h2>
      <div className={`w-[1180px] mb-[130px] flex justify-between`}>
        <div>
          <h4 className='new-title'>{newData.title}</h4>
          <p className='new-text'>{newData.text}</p>
          <button className='md-btn bg-black text-white mt-8'>VIEW MORE</button>
        </div>
        <div>
          <img src={newData.src}/>
        </div>
      </div>
    </div>
  )
}
export default New
