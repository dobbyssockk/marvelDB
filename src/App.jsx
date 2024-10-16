import {Component} from 'react';
import styled from 'styled-components';
import Flex from './components/Flex/Flex';
import Header from './components/Header/Header';
import RandomChar from './components/RandomChar/RandomChar';
import CharList from './components/CharList/CharList';
import CharInfo from './components/CharInfo/CharInfo';
import bg from './assets/images/bg.png';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const StyledApp = styled.div`
    position: relative;
    margin: 0 auto;
    width: 1100px;
    padding: 50px 0 45px 0;
    .main {
        margin-top: 50px;
        .app-bg {
            width: 467px;
            height: 372px;
            position: absolute;
            right: -205px;
            bottom: 0;
            z-index: -1;
        }
    }
`;

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    render() {
        return (
            <StyledApp>
                <Header />
                <div className="main">
                    <ErrorBoundary>
                        <RandomChar />
                    </ErrorBoundary>
                    <Flex justify="space-between" margin="50px 0 0 0">
                        <ErrorBoundary>
                            <CharList onCharSelected={this.onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar}/>
                        </ErrorBoundary>
                    </Flex>
                    <img className="app-bg" src={bg} alt="vision"/>
                </div>
            </StyledApp>
        );
    }
}

export default App;
