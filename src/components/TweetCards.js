import React from 'react';
import styled from 'styled-components';
import imagePlaceholder from '../images/gatsby-astronaut.png';

import fakeTweets from '../assets/fake_tweets.json';
import TweetCard from '../components/TweetCard';
const TweetCards = () => {



	return (
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
          
          {
           fakeTweets.map(({title,url,fullName})=><TweetCard tweet={title.repeat(Math.floor(Math.random() * 5)+1)} thumb={url} name={fullName}/>)
          } 
				</div>
				<div style={{ display: 'flex', flexDirection: 'column-reverse' }} >
                  {
           fakeTweets.map(({title,url,fullName})=><TweetCard tweet={title.repeat(Math.floor(Math.random() * 5)+1)} thumb={url} name={fullName}/>)
          } 
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
	);
};

export default TweetCards;
