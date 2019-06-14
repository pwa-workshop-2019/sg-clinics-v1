import React from 'react';
import styled from 'styled-components';
import {Label, Value} from "./Typography";

export const Button = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 22px;
  padding-right: 22px;
  background-color: ${props => props.primary ? '#FF5A5F' : '#FFFFFF'};
  border-radius: 4px;
  width: ${props => props.fluid ? '100%' : '200px' }
  color: ${props => props.primary ? '#FFFFFF' : '#FF5A5F'}
  border: solid 1px #FF5A5F;
  background-color: ${props => props.disabled ? '#DEDEDE' : ''};
`;

export const KeyValue = (props) => {
  return (
    <div style={{borderBottom: 'solid 1px #EBEBEB'}}>
      <Label size={16}>{props.label}</Label>
      <Value size={14}>{props.value}</Value>
    </div>
  );
};


// const MobileContainer = styled.div`
//   width: 90%;
//   margin: 0 auto;
// `;

// function MediaContainer(props) {
//   return (
//     <Media query={{minWidth: 775}}>
//       {
//         matches => matches
//           ? <DesktopContainer>{ props.children }</DesktopContainer>
//           : <MobileContainer> { props.children } </MobileContainer>
//
//       }
//     </Media>
//   );
// }