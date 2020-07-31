import styled from 'styled-components';

const InputWrapper = styled.div`
  background: var(--grayDark);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-left: 25%;
  padding: 5px;
  width: 50%;  
  border: 2px solid var(--primary);

  label {
    background-color: var(--grayDark);
    font-size: 25px;
    font-weight: normal;
    transition: 0.2s all;

    @media (max-width: 800px) {
      font-size:18px;
    }
  }
  
  
  input {
    background: var(--grayDark);
    border: 0;
    color: var(--grayLight);
    display: ${(props) => (props.type === 'textarea' ? 'none' : 'block')};
    font-size: 23px;
    outline: 0;
    padding: ${(props) => (props.type === 'color' ? '0' : '5px 0')};
    transition: 0.2s all;
    width: 100%;
  }
  textarea {
    background: var(--grayDark);
    border: 0;
    color: var(--grayLight);
    display: ${(props) => (props.type === 'textarea' ? 'block' : 'none')};
    font-size: 23px;
    outline: 0;
    padding: 5px 0;
    transition: all 0.2s;
    width: 100%;
  }


  @media (max-width: 800px) {
    margin-left:0;
    width:100%;
  }

`;

export default InputWrapper;
