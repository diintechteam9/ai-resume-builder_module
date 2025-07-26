import React, { useState } from 'react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() + 5 - i);

const jobTypes = [
  'Full-time',
  'Part-time',
  'Freelance',
  'Contract',
  'Internship',
  'Temporary',
  'Remote'
];

const emptyExperience = {
  jobTitle: '',
  jobType: jobTypes[0],
  companyName: '',
  location: '',
  jobDescription: '',
  startMonth: '',
  startYear: '',
  endMonth: '',
  endYear: '',
  currentRole: true,
};

const ExperienceTab = (props) => {
  const { onGoBack, onNext, formData, updateFormData } = props;
  const isEditingMode = !onNext || !onGoBack; // Check if we're in editing mode

  // Initialize with formData if it exists, otherwise use default
  const experiences = formData && formData.length > 0 ? formData : [{ ...emptyExperience }];

  const handleChange = (idx, field, value) => {
    let updatedExperiences = experiences.map((exp, i) => {
      if (i === idx) {
        const updatedExp = { ...exp, [field]: value };
        
        // If end date is being set, automatically set currentRole to false
        if (field === 'endMonth' || field === 'endYear') {
          if (field === 'endMonth') {
            updatedExp.endMonth = value;
          } else {
            updatedExp.endYear = value;
          }
          // If both end month and year are filled, set currentRole to false
          if (updatedExp.endMonth && updatedExp.endYear) {
            updatedExp.currentRole = false;
          }
        }
        
        // If currentRole is being set to true, clear end date
        if (field === 'currentRole' && value === true) {
          updatedExp.endMonth = '';
          updatedExp.endYear = '';
        }
        
        return updatedExp;
      }
      return exp;
    });
    updateFormData(updatedExperiences);
  };

  const handleAddExperience = () => {
    const newExperiences = [...experiences, { ...emptyExperience }];
    updateFormData(newExperiences);
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
          Tell us about your experience
        </h1>
      )}
      {!isEditingMode && (
        <div style={{ color: '#22223b', fontSize: 20, marginBottom: 8 }}>
          Provide the required info to the best of your knowledge. If some details are unavailable, feel free to leave them out.
        </div>
      )}
      {!isEditingMode && (
        <div style={{ color: '#ef4444', fontSize: 14, marginBottom: 18 }}>* indicates a required field</div>
      )}
      {experiences.map((exp, idx) => (
        <div key={idx} style={{ position: 'relative', border: '1.5px solid #d1d5db', borderRadius: 12, padding: 32, background: '#fff', marginBottom: 24 }}>
          {idx === 0 && (
            <button
              type="button"
              onClick={handleAddExperience}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                fontSize: 24,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
              }}
              aria-label="Add another experience"
            >
              +
            </button>
          )}
          <form style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 0 }}>
            <div style={{ flex: '1 1 350px', minWidth: 250 }}>
              <label style={{ fontWeight: 600 }}>Job Title *</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={exp.jobTitle}
                  onChange={e => handleChange(idx, 'jobTitle', e.target.value)}
                  placeholder="Job Title"
                  required
                  style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
                />
                {exp.jobTitle && (
                  <span style={{ position: 'absolute', right: 12, top: 18, color: '#22c55e', fontSize: 22 }}>✔</span>
                )}
              </div>
            </div>
            <div style={{ flex: '1 1 350px', minWidth: 250 }}>
              <label style={{ fontWeight: 600 }}>Job Type</label>
              <select
                value={exp.jobType}
                onChange={e => handleChange(idx, 'jobType', e.target.value)}
                style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: '1 1 350px', minWidth: 250 }}>
              <label style={{ fontWeight: 600 }}>Company Name</label>
              <input
                type="text"
                value={exp.companyName}
                onChange={e => handleChange(idx, 'companyName', e.target.value)}
                placeholder="Company Name"
                style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
              />
            </div>
            <div style={{ flex: '1 1 350px', minWidth: 250 }}>
              <label style={{ fontWeight: 600 }}>Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={e => handleChange(idx, 'location', e.target.value)}
                placeholder="New Delhi, India"
                style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
              />
            </div>
            <div style={{ width: '100%' }}>
              <label style={{ fontWeight: 600 }}>Job Description</label>
              <textarea
                value={exp.jobDescription}
                onChange={e => handleChange(idx, 'jobDescription', e.target.value)}
                placeholder="Describe your role, projects, responsibilities, and achievements..."
                rows={4}
                style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16, resize: 'vertical' }}
              />
            </div>
            <div style={{ flex: '1 1 250px', minWidth: 180 }}>
              <label style={{ fontWeight: 600 }}>Start Date</label>
              <div style={{ display: 'flex', gap: 10 }}>
                <select
                  value={exp.startMonth}
                  onChange={e => handleChange(idx, 'startMonth', e.target.value)}
                  style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
                >
                  <option value="">Month</option>
                  {months.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <select
                  value={exp.startYear}
                  onChange={e => handleChange(idx, 'startYear', e.target.value)}
                  style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
                >
                  <option value="">Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ flex: '1 1 250px', minWidth: 180 }}>
              <label style={{ fontWeight: 600 }}>End Date</label>
              <div style={{ display: 'flex', gap: 10 }}>
                <select
                  name="endMonth"
                  value={exp.endMonth}
                  onChange={e => handleChange(idx, 'endMonth', e.target.value)}
                  style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
                  disabled={exp.currentRole}
                >
                  <option value="">Month</option>
                  {months.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <select
                  name="endYear"
                  value={exp.endYear}
                  onChange={e => handleChange(idx, 'endYear', e.target.value)}
                  style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
                  disabled={exp.currentRole}
                >
                  <option value="">Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </form>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, marginBottom: 32 }}>
            <button
              type="button"
              onClick={() => handleChange(idx, 'currentRole', !exp.currentRole)}
              disabled={exp.endMonth && exp.endYear}
              style={{
                border: exp.currentRole ? '2px solid #1e1e2f' : '1.5px solid #cbd5e1',
                background: exp.currentRole ? '#fff' : '#f8fafc',
                color: exp.currentRole ? '#1e1e2f' : (exp.endMonth && exp.endYear ? '#cbd5e1' : '#1e1e2f'),
                fontWeight: 600,
                fontSize: 18,
                borderRadius: 30,
                padding: '8px 28px',
                cursor: (exp.endMonth && exp.endYear) ? 'not-allowed' : 'pointer',
                outline: 'none',
                marginRight: 4,
                opacity: (exp.endMonth && exp.endYear) ? 0.5 : 1,
              }}
            >
              Currently Working <span style={{ fontSize: 20, fontWeight: 700, marginLeft: 4 }}></span>
            </button>
            
          </div>
        </div>
      ))}
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

export default ExperienceTab;
