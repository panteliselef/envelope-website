import React from 'react';
import styled from 'styled-components';
import '../styles/index.css';
import darkLogo from '../images/envelope-logo-black.svg';
import {OutlinedButton} from '../components/myStyledComponents';
const Header = () => {
  const Header = styled.header`
    z-index: 99;
    position:absolute;
		max-width: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
    padding: 2rem 2rem;
    align-items: center;
  `;
  
  // const MenuList = styled.ul`
  //   display: flex;
  //   flex-direction: row;
	// 	justify-content: flex-start;
  //   list-style: none;
  // `;

  // const MenuItem = styled.li`
  //   padding:1rem 2rem;
  // `;

	return (
		<Header>
			<div style={{display:'flex'}}>
				<img src={darkLogo} style={{height:'1.7rem'}}/>
        {/* <MenuList>
          <MenuItem>Some</MenuItem>
          <MenuItem>Some</MenuItem>
          <MenuItem>Some</MenuItem>
          <MenuItem>Some</MenuItem>
        </MenuList> */}
			</div>
      <OutlinedButton style={{color:'#333'}}>Create a project</OutlinedButton>
		</Header>
	);
};

export default Header;
