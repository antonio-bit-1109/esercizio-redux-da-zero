import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/functions/firstFetch";
import { fetchData2 } from "../redux/functions/secondFetch";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Spinner } from "react-bootstrap";

const MainComponent = () => {
    /* dispatch per fare il setState dello stato */
    const dispatch = useDispatch();

    const datoPrimaFetch = useSelector((state) => state.datoPrimaFetch.dataPrimaFetch);
    console.log("datoPrimaFetch", datoPrimaFetch);

    const datoSecondaFetch = useSelector((state) => state.secondFetch.dataSecondoFetch);
    console.log("datoSecondaFetch", datoSecondaFetch);

    /* valore boolean che quanto faccio la get dalla fetch se la fetch va a buon fine diventa false */

    const booleanValue = useSelector((state) => state.datoPrimaFetch.genericBoolean);

    useEffect(() => {
        dispatch(fetchData("amsterdam"));
        dispatch(fetchData2("rome"));
    }, []);

    return (
        <div>
            <div className=" d-flex justify-content-center">
                {booleanValue && <Spinner className="display-1" variant="warning" />}
            </div>

            {datoPrimaFetch && (
                <Container>
                    <Row>
                        {datoPrimaFetch.photos.slice(0, 9).map((singleObj) => (
                            <Col sm={12} md={8} lg={6} xl={6} xxl={6} key={singleObj.id}>
                                <Card>
                                    <Card.Img src={singleObj.src.original} alt={`Photo ${singleObj.height}`} />
                                    <Card.Body>
                                        <Card.Title>{singleObj.alt}</Card.Title>

                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default MainComponent;
