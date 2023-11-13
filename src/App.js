// src/App.js
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const DiaryForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const DiaryInput = styled.input`
  grid-column: span 2;
  padding: 10px;
  font-size: 1em;
`;

const DiaryTextArea = styled.textarea`
  grid-column: span 2;
  padding: 10px;
  font-size: 1em;
`;

const DiaryImageInput = styled.input`
  grid-column: span 2;
  padding: 10px;
  font-size: 1em;
`;

const DiaryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const DiaryCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const DiaryImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const DiaryImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 5px;
`;

const DetailPage = styled.div`
  text-align: center;
  padding: 20px;
`;

const DateText = styled.p`
  font-size: 0.8em;
  color: #777;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1em;
`;

const App = () => {
  const [diaries, setDiaries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiary = {
      title,
      content,
      image,
      date: new Date().toLocaleDateString(),
    };
    setDiaries([...diaries, newDiary]);
    setTitle("");
    setContent("");
    setImage("");
  };

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <DiaryForm onSubmit={handleSubmit}>
                <DiaryInput
                  type="text"
                  placeholder="제목"
                  value={title}
                  onChange={handleTitleChange}
                />
                <DiaryTextArea
                  placeholder="내용"
                  value={content}
                  onChange={handleContentChange}
                />
                <DiaryImageInput
                  type="text"
                  placeholder="이미지 URL"
                  value={image}
                  onChange={handleImageChange}
                />
                <button type="submit">등록</button>
              </DiaryForm>

              <DiaryList>
                {diaries.map((diary, index) => (
                  <DiaryCard key={index}>
                    <Link to={`/diary/${index}`}>
                      <h3>{diary.title}</h3>
                    </Link>
                    <DateText>{diary.date}</DateText>
                    <p>{diary.content}</p>
                    <DiaryImageContainer>
                      <DiaryImage src={diary.image} alt="Diary" />
                    </DiaryImageContainer>
                  </DiaryCard>
                ))}
              </DiaryList>
            </div>
          }
        />

        {diaries.map((diary, index) => (
          <Route
            key={index}
            path={`/diary/${index}`}
            element={
              <DetailPage>
                <h2>{diary.title}</h2>
                <DateText>{diary.date}</DateText>
                <DiaryImage src={diary.image} alt="Diary" />
                <p>{diary.content}</p>
                <BackLink to="/">홈으로 돌아가기</BackLink>
              </DetailPage>
            }
          />
        ))}
      </Routes>
    </Container>
  );
};

export default App;
