import React from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-react';

const StyledHeroSection = motion.div`
  ${tw`bg-hero-image bg-cover bg-center h-screen flex flex-col items-center justify-center text-center text-white`}
`;

const StyledHeadline = motion.h1`
  ${tw`font-size-4xl font-bold mb-4`}
`;

const StyledSubheading = motion.p`
  ${tw`font-size-2xl`}
`;

const StyledButton = motion.button`
  ${tw`bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer`}
`;

const HeroSection = () => {
  return (
    <>
      <StyledHeroSection
        animate={{ opacity: 1 }, { duration: 1 }}
        initial={{ opacity: 0 }}
      >
        <StyledHeadline>Ahead</StyledHeadline>
        <StyledSubheading>A new way to get things done.</StyledSubheading>
        <StyledButton>Get Started</StyledButton>
      </StyledHeroSection>
    </>
  );
};

export default HeroSection;
