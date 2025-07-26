import React, { useState } from 'react';

const SkillsTab = (props) => {
  const { onGoBack, onNext, formData, updateFormData } = props;
  const isEditingMode = !onNext || !onGoBack; // Check if we're in editing mode

  // Initialize with formData if it exists, otherwise use default
  const skills = formData && formData.length > 0 ? formData : [''];

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    updateFormData(updatedSkills);
  };

  const handleAddSkill = () => {
    const updatedSkills = [...skills, ''];
    updateFormData(updatedSkills);
  };

  const handleRemoveSkill = (index) => {
    if (skills.length > 1) {
      const updatedSkills = skills.filter((_, i) => i !== index);
      updateFormData(updatedSkills);
    }
  };

  const handleSave = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      {!isEditingMode && (
        <button
          type="button"
          onClick={onGoBack}
          style={{
            color: '#2563eb',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: 16,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: 0
          }}
        >
          &larr; Go Back
        </button>
      )}
      {!isEditingMode && (
        <h1 style={{ fontSize: 36, fontWeight: 700, margin: '1.5rem 0 0.5rem' }}>
          What skills do you have?
        </h1>
      )}
      {!isEditingMode && (
        <div style={{ color: '#22223b', fontSize: 20, marginBottom: 8 }}>
          Add your skills to help employers understand your capabilities.
        </div>
      )}
      {!isEditingMode && (
        <div style={{ color: '#ef4444', fontSize: 14, marginBottom: 18 }}>* indicates a required field</div>
      )}
      <div style={{ background: '#f8faff', borderRadius: 16, padding: '28px 24px 24px 24px', marginBottom: 32, boxShadow: '0 2px 12px rgba(10,24,51,0.04)', position: 'relative' }}>
        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: index < skills.length - 1 ? 16 : 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                placeholder="Enter a skill"
                style={{
                  flex: 1,
                  padding: 12,
                  borderRadius: 8,
                  border: '1px solid #d1d5db',
                  fontSize: 16,
                  background: '#fff'
                }}
              />
              {skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  style={{
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: 6,
                    padding: '8px 12px',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    minWidth: 80
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSkill}
          style={{
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            padding: '12px 24px',
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer',
            marginTop: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}
        >
          + Add Skill
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, marginTop: 32 }}>
        {isEditingMode ? (
          <button
            type="button"
            onClick={handleSave}
            style={{
              border: 'none',
              background: '#2563eb',
              color: 'white',
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 30,
              padding: '10px 36px',
              cursor: 'pointer',
            }}
          >
            Save Changes
          </button>
        ) : (
          <>
            <button
              type="button"
              style={{
                border: '2px solid #2563eb',
                background: 'white',
                color: '#2563eb',
                fontWeight: 600,
                fontSize: 18,
                borderRadius: 30,
                padding: '10px 36px',
                cursor: 'pointer',
              }}
            >
              Preview
            </button>
            <button
              type="button"
              onClick={onNext}
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
              Next
            </button>
          </>
        )}
      </div>
      {!isEditingMode && (
        <div style={{ position: 'absolute', top: 40, right: 60 }}>
          <a href="#" style={{ color: '#2563eb', fontWeight: 500, fontSize: 16 }}></a>
        </div>
      )}
    </div>
  );
};

export default SkillsTab;
