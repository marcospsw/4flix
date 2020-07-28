import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 15px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    background: var(--green4);
    
    &:hover, &:focus {
        opacity: .5;
    }

    @media (max-width: 800px) {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
      background: var(--green4);
    }
`;

export default Button;