import React from 'react';
import styled from 'styled-components';

import logo from '../images/envelope-logo.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import facebook from '../images/facebook-box.svg';
const Footer = () => {
	const FooterContainer = styled.footer`
		background-color: rgb(20, 22, 25);
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
	`;

	const SocialLinks = styled.div`
		display: flex;
		justify-content: space-evenly;
		width: 300px;
		margin: 0 auto;
	`;
	return (
		<FooterContainer>
			<img
				style={{
					height: '2rem'
				}}
				src={logo}
			/>

			<hr
				style={{
					background: 'rgba(255,255,255,0.15)',
					width: '100%',
					height: '1px',
					border: 'none',
					margin: '2rem 0 0 0'
				}}
			/>

			<p
				style={{
					color: '#fff',
					background: 'rgb(20, 22, 25)',
					textAlign: 'center',
					width: '200px',
					margin: '0 auto',
					padding: '1rem',
					marginTop: '-25px'
				}}
			>
				2019 ENVELOPE
			</p>

			<p style={{color:"#fff",textAlign:'center',width:'90%',maxWidth:'700px',margin:'2rem auto',lineHeight:'1.5'}}>
				All materials and brands are property of their respective owners.<br />
				All company, product and service names used in this website are for identification purposes only.
			</p>
			<SocialLinks>
				<img src={facebook} />
				<img src={instagram} />
				<img src={twitter} />
				<img src={youtube} />
			</SocialLinks>
		</FooterContainer>
	);
};

export default Footer;
