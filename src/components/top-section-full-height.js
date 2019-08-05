import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/index.css';
import Img from 'gatsby-image';
import { PageTitle, PageSubTitle } from './myStyledComponents';
import Header from './header';
// import bgImage from '../images/mainBg-compressed.jpg';
import bgImage from '../images/mainBg-comp.jpg';

const TopSectionFullHeight = () => {
	const TopSectionContainer = styled.div`
		height: 100vh;
		width: 100%;
		position: relative;
		min-height: 500px;
	`;

	// const data = useStaticQuery(
	// 	graphql`
	// 		query {
	// 			main: file(relativePath: { eq: "mainBg.jpg" }) {
	// 				childImageSharp {
	// 					fluid(maxWidth: 1800, quality: 100) {
	// 						...GatsbyImageSharpFluid_noBase64
	// 					}
	// 				}
	// 			}
	// 		}
	// 	`
	// );

	return (
		<React.Fragment>
			<TopSectionContainer>
				<Header />
				{/* <Img
					fluid={data.main.childImageSharp.fluid}
					imgStyle={{ objectPosition: 'center center', objectFit: 'cover' }}
					style={{ height: '100%', zIndex: '-2', position: 'absolute', width: '100%', top: '0' }}
				/> */}
				<img src={bgImage} style={{
					height: '100%', zIndex: '-2', position: 'absolute', width: '100%', top: '0',objectPosition: 'center center', objectFit: 'cover' 
				}}>

				</img>
				<div
					style={{
						height: '100vh',
						width: '100%',
						backgroundColor: 'rgba(255,255,255,.6)',
						position: 'absolute',
						top: '0',
						zIndex: '-1'
					}}
				/>

				<div
					style={{
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						width: '90%',
						maxWidth: '650px',
						height: '100%'
					}}
				>
					<PageTitle>
						What if your marketing felt more like a <b>conversation</b> ?
					</PageTitle>
					<PageSubTitle>
						We at envelope are here to help you grow your online presence with video and web development in
						order to actually receive more leads.{' '}
					</PageSubTitle>
				</div>
			</TopSectionContainer>
		</React.Fragment>
	);
};

export default TopSectionFullHeight;
