import React, { useState } from 'react';

const Header = ({ activeTab, setActiveTab, selectedLanguage, setSelectedLanguage, languages }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  // Translations for different languages
  const translations = {
    English: {
      login: 'Login',
      signup: 'Sign Up',
      loginTitle: 'Login to Your Account',
      signupTitle: 'Create an Account',
      email: 'Email Address',
      password: 'Password',
      name: 'Full Name',
      confirmPassword: 'Confirm Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      noAccount: "Don't have an account? Sign Up",
      haveAccount: "Already have an account? Login",
      submitLogin: 'Login',
      submitSignup: 'Sign Up'
    },
    Español: {
      login: 'Iniciar Sesión',
      signup: 'Registrarse',
      loginTitle: 'Iniciar Sesión en Tu Cuenta',
      signupTitle: 'Crear una Cuenta',
      email: 'Correo Electrónico',
      password: 'Contraseña',
      name: 'Nombre Completo',
      confirmPassword: 'Confirmar Contraseña',
      rememberMe: 'Recordarme',
      forgotPassword: '¿Olvidaste tu contraseña?',
      noAccount: "¿No tienes una cuenta? Regístrate",
      haveAccount: "¿Ya tienes una cuenta? Inicia Sesión",
      submitLogin: 'Iniciar Sesión',
      submitSignup: 'Registrarse'
    },
    Français: {
      login: 'Connexion',
      signup: "S'inscrire",
      loginTitle: 'Connectez-vous à Votre Compte',
      signupTitle: 'Créer un Compte',
      email: 'Adresse E-mail',
      password: 'Mot de Passe',
      name: 'Nom Complet',
      confirmPassword: 'Confirmer le Mot de Passe',
      rememberMe: 'Se souvenir de moi',
      forgotPassword: 'Mot de passe oublié?',
      noAccount: "Vous n'avez pas de compte? Inscrivez-vous",
      haveAccount: "Vous avez déjà un compte? Connectez-vous",
      submitLogin: 'Se Connecter',
      submitSignup: "S'inscrire"
    },
    العربية: {
      login: 'تسجيل الدخول',
      signup: 'إنشاء حساب',
      loginTitle: 'تسجيل الدخول إلى حسابك',
      signupTitle: 'إنشاء حساب جديد',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      name: 'الاسم الكامل',
      confirmPassword: 'تأكيد كلمة المرور',
      rememberMe: 'تذكرني',
      forgotPassword: 'هل نسيت كلمة المرور؟',
      noAccount: "ليس لديك حساب؟ اشترك الآن",
      haveAccount: "لديك حساب بالفعل؟ تسجيل الدخول",
      submitLogin: 'تسجيل الدخول',
      submitSignup: 'إنشاء حساب'
    }
  };

  const t = translations[selectedLanguage] || translations.English;

  const handleLoginClick = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const AuthForm = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Form submitted:', formData);
      setShowAuthModal(false);
    };

    return (
      <div className="auth-modal-overlay" onClick={() => setShowAuthModal(false)}>
        <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setShowAuthModal(false)}>×</button>
          
          <h2>{authMode === 'login' ? t.loginTitle : t.signupTitle}</h2>
          
          <form onSubmit={handleSubmit}>
            {authMode === 'signup' && (
              <div className="form-group">
                <label htmlFor="name">{t.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="email">{t.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">{t.password}</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            {authMode === 'signup' && (
              <div className="form-group">
                <label htmlFor="confirmPassword">{t.confirmPassword}</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            
            {authMode === 'login' && (
              <div className="form-options">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  {t.rememberMe}
                </label>
                <a href="#" className="forgot-password">{t.forgotPassword}</a>
              </div>
            )}
            
            <button type="submit" className="submit-btn">
              {authMode === 'login' ? t.submitLogin : t.submitSignup}
            </button>
          </form>
          
          <div className="auth-switch">
            <p>
              {authMode === 'login' ? t.noAccount : t.haveAccount}
              <span 
                className="switch-link" 
                onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
              >
                {authMode === 'login' ? t.signup : t.login}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-scale-balanced"></i>
            <h1>LegalEase</h1>
          </div>
          
          <nav className="main-nav">
            <button 
              className={activeTab === 'home' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button 
              className={activeTab === 'rights' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('rights')}
            >
              Know Your Rights
            </button>
            <button 
              className={activeTab === 'emergency' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('emergency')}
            >
              Emergency Help
            </button>
            <button 
              className={activeTab === 'about' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button 
              className={activeTab === 'contact' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </button>
          </nav>
          
          <div className="header-controls">
            <div className="language-selector">
              <select 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
            
            <div className="auth-buttons">
              <button className="login-btn" onClick={handleLoginClick}>
                {t.login}
              </button>
              <button className="signup-btn" onClick={handleSignupClick}>
                {t.signup}
              </button>
            </div>
          </div>
        </div>
      </header>

      {showAuthModal && <AuthForm />}

      <style jsx>{`
      
        .app-header {
          background-color: #2c3e50;
          color: white;
          padding: 1rem 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .logo h1 {
          margin: 0;
          font-size: 1.5rem;
        }
        
        .main-nav {
          display: flex;
          gap: 0.5rem;
        }
        
        .nav-btn {
          background: none;
          border: none;
          color: white;
          padding: 0.5rem 1rem;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        
        .nav-btn:hover, .nav-btn.active {
          background-color: #34495e;
        }
        
        .header-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .language-selector select {
          padding: 0.5rem;
          border-radius: 4px;
          border: none;
          background-color: white;
        }
        
        
        
        .login-btn, .signup-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .login-btn {
          background-color: transparent;
          border: 1px solid white;
          color: white;
        }
        
        .login-btn:hover {
          background-color: rgba(255,255,255,0.1);
        }
        
        .signup-btn {
          background-color: #e74c3c;
          color: white;
        }
        
        .signup-btn:hover {
          background-color: #c0392b;
        }

        .auth-buttons {
          display: flex;
          gap: 0.5rem;
        }
        
        /* Auth Modal Styles */
        .auth-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .auth-modal {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          width: 90%;
          max-width: 400px;
          position: relative;
        }
        
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .auth-modal h2 {
          margin-top: 0;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #2c3e50;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
          color: #2c3e50;
        }
        
        .form-group input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
        }
        
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .checkbox-container {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        .checkbox-container input {
          margin-right: 0.5rem;
        }
        
        .forgot-password {
          color: #3498db;
          text-decoration: none;
        }
        
        .forgot-password:hover {
          text-decoration: underline;
        }
        
        .submit-btn {
          width: 100%;
          padding: 0.75rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        
        .submit-btn:hover {
          background-color: #2980b9;
        }
        
        .auth-switch {
          text-align: center;
        }
        
        .switch-link {
          color: #3498db;
          cursor: pointer;
          margin-left: 0.5rem;
        }
        
        .switch-link:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1rem;
          }
          
          .main-nav {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Header;