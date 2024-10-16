import {Component} from 'react';
import styled from 'styled-components';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import mjolnir from '../../assets/images/decoration.png';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import MarvelService from '../../services/MarvelService';

const BaseBlock = styled(Flex)`
    width: 550px;
    height: 250px;
    padding: 35px 35px 35px 40px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
    background-color: ${({theme}) => theme.colors.light};
`;

const RandomInfoBlock = styled(BaseBlock)`
    .img-wrapper {
        width: 180px;
        height: 180px;
    }
    .char-info {
        width: 265px;
        h2 {
            color: ${({theme}) => theme.colors.dark};
            text-transform: uppercase;
        }
        p {
            color: ${({theme}) => theme.colors.dark};
            font-size: 14px;
        }
    }
`;

const CTABlock = styled(BaseBlock)`
    position: relative;
    background-color: ${({theme}) => theme.colors.background};
    p {
        font-size: 24px;
        color: ${({theme}) => theme.colors.light};
        font-weight: bold;
    }
    p:nth-child(2) {
        margin-top: 35px;
    }
    button {
        align-self: start;
        margin-top: 18px;
    }
    .img-wrapper {
        width: 203px;
        height: 189px;
        position: absolute;
        right: -14px;
        bottom: 14px;
    }
`;

class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    };

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 15000);
    }

    componentWillUnmount() {
        setInterval(this.timerId);
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
            error: false
        });
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000 + 1) + 1011000);
        this.onCharLoading();
        this.marvelService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <Flex>
                <>
                    {spinner}
                    {errorMessage}
                    {content}
                </>

                <CTABlock direction="column">
                    <p>
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p>
                        Or choose another one
                    </p>
                    <Button primary text="Try it" onClick={this.updateChar}/>
                    <div className="img-wrapper">
                        <img src={mjolnir} alt="mjolnir"/>
                    </div>
                </CTABlock>
            </Flex>
        );
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;

    const clazz = (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') ? 'contained' : null;

    return (
        <RandomInfoBlock justify="space-between">
            <div className="img-wrapper">
                <img className={clazz} src={thumbnail} alt={name}/>
            </div>
            <Flex direction="column" justify="space-between" className="char-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <Flex justify="space-between">
                    <Button as="a" href={homepage} primary text="Homepage"/>
                    <Button as="a" href={wiki} text="Wiki"/>
                </Flex>
            </Flex>
        </RandomInfoBlock>
    );
}

export default RandomChar;