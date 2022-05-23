import React from 'react'
import styles from './style.css'
import Wave from '../../assets/img/wave.png'
import {
  Container,
  Row,
  Column,
  FooterLink,
  Heading
} from './FooterStyles'
const Footer = () => {
  return (
    <div>
      <div className={styles.contactUsBox}>
        <img className={styles.wave} src={Wave} alt='wave-img'></img>
        <div className={styles.iconContent}>
          <div style={{ marginTop: '11%', marginRight: '22%' }}>
            <FooterLink href='https://www.youtube.com/channel/UCTbq4H_OpblOcOiR1TqxJSQ'>
              <div className={styles.icons}>
                <img
                  className={styles.icon}
                  src='https://img.icons8.com/color/48/000000/youtube-play.png'
                  alt='youtube'
                />
              </div>
            </FooterLink>
          </div>
          <div style={{ marginTop: '5%' }}>
            <FooterLink href='https://www.linkedin.com/company/electrotech0/'>
              <div className={styles.icons}>
                <img
                  className={styles.icon}
                  src='https://img.icons8.com/fluency/48/000000/linkedin.png'
                  alt='linkedin'
                />
              </div>
            </FooterLink>
          </div>
        </div>
        <div className={styles.headText}>
          <Container>
            <Row>
              <Column>
                <Heading>About Us</Heading>
				
                <FooterLink href='#'>Shop</FooterLink>
                <FooterLink href='#'>About Us</FooterLink>
                <FooterLink href='#'>Testimonials</FooterLink>
              </Column>
              <Column>
                <Heading>Services</Heading>
                <FooterLink href='#'>Robotics Parts</FooterLink>
                <FooterLink href='#'>Electronics Parts</FooterLink>
                <FooterLink href='#'>Hardware</FooterLink>
                <FooterLink href='#'>Drone</FooterLink>
              </Column>
            </Row>
          </Container>
        </div>
        <div className={styles.middleText}>
          <Container>
            <div className={styles.middleText_inner}>
              <div>
                <span>ElectroTech: A new destination for Robotics.</span>
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.connectUsContent}>
          
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href='#'>Uttar Pradesh</FooterLink>
              <FooterLink href='#'>Haryana</FooterLink>
              <FooterLink href='#'>Punjab</FooterLink>
              <FooterLink href='#'>Delhi</FooterLink>
            </Column>
          
        </div>
      </div>
    </div>
  )
}
export default Footer
