class Friend extends React.Component {
    render() {
        const { name, hobbies } = this.props; // destructuring to grab individual props
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)} 
                </ul>
            </div>
        );
    }
}

// use .map to loop through the array and perform actions.
// In this case, create an li with each hobby