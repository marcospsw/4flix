import React from 'react';
import styled from 'styled-components';
import LoadingImg from '../../assets/img/loading.png';

const Image = styled.img`

margin-bottom:20px;

animation: rotation 2s infinite linear;
  @keyframes rotation {
  from {
    transform: rotate(-360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
`;

function Loading() {
  return (
    <Image as="img" src={LoadingImg} alt="Loading Button" />
  );
}

export default Loading;
