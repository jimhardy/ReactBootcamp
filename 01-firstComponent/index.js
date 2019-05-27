
// Class based component //
// more traditional - requires render() method
class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
            </div>
        );
    }
}

// Function based component // 
// Used to be used as "dumb" components, but now have additional functionality
// These are now the "new" way to make components
function Hello() {
    return (
        <div>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
        </div>
    );
}

ReactDOM.render(<Hello />, document.getElementById('root'));
