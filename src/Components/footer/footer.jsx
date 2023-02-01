import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "./footer.css"
  
const Footer = () => {
  return (
    <div className="footer">
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Legal</Heading>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">TOS</FooterLink>
          </Column>
          <Column>
            <Heading>Billing</Heading>
            <FooterLink href="#">Plans</FooterLink>
            <FooterLink href="https://dash.sapphireservers.net/">Billing Panel</FooterLink>
            <FooterLink href="https://gp.sapphireservers.net/">Game Panel</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Tickets</FooterLink>
            <FooterLink href="https://discord.gg/vAnrbwgaQh">Discord</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://discord.gg/vAnrbwgaQh">
              <i className="fab fa-discord">
                <span style={{ marginLeft: "10px" }}>
                  Discord
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
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <h1 style={{ color: "White", 
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                   textAlign: "center", 
                   marginTop: "40px" }}>
        SapphireServers
      </h1>
    </Box>
    </div> 
  );
};
export default Footer;