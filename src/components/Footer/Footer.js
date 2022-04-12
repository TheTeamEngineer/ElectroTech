import React from "react";

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import {FaYoutube,FaLinkedin} from 'react-icons/fa'
const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#12a4d9",
				textAlign: "center",
				marginTop: "30px" }}>
	ElectroTech:  A new destination for Robotics.
	</h1>
	<div style={{ background:"#12a4d9",
    height: "3px",
    width: "calc(100%)",
    marginTop: "30px"}}></div>
	<Container>"
		<Row >
		<Column >
			<Heading>About Us</Heading>
			<FooterLink href="#">Shop</FooterLink>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column  >
			<Heading>Services</Heading>
			<FooterLink href="#">Robotics Parts</FooterLink>
			<FooterLink href="#">Electronics Parts</FooterLink>
			<FooterLink href="#">Hardware</FooterLink>
			<FooterLink href="#">Drone</FooterLink>
		</Column>
		<Column  >
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Haryana</FooterLink>
			<FooterLink href="#">Punjab</FooterLink>
			<FooterLink href="#">Delhi</FooterLink>
		</Column>
		<Column  >
			<Heading>Social Media</Heading>
			<div className="social-links">
			<FooterLink href="https://www.linkedin.com/company/electrotech0/">
			<i >
				<span style={{ marginLeft: "10px" }}>
				<FaLinkedin/> LinkedIn
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
			<i >
				<span style={{ marginLeft: "10px"}}>
				<FaYoutube/> Youtube
				</span>
			</i>

			</FooterLink>
			</div>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
