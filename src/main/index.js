import styled from "styled-components";
import { useState } from "react";
import { props } from "react";

const StyledBody = styled.div`
  background-color: gray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  padding: 20px;
`;

const StyledDiv = styled.div`
  background-color: lightblue;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLine = styled.hr`
  width: 1000px;
  color: gray;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

const ImageBox2 = styled.div`
  display: flex;
  background-color: yellow;
  width: 200px;
  height: 200px;
`;

function MainPage() {
  let [postNames,setPostNames] = useState(["자유의 여신상","강아지들","고양이들","서울 야경","케이크와 커피"]);
  let [images, setImages] = useState(["/images/dogs.jpg","/images/cats.png","/images/cake.jpg","/images/strawberries.jpg","/images/train.jpg"]);


  return (
    <StyledDiv>
      <Header>
        <h1>My_Album</h1>
        <h1>My_Album2</h1>
      </Header>
      <MainLine />
      <StyledBody>

      {
        postNames.map((n,i)=>{
          return (<ImageBox images={images[i]}/>)
        })
        
      }
      </StyledBody>
    </StyledDiv>
  );
}

function ImageBox(props){
  return(
  <ImageBox2>
    <img
      src={props.images}
      alt="adsfsa"
      style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
      onClick={()=>{
        alert(props.images)}
      }
    />
  </ImageBox2>);
}


export default MainPage;
