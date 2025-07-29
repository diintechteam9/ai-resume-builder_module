import React, { useState } from 'react';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';

const templateData = [
  {
    color: '#2563eb',
    recommended: true,
    accent: '#2563eb',
    bg: '#e0e7ef',
  },
  {
    color: '#222',
    recommended: true,
    accent: '#222',
    bg: '#fff',
  },
  {
    color: '#65a30d',
    recommended: false,
    accent: '#65a30d',
    bg: '#f7fbe7',
  },
];

const colorOptions = [
  '#222', '#7c3aed', '#a21caf', '#f59e42', '#2563eb', '#65a30d', '#059669', '#fbbf24', '#e11d48', '#0ea5e9',
];

const TemplateTab = ({ onUseTemplate }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'transparent', padding: '32px 0 0 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, textAlign: 'center', marginBottom: 8, color: '#1e1e2f' }}>
          Best templates for students
        </h1>
        <div style={{ fontSize: 18, color: '#444', textAlign: 'center', marginBottom: 36 }}>
          You can always change your template later.
        </div>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 40 }}>
          {templateData.map((tpl, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              style={{
                background: '#fff',
                border: selectedIdx === idx ? '3px solid #2563eb' : '3px solid #e5e7eb',
                borderRadius: 8,
                boxShadow: '0 2px 12px rgba(10,24,51,0.08)',
                width: 380,
                minHeight: 480,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border 0.2s',
              }}
            >
              {/* Template preview placeholder or actual template */}
              <div style={{
                width: '100%',
                height: 430,
                background: tpl.bg,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 60,
                color: tpl.accent,
                position: 'relative',
                overflow: 'hidden',
                padding: 0,
              }}>
                {idx === 0 ? (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      marginTop: '470px',
                      marginLeft: '160px',
                      transform: 'scale(0.48)',
                      transformOrigin: 'top left',
                      width: 500,
                      height: 900,
                      pointerEvents: 'none',
                      boxSizing: 'border-box',
                    }}>
                      <Template1 />
                    </div>
                  </div>
                ) : idx === 1 ? (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      marginTop: '470px',
                      marginLeft: '160px',
                      transform: 'scale(0.48)',
                      transformOrigin: 'top left',
                      width: 500,
                      height: 900,
                      pointerEvents: 'none',
                      boxSizing: 'border-box',
                    }}>
                      <Template2 />
                    </div>
                  </div>
                ) : (
                  <span role="img" aria-label="resume">📄</span>
                )}
              </div>
              {/* RECOMMENDED label */}
              {tpl.recommended && (
                <div style={{
                  position: 'absolute',
                  bottom: 5,
                  left: 0,
                  right: 0,
                  margin: '0 auto',
                  width: '90%',
                  background: '#fbbf24',
                  color: '#7c3aed',
                  fontWeight: 700,
                  fontSize: 15,
                  borderRadius: 6,
                  textAlign: 'center',
                  padding: '4px 0',
                  letterSpacing: 1,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}>
                  RECOMMENDED
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Action buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 32 }}>
          <button style={{
            background: 'none',
            color: '#7c3aed',
            border: 'none',
            fontWeight: 700,
            fontSize: 18,
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: '10px 24px',
          }}>Choose later</button>
          <button
            style={{
              background: '#6b3b7a',
              color: 'white',
              border: 'none',
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 24,
              padding: '10px 32px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
            onClick={() => onUseTemplate && onUseTemplate(selectedIdx)}
          >
            Use this template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateTab;
