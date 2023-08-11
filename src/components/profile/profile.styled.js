import styled from 'styled-components';

export const Img = styled.img`
 border-radius:70%;
 width:100px;
 display:flex; 
 margin-top: 10px;
`;

export const GenProfile = styled.div`
width:300px;
height:300px;
border: 3px solid blue;
display:block;
margin: 0 auto;
`;

export const Description = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

export const Tag = styled.p`
margin:0 auto;
`;

export const Stats = styled.ul`
list-style:none;
     display: flex;
   justify-content:center;
    padding-left: 0;
    background-color: sienna;
`;

export const Followers = styled.li`
    width: 100px;
    height: 55px;
    border: 1px solid black;
    text-align: center;
    border-bottom:none;
    border-left:none;
    display: flex;
    flex-direction: column;
  `;

export const Views = styled.li`
    width: 100px;
    height: 55px;
    border: 1px solid black;
    text-align: center;
   border-right:none;
    border-left: none;
    display: flex;
    flex-direction: column;
`;

export const Likes = styled.li`
    width: 100px;
    height: 55px;
    border: 1px solid black;
    text-align: center;
    border-bottom:none;
    border-right:none;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.span`
    color: #afb1b8;
    `



