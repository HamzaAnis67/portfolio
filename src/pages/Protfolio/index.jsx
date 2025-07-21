import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./portfolio.css";
import { useState } from "react";
export const Protfolio = () => {
	return (
		<Container>
			<div className="main_heading">
				<h1>My Portfolio</h1>

				<div className="portfolioimages">
					<Row className="g-5">
						<Col sx={12} sm={6} md={4}>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									variant="top"
									src="https://res.cloudinary.com/dnqplq5hb/image/upload/v1726320593/euvqteypqzvmm8tryolo.png"
									height={"375rem"}
								/>
								<Card.Body>
									<a href="" style={{ textDecoration: "none", color: "black" }}>
										<Card.Title>Ecommerce Website</Card.Title>
									</a>
								</Card.Body>
							</Card>
						</Col>
						<Col sx={12} sm={6} md={4}>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									variant="top"
									src="http://res.cloudinary.com/dnqplq5hb/image/upload/v1726320733/bub2zzuomzjbmc78ge0x.jpg"
									height={"375rem"}
								/>
								<Card.Body>
									<a
										href="https://portfolio-six-nu-85.vercel.app/"
										style={{ textDecoration: "none", color: "black" }}>
										<Card.Title>Portfolio Website</Card.Title>
									</a>
								</Card.Body>
							</Card>
						</Col>
						<Col sx={12} sm={6} md={4}>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									variant="top"
									src="http://res.cloudinary.com/dnqplq5hb/image/upload/v1753113649/coactbpokkdt3omdpv6i.png"
									height={"375rem"}
								/>
								<Card.Body>
									<a
										href="https://homepage-design-delta.vercel.app/index.html"
										style={{ textDecoration: "none", color: "black" }}>
										<Card.Title>Internship Project</Card.Title>
									</a>
								</Card.Body>
							</Card>
						</Col>
						<Col sx={12} sm={6} md={4}>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									variant="top"
									src="http://res.cloudinary.com/dnqplq5hb/image/upload/v1753128496/acwseomzhddlrr3nyuez.png"
									height={"375rem"}
								/>
								<Card.Body>
									<a
										href="https://portfolio-six-nu-85.vercel.app/"
										style={{ textDecoration: "none", color: "black" }}>
										<Card.Title>University Project</Card.Title>
									</a>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		</Container>
	);
};
export default Protfolio;
