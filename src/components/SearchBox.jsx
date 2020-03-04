import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const SearchWidget = props => {

    return (
        <Form className="mt-3" onSubmit={props.handlerOnSubmit}>
            <Container>
                <Form.Group>
                  <Row>
                      <Col xs="10">
                            <Form.Control 
                                size="lg" 
                                type="text" 
                                placeholder="Buscar locación" 
                                onChange={props.handlerOnChange}
                                value={props.form.location}
                                name="location"
                                disabled={props.loading}
                            />

                      </Col>
                      <Col xs="2">
                          
                          <Button variant="primary" type="submit" size="lg" disabled={props.loading} >
                            {props.loading ? 'Buscando ..' : 'Buscar'}
                          </Button>
                      </Col>
                    </Row>
                </Form.Group>            
            </Container>

        </Form>
    );
}

export default SearchWidget;