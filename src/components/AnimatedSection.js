import React, { useEffect } from 'react';
import styled from 'styled-components';
import {SectionContainer} from '../components/myStyledComponents'
import one from '../images/one.jpg';
import Particles from 'react-particles-js';

const AnimatedSection = () => {
	useEffect(() => {
		if (typeof window !== `undefined`) {
			window.onscroll = () => {
				let sectionOffset = document.getElementById('important').offsetTop;
				let s = window.pageYOffset;
				let section = document.getElementById('important');
				let figureWidth = section.children[0].getBoundingClientRect().width;
				if (sectionOffset < s && s < sectionOffset + section.clientHeight) {
					let num = s - sectionOffset;
					let percentage = num / 250;
					const figure = document.querySelector('figure');
					figure.style.setProperty('--my-val', percentage <= 1 ? percentage : 1);
				}
			};
		}
	}, []);

	const Recording = styled.div`
		display: grid;
		font-size: 1rem;
		grid-template-columns: .5fr 1fr;
		grid-column-gap: 1rem;
		align-items: center;
		margin: 1rem 0;
	`;

	const SubHeading = styled.div`
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.5em;
		letter-spacing: 1px;
		color: #ccc;
	`;
	const Heading = styled.h2`
		font-size: 2rem;
		margin: 0;
		background: linear-gradient(109.6deg, rgba(116, 255, 217, 1) 11.2%, rgba(88, 200, 223, 1) 91.1%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 1.2;
		@media (min-width: 768px){
font-size: 3.3rem;
		}
	`;

	return (
		<section
			id="important"
			style={{
				height: '250vh',
				width: '100%',
				position: 'relative'
			}}
		>
			<SectionContainer style={{
				height:'inherit'
			}}>

			<figure>
				{/* <img src={bgImage} /> */}
				<div style={{ width: '100%', height: '100vh', background: '#141618', position: 'relative' }}>
					<Particles
						className="canvas-wrapper"
						style={{ width: '100%', height: '100vh' }}
						params={{
							particles: {
								number: {
									value: 160,
									density: {
										enable: false
									}
								},
								size: {
									value: 3,
									random: true,
									anim: {
										speed: 4,
										size_min: 0.3
									}
								},
								line_linked: {
									enable: false
								},
								move: {
									random: true,
									speed: 1,
									direction: 'top',
									out_mode: 'out'
								}
							},
							interactivity: {
								events: {
									onhover: {
										enable: true,
										mode: 'bubble'
									},
									onclick: {
										enable: true,
										mode: 'repulse'
									}
								},
								modes: {
									bubble: {
										distance: 250,
										duration: 2,
										size: 0,
										opacity: 0
									},
									repulse: {
										distance: 400,
										duration: 4
									}
								}
							}
						}}
					/>
				</div>
			</figure>
			<div className="content">
				<div style={{ width: '100%', height: '100vh' }} />
				<div className={`content-grid`}>
					<header className="header">
						{/* <div className="subheading">All-Old Techniques</div> */}
						<SubHeading>The fastest theme ever built.</SubHeading>
						<Heading>
							Don’t compromise the speed and efficiency. Next-generation technologies, on demand loading
							and adaptive content deliver the maximum performance.
						</Heading>
					</header>
					<div className={`content-grid-fancy`}>
						<div id="two">
							<div
								style={{
									textAlign: 'right',
									fontSize: '6rem',
									fontWeight: '600'
								}}
							>
								98
							</div>
							<div
								style={{
									justifyContent: 'space-between',
									display: 'flex',
									background:
										'linear-gradient(109.6deg, rgba(116, 255, 217, 1) 11.2%, rgba(88, 200, 223, 1) 91.1%)',
									padding: '1.7rem 1rem',
									margin: '2rem 0',
									borderRadius: '.5rem',
									fontSize: '1.1rem',
									fontWeight: '600'
								}}
							>
								<div>According to GTmetrix</div>
								<div>2x faster</div>
							</div>
							<Recording>
								<div
									style={{
										justifySelf: 'flex-end',
										fontWeight: '600'
									}}
								>
									Ave Theme
								</div>
								<div
									style={{
										width: '100%',
										height: '1.5rem',
										background:
											'linear-gradient(109.6deg, rgba(116, 255, 217, 1) 11.2%, rgba(88, 200, 223, 1) 91.1%)',
										borderRadius: '.2rem'
									}}
								/>
							</Recording>

							<Recording>
								<div
									style={{
										justifySelf: 'flex-end',
										fontWeight: '600',
										color: 'rgba(255,255,255,.5)'
									}}
								>
									Other Theme
								</div>
								<div
									style={{
										width: '50%',
										height: '1.5rem',
										backgroundColor: 'rgb(64, 69, 74)',
										borderRadius: '.2rem'
									}}
								/>
							</Recording>

							<Recording style={{marginTop:"3rem"}}>
								<div
									style={{
										justifySelf: 'flex-end',
										fontWeight: '600'
									}}
								>
									Envelope Theme
								</div>
								<div
									style={{
										width: '80%',
										height: '1.5rem',
										background:
											'linear-gradient(109.6deg, rgba(116, 255, 217, 1) 11.2%, rgba(88, 200, 223, 1) 91.1%)',
										borderRadius: '.2rem'
									}}
								/>
							</Recording>

							<Recording>
								<div
									style={{
										justifySelf: 'flex-end',
										fontWeight: '600',
										color: 'rgba(255,255,255,.5)'
									}}
								>
									Wordpress Theme
								</div>
								<div
									style={{
										width: '40%',
										height: '1.5rem',
										backgroundColor: 'rgb(64, 69, 74)',
										borderRadius: '.2rem'
									}}
								/>
							</Recording>
						</div>
					</div>
				</div>
			</div>
			</SectionContainer>
		</section>
	);
};

export default AnimatedSection;
