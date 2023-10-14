
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Footer = () => {
    return(
        <footer>
            <Container id="footer">
                <Row>
                    <Col className="col menu" xs="6" md="12">
                        <p className="text-right">
                            {/* <BrowserRouter>
                                <Link to="/sitemap/">Sitemap</Link> 
                                <Link to="/copyright/">copyright</Link>
                                <Route />
                            </BrowserRouter> */}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer> 
    );
};

export default Footer;