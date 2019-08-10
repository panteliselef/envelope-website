import React, { useEffect } from 'react';
import styled from 'styled-components';
import one from '../images/one.jpg';
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

	const SubHeading = styled.div`
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.5em;
		letter-spacing: 1px;
		color: #ccc;
	`;
	const Heading = styled.h2`
		font-size: 3.3rem;
		margin: 0;
		background: linear-gradient(109.6deg, rgba(116, 255, 217, 1) 11.2%, rgba(88, 200, 223, 1) 91.1%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height:1.2;
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
			<figure>
				{/* <img src={bgImage} /> */}
				<div style={{ width: '100%', height: '100vh', background: '#141618' }} />
			</figure>
			<div className="content">
				<div style={{ width: '100%', height: '100vh' }} />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
					<header className="header">
						{/* <div className="subheading">All-Old Techniques</div> */}
						<SubHeading>The fastest theme ever built.</SubHeading>
						<Heading>
							Don’t compromise the speed and efficiency. Next-generation technologies, on demand loading
							and adaptive content deliver the maximum performance.
						</Heading>
					</header>
					<div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
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
							<div
								style={{
									display: 'grid',
									fontSize: '1rem',
									gridTemplateColumns: '.5fr 1fr',
									gridColumnGap: '1rem',
									alignItems:'center',
									margin:'1rem 0'
								}}
							>
								<div
									style={{
										justifySelf: 'flex-end',
										fontWeight: '600',
									}}
								>
									Ave Theme
								</div>
								<div
									style={{
										width: '100%',
										height:'1.5rem',
										background: 'linear-gradient(109.6deg, rgba(116, 255, 217, 1) 11.2%, rgba(88, 200, 223, 1) 91.1%)',
										borderRadius:'.2rem'
									}}
								/>
							</div>



							<div
								style={{
									display: 'grid',
									fontSize: '1rem',
									gridTemplateColumns: '.5fr 1fr',
									gridColumnGap: '1rem',
									alignItems:'center',
									margin:'1rem 0'
								}}
							>
								<div
									style={{
										justifySelf: 'flex-end',
										fontWeight: '600',
										color:'rgba(255,255,255,.5)',
									}}
								>
									Other Theme
								</div>
								<div
									style={{
										width: '50%',
										height:'1.5rem',
										backgroundColor: 'rgb(64, 69, 74)',
										borderRadius:'.2rem'
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AnimatedSection;
