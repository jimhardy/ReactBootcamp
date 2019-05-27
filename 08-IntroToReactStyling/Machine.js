class Machine extends React.Component {
    render() {
        const {s1 , s2 , s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const styles = {fontSize: '50px', backgroundColor: 'purple'}
        return ( 
            // className is used instead of class in JSX
            <div className="Machine">
                <p style={styles}>
                    {s1}  {s2}  {s3}
                </p>
                <p className={winner ? 'Machine-win' : 'Machine-lose'}>
                {winner ? `You're a winner` : `Better luck next time`}
                </p>
            </div>
        );
    }
}
