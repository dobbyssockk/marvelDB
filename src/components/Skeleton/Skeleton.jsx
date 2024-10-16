import styled, {keyframes} from 'styled-components';

const pulse = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: .4;
    }
`;

const SkeletonContainer = styled.div`
    width: 425px;
    height: 294px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
    p {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 33px;
    }
    .circle, .thin-line, .thick-line {
        background-color: #C4C4C4;
        animation: ${pulse} 1.5s ease-in-out 0.5s infinite;
    }
    .header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .circle {
            min-width: 40px;
            height: 40px;
            border-radius: 100%;
            margin-right: 9px;
        }
        .thin-line {
            width: 100%;
            height: 16px;
        }
    }
    .thick-line {
        width: 375px;
        height: 35px;
        margin-bottom: 15px;
    }
`;

function Skeleton() {
    return (
        <SkeletonContainer>
            <p>Please select a character to see information</p>
            <div className="header">
                <div className="circle"></div>
                <div className="thin-line"></div>
            </div>
            <div className="thick-line"></div>
            <div className="thick-line"></div>
            <div className="thick-line"></div>
        </SkeletonContainer>
    );
}

export default Skeleton;