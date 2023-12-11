// components/Form.js
import React, { useState } from 'react';

const Form = () => {

  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [education, setEducation] = useState([
    { school: '', degree: '', graduationYear: '' },
  ]);

  const [experience, setExperience] = useState([
    { company: '', position: '', startDate: '', endDate: '' },
  ]);

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleEducationChange = (index, e) => {
    const updatedEducation = [...education];
    updatedEducation[index][e.target.name] = e.target.value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, e) => {
    const updatedExperience = [...experience];
    updatedExperience[index][e.target.name] = e.target.value;
    setExperience(updatedExperience);
  };

  const addEducationField = () => {
    setEducation([...education, { school: '', degree: '', graduationYear: '' }]);
  };

  const addExperienceField = () => {
    setExperience([...experience, { company: '', position: '', startDate: '', endDate: '' }]);
  };

  return (
    <form className="p-4" >
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={personalInfo.fullName}
          onChange={handlePersonalInfoChange}
          className="mt-1 p-2 border rounded-md w-full text-lg opacity-[70%] text-black"
        />
      </div>
      {/* Add more personal information fields as needed (email, phone, etc.) */}

      <h2 className="text-xl font-semibold my-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`school${index}`} className="block text-sm font-medium text-gray-700">
            School
          </label>
          <input
            type="text"
            id={`school${index}`}
            name="school"
            value={edu.school}
            onChange={(e) => handleEducationChange(index, e)}
            className="mt-1 p-2 border rounded-md w-full text-lg opacity-[70%] text-black"
          />
          {/* Add more education fields as needed (degree, graduation year, etc.) */}
        </div>
      ))}
      <button type="button" onClick={addEducationField} className="text-blue-500">
        Add Education
      </button>

      <h2 className="text-xl font-semibold my-4">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`company${index}`} className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            id={`company${index}`}
            name="company"
            value={exp.company}
            onChange={(e) => handleExperienceChange(index, e)}
            className="mt-1 p-2 border rounded-md w-full text-lg opacity-[70%] text-black"
          />
          {/* Add more experience fields as needed (position, start date, end date, etc.) */}
        </div>
      ))}
      <button type="button" onClick={addExperienceField} className="text-blue-500">
        Add Experience
      </button>
    </form>
  );
};

export default Form;
