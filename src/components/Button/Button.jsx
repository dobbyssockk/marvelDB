import styled from 'styled-components';

const StyledButton = styled.button`
    min-width: 116px;
    background-color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
    padding: ${props => props.size === 'large' ? '10px 52px' : '11px 18px'};
    font-size: 14px;
    line-height: 16px;
    color: ${({theme}) => theme.colors.light};
    border: none;
    text-transform: uppercase;
    clip-path: polygon(11px 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 11px) 100%, 0px 100%, 0% 30%);
    &:hover {
        transform: translateY(-5px);
        cursor: pointer;
    }
    &:disabled {
        cursor: not-allowed;
        filter: grayscale(.5);
    }
`;


function Button({primary, size, text, style, disabled, onClick}) {
    return (
        <StyledButton
            primary={primary}
            size={size}
            style={style}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </StyledButton>
    );
}

export default Button;