import styled from 'styled-components';
import Flex from '../Flex/Flex';
import avengers from '../../assets/images/avengers.png';
import avengersLogo from '../../assets/images/avengers-logo.png';

const StyledBanner = styled(Flex)`
    width: 100%;
    height: 100px;
    padding: 0 25px 0 45px;
    background-color: ${({theme}) => theme.colors.background};
    .img-wrapper {
        width: 152px;
    }
    .logo-wrapper {
        width: 133px;
    }
    .text {
        padding: 18px 0 0 83px;
        color: ${({theme}) => theme.colors.light};
        font-size: 24px;
        font-weight: bold;
    }
`;

function Banner() {
    return(
        <StyledBanner justify="space-between">
            <Flex>
                <div className="img-wrapper"><img src={avengers} alt=""/></div>
                <div className="text">
                    New comics every week!<br/>
                    Stay tuned!
                </div>
            </Flex>
            <div className="logo-wrapper"><img src={avengersLogo} alt=""/></div>
        </StyledBanner>
    );
}

export default Banner;