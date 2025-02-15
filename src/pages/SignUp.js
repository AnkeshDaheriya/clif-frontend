import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderFour from "../common/header/HeaderFour";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { FaMehBlank } from "react-icons/fa";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABWVHcf0TTRvkcDpmhw9pAgFFRlgUteY",
  authDomain: "clif-864a1.firebaseapp.com",
  projectId: "clif-864a1",
  storageBucket: "clif-864a1.firebasestorage.app",
  messagingSenderId: "275052466574",
  appId: "1:275052466574:web:aa2752b7634990818b54df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const API_BASE_URL = "http://localhost:5000";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
    otp: "",
    education: "",
    yearOfCompletion: "",
    professionalDomain: "",
    currentRole: "",
    currentSalary: "",
    desiredRole: "",
    desiredSalary: "",
    linkedinUrl: "",
    fileUpload: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [loginSent, setLoginSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [googleVerified, setGoogleVerified] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  const handleResumeSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!resumeFile) {
      setFormErrors((prev) => ({
        ...prev,
        resume: "Please upload a resume.",
      }));
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile); // Add the resume file to FormData

    try {
      // Make the API call to upload the resume
      const response = await fetch(`${API_BASE_URL}/resume/upload`, {
        method: "POST",
        body: formData, // Send the FormData containing the resume file
      });

      if (!response.ok) {
        throw new Error(`Failed to process resume. Status: ${response.status}`);
      }

      const resumeData = await response.json();
      console.log("Resume Data:", resumeData); // Log the entire response

      if (!resumeData.success || !resumeData.extractedText) {
        throw new Error("Resume processing failed. No extracted data found.");
      }

      // Extracting data from the resume response
      const extractedText = resumeData.extractedText;
      const {
        Education = [],
        skills = {},
        experience = [],
        personal_info = {},
      } = extractedText;

      // Log extracted information
      console.log("Extracted Text:", extractedText);

      // Extract personal information
      const firstName = personal_info?.name || "";
      const lastName = personal_info?.fatherName || ""; // Assuming father’s name as last name
      const email = personal_info?.email || "";
      const phone_no = personal_info?.phone || "";
      const current_location = personal_info?.location?.city || "";

      console.log("Extracted Name:", firstName, lastName);

      // Get the latest education
      const latestEducation =
        Education.find((edu) => edu.degree?.toLowerCase() === "mca") ||
        Education[0] ||
        {};

      // Determine education level
      let educationLevel = "Others";
      if (latestEducation?.degree?.toLowerCase() === "bsc") {
        educationLevel = "Bachelors";
      } else if (latestEducation?.degree?.toLowerCase() === "mca") {
        educationLevel = "Masters";
      }

      // Calculate age if DOB is available
      const age =
        personal_info?.DOB && !isNaN(new Date(personal_info.DOB).getFullYear())
          ? new Date().getFullYear() - new Date(personal_info.DOB).getFullYear()
          : "";

      // Update form values with extracted data
      setFormValues((prev) => ({
        ...prev,
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone_no: phone_no,
        current_location: current_location,

        // Education
        education: educationLevel,
        yearOfCompletion: latestEducation?.year || prev.yearOfCompletion, // Extracting the year
        specialization: latestEducation?.field || prev.specialization, // Field of study

        // Skills
        professionalDomain:
          skills?.technical_skills?.length > 0
            ? "Technology"
            : prev.professionalDomain,

        // Additional Info
        age: age,
        gender: personal_info?.gender || prev.gender,
      }));
      console.log("test for dtata", formValues);

      setLoginSent(true);
      return resumeData?.fileUrl || null;
    } catch (error) {
      console.error("Error during resume submission:", error.message);
      setFormErrors((prev) => ({
        ...prev,
        resume: "Failed to submit resume. Please try again.",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: files[0],
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  // Add Google Sign Up handler
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { email, displayName } = result.user;
      const nameParts = displayName.split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts[1] : "";

      // Update form values with Google data
      setFormValues((prev) => ({
        ...prev,
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: "",
      }));
      // Set OTP as verified since Google auth is already verified
      setOtpVerified(true);
      setGoogleVerified(true);
    } catch (error) {
      console.error("Google sign up error:", error);
      setFormErrors((prev) => ({
        ...prev,
        google: "Google sign up failed. Please try again.",
      }));
    }
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    // console.log("first", formValues);
    e.preventDefault();
    const errors = validate(formValues);

    setFormErrors(errors);
    // console.log(googleVerified);
    if (googleVerified) {
      setFormErrors({ password: "", cpassword: "" });
    }
    // console.log("Error", formErrors);
    if (Object.keys(errors).length === 0) {
      if (!otpSent) {
        sendOtp(formValues.email);
      } else if (otpSent && !otpVerified) {
        verifyOtp(formValues.email, formValues.otp);
      }
    }
    if (otpVerified) {
      // **📌 Step 3: Signup API**
      // console.log("test form data", formValues);
      try {
        // console.log("test form data1", formValues);
        const response = await axios.post(
          `${API_BASE_URL}/auth/signup`,
          formValues,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (response.data.success) {
          alert("Signup Successful!");
          navigate("/dashboard");
        } else if (response.data) {
          if (response.data.status === 409) {
            alert(response.data.message);
            // console.log(response.data.message);
          }
          if (response.data.status === 400) {
            alert(response.data.message);
          }
        } else {
          console.log("error", response.data);
          throw new Error("Signup Failed");
        }
      } catch (error) {
        console.error("Signup Error:", error);
        alert("Signup failed. Please try again.");
      }
    }
    // console.log(formValues);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const sendOtp = async (email) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/send-otp`, {
        email,
      });

      if (response.data.success) {
        setOtpSent(true);
        alert("OTP Sent Successfully!");
      } else {
        throw new Error("Failed to send OTP");
      }
    } catch (error) {
      console.error("OTP Send Error:", error);
      alert("Error sending OTP. Please try again.");
    }
  };

  const verifyOtp = async (email, otp) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, {
        email,
        otp,
      });

      if (response.data.success) {
        setOtpVerified(true);
        alert("OTP Verified Successfully!");
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      alert("Invalid OTP. Please try again.");
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.firstname) {
      errors.firstname = "Firstname is required";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!otpSent && !values.password) {
      errors.password = "Password is required";
    }
    if (!otpSent && !values.cpassword) {
      errors.cpassword = "Confirm password is required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Passwords do not match";
    }
    if (otpSent && !values.otp) {
      errors.otp = "OTP is required";
    }
    return errors;
  };

  return (
    <main className="main-wrapper">
      <HeaderFour />
      <div className="section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-6">
              <div className="contact-form-box shadow-box">
                {!otpVerified ? (
                  <>
                    {!otpSent ? (
                      <>
                        <h3 className="title text-center">Sign Up</h3>
                        <h5 className="text-center">
                          Already a member?
                          <Link to="/login" style={{ color: "#6600CC" }}>
                            &nbsp; Sign In
                          </Link>
                        </h5>
                        <button
                          type="button"
                          onClick={handleGoogleSignUp}
                          className="axil-btn btn-fill-light btn-fluid btn-light"
                          style={{
                            height: "46px",
                            marginTop: "5px",
                            marginBottom: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#FFFFFF",
                          }}>
                          <img
                            src="https://www.svgrepo.com/show/452216/google.svg"
                            alt="Google Icon"
                            style={{ height: "24px", width: "24px" }}
                          />
                          &nbsp; Continue with Google
                        </button>
                        <div className="d-flex align-items-center justify-content-center my-3 mt-5">
                          <hr className="flex-grow-1" />
                          <span className="mx-2">or</span>
                          <hr className="flex-grow-1" />
                        </div>
                        <form
                          onSubmit={handleSubmit}
                          className="axil-contact-form">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>First name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="First name"
                                  name="firstname"
                                  value={formValues.firstname}
                                  onChange={handleChange}
                                />
                              </div>
                              <p className="text-red">{formErrors.firstname}</p>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>Last name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last name"
                                  name="lastname"
                                  value={formValues.lastname}
                                  onChange={handleChange}
                                />
                              </div>
                              <p className="text-red">{formErrors.lastname}</p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Email address*</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="name@gmail.com"
                              name="email"
                              value={formValues.email}
                              onChange={handleChange}
                              disabled={otpSent}
                            />
                          </div>
                          <p className="text-red">{formErrors.email}</p>

                          <div className="form-group">
                            <label>Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="******"
                              name="password"
                              value={formValues.password}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">{formErrors.password}</p>

                          <div className="form-group">
                            <label>Confirm Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="******"
                              name="cpassword"
                              value={formValues.cpassword}
                              onChange={handleChange}
                            />
                          </div>
                          <p className="text-red">{formErrors.cpassword}</p>
                          <div className="form-group text-start">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="checkbox"
                                name="checkbox"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="checkbox">
                                I agree to the with{" "}
                                <Link to="">
                                  <u> Terms of services </u>
                                </Link>{" "}
                                and{" "}
                                <Link to="">
                                  {" "}
                                  <u>privacy policy</u>{" "}
                                </Link>
                              </label>
                            </div>
                          </div>

                          <div className="form-group gap-2 flex">
                            <button
                              type="submit"
                              className="axil-btn btn-fill-primary btn-fluid btn-primary"
                              name="submit-btn">
                              Sign Up
                            </button>
                          </div>

                          {formErrors.google && (
                            <p className="text-red text-center mt-2">
                              {formErrors.google}
                            </p>
                          )}
                        </form>
                      </>
                    ) : (
                      <div className="title text-center">
                        OTP has been sent! Please verify.
                      </div>
                    )}
                    {otpSent && (
                      <form
                        onSubmit={handleSubmit}
                        className="axil-contact-form">
                        <div className="form-group">
                          <label>Email address*</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="name@gmail.com"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            disabled={otpSent}
                          />
                        </div>
                        <p className="text-red">{formErrors.email}</p>
                        <div className="form-group">
                          <label>OTP*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter OTP"
                            name="otp"
                            value={formValues.otp}
                            onChange={handleChange}
                          />
                        </div>
                        <p className="text-red">{formErrors.otp}</p>

                        <div className="form-group">
                          <button
                            type="submit"
                            className="axil-btn btn-fill-primary btn-fluid btn-primary"
                            name="submit-btn">
                            Verify OTP
                          </button>
                        </div>
                      </form>
                    )}
                  </>
                ) : (
                  <div>
                    <h5 className="text-center">Welcome to CLIF.AI</h5>
                    {!loginSent ? (
                      <form
                        onSubmit={handleResumeSubmit}
                        className="axil-contact-form">
                        {/* Resume Upload Field */}
                        <div className="form-group">
                          <label>Upload Resume*</label>
                          <input
                            type="file"
                            className="form-control"
                            name="resume"
                            onChange={handleFileChange} // Handle file change
                            required
                          />
                          {formErrors.resume && (
                            <p className="error-message">{formErrors.resume}</p>
                          )}
                        </div>

                        {/* Buttons */}
                        <div className="form-group gap-2 flex">
                          <button
                            type="submit"
                            className="axil-btn btn-fill-primary btn-fluid btn-primary"
                            name="submit-btn">
                            Continue
                          </button>
                        </div>
                      </form>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        className="axil-contact-form">
                        <div className="row">
                          {/* First Name */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                name="firstname"
                                value={formValues.firstname}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <p className="text-red">{formErrors.firstname}</p>
                          </div>

                          {/* Last Name */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                name="lastname"
                                value={formValues.lastname}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <p className="text-red">{formErrors.lastname}</p>
                          </div>
                          {/* Upload Professional Headshot */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Upload Professional Headshot</label>
                              <input
                                type="file"
                                className="form-control"
                                name="headshot"
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <p className="text-red">{formErrors.headshot}</p>
                          </div>
                        </div>
                        <div className="row">
                          {/* Age Range */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Age Range</label>
                              {[
                                "Below 18",
                                "18 – 25",
                                "26 – 34",
                                "35 – 45",
                                "45 – 55",
                                "56 and above",
                              ].map((age, index) => (
                                <div className="form-check" key={index}>
                                  <input
                                    type="radio"
                                    id={`age${index}`}
                                    name="age"
                                    value={age}
                                    onChange={handleChange}
                                    className="form-check-input"
                                    required
                                  />
                                  <label
                                    htmlFor={`age${index}`}
                                    className="form-check-label">
                                    {age}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <p className="text-red">{formErrors.age}</p>
                          </div>

                          {/* Mobile Number */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Mobile No.</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone No."
                                name="phone_no"
                                value={formValues.phone_no}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <p className="text-red">{formErrors.phone_no}</p>
                          </div>

                          {/* Gender */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Gender</label>
                              {["Male", "Female", "Rather not specify"].map(
                                (gender, index) => (
                                  <div className="form-check" key={index}>
                                    <input
                                      type="radio"
                                      id={`gender${index}`}
                                      name="gender"
                                      value={gender}
                                      checked={formValues.gender === gender}
                                      onChange={handleChange}
                                      className="form-check-input"
                                      required
                                    />
                                    <label
                                      htmlFor={`gender${index}`}
                                      className="form-check-label">
                                      {gender}
                                    </label>
                                  </div>
                                )
                              )}
                            </div>
                            <p className="text-red">{formErrors.gender}</p>
                          </div>
                        </div>
                        <div className="row">
                          {/* Highest Level of Education */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Highest Level of Education *</label>
                              <select
                                name="education"
                                className="form-control"
                                value={formValues.education}
                                onChange={handleChange}
                                required>
                                <option disabled>Select Your Education</option>
                                <option>Undergrad</option>
                                <option>Bachelors</option>
                                <option>Masters</option>
                                <option>Doctorate</option>
                              </select>
                            </div>
                            <p className="text-red">{formErrors.education}</p>
                          </div>

                          {/* Year of Completion */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Year of Completion</label>
                              <select
                                id="yearOfCompletion"
                                name="yearOfCompletion"
                                value={formValues.yearOfCompletion}
                                onChange={handleChange}
                                className="form-control"
                                required>
                                <option value="" disabled>
                                  Select Year of Completion
                                </option>
                                {Array.from(
                                  { length: 2024 - 1950 + 1 },
                                  (_, i) => 2024 - i
                                ).map((year) => (
                                  <option key={year} value={year}>
                                    {year}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <p className="text-red">
                              {formErrors.yearOfCompletion}
                            </p>
                          </div>

                          {/* Specialization */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Specialization</label>
                              <input
                                type="text"
                                id="specialization"
                                name="specialization"
                                value={formValues.specialization}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your specialization"
                                required
                              />
                            </div>
                            <p className="text-red">
                              {formErrors.specialization}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Current Employer *</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Current Employer"
                                name="current_employer"
                                value={formValues.current_employer}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <p className="text-red">
                              {formErrors.current_employer}
                            </p>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Current Role *</label>
                              <select
                                name="currentRole"
                                className="form-control"
                                value={formValues.currentRole}
                                onChange={handleChange}
                                required>
                                <option value="" disabled>
                                  Select Your Current Role
                                </option>
                                <option value="Undergrad / Not Employed">
                                  Undergrad / Not Employed
                                </option>
                                <option value="Entry Level / Intern">
                                  Entry Level / Intern
                                </option>
                                <option value="Individual Contributor (Jr. Level)">
                                  Individual Contributor (Jr. Level)
                                </option>
                                <option value="Individual Contributor (Sr. Level)">
                                  Individual Contributor (Sr. Level)
                                </option>
                                <option value="Manager">Manager</option>
                                <option value="Sr. Manager">Sr. Manager</option>
                                <option value="Director / Assistant Vice President">
                                  Director / Assistant Vice President
                                </option>
                                <option value="Vice President">
                                  Vice President
                                </option>
                                <option value="C-Suite (CEO/CFO/CMO & Similar)">
                                  C-Suite (CEO/CFO/CMO & Similar)
                                </option>
                                <option value="Chairperson / Board of Directors">
                                  Chairperson / Board of Directors
                                </option>
                              </select>
                              {formErrors.currentRole && (
                                <p className="text-red">
                                  {formErrors.currentRole}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Current Salary *</label>
                              <input
                                type="number"
                                name="currentSalary"
                                className="form-control"
                                value={formValues.currentSalary}
                                onChange={handleChange}
                                required
                              />
                              {formErrors.currentSalary && (
                                <p className="text-red">
                                  {formErrors.currentSalary}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          {/* Current Employer */}
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label>Professional Domain *</label>
                              <select
                                name="professionalDomain"
                                className="form-control"
                                value={formValues.professionalDomain}
                                onChange={handleChange}
                                required>
                                <option value="" disabled>
                                  Select Your Professional Domain
                                </option>
                                <option value="Technology">Technology</option>
                                <option value="Management">Management</option>
                                <option value="Finance">Finance</option>
                                <option value="Content Creator">
                                  Content Creator
                                </option>
                                <option value="Entrepreneurship">
                                  Entrepreneurship
                                </option>
                                <option value="Business Intelligence">
                                  Business Intelligence
                                </option>
                                <option value="Venture Capital">
                                  Venture Capital
                                </option>
                              </select>
                              {formErrors.professionalDomain && (
                                <p className="text-red">
                                  {formErrors.professionalDomain}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Current Location */}
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label>Current Location</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Current Location"
                                name="current_location"
                                value={formValues.current_location}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <p className="text-red">
                              {formErrors.current_location}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          {/* Desired Employer */}
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Desired Employer *</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Desired Employer"
                                name="desired_employer"
                                value={formValues.desired_employer}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <p className="text-red">
                              {formErrors.desired_employer}
                            </p>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Desired Role *</label>
                              <select
                                name="desiredRole"
                                className="form-control"
                                value={formValues.desiredRole}
                                onChange={handleChange}
                                required>
                                <option value="" disabled>
                                  Select Your Desired Role
                                </option>
                                <option value="Undergrad / Not Employed">
                                  Undergrad / Not Employed
                                </option>
                                <option value="Entry Level / Intern">
                                  Entry Level / Intern
                                </option>
                                <option value="Individual Contributor (Jr. Level)">
                                  Individual Contributor (Jr. Level)
                                </option>
                                <option value="Individual Contributor (Sr. Level)">
                                  Individual Contributor (Sr. Level)
                                </option>
                                <option value="Manager">Manager</option>
                                <option value="Sr. Manager">Sr. Manager</option>
                                <option value="Director / Assistant Vice President">
                                  Director / Assistant Vice President
                                </option>
                                <option value="Vice President">
                                  Vice President
                                </option>
                                <option value="C-Suite (CEO/CFO/CMO & Similar)">
                                  C-Suite (CEO/CFO/CMO & Similar)
                                </option>
                                <option value="Chairperson / Board of Directors">
                                  Chairperson / Board of Directors
                                </option>
                              </select>
                              {formErrors.desiredRole && (
                                <p className="text-red">
                                  {formErrors.desiredRole}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="form-group">
                              <label>Desired Salary *</label>
                              <input
                                type="number"
                                name="desiredSalary"
                                className="form-control"
                                value={formValues.desiredSalary}
                                onChange={handleChange}
                                required
                              />
                              {formErrors.desiredSalary && (
                                <p className="text-red">
                                  {formErrors.desiredSalary}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label>Desired Location Country *</label>
                              <select
                                name="desiredLocationCountry"
                                className="form-control"
                                value={formValues.desiredLocationCountry}
                                onChange={handleChange}
                                required>
                                <option value="" disabled>
                                  Select country
                                </option>
                                {[
                                  "India",
                                  "United States",
                                  "United Kingdom",
                                  "Canada",
                                  "Australia",
                                  "Germany",
                                  "France",
                                  "Singapore",
                                  "Japan",
                                  "UAE",
                                ].map((country) => (
                                  <option key={country} value={country}>
                                    {country}
                                  </option>
                                ))}
                              </select>
                              {formErrors.desiredLocationCountry && (
                                <p className="text-red">
                                  {formErrors.desiredLocationCountry}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label>Desired Location City *</label>
                              <select
                                name="desiredLocationCity"
                                className="form-control"
                                value={formValues.desiredLocationCity}
                                onChange={handleChange}
                                required>
                                <option value="" disabled>
                                  Select city
                                </option>
                                {[
                                  "Mumbai",
                                  "Delhi",
                                  "Bangalore",
                                  "Hyderabad",
                                  "Ahmedabad",
                                  "Chennai",
                                  "Kolkata",
                                  "Pune",
                                  "Jaipur",
                                  "Lucknow",
                                ].map((city) => (
                                  <option key={city} value={city}>
                                    {city}
                                  </option>
                                ))}
                              </select>
                              {formErrors.desiredLocationCity && (
                                <p className="text-red">
                                  {formErrors.desiredLocationCity}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label>LinkedIn URL *</label>
                              <input
                                type="url"
                                name="linkedinUrl"
                                className="form-control"
                                placeholder="https://www.linkedin.com/in/your-profile"
                                value={formValues.linkedinUrl}
                                onChange={handleChange}
                                required
                              />
                              {formErrors.linkedinUrl && (
                                <p className="text-red">
                                  {formErrors.linkedinUrl}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label>Upload File *</label>
                              <input
                                type="file"
                                name="fileUpload"
                                className="form-control"
                                onChange={handleChange}
                                required
                              />
                              {formErrors.fileUpload && (
                                <p className="text-red">
                                  {formErrors.fileUpload}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <button
                            name="submit-btn"
                            type="submit"
                            className="axil-btn btn-fill-primary btn-fluid btn-primary">
                            Continue
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </main>
  );
};

export default SignUp;
