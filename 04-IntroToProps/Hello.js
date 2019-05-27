class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.bangs)
        return (
            <div>
                <p>Hello, {this.props.to}. From {this.props.from}{bangs}</p>
                <img src={this.props.img} />
            </div>
        );
    }
}