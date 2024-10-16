import styled from 'styled-components';
import xMen from '../../assets/images/x-men.png';

const StyledSingleComic = styled.div`
    display: grid;
    grid-template-columns: 293px 550px auto;
    column-gap: 50px;
    .comic-img {
        width: 293px;
        height: 450px;
    }
    .comic-info {
        h2 {
            font-size: 22px;
        }
        p {
            font-size: 18px;
            margin-top: 25px;
        }
        .comic-price {
            color: #9F0013;
            font-size: 24px;
            font-weight: bold;
            margin-top: 25px;
        }
    }
    a {
        justify-self: end;
        color: ${({theme}) => theme.colors.dark};
        font-size: 18px;
        font-weight: bold;
        text-decoration: none;
    }
`;

function SingleComic() {
    return (
        <StyledSingleComic>
            <div className="comic-img">
                <img src={xMen} alt=""/>
            </div>
            <div className="comic-info">
                <h2>X-Men: Days of Future Past</h2>
                <p className="comic-descr">Re-live the legendary first journey into the dystopian future of 2013
                    - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also
                    featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men
                    from Cyclops himself...and a demon for Christmas!?</p>
                <p>144 pages</p>
                <p>Language: en-us</p>
                <div className="comic-price">9.99$</div>
            </div>
            <a href="#">Back to all</a>
        </StyledSingleComic>
    );
}

export default SingleComic;