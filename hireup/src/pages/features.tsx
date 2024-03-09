import React from 'react';

const FeaturesPage = () => {
    const features = ["Automated Candidate Screening", "Interview Scheduling", "Employee Onboarding", "Performance Tracking", "Customizable Job Posting Templates"];

    return (
        <div className="features-page">
            <h1>Features</h1>
            <ul>
                {features.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
        </div>
    );
}

export default FeaturesPage;
