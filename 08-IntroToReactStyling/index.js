
class App extends React.Component {
    render() {
        return(
            <div>
                <h1>BEST SLOT MACHINE EVER</h1>
                <Machine 
                s1={getSlot()}
                s2={getSlot()}
                s3={getSlot()}
                />
            </div>
        );
    }
}

const slotOptions = ['\u{2708}' , '\u{2693}' , '\u{1F951}' , '\u{1F388}'];

function getSlot() {
    return slotOptions[Math.floor(Math.random() * slotOptions.length)];
}


ReactDOM.render(<App /> , document.getElementById('root'));