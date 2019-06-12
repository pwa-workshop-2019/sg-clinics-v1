import styled from 'styled-components';

export const Label = styled.label`
line-height: 2rem;
font-weight: 800;
color: ${props => props.success ? 'green' : ''};
font-size: ${props => props.size ? `${props.size}px` : '12px'};
`;

export const Value = styled.p`
line-height: 1.28rem;
font-weight: 400;
color: #484848;
font-size: ${props => props.size ? `${props.size}px` : '14px'}
`;

export const ItemContainer =  styled.div`
margin-top: 1.5rem;
margin-bottom: 1.5rem;
`;

export const H1 = styled.h1`
  color: ${props => props.success ? 'green' : '' }
`;

