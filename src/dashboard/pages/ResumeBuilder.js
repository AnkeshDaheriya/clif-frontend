import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "lucide-react";
import SideBar from "../common/SideBar";
import Header from "../common/Header";
import { Trash2, Plus, Download } from "lucide-react";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  });

  const [experience, setExperience] = useState([
    { company: "", position: "", duration: "", responsibilities: "" },
  ]);

  const [education, setEducation] = useState([
    { institution: "", degree: "", year: "", gpa: "" },
  ]);

  const [skills, setSkills] = useState([""]);

  // Previous handlers remain the same...
  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleExperienceChange = (index, e) => {
    const newExperience = experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, [e.target.name]: e.target.value };
      }
      return exp;
    });
    setExperience(newExperience);
  };

  const handleEducationChange = (index, e) => {
    const newEducation = education.map((edu, i) => {
      if (i === index) {
        return { ...edu, [e.target.name]: e.target.value };
      }
      return edu;
    });
    setEducation(newEducation);
  };

  const handleSkillChange = (index, e) => {
    const newSkills = skills.map((skill, i) => {
      if (i === index) {
        return e.target.value;
      }
      return skill;
    });
    setSkills(newSkills);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      { company: "", position: "", duration: "", responsibilities: "" },
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { institution: "", degree: "", year: "", gpa: "" },
    ]);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const generatePDF = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
          <html>
            <head>
              <title>${personalInfo.name} - Resume</title>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; margin: 2em; }
                h1, h2 { color: #333; }
                .section { margin-bottom: 1.5em; }
                .item { margin-bottom: 1em; }
              </style>
            </head>
            <body>
              ${document.getElementById("resume-preview").innerHTML}
            </body>
          </html>
        `);
    printWindow.document.close();
    printWindow.print();
  };
  return (
    <div id="main-wrapper">
      <SideBar />
      <div className="page-wrapper jobs-wrapper">
        <Header />
        <div className="content-wrapper">
          <div className="row">
            <div className="col-12 p-4">
              <div className="grid">
                {/* Form Section */}
                <div className="card">
                  <div className="card-header">
                    <h1 className="card-title">Resume Builder</h1>
                  </div>
                  <div className="card-content">
                    {/* Personal Information */}
                    <div className="form-section">
                      <h2 className="section-header">Personal Information</h2>
                      <div className="form-grid">
                        <input
                          className="input"
                          name="name"
                          placeholder="Full Name"
                          value={personalInfo.name}
                          onChange={handlePersonalInfoChange}
                        />
                        <input
                          className="input"
                          name="email"
                          placeholder="Email"
                          value={personalInfo.email}
                          onChange={handlePersonalInfoChange}
                        />
                        <input
                          className="input"
                          name="phone"
                          placeholder="Phone"
                          value={personalInfo.phone}
                          onChange={handlePersonalInfoChange}
                        />
                        <input
                          className="input"
                          name="location"
                          placeholder="Location"
                          value={personalInfo.location}
                          onChange={handlePersonalInfoChange}
                        />
                      </div>
                      <textarea
                        className="textarea mb-4"
                        name="summary"
                        placeholder="Professional Summary"
                        value={personalInfo.summary}
                        onChange={handlePersonalInfoChange}
                      />
                    </div>

                    {/* Work Experience */}
                    <div className="form-section">
                      <div className="section-header">
                        <h2>Work Experience</h2>
                        <button
                          className="button button-primary"
                          onClick={addExperience}
                        >
                          <Plus size={16} /> Add Experience
                        </button>
                      </div>
                      {experience.map((exp, index) => (
                        <div key={index} className="card mb-4">
                          <div className="card-content">
                            <div className="form-grid">
                              <input
                                className="input"
                                name="company"
                                placeholder="Company"
                                value={exp.company}
                                onChange={(e) =>
                                  handleExperienceChange(index, e)
                                }
                              />
                              <input
                                className="input"
                                name="position"
                                placeholder="Position"
                                value={exp.position}
                                onChange={(e) =>
                                  handleExperienceChange(index, e)
                                }
                              />
                              <input
                                className="input"
                                name="duration"
                                placeholder="Duration"
                                value={exp.duration}
                                onChange={(e) =>
                                  handleExperienceChange(index, e)
                                }
                              />
                              <textarea
                                className="textarea"
                                name="responsibilities"
                                placeholder="Responsibilities"
                                value={exp.responsibilities}
                                onChange={(e) =>
                                  handleExperienceChange(index, e)
                                }
                              />
                            </div>
                            {experience.length > 1 && (
                              <button
                                className="button button-destructive button-sm mt-2"
                                onClick={() => removeExperience(index)}
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Education */}
                    <div className="form-section">
                      <div className="section-header">
                        <h2>Education</h2>
                        <button
                          className="button button-primary"
                          onClick={addEducation}
                        >
                          <Plus size={16} /> Add Education
                        </button>
                      </div>
                      {education.map((edu, index) => (
                        <div key={index} className="card mb-4">
                          <div className="card-content">
                            <div className="form-grid">
                              <input
                                className="input"
                                name="institution"
                                placeholder="Institution"
                                value={edu.institution}
                                onChange={(e) =>
                                  handleEducationChange(index, e)
                                }
                              />
                              <input
                                className="input"
                                name="degree"
                                placeholder="Degree"
                                value={edu.degree}
                                onChange={(e) =>
                                  handleEducationChange(index, e)
                                }
                              />
                              <input
                                className="input"
                                name="year"
                                placeholder="Year"
                                value={edu.year}
                                onChange={(e) =>
                                  handleEducationChange(index, e)
                                }
                              />
                              <input
                                className="input"
                                name="gpa"
                                placeholder="GPA"
                                value={edu.gpa}
                                onChange={(e) =>
                                  handleEducationChange(index, e)
                                }
                              />
                            </div>
                            {education.length > 1 && (
                              <button
                                className="button button-destructive button-sm mt-2"
                                onClick={() => removeEducation(index)}
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="form-section">
                      <div className="section-header">
                        <h2>Skills</h2>
                        <button
                          className="button button-primary"
                          onClick={addSkill}
                        >
                          <Plus size={16} /> Add Skill
                        </button>
                      </div>
                      <div className="form-grid">
                        {skills.map((skill, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              className="input"
                              placeholder="Skill"
                              value={skill}
                              onChange={(e) => handleSkillChange(index, e)}
                            />
                            {skills.length > 1 && (
                              <button
                                className="button button-destructive button-sm"
                                onClick={() => removeSkill(index)}
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Generate PDF Button */}
                    <button
                      className="button button-primary w-full"
                      onClick={generatePDF}
                    >
                      <Download size={16} /> Generate PDF
                    </button>
                  </div>
                </div>

                {/* Live Preview Section */}
                <div className="preview-container">
                  <div className="card">
                    <div className="card-header">
                      <h2 className="card-title">Live Preview</h2>
                    </div>
                    <div className="card-content">
                      <div id="resume-preview" className="resume-preview">
                        {/* Header */}
                        <div className="preview-header">
                          <h1 className="preview-name">
                            {personalInfo.name || "Your Name"}
                          </h1>
                          <div className="preview-contact">
                            {personalInfo.email && (
                              <span>{personalInfo.email}</span>
                            )}
                            {personalInfo.phone && (
                              <span> | {personalInfo.phone}</span>
                            )}
                            {personalInfo.location && (
                              <span> | {personalInfo.location}</span>
                            )}
                          </div>
                        </div>

                        {/* Summary */}
                        {personalInfo.summary && (
                          <div className="preview-section">
                            <h2 className="preview-section-title">
                              Professional Summary
                            </h2>
                            <p>{personalInfo.summary}</p>
                          </div>
                        )}

                        {/* Experience */}
                        {experience.some(
                          (exp) => exp.company || exp.position
                        ) && (
                          <div className="preview-section">
                            <h2 className="preview-section-title">
                              Work Experience
                            </h2>
                            {experience.map(
                              (exp, index) =>
                                (exp.company || exp.position) && (
                                  <div key={index} className="preview-item">
                                    <div className="preview-item-header">
                                      <h3 className="preview-item-title">
                                        {exp.position}
                                      </h3>
                                      <span className="preview-item-subtitle">
                                        {exp.duration}
                                      </span>
                                    </div>
                                    <div className="preview-item-subtitle">
                                      {exp.company}
                                    </div>
                                    <p>{exp.responsibilities}</p>
                                  </div>
                                )
                            )}
                          </div>
                        )}

                        {/* Education */}
                        {education.some(
                          (edu) => edu.institution || edu.degree
                        ) && (
                          <div className="preview-section">
                            <h2 className="preview-section-title">Education</h2>
                            {education.map(
                              (edu, index) =>
                                (edu.institution || edu.degree) && (
                                  <div key={index} className="preview-item">
                                    <div className="preview-item-header">
                                      <h3 className="preview-item-title">
                                        {edu.degree}
                                      </h3>
                                      <span className="preview-item-subtitle">
                                        {edu.year}
                                      </span>
                                    </div>
                                    <div className="preview-item-subtitle">
                                      {edu.institution}
                                      {edu.gpa && ` - GPA: ${edu.gpa}`}
                                    </div>
                                  </div>
                                )
                            )}
                          </div>
                        )}

                        {/* Skills */}
                        {skills.some((skill) => skill) && (
                          <div className="preview-section">
                            <h2 className="preview-section-title">Skills</h2>
                            <p>
                              {skills
                                .filter((skill) => skill.trim())
                                .join(", ")}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
