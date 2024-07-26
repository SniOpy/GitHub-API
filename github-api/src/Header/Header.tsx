import React from 'react';
import logoGitHub from '../assets/logo-github.png';

export default function Header() {
  return (
    <div>
        <div className="header">
            <img src={logoGitHub} alt="logo github" />
        </div>
    </div>
  )
}