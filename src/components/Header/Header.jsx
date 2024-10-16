import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    a {
        color: ${({theme}) => theme.colors.dark};
        font-weight: bold;
    }
    h1 {
        font-size: 28px;
        span {
            color: ${({theme}) => theme.colors.primary};
        }
    }
    font-size: 24px;
    ul {
        display: flex;
        span {
            margin: 0 12px 0 12px;
        }
    }
`;

function Header() {
    return (
        <StyledHeader>
            <h1>
                <a href="#">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav>
                <ul>
                    <li><a href="#">Characters</a></li>
                    <span>/</span>
                    <li><a href="#">Comics</a></li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default Header;