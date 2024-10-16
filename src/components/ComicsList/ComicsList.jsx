import styled from 'styled-components';
import uw from '../../assets/images/UW.png';
import xMen from '../../assets/images/x-men.png';
import Button from '../Button/Button';

const StyledComicsList = styled.div`
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, 225px);
        justify-content: space-between;
        row-gap: 25px;
        li {
            a {
                text-decoration: none;
                .comic-img {
                    width: 225px;
                    height: 346px;
                    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
                }
                .comic-name, .comic-price {
                    margin-top: 10px;
                }
                .comic-name {
                    color: ${({theme}) => theme.colors.dark};
                    font-size: 14px;
                    font-weight: bold;
                }
                .comic-price {
                    color: rgba(0, 0, 0, 0.6);
                    font-size: 14px;
                    font-weight: bold;
                }
            }
        }
    }
    button {
        margin-top: 45px;
    }
`;

function ComicsList() {
    return(
        <StyledComicsList>
            <ul>
                <li>
                    <a href="#">
                        <div className="comic-img"><img src={uw} alt=""/></div>
                        <div className="comic-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-price">9.99$</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="comic-img"><img src={xMen} alt=""/></div>
                        <div className="comic-name">X-Men: Days of Future Past</div>
                        <div className="comic-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="comic-img"><img src={uw} alt=""/></div>
                        <div className="comic-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-price">9.99$</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="comic-img"><img src={xMen} alt=""/></div>
                        <div className="comic-name">X-Men: Days of Future Past</div>
                        <div className="comic-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="comic-img"><img src={uw} alt=""/></div>
                        <div className="comic-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-price">9.99$</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="comic-img"><img src={xMen} alt=""/></div>
                        <div className="comic-name">X-Men: Days of Future Past</div>
                        <div className="comic-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="comic-img"><img src={uw} alt=""/></div>
                        <div className="comic-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-price">9.99$</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="comic-img"><img src={xMen} alt=""/></div>
                        <div className="comic-name">X-Men: Days of Future Past</div>
                        <div className="comic-price">NOT AVAILABLE</div>
                    </a>
                </li>
            </ul>
            <Button primary size="large" text="Load more"/>
        </StyledComicsList>
    );
}

export default ComicsList;