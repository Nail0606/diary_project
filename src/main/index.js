import styled from "styled-components";

const StyledBanner = styled.div`
  background-color: gray;
  width: 1000px;
  height: 400px;
`;

const PageTitle = styled.h1``;

function MainPage() {
  return (
    <div>
      <h1>일기장</h1>
      <StyledBanner />
    </div>
  );
}

export default MainPage;
