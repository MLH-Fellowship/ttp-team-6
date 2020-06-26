import React from "react";
import {NavbarContainer} from "../containers";
import {Card, CardColumns, Button, Container} from 'react-bootstrap';

const ProjectPageView = () => {
    return (
        <>
            <NavbarContainer/>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="proj-center">Projects</h1>

            {/* "Container" is used to center the "CardColumns" */}
            <Container>
                {/* "CardColumns" groups cards into columns */}
                <CardColumns>
                    {/* First card */}
                    <Card style={{ width: '18rem' }}>
                    {/* The line below displays an image in the card, to change it, simple change the link in "src" */}
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        {/* "variant" determines what color the button will have courtesy of React Bootstrap, checkout examples here: https://react-bootstrap.netlify.app/components/buttons/#buttons */}
                        <Button variant="primary" href="#">Checkout the project</Button>
                    </Card.Body>
                    </Card>

                    {/* Second card */}
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" href="#">Checkout the project</Button>
                    </Card.Body>
                    </Card>

                    {/* Third card */}
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" href="#">Checkout the project</Button>
                    </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            
            <h2>Second Column</h2>

            <Container>
                {/* This "CardColumns" will show up under the first one */}
                <CardColumns>
                    {/* First card */}
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" href="#">Checkout the project</Button>
                    </Card.Body>
                    </Card>

                    {/* Second card */}
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" href="#">Checkout the project</Button>
                    </Card.Body>
                    </Card>
                    
                    {/* Third card */}
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" href="#">Checkout the project</Button>
                    </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
        </>
    );
};

export default ProjectPageView;