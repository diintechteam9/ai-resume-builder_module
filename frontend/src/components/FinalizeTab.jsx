import React, { useState } from 'react';
import Template1 from './Templates/Template1';
import SummaryTab from './SummaryTab';
import EducationTab from './EducationTab';
import ExperienceTab from './ExperienceTab';
import SkillsTab from './SkillsTab';
import HeadingTab from './HeadingTab';

const FinalizeTab = (props) => {
  const { onGoBack, selectedTemplate, formData, updateSummary, updateEducation, updateExperience, updateSkills, updateHeading } = props;
  const [editingSection, setEditingSection] = useState(null);

  // Handler to open summary editing
  const handleEditSummary = () => setEditingSection('summary');

  // Handler to open education editing
  const handleEditEducation = () => setEditingSection('education');

  // Handler to open experience editing
  const handleEditExperience = () => setEditingSection('experience');

  // Handler to open skills editing
  const handleEditSkills = () => setEditingSection('skills');

  // Handler to open contact editing
  const handleEditContact = () => setEditingSection('contact');

  // Handler to close editing (optional, could add a close button)
  const handleCloseEdit = () => setEditingSection(null);

  // Render left panel content
  const renderLeftPanel = () => {
    if (editingSection === 'summary') {
      return (
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: 18, fontWeight: 600 }}>
            Edit Summary
          </h3>
          <SummaryTab
            formData={formData.summary}
            updateFormData={updateSummary}
            onNext={handleCloseEdit}
            onGoBack={handleCloseEdit}
          />
        </div>
      );
    }
    if (editingSection === 'education') {
      return (
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: 18, fontWeight: 600 }}>
            Edit Education
          </h3>
          <EducationTab
            formData={formData.education}
            updateFormData={updateEducation}
            onNext={handleCloseEdit}
            onGoBack={handleCloseEdit}
          />
        </div>
      );
    }
    if (editingSection === 'experience') {
      return (
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: 18, fontWeight: 600 }}>
            Edit Experience
          </h3>
          <ExperienceTab
            formData={formData.experience}
            updateFormData={updateExperience}
            onNext={handleCloseEdit}
            onGoBack={handleCloseEdit}
          />
        </div>
      );
    }
    if (editingSection === 'skills') {
      return (
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: 18, fontWeight: 600 }}>
            Edit Skills
          </h3>
          <SkillsTab
            formData={formData.skills}
            updateFormData={updateSkills}
            onNext={handleCloseEdit}
            onGoBack={handleCloseEdit}
          />
        </div>
      );
    }
    if (editingSection === 'contact') {
      return (
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: 18, fontWeight: 600 }}>
            Edit Contact Information
          </h3>
          <HeadingTab
            formData={formData.heading}
            updateFormData={updateHeading}
            onNext={handleCloseEdit}
            onGoBack={handleCloseEdit}
          />
        </div>
      );
    }
    return (
      <>
        <h3 style={{ margin: '0 0 16px 0', fontSize: 18, fontWeight: 600 }}>
          Selected Tab For Editing
        </h3>
      </>
    );
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 0:
        return <Template1 formData={formData} />;
      default:
        return (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: 60 
          }}>
            <span role="img" aria-label="resume">📄</span>
          </div>
        );
    }
  };

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '2rem 1rem' }}>

      <h1 style={{ fontSize: 32, fontWeight: 700, paddingLeft:'260px', marginBottom:'20px'}}>
        Finalize Your Resume
      </h1>
      
      {/* Main content area with flex layout */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: 32 }}>
        
        {/* Left section - Editing panel */}
        <div style={{ 
          flex: 3, 
          background: '#f8f9fa', 
          borderRadius: 16, 
          padding: '24px',
          height: '820px',
          width:'400px',
          overflowY: 'auto'
        }}>
          {renderLeftPanel()}
        </div>

        {/* Right section - Template Preview with User Data */}
        <div style={{ 
          flex: 1, 
          background: '#fff', 
          borderRadius: 16, 
          boxShadow: '0 4px 24px rgba(10,24,51,0.08)', 
          padding: '32px', 
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '820px',
          position: 'relative'
        }}>
  
          <div style={{ 
            transform: 'scale(0.8)', 
            transformOrigin: 'top center',
            maxWidth: '100%',
            overflow: 'auto',
            marginTop:'180px'
          }}>
            <Template1
              formData={formData}
              onEditSummary={handleEditSummary}
              onEditEducation={handleEditEducation}
              onEditExperience={handleEditExperience}
              onEditSkills={handleEditSkills}
              onEditContact={handleEditContact}
            />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 48 }}>
        <button
          type="button"
          style={{
            border: 'none',
            background: '#fde68a',
            color: '#1f2937',
            fontWeight: 700,
            fontSize: 18,
            borderRadius: 30,
            padding: '10px 36px',
            cursor: 'pointer',
          }}
        >
          Generate Resume
        </button>
      </div>
    </div>
  );
};

export default FinalizeTab;