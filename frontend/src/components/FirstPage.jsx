import React, { useState } from 'react'
import HeadingTab from './HeadingTab'
import TemplateTab from './TemplateTab';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import EducationTab from './EducationTab';
import ExperienceTab from './ExperienceTab';
import SkillsTab from './SkillsTab';
import SummaryTab from './SummaryTab';
import FinalizeTab from './FinalizeTab';

const steps = [
  { number: 1, label: 'Templates'},
  { number: 2, label: 'Profile Info' },
  { number: 3, label: 'Qualifications' },
  { number: 4, label: 'Job History' },
  { number: 5, label: 'Expertise' },
  { number: 6, label: 'Career Overview' },
  { number: 7, label: 'Wrap-Up' },
];

const templateComponents = [
  <Template1 key={0} />,
  <Template2 key={1} />,
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

  // Calculate resume completeness
  const calculateCompleteness = () => {
    let completedSections = 0;
    const totalSections = 5; // heading, education, experience, skills, summary

    // Check heading section (20% - 4 points)
    const heading = formData.heading;
    const headingFields = [heading.firstName, heading.surname, heading.profession, heading.city, heading.country, heading.pin, heading.phone, heading.email];
    const filledHeadingFields = headingFields.filter(field => field && field.trim() !== '').length;
    if (filledHeadingFields >= 6) { // At least 6 out of 8 fields filled
      completedSections += 1;
    }

    // Check education section (20% - 4 points)
    if (formData.education.length > 0 && formData.education.some(edu => edu.schoolName && edu.schoolName.trim() !== '')) {
      completedSections += 1;
    }

    // Check experience section (20% - 4 points)
    if (formData.experience.length > 0 && formData.experience.some(exp => exp.jobTitle && exp.jobTitle.trim() !== '')) {
      completedSections += 1;
    }

    // Check skills section (20% - 4 points)
    if (formData.skills.length > 0 && formData.skills.some(skill => skill && skill.trim() !== '')) {
      completedSections += 1;
    }

    // Check summary section (20% - 4 points)
    if (formData.summary && formData.summary.trim() !== '') {
      completedSections += 1;
    }

    return Math.round((completedSections / totalSections) * 100);
  };

  const completeness = calculateCompleteness();

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
          <div style={{ fontSize: 20, fontWeight: 700, color: '#c4b5fd', marginBottom: 8 }}>
            Status:
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
        marginLeft: (selectedStep >= 1 && selectedStep <= 5) ? 240 : 300,
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
            selectedTemplate={React.cloneElement(templateComponents[selectedTemplateIdx], { formData })}
            onNext={handleNextEducation} 
            onGoBack={() => handleGoBack(0)}
            formData={formData.heading}
            updateFormData={updateHeading}
            fullFormData={formData}
          />
        )}
        {selectedStep === 2 && (
          <EducationTab 
            selectedTemplate={React.cloneElement(templateComponents[selectedTemplateIdx], { formData })}
            onGoBack={() => handleGoBack(1)} 
            onNext={handleNextExperience}
            formData={formData.education}
            updateFormData={updateEducation}
            fullFormData={formData}
          />
        )}
        {selectedStep === 3 && (
          <ExperienceTab 
            selectedTemplate={React.cloneElement(templateComponents[selectedTemplateIdx], { formData })}
            onGoBack={() => handleGoBack(2)}
            onNext={handleNextSkills}
            formData={formData.experience}
            updateFormData={updateExperience}
            fullFormData={formData}
          />
        )}
        {selectedStep === 4 && (
          <SkillsTab 
            selectedTemplate={React.cloneElement(templateComponents[selectedTemplateIdx], { formData })}
            onGoBack={() => handleGoBack(3)}
            onNext={handleNextSummary}
            formData={formData.skills}
            updateFormData={updateSkills}
            fullFormData={formData}
          />
        )}
        {selectedStep === 5 && (
          <SummaryTab 
            selectedTemplate={React.cloneElement(templateComponents[selectedTemplateIdx], { formData })}
            onGoBack={() => handleGoBack(4)}
            onNext={handleNextFinalize}
            formData={formData.summary}
            updateFormData={updateSummary}
            fullFormData={formData}
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
