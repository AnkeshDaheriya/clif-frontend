import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search, Check } from "lucide-react";
import SideBar from "../common/SideBar";
import Header from "../common/Header";
import { Trash2, Plus, Download, Camera, Edit } from "lucide-react";
import "./ResumeBuilderTheme.css";
import "./ResumeBuilder.css";
import ThemeSelector from "./ThemeSelector";

const ResumeBuilder = () => {
  const [selectedTheme, setSelectedTheme] = useState("classic");
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    photo: null,
    signature: null,
  });

  const [experience, setExperience] = useState([
    { company: "", position: "", duration: "", responsibilities: "" },
  ]);

  const [education, setEducation] = useState([
    { institution: "", degree: "", year: "", gpa: "" },
  ]);

  const [skills, setSkills] = useState([""]);

  const [certificates, setCertificates] = useState([
    { name: "", issuer: "", year: "", description: "" },
  ]);

  const [achievements, setAchievements] = useState([
    { title: "", organization: "", year: "", description: "" },
  ]);

  const photoInputRef = useRef(null);
  const signatureInputRef = useRef(null);

  const handleThemeChange = (themeId) => {
    setSelectedTheme(themeId);
  };

  const getThemeStyles = () => {
    switch (selectedTheme) {
      case "modern":
        return {
          container: "modern-theme",
          header: "flex items-center gap-6 mb-8",
          photo: "profile-photo",
          name: "text-3xl font-bold mb-2",
          content: "space-y-6",
          section: "mb-6",
          sectionTitle: "text-xl font-semibold mb-4",
        };
      case "minimal":
        return {
          container: "minimal-theme",
          header: "text-center mb-8",
          photo: "profile-photo",
          name: "text-2xl font-light mb-2",
          content: "space-y-6",
          section: "mb-6",
          sectionTitle: "text-md uppercase tracking-wide",
        };
      case "creative":
        return {
          container: "creative-theme",
          header: "flex justify-between items-start mb-12",
          photo: "profile-photo",
          name: "text-4xl font-bold mb-2",
          content: "space-y-8",
          section: "mb-8",
          sectionTitle: "text-xl font-bold mb-4",
        };
      default: // classic
        return {
          container: "classic-theme",
          header: "mb-6",
          photo: "profile-photo",
          name: "text-2xl font-semibold mb-2",
          content: "space-y-6",
          section: "mb-6",
          sectionTitle: "text-xl font-semibold mb-4",
        };
    }
  };

  // Previous handlers remain the same...
  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPersonalInfo({
          ...personalInfo,
          photo: event.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSignatureUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPersonalInfo({
          ...personalInfo,
          signature: event.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
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

  const handleCertificateChange = (index, e) => {
    const newCertificates = certificates.map((cert, i) => {
      if (i === index) {
        return { ...cert, [e.target.name]: e.target.value };
      }
      return cert;
    });
    setCertificates(newCertificates);
  };

  const handleAchievementChange = (index, e) => {
    const newAchievements = achievements.map((achieve, i) => {
      if (i === index) {
        return { ...achieve, [e.target.name]: e.target.value };
      }
      return achieve;
    });
    setAchievements(newAchievements);
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

  const addCertificate = () => {
    setCertificates([
      ...certificates,
      { name: "", issuer: "", year: "", description: "" },
    ]);
  };

  const addAchievement = () => {
    setAchievements([
      ...achievements,
      { title: "", organization: "", year: "", description: "" },
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

  const removeCertificate = (index) => {
    setCertificates(certificates.filter((_, i) => i !== index));
  };

  const removeAchievement = (index) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const removePhoto = () => {
    setPersonalInfo({
      ...personalInfo,
      photo: null,
    });
  };

  const removeSignature = () => {
    setPersonalInfo({
      ...personalInfo,
      signature: null,
    });
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
                .signature-container { margin-top: 2em; text-align: right; }
                .signature-image { max-height: 60px; }
                .photo-container { float: right; margin-left: 1em; }
                .photo-container img { max-width: 120px; border-radius: 4px; }
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

                      {/* Photo Upload */}
                      <div className="photo-upload-container mb-4">
                        <div className="photo-preview-container">
                          {personalInfo.photo ? (
                            <div className="photo-preview">
                              <img src={personalInfo.photo} alt="Profile" />
                              <button
                                className="button button-destructive button-sm remove-photo"
                                onClick={removePhoto}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ) : (
                            <div
                              className="photo-placeholder"
                              onClick={() => photoInputRef.current.click()}
                            >
                              <Camera size={24} />
                              <span>Add Photo</span>
                            </div>
                          )}
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          ref={photoInputRef}
                          onChange={handlePhotoUpload}
                          style={{ display: "none" }}
                        />
                      </div>

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

                      {/* Signature Upload */}
                      <div className="signature-upload-container mb-4">
                        <label className="form-label">Signature</label>
                        {personalInfo.signature ? (
                          <div className="signature-preview">
                            <img src={personalInfo.signature} alt="Signature" />
                            <button
                              className="button button-destructive button-sm remove-signature"
                              onClick={removeSignature}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ) : (
                          <div
                            className="signature-placeholder"
                            onClick={() => signatureInputRef.current.click()}
                          >
                            <Edit size={24} />
                            <span>Add Signature</span>
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          ref={signatureInputRef}
                          onChange={handleSignatureUpload}
                          style={{ display: "none" }}
                        />
                      </div>
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

                    {/* Certificates */}
                    <div className="form-section">
                      <div className="section-header">
                        <h2>Certificates</h2>
                        <button
                          className="button button-primary"
                          onClick={addCertificate}
                        >
                          <Plus size={16} /> Add Certificate
                        </button>
                      </div>
                      {certificates.map((cert, index) => (
                        <div key={index} className="card mb-4">
                          <div className="card-content">
                            <div className="form-grid">
                              <input
                                className="input"
                                name="name"
                                placeholder="Certificate Name"
                                value={cert.name}
                                onChange={(e) =>
                                  handleCertificateChange(index, e)
                                }
                              />
                              <input
                                className="input"
                                name="issuer"
                                placeholder="Issuing Organization"
                                value={cert.issuer}
                                onChange={(e) =>
                                  handleCertificateChange(index, e)
                                }
                              />
                              <input
                                className="input"
                                name="year"
                                placeholder="Year"
                                value={cert.year}
                                onChange={(e) =>
                                  handleCertificateChange(index, e)
                                }
                              />
                              <textarea
                                className="textarea"
                                name="description"
                                placeholder="Description"
                                value={cert.description}
                                onChange={(e) =>
                                  handleCertificateChange(index, e)
                                }
                              />
                            </div>
                            {certificates.length > 1 && (
                              <button
                                className="button button-destructive button-sm mt-2"
                                onClick={() => removeCertificate(index)}
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="form-section">
                      <div className="section-header">
                        <h2>Achievements</h2>
                        <button
                          className="button button-primary"
                          onClick={addAchievement}
                        >
                          <Plus size={16} /> Add Achievement
                        </button>
                      </div>
                      {achievements.map((achieve, index) => (
                        <div key={index} className="card mb-4">
                          <div className="card-content">
                            <div className="form-grid">
                              <input
                                className="input"
                                name="title"
                                placeholder="Achievement Title"
                                value={achieve.title}
                                onChange={(e) =>
                                  handleAchievementChange(index, e)
                                }
                              />
                              <input
                                className="input"
                                name="organization"
                                placeholder="Organization"
                                value={achieve.organization}
                                onChange={(e) =>
                                  handleAchievementChange(index, e)
                                }
                              />
                              <input
                                className="input"
                                name="year"
                                placeholder="Year"
                                value={achieve.year}
                                onChange={(e) =>
                                  handleAchievementChange(index, e)
                                }
                              />
                              <textarea
                                className="textarea"
                                name="description"
                                placeholder="Description"
                                value={achieve.description}
                                onChange={(e) =>
                                  handleAchievementChange(index, e)
                                }
                              />
                            </div>
                            {achievements.length > 1 && (
                              <button
                                className="button button-destructive button-sm mt-2"
                                onClick={() => removeAchievement(index)}
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
                      <div
                        id="resume-preview"
                        className={`resume-preview ${
                          getThemeStyles().container
                        }`}
                      >
                        {/* Header */}
                        <div className={getThemeStyles().header}>
                          {personalInfo.photo && (
                            <img
                              src={personalInfo.photo}
                              alt="Profile"
                              className={getThemeStyles().photo}
                            />
                          )}
                          <div>
                            <h1 className={getThemeStyles().name}>
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
                        </div>

                        <div className={getThemeStyles().content}>
                          {/* Summary */}
                          {personalInfo.summary && (
                            <div className={getThemeStyles().section}>
                              <h2 className={getThemeStyles().sectionTitle}>
                                Professional Summary
                              </h2>
                              <p>{personalInfo.summary}</p>
                            </div>
                          )}

                          {/* Experience */}
                          {experience.some(
                            (exp) => exp.company || exp.position
                          ) && (
                            <div className={getThemeStyles().section}>
                              <h2 className={getThemeStyles().sectionTitle}>
                                Work Experience
                              </h2>
                              {experience.map(
                                (exp, index) =>
                                  (exp.company || exp.position) && (
                                    <div
                                      key={index}
                                      className="preview-item mb-4"
                                    >
                                      <div className="flex justify-between items-baseline">
                                        <h3 className="font-semibold text-gray-800">
                                          {exp.position}
                                        </h3>
                                        <span className="text-gray-600 text-sm">
                                          {exp.duration}
                                        </span>
                                      </div>
                                      <div className="text-gray-600">
                                        {exp.company}
                                      </div>
                                      <p className="mt-2 text-gray-700">
                                        {exp.responsibilities}
                                      </p>
                                    </div>
                                  )
                              )}
                            </div>
                          )}

                          {/* Education */}
                          {education.some(
                            (edu) => edu.institution || edu.degree
                          ) && (
                            <div className={getThemeStyles().section}>
                              <h2 className={getThemeStyles().sectionTitle}>
                                Education
                              </h2>
                              {education.map(
                                (edu, index) =>
                                  (edu.institution || edu.degree) && (
                                    <div
                                      key={index}
                                      className="preview-item mb-4"
                                    >
                                      <div className="flex justify-between items-baseline">
                                        <h3 className="font-semibold text-gray-800">
                                          {edu.degree}
                                        </h3>
                                        <span className="text-gray-600 text-sm">
                                          {edu.year}
                                        </span>
                                      </div>
                                      <div className="text-gray-600">
                                        {edu.institution}
                                        {edu.gpa && ` - GPA: ${edu.gpa}`}
                                      </div>
                                    </div>
                                  )
                              )}
                            </div>
                          )}

                          {/* Certificates */}
                          {certificates.some(
                            (cert) => cert.name || cert.issuer
                          ) && (
                            <div className={getThemeStyles().section}>
                              <h2 className={getThemeStyles().sectionTitle}>
                                Certificates
                              </h2>
                              {certificates.map(
                                (cert, index) =>
                                  (cert.name || cert.issuer) && (
                                    <div
                                      key={index}
                                      className="preview-item mb-4"
                                    >
                                      <div className="flex justify-between items-baseline">
                                        <h3 className="font-semibold text-gray-800">
                                          {cert.name}
                                        </h3>
                                        <span className="text-gray-600 text-sm">
                                          {cert.year}
                                        </span>
                                      </div>
                                      <div className="text-gray-600">
                                        {cert.issuer}
                                      </div>
                                      <p className="mt-2 text-gray-700">
                                        {cert.description}
                                      </p>
                                    </div>
                                  )
                              )}
                            </div>
                          )}

                          {/* Achievements */}
                          {achievements.some(
                            (achieve) => achieve.title || achieve.organization
                          ) && (
                            <div className={getThemeStyles().section}>
                              <h2 className={getThemeStyles().sectionTitle}>
                                Achievements
                              </h2>
                              {achievements.map(
                                (achieve, index) =>
                                  (achieve.title || achieve.organization) && (
                                    <div
                                      key={index}
                                      className="preview-item mb-4"
                                    >
                                      <div className="flex justify-between items-baseline">
                                        <h3 className="font-semibold text-gray-800">
                                          {achieve.title}
                                        </h3>
                                        <span className="text-gray-600 text-sm">
                                          {achieve.year}
                                        </span>
                                      </div>
                                      <div className="text-gray-600">
                                        {achieve.organization}
                                      </div>
                                      <p className="mt-2 text-gray-700">
                                        {achieve.description}
                                      </p>
                                    </div>
                                  )
                              )}
                            </div>
                          )}

                          {/* Skills */}
                          {skills.some((skill) => skill) && (
                            <div className={getThemeStyles().section}>
                              <h2 className={getThemeStyles().sectionTitle}>
                                Skills
                              </h2>
                              <div className="flex flex-wrap gap-2">
                                {skills
                                  .filter((skill) => skill.trim())
                                  .map((skill, index) => (
                                    <span
                                      key={index}
                                      className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Signature */}
                        {personalInfo.signature && (
                          <div className="mt-8 text-right">
                            <img
                              src={personalInfo.signature}
                              alt="Signature"
                              className="inline-block max-h-16"
                            />
                          </div>
                        )}
                      </div>

                      {/* Theme Options */}

                      <ThemeSelector
                        selectedTheme={selectedTheme}
                        onThemeChange={setSelectedTheme}
                      />
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
