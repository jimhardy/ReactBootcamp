import React, { Component } from 'react';
import './DogList.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

class DogList extends Component {
    state = {}
    render() {
        return (
            <Row className='Doglist'>
                {this.props.details.map(dog =>
                    (
                        <Col className='Doglist-dog'>
                            <Link to={`/dog/${dog.name}`}>
                                <img src={dog.src} alt={dog.name} />
                                <h1>{dog.name}</h1>
                            </Link>
                        </Col>
                    )
                )}
            </Row>
        );
    }
}

export default DogList;