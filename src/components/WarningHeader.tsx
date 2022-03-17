import React from "react";

import { Alert, Card, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';


export default function WarningHeader() {
    return (
        // Marging m-3: https://getbootstrap.com/docs/5.1/utilities/spacing/#margin-and-padding
        <Row  className="m-3">
            <Col>
                <Alert variant="warning">
                    
                    <Alert.Heading>
                        <Icon.ExclamationTriangleFill className="flex-shrink-0 me-2" />
                        Hey, nice to see you
                    </Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                </Alert>
            </Col>
        </Row>
    )
}
