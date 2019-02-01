import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
  display: grid;
  grid-template-column: 180px auto 100px 100px;
`

export default function(){
    return <Bar>
	<Logo>Cryptocurrency</Logo>
	<div>Dashboard</div>
	<div>Settings</div>
	</Bar>
}
