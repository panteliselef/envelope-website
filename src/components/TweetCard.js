import React from 'react';
import styled from 'styled-components';
import imagePlaceholder from '../images/gatsby-astronaut.png';
import twitter from '../images/twitter.svg';

const TwitterCard = styled.div`
	background: #333;
	color: #fff;
	flex: 1 0 auto;
	margin: .5rem 0;
	width: 100%;
	min-height: 100px;
	height: auto;
	border-radius: .8rem;
`;

const TwitterCardTweet = styled.p`
	margin: 1rem 1rem 70px 1rem;
	font-size: 1rem;
	line-height: 1.4;
`;

const TwitterCardDate = styled.p`
  font-size: .8rem;
  margin: 2rem 1rem;
  color: #929394;
`;

const TweetCard = ({ tweet, thumb, name }) => {
  const date = `Jan 18, 2018`;
	return (
		<TwitterCard>
			<div style={{ display: 'flex',margin: '1rem',justifyContent:'space-between', alignItems:'center' }}>
				<div style={{
          display:'flex',
          alignItems:'center',
        }}>
					<img
						src={thumb || imagePlaceholder}
						style={{
							borderRadius: '50%',
							width: '3rem',
							height: '3rem',
              marginRight:'1rem'
						}}
					/>
          <p>{name || `Pantelis Elef`}</p>
				</div>
        <div>
          <img src={twitter} style={{
            width:'2rem',
            height:'2rem',
          }}></img>
        </div>
			</div>
			<TwitterCardTweet>{tweet}</TwitterCardTweet>
      <TwitterCardDate>{date}</TwitterCardDate>
		</TwitterCard>
	);
};

export default TweetCard;
