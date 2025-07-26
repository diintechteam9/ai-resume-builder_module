import React, { useState } from 'react';

const SummaryTab = (props) => {
  const { onGoBack, onNext, formData, updateFormData } = props;
  const isEditingMode = !onNext || !onGoBack; // Check if we're in editing mode

  // Initialize with formData if it exists, otherwise use default
  const summary = formData || '';

  const handleSummaryChange = (e) => {
    updateFormData(e.target.value);
  };

  const handleSave = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
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
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: '1.5rem 0 1.5rem' }}>
          Briefly tell us about your background
        </h1>
      )}
      <div style={{ background: '#f8faff', borderRadius: 16, padding: '28px 24px 24px 24px', marginBottom: 32, boxShadow: '0 2px 12px rgba(10,24,51,0.04)', position: 'relative' }}>
        <textarea
          value={summary}
          onChange={handleSummaryChange}
          placeholder="Write a brief summary about your background, experience, and goals..."
          rows={6}
          style={{
            width: '100%',
            padding: '16px',
            fontSize: 18,
            border: '1.5px solid #bfc6d1',
            borderRadius: 8,
            outline: 'none',
            background: 'white',
            resize: 'vertical',
            minHeight: 120,
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
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
              Generate
            </button>
          )}
        </div>
      </div>
      {!isEditingMode && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, marginTop: 32 }}>
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
        </div>
      )}
    </div>
  );
};

export default SummaryTab;
