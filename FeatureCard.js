import React from 'react';
import tw from 'tailwind-react';

const StyledFeatureCard = tw.div`
  bg-white shadow-md rounded-md p-4 flex flex-col items-center
`;

const FeatureTitle = tw.h3`
  font-bold text-xl mb-2
`;

const FeatureDescription = tw.p`
  text-gray-600
`;

const FeatureCard = ({ feature }) => {
  return (
    <StyledFeatureCard>
      <FeatureTitle>{feature.title}</FeatureTitle>
      <FeatureDescription>{feature.description}</FeatureDescription>
    </StyledFeatureCard>
  );
};

export default FeatureCard;
