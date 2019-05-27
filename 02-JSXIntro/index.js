// class JSXDemo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Current Mood: {getMood()} </h1>
//             </div>
//         );
//     }
// }

// function getMood() {
//     const moods = ['Happy' , 'Sad' , 'Amused' , 'Bored' , 'Sleepy'];
//     return moods[Math.floor(Math.random() * moods.length)];
// }

// ReactDOM.render(<JSXDemo />, document.getElementById('root'));

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg = <h1>WOOPWOOP</h1>;
        } else {
            msg = <p>bahhhhh</p>;
        }
        return (
            <div>
                <h1>Your number is {num} </h1>
                {msg}
            </div>
        );
    }
}

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
