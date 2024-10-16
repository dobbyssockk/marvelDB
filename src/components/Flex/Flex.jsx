import styled from 'styled-components';

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    justify-content: ${({justify}) => justify || 'stretch'};
    align-items: ${({align}) => align || 'stretch'};
    margin: ${({margin}) => margin || '0'};
`;

const Flex = (props) => {
    return <StyledFlex {...props}/>
};

export default Flex;