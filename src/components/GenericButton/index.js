import styled from 'styled-components';

const GenericButton = styled.button`

    color: var(--white);
    border: 2px solid var(--primary);
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
    margin-bottom: 25px;
    margin-left: 10px;
    margin-right: 10px;
    
    &:hover{
        opacity: .5;
    }
`;

export default GenericButton;
