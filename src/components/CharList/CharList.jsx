import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";

const StyledCharList = styled(Flex)`
    width: 650px;
    ul {
        display: flex;
        flex-wrap: wrap;
        row-gap: 30px;
        column-gap: 25px;
        li {
            width: 200px;
            min-height: 318px;
            background-color: ${({theme}) => theme.colors.background};
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
            .char-img {
                width: 200px;
                height: 200px;
            }
            .char-name {
                font-size: 22px;
                color: ${({theme}) => theme.colors.light};
                font-weight: bold;
                text-transform: uppercase;
                padding: 15px;
            }
        }
        li:hover {
            cursor: pointer;
            transform: translateY(-8px);
        }
        .selected {
            box-shadow: 0 5px 20px rgba(159, 0, 19);
            transform: translateY(-8px);
        }
    }
    button {
        align-self: center;
        margin-top: 45px;
    }
`;

class CharList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charList: [],
            loading: true,
            error: false,
            newItemLoading: false,
            offset: 210,
            charEnded: false,
            selectedChar: null
        };
        this.charRefs = {};
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        });
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) ended = true;

        this.setState(({charList, offset}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }));
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    onCharSelected = (id) => {
        this.props.onCharSelected(id);
        this.setState({
            selectedChar: id
        }, () => {
            this.charRefs[id].current.focus();
        });
    }

    handleKeyDown = (event, id) => {
        if (event.key === 'Enter' || event.key === ' ') {
            this.onCharSelected(id);
        }
    }

    renderItems(arr) {
        const {selectedChar} = this.state;
        const items = arr.map(item => {
            const clazz = (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' || item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif') ? 'unset' : null;

            if (!this.charRefs[item.id]) {
                this.charRefs[item.id] = React.createRef();
            }

            return (
                <li
                    key={item.id}
                    tabIndex="0"
                    ref={this.charRefs[item.id]}
                    className={(selectedChar === item.id) ? "selected" : null}
                    onClick={() => this.onCharSelected(item.id)}
                    onKeyDown={(event) => this.handleKeyDown(event, item.id)}
                >
                    <div className="char-img"><img className={clazz} src={item.thumbnail} alt={item.name}/></div>
                    <div className="char-name">{item.name}</div>
                </li>
            );
        });

        return (
            <ul>
                {items}
            </ul>
        )
    }

    render() {
        const {charList, loading, error, newItemLoading, offset, charEnded} = this.state;
        const items = this.renderItems(charList);
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;

        return (
            <StyledCharList direction="column">
                {errorMessage}
                {spinner}
                {content}
                <Button
                    primary
                    size="large"
                    text="Load more"
                    style={{'display': charEnded ? 'none' : 'block'}}
                    disabled={newItemLoading}
                    onClick={() => this.onRequest(offset)}/>
            </StyledCharList>
        );
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;