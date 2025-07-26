import React, { useState, useRef } from 'react';

const HeadingTab = (props) => {
  const { onGoBack, onNext, formData, updateFormData } = props;
  const isEditingMode = !onNext || !onGoBack; // Check if we're in editing mode
  const fileInputRef = useRef(null);

  // Initialize with formData if it exists, otherwise use default
  const heading = formData || {
    firstName: '',
    surname: '',
    profession: '',
    city: '',
    country: '',
    pin: '',
    phone: '',
    email: '',
    photo: null,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...heading, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateFormData({ ...heading, photo: event.target.result });
      };
      reader.readAsDataURL(file);
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
          Let's start with the basics
        </h1>
      )}
      {!isEditingMode && (
        <div style={{ color: '#22223b', fontSize: 20, marginBottom: 8 }}>
          Tell us about yourself to get started.
        </div>
      )}
      {!isEditingMode && (
        <div style={{ color: '#ef4444', fontSize: 14, marginBottom: 18 }}>* indicates a required field</div>
      )}
      <div style={{ background: '#f8faff', borderRadius: 16, padding: '28px 24px 24px 24px', marginBottom: 32, boxShadow: '0 2px 12px rgba(10,24,51,0.04)', position: 'relative' }}>
        {/* Photo Upload - First Row */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ position: 'relative', width: 110, height: 110, marginBottom: 12 }}>
            <div style={{ width: 110, height: 110, borderRadius: '50%', background: '#f1f5f9', border: '2.5px solid #2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: '0 2px 8px rgba(30,41,59,0.08)' }}>
              {heading.photo ? (
                <img src={heading.photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              ) : (
                <span role="img" aria-label="avatar" style={{ fontSize: 48, color: '#cbd5e1' }}>👤</span>
              )}
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 38,
                height: 38,
                fontSize: 20,
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(30,41,59,0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 0
              }}
              aria-label="Upload photo"
            >
              <span role="img" aria-label="upload">📷</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{ display: 'none' }}
            />
          </div>
          <div style={{ color: '#64748b', fontSize: 15, fontWeight: 500 }}>Upload a passport size photo</div>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {/* First Name and Surname - Second Row */}
          <div style={{ flex: '1 1 350px', minWidth: 250 }}>
            <label style={{ fontWeight: 600 }}>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={heading.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
            />
          </div>
          <div style={{ flex: '1 1 350px', minWidth: 250 }}>
            <label style={{ fontWeight: 600 }}>Surname *</label>
            <input
              type="text"
              name="surname"
              value={heading.surname}
              onChange={handleChange}
              placeholder="Surname"
              required
              style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
            />
          </div>
          {/* Profession - Third Row */}
          <div style={{ flex: '1 1 350px', minWidth: 250 }}>
            <label style={{ fontWeight: 600 }}>Profession *</label>
            <input
              type="text"
              name="profession"
              value={heading.profession}
              onChange={handleChange}
              placeholder="e.g., Software Engineer"
              required
              style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
            />
          </div>
          {/* City, Country, Pin - Fourth Row */}
          <div style={{ flex: '1 1 350px', minWidth: 250 }}>
            <label style={{ fontWeight: 600 }}>City *</label>
            <input
              type="text"
              name="city"
              value={heading.city}
              onChange={handleChange}
              placeholder="City"
              required
              style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
            />
          </div>
          <div style={{ flex: '1 1 350px', minWidth: 250 }}>
            <label style={{ fontWeight: 600 }}>Country *</label>
            <input
              type="text"
              name="country"
              value={heading.country}
              onChange={handleChange}
              placeholder="Country"
              required
              style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
            />
          </div>
          <div style={{ flex: '1 1 350px', minWidth: 250 }}>
            <label style={{ fontWeight: 600 }}>Pin Code *</label>
            <input
              type="text"
              name="pin"
              value={heading.pin}
              onChange={handleChange}
              placeholder="Pin Code"
              required
              style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
            />
          </div>
          {/* Phone and Email - Fifth Row */}
          <div style={{ flex: '1 1 350px', minWidth: 250 }}>
            <label style={{ fontWeight: 600 }}>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={heading.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
            />
          </div>
          <div style={{ flex: '1 1 350px', minWidth: 250 }}>
            <label style={{ fontWeight: 600 }}>Email *</label>
            <input
              type="email"
              name="email"
              value={heading.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              style={{ width: '100%', padding: 10, marginTop: 6, marginBottom: 18, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }}
            />
          </div>
        </div>
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
              Next: Education
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

export default HeadingTab;
