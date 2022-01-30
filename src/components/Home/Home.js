import React, { Component } from "react";
import classes from "./Home.css";
import Robot from "./../../assets/img/robot.jpg";
import { NavLink } from "react-router-dom";
// import Footer from "../Footer/Footer"
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  } from "../Footer/FooterStyles";
  

export default class Home extends Component {
  render() {
    return (
      <div> 
      <div className={classes.Container}>
        <img src={Robot} alt="home" className={classes.Img} />
        <div className={classes.Overlay} />
        <div className={classes.Headding}>
          <h1 className={classes.Title}>
            Thoughtful standards for modern Robotics
          </h1>
          <NavLink to ="/shop">
            <button className={classes.Btn}>shop now</button>
          </NavLink>
        </div>
 
       </div>
       <div>
      
       </div>
       <div>
       <Box>
	<h1 style={{ color: "#279896",
				textAlign: "center",
				marginTop: "-50px" }}>
	ElectroTech:  A new destination for Robotics.
	</h1>
	<Container>
		<Row>
		<Column>
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
			<FooterLink href="#">
			<i className="fab fa-linkdin-l">
				<span style={{ marginLeft: "10px" }}>
			Linkdin
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
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink> */}
		</Column>
		</Row>
	</Container>
	</Box>
        </div>
      </div>
      
       
            
    );
  }
}
