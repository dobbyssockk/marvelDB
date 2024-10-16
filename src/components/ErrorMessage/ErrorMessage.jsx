import React from 'react';
import styled from 'styled-components';
import img from './error.gif';

const StyledErrorMessage = styled.div`
    width: 250px;
    height: 180px;
    margin: 0 auto;
    img {
        object-fit: contain;
    }
`;

const ErrorMessage = () => {
    return (
        <StyledErrorMessage>
            <img src={img} alt="error"/>
        </StyledErrorMessage>
    );
};

export default ErrorMessage;