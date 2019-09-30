import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './DogDetails.css';
import { Col, Row, Card, Container } from 'reactstrap';


class DogDetails extends Component {
    state = {}
    render() {
        const dog = this.props.details[0];
        if (!dog) this.props.history.goBack();

        return (
            <Container>
                <Card className='DogDetails'>
                    <Col>
                        <Row className='DogDetails-header'>
                            <h1 className='card-title'>{dog.name}</h1>
                            <h3 className='card-subtitle text-muted' >Age: {dog.age}</h3>
                        </Row>
                        <Col className='DogDetails-content'>
                            <img src={dog.src} alt={dog.name} />
                            <Col className='DogDetails-facts'>
                                {dog.facts.map((fact, idx) =>
                                    <h3 key={idx}>{fact}</h3>
                                )}
                            </Col>
                        </Col>
                    </Col>
                    <Link className='btn btn-info' to='/'>Go Back</Link>
                </Card >
            </Container>
        );
    }
}

export default withRouter(DogDetails);