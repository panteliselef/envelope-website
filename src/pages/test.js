import React, { useEffect } from 'react';
import styled from 'styled-components';
import ScrollOut from 'scroll-out';
import '../styles/test.css';
import website from '../images/website.png';
import chromeWeb from '../images/chrome-website.jpg';
// import chrome from '../images/chrome.jpg';
// import chrome from '../images/chrome.png';
import chrome from '../images/chrome.svg';
const Test = () => {
	useEffect(() => {
		ScrollOut({
			cssProps: {
				viewportY: true,
				visibleY: true,
			},

			onShown: function(element, ctx, scrollingElement) {
				/* Triggered when an element is shown */
				console.log('On Shown', ctx);
			},
			onHidden: function(element, ctx, scrollingElement) {
				/* Triggered when an element is hidden */
				console.log('On Hidden', ctx);
			},
			onChange: function(element, ctx, scrollingElement) {
				/* Triggered when an element changes visibility */
				console.log('On Change', ctx);
			}
		});
	}, []);

	return (
		<React.Fragment>
			<section className="intro-section">
				<h1 className="intro-heading"> Watch</h1>

				<p>The latest in time-telling technology.</p>
			</section>
			<section className="my-content-section" data-scroll>
				<div
					style={{
						position: 'relative',
						width: '100%',
            height:'50px',
						margin: '0 auto'
					}}
				>
				<img
					src={chrome}
					style={{
						zIndex: '10',
						position: 'absolute',
						width: '100vw',
						top: '-1px',
						left: '0',
            
					}}
					id="chrome"
				/>
				</div>
				<figure className="figure" style={{
          
        }}>
					<img src={website} />
				</figure>
				<div
					className="content"
					style={{
						height: '100vh'
					}}
				/>
			</section>
			<section className="content-section" data-scroll>
				<figure className="figure">
					<img src={website} />
				</figure>
			</section>

			<section className="content-section" data-scroll>
				<figure className="figure">
					<img src="https://source.unsplash.com/rCOWMC8qf8A/800x800" />
				</figure>
				<div className="content">
					<header className="header">
						<div className="subheading">All-Old Techniques</div>
						<h2 className="heading">
							Not Evolved,<br />not transformed either.
						</h2>
					</header>
					<p className="paragraph">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae.
						Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum
						natus, autem numquam.
					</p>
				</div>
			</section>

			<section className="content-section" data-scroll>
				<figure className="figure">
					<img src="https://source.unsplash.com/mAsKA0jFfeQ/800x800" />
				</figure>
				<div className="content">
					<header className="header">
						<div className="subheading">All-Old Techniques</div>
						<h2 className="heading">
							Not Evolved,<br />not transformed either.
						</h2>
					</header>
					<p className="paragraph">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae.
						Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum
						natus, autem numquam.
					</p>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Test;
