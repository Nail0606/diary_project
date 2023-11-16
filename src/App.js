// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import noImage from "./images/noImage.png";

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  max-height: 100%;
  background-color: #3498db;
`;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  height: 200px;
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

const DiaryImage = styled.div`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 5px;
  background-image: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : `url(${noImage})`};
  background-size: cover;
  background-position: center;
`;

const DetailPage = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DetailImageContainer = styled.div`
  display: flex;
  width: 760px;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const DetailImage = styled.img`
  width: 50%;
  border-radius: 5px;
  object-fit: cover;
`;

const DateText = styled.p`
  font-size: 0.8em;
  color: #777;
`;

const BackLink = styled.button`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1em;
  border: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* Add margin for separation */
`;

const SubmitButton = styled.button`
  flex: 1;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
`;

const ViewListButton = styled.button`
  flex: 1;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #e74c3c;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? "#27ae60" : "#3498db")};
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
`;

const InputPage = ({
  onSubmit,
  title,
  content,
  image,
  onChangeTitle,
  onChangeContent,
  onChangeImage,
}) => {
  return (
    <div>
      <h2>My Album</h2>
      <DiaryForm onSubmit={onSubmit}>
        <DiaryInput
          type="text"
          placeholder="제목"
          value={title}
          onChange={onChangeTitle}
        />
        <DiaryTextArea
          placeholder="내용"
          value={content}
          onChange={onChangeContent}
        />
        <DiaryImageInput
          type="text"
          placeholder="이미지 URL"
          value={image}
          onChange={onChangeImage}
        />
        <ButtonContainer>
          <SubmitButton type="submit">등록</SubmitButton>
          <Link to="/diary-list">
            <ViewListButton>일기 목록 보기</ViewListButton>
          </Link>
        </ButtonContainer>
      </DiaryForm>
    </div>
  );
};

const DiaryListPage = ({ diaries }) => {
  return (
    <div>
      <DiaryList>
        {diaries.map((diary, index) => (
          <Link key={index} to={`/diary/${index}`}>
            <DiaryCard>
              <h3>{diary.title}</h3>
              <DateText>{diary.date}</DateText>
              <DiaryImageContainer>
                <DiaryImage imageUrl={diary.image} />
              </DiaryImageContainer>
            </DiaryCard>
          </Link>
        ))}
      </DiaryList>
      <StyledButton as={Link} to="/input">
        새 일기 작성하기
      </StyledButton>
    </div>
  );
};

const DiaryDetailPage = ({ diary, setDiaries }) => {
  const navi = useNavigate();
  const handleDelete = () => {
    // 삭제 로직 구현
    setDiaries((prevDiaries) => prevDiaries.filter((item) => item !== diary));
    // 페이지 이동
    navi("/diary-list");
  };

  return (
    <DetailPage>
      <h2>{diary.title}</h2>
      <DateText>{diary.date}</DateText>
      <DetailImageContainer>
        <DetailImage src={diary.image ? diary.image : noImage} alt="Diary" />
      </DetailImageContainer>
      <p>{diary.content}</p>
      <ButtonContainer>
        <BackLink onClick={() => window.history.back()}>
          홈으로 돌아가기
        </BackLink>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </ButtonContainer>
    </DetailPage>
  );
};

const App = () => {
  const [diaries, setDiaries] = useState(
    JSON.parse(localStorage.getItem("diaries")) || []
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

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

  useEffect(() => {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);

  return (
    <Background>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/input" />} />
          <Route
            path="/input"
            element={
              <InputPage
                onSubmit={handleSubmit}
                title={title}
                content={content}
                image={image}
                onChangeTitle={handleTitleChange}
                onChangeContent={handleContentChange}
                onChangeImage={handleImageChange}
              />
            }
          />
          <Route
            path="/diary-list"
            element={<DiaryListPage diaries={diaries} />}
          />
          {diaries.map((diary, index) => (
            <Route
              key={index}
              path={`/diary/${index}`}
              element={
                <DiaryDetailPage diary={diary} setDiaries={setDiaries} />
              }
            />
          ))}
        </Routes>
      </Container>
    </Background>
  );
};

export default App;
