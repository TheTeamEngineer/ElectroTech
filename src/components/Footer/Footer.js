import React from "react";

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#279896",
				textAlign: "center",
				marginTop: "-50px" }}>
	ElectroTech:  A new destination for Robotics.
	</h1>
	<Container>
		<Row>
		<Column style={{margin:"0", paddingRight:"0"}}>
			<Heading>About Us</Heading>
			<FooterLink href="#">Shop</FooterLink>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Robotics Parts</FooterLink>
			<FooterLink href="#">Electronics Parts</FooterLink>
			<FooterLink href="#">Hardware</FooterLink>
			<FooterLink href="#">Drone</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Haryana</FooterLink>
			<FooterLink href="#">Punjab</FooterLink>
			<FooterLink href="#">Delhi</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.linkedin.com/company/electrotech0/">
			<i className="fab fa-linkdin-l">
				<span style={{ marginLeft: "10px" }}>
			LinkedIn
				</span>
			</i>
			</FooterLink>
			{/* <FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink> */}
			<FooterLink href="https://www.youtube.com/channel/UCTbq4H_OpblOcOiR1TqxJSQ">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
