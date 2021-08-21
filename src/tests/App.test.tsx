import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  // -------------------------------------------------------------------------
  beforeEach(() => {
    render(<App />);
  });
  // -------------------------------------------------------------------------
  it('should have text Welcome to TSREX Sample Page', () => {
    expect(screen.getByText('Welcome to TSREX Sample Page')).toBeTruthy();
  });
  // -------------------------------------------------------------------------
});
