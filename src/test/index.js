import styled from "styled-components";

const SimpleButton = styled.button`
  color: blue;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

//styled.button을 통해 만들지 않은 버튼의 경우 자식 컴포넌트가 사용하려면 이처럼 해야함
const ReactButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
};

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

const PrimaryButton = styled.button`
  color: ${(props) => (props.primary ? "blue" : "black")};
  background-color: ${(props) => (props.primary ? "green" : "gray")};
`;

function Styled() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>LargeButton</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Primary</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
      {/* 아무 이름이나 속성을 넣으면 props.해당속성 의 값이 true가 된다.*/}
    </div>
  );
}

export default Styled;


