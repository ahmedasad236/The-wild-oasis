import { css, styled } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      @media (max-width: 968px) {
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
      @media (max-width: 968px) {
        font-size: 1.5rem;
      }
    `}

    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 450;
      @media (max-width: 968px) {
        font-size: 1.8rem;
      }
    `}

    ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      @media (max-width: 968px) {
        font-size: 1.8rem;
      }
    `}
`;

export default Heading;
