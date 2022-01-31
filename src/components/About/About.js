import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  } from "../Footer/FooterStyles";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7" style={{marginLeft:"160px"}} >
          <h1 class="font-weight-light" style={{textAlign:"center" , marginLeft:"-211px"}}>About Us </h1>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://mytechdecisions.com/wp-content/uploads/2018/10/artificial_intelligence_robot_thinking.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <br/>
          
            <p style={{textAlign:"center" ,marginLeft:"20px", marginRight:"20px"}}>
            We at ElectroTech. believe in a 360-degree approach for our clients to provide a hassle-free platform for various products and center. We provide the widest range of robotics products on our portal/Additional to this we believe in full client satisfaction with respect to post-sales services. we also have a dedicated team to assist in all sort of technical projects either it is industrial or academic.
            The goal of electrotech India is to develop efficient and cost effective electronics solutions for robotic applications that may be used in industrial application, hobby applications, educational purposes and use in various other research and development effort
            </p>
            <br/>
            <p  style={{textAlign:"center" ,marginLeft:"20px", marginRight:"20px"}}>
            The obvious question is What is electrotech? But an even more important question is why does electrotech exist? Why did we start this company?
            The goal of electrotech India is to develop efficient and cost effective electronics solutions for robotic applications that may be used in industrial application, hobby applications, educational purposes and use in various other research and development efforts.
            It is a one stop shop for all your Robotics, its allied fields  and do it your self learning kits and products. We try at providing a tussle free and pleasant shopping experience to all our users. We provide the widest range of robotics products on our portal. We are making a serious effort to bring the supremacy of education and knowledge to our buyers with a collection of latest and technically manipulative products. Most of our products are very unconventional and custom designed keeping our client base in mind. We have one of the best integrated systems for buyers and for business oriented people or community as well in our affiliate program. </p>
            <br/>
            <p  style={{textAlign:"center" ,marginLeft:"20px", marginRight:"20px"}}>
            At ElectroTech, we only believe in 'Customer Satisfaction'. All the services that we provide are redirected towards it. We are the biggest e-commerce platform of educational robotics modules and tools. We have a huge array of technicians and engineers who dedicatedly work 24X7 to avail the system at our buyer's disposal. We work on a very interactive system which enables our customers to be updated profoundly throughout the life-cycle of their order. Our products are widely known, appreciated and demanded for its long-lasting nature, reliability, ease of operation and robust construction. In addition, we also have availability of separate stock for urgent needs and requirements of our esteem customers.
            </p>
            <br/>
            <br/>
          </div>
        </div>
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

export default About;
