import React from 'react';
import FeatureCard from './FeatureCard';

const featureData = [
  {
    title: 'Organize Your Tasks',
    description: 'Create and manage your tasks effortlessly.',
  },
  {
    title: 'Prioritize Your Work',
    description: 'Focus on the most important tasks first.',
  },
  {
    title: 'Collaborate with Others',
    description: 'Share your tasks and work together seamlessly.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">Features</h2>
      <div className="features-grid">
        {featureData.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
