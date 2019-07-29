import React, { Component } from 'react';
import Dice from './Dice';
import ScoreTable from './ScoreTable';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice: Array.from({ length: NUM_DICE }).map(d =>
                Math.ceil(Math.random() * 6)
            ),
            locked: Array(NUM_DICE).fill(false),
            rollsLeft: NUM_ROLLS,
            scores: {
                ones: undefined,
                twos: undefined,
                threes: undefined,
                fours: undefined,
                fives: undefined,
                sixes: undefined,
                threeOfKind: undefined,
                fourOfKind: undefined,
                fullHouse: undefined,
                smallStraight: undefined,
                largeStraight: undefined,
                yahtzee: undefined,
                chance: undefined,
            },
            rolling: false,
            totalScore: 0,
            scoreArr: [],
        };
        this.roll = this.roll.bind(this);
        this.doScore = this.doScore.bind(this);
        this.toggleLocked = this.toggleLocked.bind(this);
    }

    componentDidMount() {
        this.roll();
    }

    roll(evt) {
        // roll dice whose indexes are in reroll
        this.setState({ rolling: true });
        setTimeout(() => {
            this.setState(st => ({
                dice: st.dice.map((d, i) =>
                    st.locked[i] ? d : Math.ceil(Math.random() * 6)
                ),
                locked:
                    st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
                rollsLeft: st.rollsLeft - 1,
                rolling: false,
            }));
        }, 500);
    }

    toggleLocked(idx) {
        // toggle whether idx is in locked or not
        if (this.state.rollsLeft > 0 && !this.state.rolling) {
            this.setState(st => ({
                locked: [
                    ...st.locked.slice(0, idx),
                    !st.locked[idx],
                    ...st.locked.slice(idx + 1),
                ],
            }));
        }
    }

    doScore(rulename, ruleFn) {
        // evaluate this ruleFn with the dice and score this rulename
        // if (this.state.scores[rulename] === undefined) {
        this.setState(st => ({
            scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
            rollsLeft: NUM_ROLLS,
            locked: Array(NUM_DICE).fill(false),
            totalScore: st.totalScore + ruleFn(this.state.dice),
            scoreArr: [...st.scoreArr, rulename],
        }));
        this.roll();
        // }
    }

    reset = () => {
        this.setState(st => ({
            rollsLeft: NUM_ROLLS,
            locked: Array(NUM_DICE).fill(false),
            scores: {
                ones: undefined,
                twos: undefined,
                threes: undefined,
                fours: undefined,
                fives: undefined,
                sixes: undefined,
                threeOfKind: undefined,
                fourOfKind: undefined,
                fullHouse: undefined,
                smallStraight: undefined,
                largeStraight: undefined,
                yahtzee: undefined,
                chance: undefined,
            },
            totalScore: 0,
            scoreArr: [],
        }));
        this.roll();
    };

    displayRollInfo = () => {
        const messages = [
            '0 Rolls Left',
            '1 Roll Left',
            '2 Rolls Left',
            'Starting Round',
        ];
        return messages[this.state.rollsLeft];
    };

    render() {
        const {
            dice,
            locked,
            rollsLeft,
            rolling,
            scores,
            scoreArr,
            totalScore,
        } = this.state;
        return (
            <div className="Game">
                <header className="Game-header">
                    <h1 className="App-title">Yahtzee!</h1>
                    <h3 className="App-score">Total Score: {totalScore}</h3>
                    <section className="Game-dice-section">
                        <Dice
                            dice={dice}
                            locked={locked}
                            handleClick={this.toggleLocked}
                            rolling={rolling}
                            disabled={rollsLeft === 0}
                        />
                        <div>
                            <div className="Game-button-wrapper">
                                <button
                                    className="Game-reroll"
                                    disabled={
                                        locked.every(x => x) ||
                                        rollsLeft === 0 ||
                                        rolling
                                    }
                                    onClick={
                                        scoreArr.length >= 13
                                            ? this.reset
                                            : this.roll
                                    }
                                >
                                    {scoreArr.length >= 13
                                        ? 'Play Again?'
                                        : `${this.displayRollInfo()}`}
                                </button>
                            </div>
                            {scoreArr.length < 13 ? (
                                <button
                                    onClick={this.reset}
                                    className="Game-reroll"
                                    id="reset"
                                >
                                    Reset Game
                                </button>
                            ) : null}
                        </div>
                    </section>
                </header>
                <ScoreTable doScore={this.doScore} scores={scores} />
            </div>
        );
    }
}

export default Game;
