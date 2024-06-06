import React from 'react';

interface NavbarProps {
  language: string;
  setLanguage: (language: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, theme, setTheme }) => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value);
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value);

  return (
    <nav>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="et">Estonian</option>
        <option value="ru">Russian</option>
      </select>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </nav>
  );
};

export default Navbar;
