import styled from 'styled-components';
import '../styles/index.css';


export const PageTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 300;
  width:100%;
  margin: 1rem auto;
  text-align:center;
`;

export const PageSubTitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  font-weight: 400;
  color: #6A6A6A;
  width:100%;
  margin: 1rem auto;
  text-align:center;
`;


export const Section = styled.section`
	width: 100%;
	padding: ${(props) => props.padding || '5em 0'};
	@media (min-width: 768px) {
		padding: ${(props) => props.padding || '5em 0'};
	}
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;


export const SectionTitle = styled.h2`
	font-size: 1.8rem;
	text-align: center;
  width:90%;
	white-space: pre-line;
	line-height: 1.3;
	font-weight: bold;
  color:rgb(64,64,64);
	margin: auto;
	max-width: 400px;
	@media (min-width: 768px) {
		font-size: 2.2rem;
		white-space: initial;
	}
	@media (min-width: 1280px) {
		font-size: 2.5rem;
	}
`;

export const SectionSubtitle = styled.p`
	max-width: 28rem;
	font-size: 1rem;
  color: #6A6A6A;
  margin-top: 2rem;
  line-height: 1.8;
	text-align: center;
`;

export const OutlinedButton = styled.button`
  appearance:none;
  background:transparent;
  border-radius: 100rem;
  min-width:4rem;
  padding: 1rem;
  border: 1px solid #333;
  font-size: .8rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: rgba(51,51,51,0.1);
  }
`;


export default OutlinedButton;