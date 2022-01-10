import React from 'react';
import { Route, Routes } from 'react-router';
import DiaryDetail from './DiaryDetail';
import DiaryList from './DiaryList';
import DiaryListPaging from './DiaryListPaging';
import UpdateDiary from './UpdateDiary';
import WriteDiary from './WriteDiary';

const Diary = () => {
  return (
    <Routes>
      <Route path="/" element={<DiaryList></DiaryList>}></Route>
      <Route path="/list" element={<DiaryList></DiaryList>}></Route>
      <Route path="/write" element={<WriteDiary></WriteDiary>}></Route>
      <Route path="/detail/:id" element={<DiaryDetail></DiaryDetail>}></Route>
      <Route path="/update/:id" element={<UpdateDiary></UpdateDiary>}></Route>
      <Route path="/list/pagination" element={<DiaryListPaging></DiaryListPaging>}></Route>
    </Routes>
  );
};

export default Diary;