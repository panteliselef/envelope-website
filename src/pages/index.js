import React from 'react';
import illustration from '../images/comming-soon-illustration.svg';
import logo from '../images/envelope-logo.svg';
import styled from 'styled-components';
import '../styles/index.css';
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
	const Container = styled.div`
		display: flex;
		${'' /* justify-content: center; */} align-items:center;
		flex-direction: column;
		width: 100%;
		padding: 2rem 0;
    height: 100vh;
    max-height: 100vh;
		background-color: #E3DFDC;
	`;

	const TextContainer = styled.div`
		max-width: 650px;
		text-align: center;
    font-size: 1.5rem;
    padding: 0 1rem;
    line-height: 1.4;
  `;
  

	// <Layout>
	//   <SEO title="Home" />
	//   <h1>Hi people</h1>
	//   <p>Welcome to your new Gatsby site.</p>
	//   <p>Now go build something great.</p>
	//   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
	//     <Image />
	//   </div>
	//   <Link to="/page-2/">Go to page 2</Link>
	// </Layout>

	return (
		<Container>
			<img src={logo} style={{ width: '100%', height: '2rem' }} />

			<TextContainer>
				<p style={{fontWeight:'300'}}>Looks like nobody is home!</p>
				<p style={{fontWeight:'500',color:'#000'}}>Our website is under construction, please check back later</p>
			</TextContainer>
      <img src={illustration} style={{maxWidth:'100vw',width: 'auto', height: 'calc(100vh - 30%)', objectFit:'contain',objectPosition:'center'}} />
		</Container>
	);
};

export default IndexPage;
