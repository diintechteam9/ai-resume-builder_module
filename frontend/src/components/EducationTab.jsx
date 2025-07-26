import React, { useState } from 'react';

const degrees = [
  'Bachelor of Science',
  'Bachelor of Arts',
  'Bachelor of Commerce',
  'Master of Science',
  'Master of Arts',
  'Master of Commerce',
  'PhD',
  'Other',
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() + 5 - i);

const emptyEducation = {
  schoolName: '',
  schoolLocation: '',
  fieldOfStudy: '',
  percentage: '',
  gradMonth: '',
  gradYear: '',
  coursework: '',
};

const EducationTab = (props) => {
  const { onGoBack, onNext, formData, updateFormData } = props;
  const isEditingMode = !onNext || !onGoBack; // Check if we're in editing mode
  const [showCoursework, setShowCoursework] = useState([false]);

  // Initialize with formData if it exists, otherwise use default
  const educations = formData && formData.length > 0 ? formData : [{ ...emptyEducation }];

  const handleChange = (idx, e) => {
    const { name, value } = e.target;
    const updatedEducations = educations.map((ed, i) => i === idx ? { ...ed, [name]: value } : ed);
    updateFormData(updatedEducations);
  };

  const handleAddEducation = () => {
    const newEducations = [...educations, { ...emptyEducation }];
    updateFormData(newEducations);
    setShowCoursework((prev) => [...prev, false]);
  };

  const handleToggleCoursework = (idx) => {
    setShowCoursework((prev) => prev.map((v, i) => i === idx ? !v : v));
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
        <h1 style={{ fontSize: 36, fontWeight: 700, margin: '1.5rem 0 0.5rem' }}>Share your education journey</h1>
      )}
      {!isEditingMode && (
        <div style={{ color: '#374151', fontSize: 18, marginBottom: 24 }}>
          Include your higher education details-degree, courses, or institution.
        </div>
      )}
      {!isEditingMode && (
        <div style={{ color: '#ef4444', fontSize: 14, marginBottom: 8 }}>* indicates a required field</div>
      )}
      {educations.map((form, idx) => (
        <div key={idx} style={{ position: 'relative', border: '1.5px solid #d1d5db', borderRadius: 12, padding: 32, background: '#fff', marginBottom: 24 }}>
          {idx === 0 && (
            <button
              type="button"
              onClick={handleAddEducation}
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
              aria-label="Add another education"
            >
              +
            </button>
          )}
          <form style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <div style={{ flex: '1 1 350px', minWidth: 250 }}>
              <label style={{ fontWeight: 600 }}>School Name *</label>
              <input
                type="text"
                name="schoolName"
                value={form.schoolName}
                onChange={(e) => handleChange(idx, e)}
                placeholder="School Name"
                required
                style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
              />
            </div>
            <div style={{ flex: '1 1 350px', minWidth: 250 }}>
              <label style={{ fontWeight: 600 }}>School Location</label>
              <input
                type="text"
                name="schoolLocation"
                value={form.schoolLocation}
                onChange={(e) => handleChange(idx, e)}
                placeholder="Delhi, India"
                style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
              />
            </div>
            <div style={{ flex: '1 1 350px', minWidth: 250 }}>
              <label style={{ fontWeight: 600 }}>Field of Study</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={form.fieldOfStudy}
                onChange={(e) => handleChange(idx, e)}
                placeholder="Financial Accounting"
                style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
              />
            </div>
            <div style={{ flex: '1 1 350px', minWidth: 250 }}>
              <label style={{ fontWeight: 600 }}>Percentage</label>
              <input
                type="text"
                name="percentage"
                value={form.percentage}
                onChange={(e) => handleChange(idx, e)}
                placeholder="85%"
                style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
              />
            </div>
            <div style={{ flex: '1 1 350px', minWidth: 250 }}>
              <label style={{ fontWeight: 600 }}>Passing Date</label>
              <div style={{ display: 'flex', gap: 10 }}>
                <select
                  name="gradMonth"
                  value={form.gradMonth}
                  onChange={(e) => handleChange(idx, e)}
                  style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
                >
                  <option value="">Month</option>
                  {months.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <select
                  name="gradYear"
                  value={form.gradYear}
                  onChange={(e) => handleChange(idx, e)}
                  style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
                >
                  <option value="">Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </form>
          <div style={{ marginTop: 32, marginBottom: 24 }}>
            <div
              style={{ cursor: 'pointer', color: '#2563eb', fontWeight: 600, fontSize: 16, marginBottom: 8 }}
              onClick={() => handleToggleCoursework(idx)}
            >
              {showCoursework[idx] ? '▼' : '▶'} Add any additional coursework you\'re proud to showcase
            </div>
            {showCoursework[idx] && (
              <div style={{ padding: 16, background: '#f9fafb', borderRadius: 8, border: '1px solid #e5e7eb', marginBottom: 8 }}>
                <textarea
                  name="coursework"
                  value={form.coursework}
                  onChange={(e) => handleChange(idx, e)}
                  placeholder="List any additional coursework, achievements, or certifications..."
                  rows={3}
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16, resize: 'vertical' }}
                />
                <div style={{ marginTop: 8, fontSize: 15 }}>
                  <span style={{ color: '#2563eb', fontWeight: 600, cursor: 'pointer' }}>Look</span> here for sample resume references
                </div>
                <div style={{ marginTop: 16, background: '#e0e7ff', borderRadius: 6, padding: 12, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: 20, color: '#2563eb' }}>💡</span>
                  <div style={{ fontSize: 15, color: '#374151' }}>
                    <b>Pro Tip</b> If your bachelor\'s degree is in progress, you can include international exchange, educational achievements or any certification that corresponds to your desired job. An above-average grade, rank or CGPA (8.0 or higher) would be good to add too.
                  </div>
                </div>
              </div>
            )}
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
              Next: Experience
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

export default EducationTab;
