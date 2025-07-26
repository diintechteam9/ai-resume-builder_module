import React, { useState } from 'react'
import HeadingTab from './HeadingTab'
import TemplateTab from './TemplateTab';
import Template1 from './Templates/Template1';
import EducationTab from './EducationTab';
import ExperienceTab from './ExperienceTab';
import SkillsTab from './SkillsTab';
import SummaryTab from './SummaryTab';
import FinalizeTab from './FinalizeTab';

const steps = [
  { number: 1, label: 'Templates'},
  { number: 2, label: 'Heading' },
  { number: 3, label: 'Education' },
  { number: 4, label: 'Experience' },
  { number: 5, label: 'Skills' },
  { number: 6, label: 'Summary' },
  { number: 7, label: 'Finalize' },
];

const completeness = 0;

const templateComponents = [
  <Template1 key={0} />,
  <div key={1} style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:60}}><span role="img" aria-label="resume">📄</span></div>,
  <div key={2} style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:60}}><span role="img" aria-label="resume">📄</span></div>,
];

const FirstPage = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const [selectedTemplateIdx, setSelectedTemplateIdx] = useState(0);

  // Centralized state for all form data
  const [formData, setFormData] = useState({
    heading: {
      firstName: '',
      surname: '',
      profession: '',
      city: '',
      country: '',
      pin: '',
      phone: '',
      email: '',
      photo: null,
    },
    education: [],
    experience: [],
    skills: [],
    summary: '',
  });

  const handleTemplateSelect = (idx) => {
    setSelectedTemplateIdx(idx);
    setSelectedStep(1); // Go to Heading tab
  };

  const handleNextEducation = () => {
    setSelectedStep(2);
  };

  const handleNextExperience = () => {
    setSelectedStep(3);
  };

  const handleNextSkills = () => {
    setSelectedStep(4);
  };

  const handleNextSummary = () => {
    setSelectedStep(5);
  };

  const handleNextFinalize = () => {
    setSelectedStep(6);
  };

  const handleGoBack = (step) => {
    setSelectedStep(step);
  };

  // Update specific sections of form data
  const updateHeading = (headingData) => {
    setFormData(prev => ({ ...prev, heading: { ...prev.heading, ...headingData } }));
  };

  const updateEducation = (educationData) => {
    setFormData(prev => ({ ...prev, education: educationData }));
  };

  const updateExperience = (experienceData) => {
    setFormData(prev => ({ ...prev, experience: experienceData }));
  };

  const updateSkills = (skillsData) => {
    setFormData(prev => ({ ...prev, skills: skillsData }));
  };

  const updateSummary = (summaryData) => {
    setFormData(prev => ({ ...prev, summary: summaryData }));
  };

  const updateContact = (contactData) => {
    setFormData(prev => ({ ...prev, heading: { ...prev.heading, ...contactData } }));
  };

  return (
    <div style={{ background: '#f3e8ff', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        background: '#2a003f',
        color: 'white',
        width: 200,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '32px 24px',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        zIndex: 10,
        boxSizing: 'border-box',
      }}>
        {/* Logo */}
        <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 32, letterSpacing: 1 }}>
          AI Resume Builder<span style={{ color: '#c4b5fd', fontSize: 20, marginLeft: 4 }}>▶</span>
        </div>
        {/* Stepper */}
        <div style={{ marginBottom: 40, width: '100%' }}>
          {steps.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setSelectedStep(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: idx < steps.length - 1 ? 16 : 0,
                cursor: 'pointer',
                opacity: selectedStep === idx ? 1 : 0.85,
              }}
            >
              {/* Step circle or check */}
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: selectedStep === idx ? 'white' : 'transparent',
                border: '2px solid white',
                color: selectedStep === idx ? '#7c3aed' : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 14,
                position: 'relative',
                zIndex: 1,
                transition: 'background 0.2s, color 0.2s',
              }}>
                {step.number}
              </div>
              {/* Step label */}
              <span style={{
                marginLeft: 12,
                fontWeight: selectedStep === idx ? 700 : 500,
                color: selectedStep === idx ? 'white' : '#ede9fe',
                fontSize: 14,
                textShadow: selectedStep === idx ? '0 0 8px #fff' : 'none',
                transition: 'color 0.2s',
              }}>{step.label}</span>
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div style={{ marginTop: 'auto', width: '100%' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', marginBottom: 8 }}>
            RESUME COMPLETENESS:
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              background: '#a78bfa',
              borderRadius: 8,
              width: '80%',
              height: 12,
              marginRight: 8,
              overflow: 'hidden',
            }}>
              <div style={{
                background: '#c4b5fd',
                width: `${completeness}%`,
                height: '100%',
                borderRadius: 8,
                transition: 'width 0.3s',
              }} />
            </div>
            <span style={{ fontWeight: 700, fontSize: 15 }}>{completeness}%</span>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div style={{
        marginLeft: 300,
        minHeight: '100vh',
        maxHeight: '100vh',
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
        {selectedStep === 0 && <TemplateTab onUseTemplate={handleTemplateSelect} />}
        {selectedStep === 1 && (
          <HeadingTab 
            selectedTemplate={templateComponents[selectedTemplateIdx]} 
            onNext={handleNextEducation} 
            onGoBack={() => handleGoBack(0)}
            formData={formData.heading}
            updateFormData={updateHeading}
          />
        )}
        {selectedStep === 2 && (
          <EducationTab 
            onGoBack={() => handleGoBack(1)} 
            onNext={handleNextExperience}
            formData={formData.education}
            updateFormData={updateEducation}
          />
        )}
        {selectedStep === 3 && (
          <ExperienceTab 
            onGoBack={() => handleGoBack(2)}
            onNext={handleNextSkills}
            formData={formData.experience}
            updateFormData={updateExperience}
          />
        )}
        {selectedStep === 4 && (
          <SkillsTab 
            onGoBack={() => handleGoBack(3)}
            onNext={handleNextSummary}
            formData={formData.skills}
            updateFormData={updateSkills}
          />
        )}
        {selectedStep === 5 && (
          <SummaryTab 
            onGoBack={() => handleGoBack(4)}
            onNext={handleNextFinalize}
            formData={formData.summary}
            updateFormData={updateSummary}
          />
        )}
        {selectedStep === 6 && (
          <FinalizeTab 
            onGoBack={() => handleGoBack(5)}
            selectedTemplate={selectedTemplateIdx}
            formData={formData}
            updateSummary={updateSummary}
            updateEducation={updateEducation}
            updateExperience={updateExperience}
            updateSkills={updateSkills}
            updateHeading={updateHeading}
          />
        )}
      </div>
    </div>
  )
}

export default FirstPage
