import styled from 'styled-components';
import '../styles/index.css';

export const PageTitle = styled.h1`
	font-size: 2rem;
	font-weight: 300;
	width: 100%;
	margin: 1rem auto;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 2.8rem;
	}
`;

export const PageSubTitle = styled.p`
	font-size: 1.1rem;
	line-height: 1.5;
	font-weight: 400;
	color: #6a6a6a;
	width: 100%;
	margin: 1rem auto;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 1.4rem;
	}
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

export const SectionContainerTwo = styled.div`
	display: flex;
	width: 100%;
	max-width: 1280px;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const SectionSpecialContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	max-width: 1280px;
	width: 90%;
	@media (min-width: 768px) {
		flex-direction: ${(props) => props.direction || `row`};
	}
`;

export const SectionContainerTwoImg = styled.img`
	width: 50%;
	max-width: 200px;
	transform: rotate(-90deg);
	@media (min-width: 768px) {
		transform: rotate(0);
		width: 100%;
		max-width: 400px;
	}
`;


export const RoundedBoxContainer = styled.div`
	overflow: ;
	
	position: relative;
	@media (min-width: 768px){
		margin-right: 100px;
	}
`;

export const RoundedBoxGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 120px 120px;
	width: 240px;
	grid-gap: 2.5rem 1rem;
	height: auto;
	transform: rotate(-35deg) translateY(40px);
	@media (min-width: 768px){
		transform: rotate(-35deg);
		grid-template-rows: 200px 200px;
		width: 400px;
		grid-gap: 3.5rem 2rem;
	}
`;
export const SectionTitle = styled.h2`
	font-size: 1.8rem;
	text-align: center;
	width: 90%;
	white-space: pre-line;
	line-height: 1.3;
	font-weight: bold;
	color: rgb(64, 64, 64);
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

export const SectionSpecialTitle = styled.h2`
	font-size: 1.8rem;
	text-align: center;
	width: 100%;
	white-space: pre-line;
	line-height: 1.3;
	font-weight: bold;
	color: rgb(64, 64, 64);
	margin: 0;
	@media (min-width: 768px) {
		max-width: 300px;
		font-size: 2.2rem;
		text-align: ${(props) => props.textAlign || `left`};
		white-space: initial;
		width: 90%;
	}
	@media (min-width: 1280px) {
		font-size: 2.5rem;
	}
`;

export const SectionSubtitle = styled.p`
	max-width: 28rem;
	font-size: 1rem;
	color: #6a6a6a;
	margin-top: 2rem;
	width: 90%;
	line-height: 1.5;
	text-align: center;
	@media (min-width: 768px) {
		line-height: 1.8;
	}
`;

export const SectionSpecialSubtitle = styled.p`
	max-width: 400px;
	margin: auto;
	font-size: 1rem;
	color: #6a6a6a;
	margin-top: 2rem;
	width: 100%;
	line-height: 1.5;
	text-align: center;
	@media (min-width: 768px) {
		width: 90%;
		margin-left: unset;
		margin-right: unset;
		max-width: 400px;
		text-align: ${(props) => props.textAlign || `left`};
		line-height: 1.8;
	}
`;

export const SectionSpecialImg = styled.img`
	width: 100%;
	max-width: 400px;
	@media (min-width: 768px) {
		max-width: unset;
		width: unset;
		height: 100%;
		max-height: 600px;
	}
`;
export const OutlinedButton = styled.button`
	appearance: none;
	background: transparent;
	border-radius: 100rem;
	min-width: 4rem;
	padding: 1rem;
	border: 1px solid #333;
	font-size: .8rem;
	text-transform: uppercase;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		background-color: rgba(51, 51, 51, 0.1);
	}
`;

export default OutlinedButton;
