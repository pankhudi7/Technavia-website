import { useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import './FadeInBox.css';

const teamMembersData = [
  { id: 1, name: 'Founder 1 ', image: 'img_avatar1.png' },
  { id: 2, name: 'Founder 2', image: 'img_avatar2.png' },
  { id: 3, name: 'Member 3', image: 'img_avatar2.png' },
  { id: 4, name: 'Member 4', image: 'img_avatar2.png' }
  // add more team members as needed
];

const Container = styled.div`
  position: relative;
  width: 100%;
  height:1000%;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 30px;
  border:10px;
  margin-top: 20px;
  font-size: 28px;
`;

const Image = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  backface-visibility: hidden;

  ${Container}:hover & {
    opacity: 0.3;
  }
`;

const Middle = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  ${Container}:hover & {
    opacity: 1;
  }
`;

const Text = styled.div`
  background-color: #4CAF50;
  color: white;
  font-size: 28px;
  padding: 16px 32px;
`;

const FadeInBox = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])  
  return (
    <div className='fadebox' data-aos="zoom-in" >
      {teamMembersData.map((member) => (
        <Container key={member.id}>
          <Image src={member.image} alt={`Picture of ${member.name}`} />
          <Middle>
            <Text>{member.name}</Text>
          </Middle>
        </Container>
      ))}
    </div>
  );
};

export default FadeInBox;

