import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../styles/index.css';
import TopSectionFullHeight from '../components/top-section-full-height';
import { Section, SectionContainer, SectionTitle, SectionSubtitle } from '../components/myStyledComponents';
import workAtHome from '../images/ill-work-at-home.svg';
import map from '../images/ill-map.svg';
import coupleTravel from '../images/ill-couple-travel.svg';
import music from '../images/ill-music.svg';
import iPhone from '../images/iphone-loop.gif';
import seo from '../images/seo-animation-loop.gif';
import videoOgv from '../images/envelope-commercial.ogv';
// import videoOgv from '../images/envelopecommercial-fullhq.ogv';
import videoMp4 from '../images/envelopecommercial-fullhq.mp4';
import videoPoster from '../images/video-poster.jpg';
import sothebys from '../images/sothebys-logo.svg';
import coldwell from '../images/coldwell-logo.svg';
import remax from '../images/remax-logo.svg';
import keller from '../images/keller-williams-logo.svg';
import Footer from '../components/footer';
import bgImage from '../images/mainBg-comp.jpg';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import AnimatedSection from '../components/AnimatedSection';

import iphoneMockup from '../images/iphone.svg';
import pen from '../images/pen.svg';
import files from '../images/files.svg';
import alphabet from '../images/alphabet.svg';
import patternPalette from '../images/pattern-palette.svg';
import TweetCard from '../components/TweetCard';
const LandingPage = () => {
	const data = useStaticQuery(
		graphql`
			query {
				main: file(relativePath: { eq: "mainBg.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`
	);

	const EvelopeFeature = styled.div`
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		margin: 2rem 0;
	`;

	const EvelopeFeatureReverse = styled.div`
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		flex-direction: row-reverse;
		margin: 2rem 0;
	`;

	const EvelopeFeatureText = styled.div`
		max-width: 300px;
		line-height: 1.5;
	`;

	const EvelopeFeatureTitle = styled.span`font-size: 1.5rem;`;

	const EvelopeFeatureImage = styled.img`
		width: 100%;
		max-width: 300px;
		height: 100%;
	`;

	const GridItem = styled.div`
		background: #333;
		color: #fff;
		flex: 1 0 auto;
		position: relative;
		margin: .5rem 0;
		width: 300px;
		border-radius: .8rem;
		max-height: 200px;
		display: inline-block;
	`;

	const RoundedBox = styled.div`
		width: 100%;
		height: 100%;
		position: relative;
		background-color: #0a2132;
		display: flex;
		border-radius: 1rem;
		align-items: center;
		justify-content: center;
	`;

	const RoundedBoxTitle = styled.div`
		color: ${(props) => props.color || `#fff`};
		width: 100%;
		height: auto;
		top: -30px;
		position: absolute;
		text-align: center;
		text-transform: capitalize;
		left: 0;
		font-weight: 600;
		letter-spacing: .5px;
	`;

	// DUPLICATE
	const Heading = styled.h2`
		font-size: 3.3rem;
		margin: 0;
		background: linear-gradient(109.6deg, rgba(116, 255, 217, 1) 11.2%, rgba(88, 200, 223, 1) 91.1%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 1.2;
	`;

	const SubHeading = styled.div`
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.5em;
		letter-spacing: 1px;
		color: #ccc;
	`;
	return (
		<React.Fragment>
			<TopSectionFullHeight />
			<Section>
				<SectionContainer>
					<SectionTitle>Why use envelope?</SectionTitle>
					<SectionSubtitle>
						We built envelope with simplicity and efficiency in mind from day one without sacrificing any
						convenience that you need to grow your real estate game.
					</SectionSubtitle>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: '100%',
							maxWidth: '900px'
						}}
					>
						<EvelopeFeature>
							<EvelopeFeatureText>
								<EvelopeFeatureTitle>Branding tailored to your needs.</EvelopeFeatureTitle>
								<br />
								<br />
								Every real estate agent requires a lot of attention in order to stand out from the rest.
								With our dedicated team of professionals you can rely on reciving a custom product that
								fits perfectly to your needs.
							</EvelopeFeatureText>
							<EvelopeFeatureImage src={workAtHome} />
						</EvelopeFeature>

						<EvelopeFeatureReverse>
							<EvelopeFeatureText>
								<EvelopeFeatureTitle>Branding focused for phones.</EvelopeFeatureTitle>
								<br />
								<br />
								In the modern age following the latest trends is key. Currently 80% of visitors come
								from mobile devices. That’s why we are here to make sure that your first apperience is
								impacable.
							</EvelopeFeatureText>
							<EvelopeFeatureImage src={map} />
						</EvelopeFeatureReverse>

						<EvelopeFeature>
							<EvelopeFeatureText>
								<EvelopeFeatureTitle>We do everything for you.</EvelopeFeatureTitle>
								<br />
								<br />
								Our job is to make your stressful and never ending days a breeze. Every bit of your
								online presence is on our backs in order for you to focus on what matters most.
							</EvelopeFeatureText>
							<EvelopeFeatureImage src={coupleTravel} />
						</EvelopeFeature>

						<EvelopeFeatureReverse>
							<EvelopeFeatureText>
								<EvelopeFeatureTitle>Extremly low fees.</EvelopeFeatureTitle>
								<br />
								<br />
								Branding of any sorts can be quite expensive but in this situation we made our service
								extremly cost effective in order for you to be able to scale faster and smarter.
							</EvelopeFeatureText>
							<EvelopeFeatureImage src={music} />
						</EvelopeFeatureReverse>
					</div>
				</SectionContainer>
			</Section>

			<Section>
				<SectionContainer style={{ flexDirection: 'row' }}>
					<div
						style={{
							width: '90%',
							maxWidth: '1280px',
							display: 'flex',
							margin: '0 auto'
						}}
					>
						<div
							style={{
								width: '100%',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start'
							}}
						>
							<SectionTitle
								style={{ textAlign: 'left', lineHeight: '1.3', maxWidth: '300px', margin: '0' }}
							>
								See your success through your customers' eyes.
							</SectionTitle>
							<SectionSubtitle style={{ textAlign: 'left', maxWidth: '400px' }}>
								Whether you're running an in-person user interview or a remote usability test, you’ll be
								able to capture and view every tap, click, comment and reaction on your prototype just
								by sharing a link.
							</SectionSubtitle>
						</div>
						<img
							src={iPhone}
							style={{
								height: '100%',
								maxHeight: '600px'
							}}
						/>
					</div>
				</SectionContainer>
			</Section>
			<Section>
				<SectionContainer style={{ flexDirection: 'row' }}>
					<div
						style={{
							width: '100%',
							maxWidth: '1280px',
							display: 'flex',
							flexDirection: 'row-reverse',
							margin: '0 auto',
							width: '90%'
						}}
					>
						<div
							style={{
								width: '100%',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-end'
							}}
						>
							<SectionTitle
								style={{ textAlign: 'right', lineHeight: '1.3', maxWidth: '300px', margin: '0' }}
							>
								Differenciate yourself with power of video.
							</SectionTitle>
							<SectionSubtitle style={{ textAlign: 'right', maxWidth: '400px' }}>
								Whether you're running an in-person user interview or a remote usability test, you’ll be
								able to capture and view every tap, click, comment and reaction on your prototype just
								by sharing a link.
							</SectionSubtitle>
						</div>
						<img
							src={seo}
							style={{
								height: '100%',
								maxHeight: '600px'
							}}
						/>
					</div>
				</SectionContainer>
			</Section>

			<AnimatedSection />

			<Section style={{ background: 'rgb(20,22,25)', color: '#fff' }}>
				<SectionContainer>
					<div
						style={{
							width: '100%',
							maxWidth: '1280px',
							display: 'flex',
							justifyContent: 'space-around',
							flexDirection: 'row',
							margin: '0 auto',
							width: '90%'
						}}
					>
						<div
							style={{
								maxWidth: '400px'
							}}
						>
							<img
								src={iphoneMockup}
								style={{
									width: '100%'
								}}
							/>
						</div>

						<div
							style={{
								margin: '0 3rem',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start'
							}}
						>
							<SubHeading>Look amazing on the device</SubHeading>
							<Heading style={{ maxWidth: '700px' }}>
								Ave automatically detects the screen size and adjust the content accordingly to provide
								full responsive and optimized sites
							</Heading>
						</div>
					</div>
				</SectionContainer>
			</Section>

			<Section style={{ backgroundColor: 'rgb(20,22,25)' }}>
				<SectionContainer>
					<div
						style={{
							display: 'flex',
							width: '90%',
							maxWidth: '1280px',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<div>
							<SectionTitle style={{ color: '#fff', textAlign: 'left', margin: '0' }}>
								The simplest way to have a professioanal property video.
							</SectionTitle>
							<SectionSubtitle style={{ color: '#fff', textAlign: 'left' }}>
								Get all the benefits of an in-wall or in-ceiling speaker system without any of the
								hassle. Just replace a few lights around your house, and start streaming crisp, clear
								audio, everywhere.
							</SectionSubtitle>
						</div>

						<div
							style={{
								overflow: '',
								marginRight: '100px',
								position: 'relative'
							}}
						>
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: '1fr 1fr',
									gridTemplateRows: '200px 200px',
									gridGap: '3.5rem 2rem',
									width: '400px',
									height: 'auto',
									transform: 'rotate(-35deg)'
								}}
							>
								<RoundedBox>
									<RoundedBoxTitle color={`#E25AA3`}>Amazing desing</RoundedBoxTitle>
									<img
										src={pen}
										style={{
											transform: 'rotate(35deg)'
										}}
									/>
								</RoundedBox>

								<RoundedBox
									style={{
										width: '80%',
										height: '80%',
										justifySelf: 'flex-start',
										alignSelf: 'flex-end'
									}}
								>
									<RoundedBoxTitle color={`#A166C5`}>Customized Logo</RoundedBoxTitle>
									<img
										src={alphabet}
										style={{
											width: '50%',
											transform: 'rotate(35deg)'
										}}
									/>
								</RoundedBox>

								<RoundedBox
									style={{
										width: '80%',
										height: '80%',
										justifySelf: 'flex-end'
									}}
								>
									<RoundedBoxTitle color={`#4352A2`}>Personalized</RoundedBoxTitle>
									<img
										src={patternPalette}
										style={{
											width: '50%',
											transform: 'rotate(35deg)'
										}}
									/>
								</RoundedBox>
								<RoundedBox>
									<RoundedBoxTitle color={`#736EDE`}>Well Organised</RoundedBoxTitle>
									<img
										src={files}
										style={{
											transform: 'rotate(35deg)'
										}}
									/>
								</RoundedBox>
							</div>
						</div>
					</div>
				</SectionContainer>
			</Section>

			<Section style={{ background: 'rgb(20,22,25)', color: '#fff' }}>
				<SectionContainer>
					<SectionTitle style={{ color: '#fff' }}>Real Estate Agents meet video</SectionTitle>
					<SectionSubtitle style={{ color: '#fff' }}>
						Get video, voice and analytical feedback on designs and prototypes in just few clicks. Now
						available in Marvel Enterprise
					</SectionSubtitle>

					<div
						style={{
							width: '90%',
							margin: '0 auto',
							maxWidth: '700px',
							borderRadius: '.8rem',
							height: '400px'
						}}
					>
						<video
							style={{
								width: '100%',
								height: '100%'
							}}
							controls
							poster={videoPoster}
							preload="metadata"
						>
							<source src={videoOgv} type="video/ogg" />
							<source src={videoMp4} type="video/mp4" />
							{/* <source src="movie.ogg" type="video/ogg" /> */}
							{/* Your browser does not support the video tag. */}
						</video>
					</div>
				</SectionContainer>
			</Section>
			<Section style={{ backgroundColor: 'rgb(20,22,25)' }}>
				<SectionContainer>
					<div
						style={{
							display: 'flex',
							width: '90%',
							maxWidth: '1280px',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<div>
							<SectionTitle style={{ color: '#fff', textAlign: 'left', margin: '0' }}>
								We believe in the power of community
							</SectionTitle>
							<SectionSubtitle style={{ color: '#fff', textAlign: 'left' }}>
								Our goal is to create a product and service that you’re satisfied with and use it every
								day. This is why we’re constantly working on our services to make it better every day
								and really listen to what our users has to say.
							</SectionSubtitle>
						</div>

						<div style={{ position: 'relative' }}>
							<div
								style={{
									width: '100%',
									height: '15px',
									background: 'red',
									position: 'absolute',
									top: '0',
									zIndex: '2',
									background: 'linear-gradient(rgb(20,22,25),rgba(0,0,0,0))'
								}}
							/>
							<div
								style={{
									padding: '1rem 0',
									margin: '0 auto',
									width: '100%',
									maxWidth: '800px',
									height: '700px',
									overflowY: 'scroll',
									display: 'grid',
									gridTemplateColumns: '1fr 1fr',
									justifyContent: 'flex-start',
									alignItems: 'flex-start',
									gridGap: '1rem',
									position: 'relative'
								}}
							>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<TweetCard
										tweet={`ShowTrackr is a real gem! I started using it a couple months ago and it completely changed the way how I watch TV shows. I can only recommend it!`}
									/>
									<GridItem style={{ height: '100px' }} />
									<GridItem style={{ height: '120px' }} />
									<GridItem style={{ height: '150px' }} />
								</div>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<GridItem style={{ height: '90px' }} />
									<GridItem style={{ height: '150px' }} />
									<GridItem style={{ height: '150px' }} />
									<GridItem style={{ height: '150px' }} />
									<GridItem style={{ height: '100px' }} />
									<GridItem style={{ height: '120px' }} />
									<GridItem style={{ height: '150px' }} />
								</div>
							</div>
							<div
								style={{
									width: '100%',
									height: '15px',
									background: 'red',
									position: 'absolute',
									bottom: '0',
									zIndex: '2',
									background: 'linear-gradient(rgba(0,0,0,0),rgb(20,22,25))'
								}}
							/>
						</div>
					</div>
				</SectionContainer>
			</Section>
			<Section style={{ background: 'rgb(20,22,25)', color: '#fff' }}>
				<SectionContainer>
					<SectionTitle style={{ color: '#fff' }}>Now Let us upscale your business !</SectionTitle>
					<SectionSubtitle>
						If you can use common elements to create the required design and save valuable time for more
						important tasks, then why not do it?
					</SectionSubtitle>
					<a
						href="mailto:"
						style={{
							backgroundColor: '#4A35FF',
							borderRadius: '10rem',
							padding: '1.5rem 1rem',
							width: '100%',
							maxWidth: '200px',
							textAlign: 'center',
							fontSize: '1rem',
							fontWeight: '600',
							letterSpacing: '.5px',
							margin: '2rem 0',
							color: '#fff',
							textDecoration: 'none',
							textTransform:'uppercase'
						}}
					>
						Contact us
					</a>

					<span
						style={{
							color: '#adadad',
							fontSize: '1.4rem',
							margin: '4rem 0'
						}}
					>
						Evelope is used by 35+ real esate agents and loan officers
					</span>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							flexWrap:'wrap',
							width: '100%',
							maxWidth: '800px'
						}}
					>
						<img src={sothebys} style={{margin:'1rem'}} />
						<img src={coldwell} style={{margin:'1rem'}}/>
						<img src={remax} style={{margin:'1rem'}}/>
						<img src={keller} style={{margin:'1rem'}}/>
					</div>
				</SectionContainer>
			</Section>
			<Footer />
			{/* <div style={{ height: '100vh' }} /> */}
		</React.Fragment>
	);
};

export default LandingPage;
