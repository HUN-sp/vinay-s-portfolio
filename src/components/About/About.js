import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import ProfilImage from "./profile-img.jpg";

function About() {
    return (
        <div className="about tc">
            <Container>
                <Row className="tc">
                    <Col sm={"12"} md={"6"} xs={"12"}>
                        <Image src={ProfilImage} className="imgLogo" />
                    </Col>
                    <Col className="tc" sm={"12"} md={"6"} xs={"12"}>
                        <div className="tc animate__animated animate__zoomInUp animate__delay-2s">
                            <div className="titleAbout tc">
                                <h1>
                                    About me
                                </h1>
                            </div>

                            <div className="description f3">
                                {/**Write how are you*/}
                                As a first-year student at Scaler School of Technology,
                                I'm deeply immersed in the world of Computer Science,
                                driven by a passion for mathematics and a thirst for exploration.
                                I find joy in solving complex problems and am constantly seeking to expand my knowledge beyond the classroom.
                                With a strong foundation in both theory and practical application, I'm eager to embrace new challenges and
                                continue my journey of learning and growth in the field of technology.

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default About