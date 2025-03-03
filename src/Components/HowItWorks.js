import React from "react";
import how from "../images/body.png";
import how1 from "../images/how2.png";
import how2 from "../images/how3.png";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Upload Your Clothing",
      description: "Start by uploading images of your apparel.",
      image: how
    },
    {
      id: 2,
      title: "Choose a Model",
      description: "Select from a diverse range of virtual models.",
      image: how1
    },
    {
      id: 3,
      title: "Deploy Your Content",
      description: "Use your finalized images across various channels.",
      image: how2
    },
  ];

  return (
    <div style={{ backgroundColor: '#f4f4f9', padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: '#333' }}>How It Works</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {steps.map((step) => (
          <div
            key={step.id}
            style={{ 
              backgroundColor: '#fff', 
              padding: '25px', 
              borderRadius: '12px', 
              boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)', 
              width: '320px', 
              textAlign: 'center',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ 
              width: '55px', 
              height: '55px', 
              margin: '0 auto 15px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: '#ff6f61', 
              color: '#fff', 
              fontSize: '24px', 
              fontWeight: 'bold', 
              borderRadius: '50%',
            }}>
              {step.id}
            </div>
            <img
              src={step.image}
              alt={step.title}
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                maxHeight: '250px', 
                objectFit: 'contain', 
                borderRadius: '10px', 
                marginBottom: '15px', 
              }}
            />
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: '#222' }}>{step.title}</h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.5' }}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
