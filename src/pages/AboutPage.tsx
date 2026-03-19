import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title mb-8 text-center">About DevReliant</h1>
          <p className="text-xl text-gray-600 mb-12 text-center leading-relaxed">
            We are a collective of senior engineers dedicated to building software that stands the test of time.
          </p>

          <div className="prose prose-lg text-gray-600 mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="mb-8">
              DevReliant was founded on the belief that software should be resilient, scalable, and built with purpose. 
              In an industry obsessed with speed, we prioritize stability and architectural integrity without sacrificing velocity.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why We Exist</h3>
            <p className="mb-8">
              We noticed a gap in the market: ambitious companies often accumulate technical debt that stifles their growth. 
              Our goal is to provide the high-level engineering expertise needed to unblock these bottlenecks and modernize legacy systems.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Reliability First:</strong> We write code that works, today and tomorrow.</li>
              <li><strong>Transparency:</strong> Honest communication about trade-offs and timelines.</li>
              <li><strong>Craftsmanship:</strong> We take pride in the quality of our engineering.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
