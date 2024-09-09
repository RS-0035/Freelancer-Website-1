import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = ({ email }) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skills: "",
    portfolio: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log(email);
    const savedData = localStorage.getItem(`freelancerPortfolio_${email}`);
    if (savedData) {
      navigate("/saved-profile");
    }
  }, [navigate, email]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      `freelancerPortfolio_${email}`,
      JSON.stringify(formData)
    );
    alert("Your portfolio has been saved!");
    navigate(`/profile`);
  };

  return (
    <div className="portfolio-page">
      <header className="page-header">
        <h1>Create Your Professional Portfolio</h1>
        <p>
          Showcase your skills and experiences to attract potential clients.
        </p>
      </header>

      <form className="portfolio-form" onSubmit={handleSubmit}>
        <div className="portfolio-form-image">
          {formData.image ? (
            <img src={formData.image} alt="Profile" className="image-preview" />
          ) : (
            <>
              <label htmlFor="image-upload" className="image-upload-label">
                Upload Your Photo
              </label>
              <input
                type="file"
                id="image-upload"
                onChange={handleImageUpload}
              />
            </>
          )}
        </div>

        <div className="portfolio-form-content">
          <div className="input-groups">
            <div className="form-group-profile">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group-profile">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="List your skills separated by commas"
              />
            </div>

            <div className="form-group-profile">
              <label htmlFor="portfolio">Portfolio Links</label>
              <input
                type="text"
                id="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="Add links to your work or projects"
              />
            </div>
          </div>
          <div className="bioBtn">
            <div className="form-group-profile">
              <label htmlFor="bio">Short Bio</label>
              <textarea
                id="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself"
              ></textarea>
            </div>
            <div className="btnSubmit">
              <button type="submit" className="submit-button">
                Save Portfolio
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
