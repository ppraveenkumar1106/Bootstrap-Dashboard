import React, { useState } from "react";
import './Settings.css';

function AuthForm({ formType, handleFormSwitch }) {
  return (
    
    <div className="auth-form">
      
      {formType === "login" ? (
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label>
              Username:
              <input type="text" name="username" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            <button type="submit"  style={{color:"white"}}>Login</button>
          </form>
          <hr style={{ borderBottom: "2px solid black" }} />
          <p>
            Don't have an account?{" "}
            <button onClick={handleFormSwitch} className="button"><p>Sign Up</p></button>
          </p>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <label>
              Username:
              <input type="text" name="username" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            <label>
              Confirm Password:
              <input type="password" name="confirmPassword" required />
            </label>
            <button type="submit" style={{color:"white"}}>Sign Up</button>
          </form>
          <hr style={{ borderBottom: "2px solid black" }} />
          <p>
            Already have an account?{" "}
            <button onClick={handleFormSwitch} className="button"><p>Login</p></button>
          </p>
        </div>
      )}
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="profile-settings">
      <h2>Profile Settings</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" defaultValue="User123" />
        </label>
        <label>
          Email:
          <input type="email" name="email" defaultValue="user@example.com" />
        </label>
        <label>
          Change Password:
          <input type="password" name="newPassword" placeholder="New Password" />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

function ThemeSettings() {
  
  return (
    <div className="theme-settings">
      <h2>Theme Settings</h2>
      <label>
        <input type="radio" name="theme" value="light" />
        Light Mode
      </label>
      <label>
        <input type="radio" name="theme" value="dark" />
        Dark Mode
      </label>
      <label>
        <input type="radio" name="theme" value="auto" />
        Auto (System Default)
      </label>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="notification-settings">
      <h2>Notification Preferences</h2>
      <label>
        <input type="checkbox" name="emailNotifications" checked />
        Email Notifications
      </label>
      <label>
        <input type="checkbox" name="smsNotifications" />
        SMS Notifications
      </label>
      <label>
        <input type="checkbox" name="pushNotifications" checked />
        Push Notifications
      </label>
    </div>
  );
}

function Settings() {
  const [formType, setFormType] = useState("login"); // Tracks login or signup
  const [section, setSection] = useState("auth"); // Tracks different sections (auth, profile, theme, notifications)

  const handleFormSwitch = () => {
    setFormType(formType === "login" ? "signup" : "login");
  };

  const renderSection = () => {
    switch (section) {
      case "auth":
        return <AuthForm formType={formType} handleFormSwitch={handleFormSwitch} />;
      case "profile":
        return <ProfileSettings />;
      case "theme":
        return <ThemeSettings />;
      case "notifications":
        return <NotificationSettings />;
      default:
        return null;
    }
  };

  return (
    <div id="settings" className="settings">
      
      <nav className="settings-nav">
      
        <ul>
          <li onClick={() => setSection("auth")}>Authentication</li>
          <li onClick={() => setSection("profile")}>Profile Settings</li>
          <li onClick={() => setSection("theme")}>Theme Settings</li>
          <li onClick={() => setSection("notifications")}>Notification Preferences</li>
        </ul>
      </nav>

      <div className="settings-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default Settings;
