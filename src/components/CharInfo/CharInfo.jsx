import {Component} from 'react';
import styled from 'styled-components';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import MarvelService from '../../services/MarvelService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Skeleton from '../Skeleton/Skeleton';

const StyledCharInfo = styled.div`
    width: 425px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
    align-self: start;
    .char-img {
        width: 150px;
        height: 150px;
        margin-right: 25px;
    }
    .char-basics {
        width: 200px;
    }
    .char-name {
        color: ${({theme}) => theme.colors.dark};
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 37px;
        text-transform: uppercase;
    }
    button:nth-child(2) {
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        margin-bottom: 10px;
    }
    .char-comics {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 13px;
    }
    ul {
        li {
            padding: 5px 10px;
            font-size: 14px;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            margin-bottom: 10px;
        }
    }
`;
class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false
    };

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateCharInfo();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.charId !== prevProps.charId) {
            this.updateCharInfo();
        }
    }

    updateCharInfo = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.onCharInfoLoading();

        this.marvelService.getCharacter(charId)
            .then(this.onCharInfoLoaded)
            .catch(this.onError);
    }

    onCharInfoLoading = () => {
        this.setState({
            loading: true
        });
    }

    onCharInfoLoaded = (char) => {
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

    render() {
        const {char, loading, error} = this.state;
        const skeleton = !(char || loading || error) ? <Skeleton /> : null;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return(
            <>
                {skeleton}
                {spinner}
                {errorMessage}
                {content}
            </>
        );
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;

    const clazz = (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') ? 'contained' : null;

    const renderComics = () => {
        if (comics.length === 0) return 'There are no comics with this character';
        return (
            comics.map((item, i) => {
                return (
                    <li key={i}>{item.name}</li>
                );
            })
        );
    }

    return (
        <StyledCharInfo>
            <Flex margin="0 0 15px 0">
                <div className="char-img"><img className={clazz} src={thumbnail} alt={name}/></div>
                <div className="char-basics">
                    <div className="char-name">{name}</div>
                    <Button as="a" href={homepage} primary text="Homepage"/>
                    <Button as="a" href={wiki} text="Wiki"/>
                </div>
            </Flex>

            <p>{description}</p>

            <div className="char-comics">Comics:</div>

            <ul>
                {renderComics()}
            </ul>
        </StyledCharInfo>
    );
}

export default CharInfo;