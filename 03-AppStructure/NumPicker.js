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