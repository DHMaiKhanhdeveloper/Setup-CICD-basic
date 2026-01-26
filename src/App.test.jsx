import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders welcome message', () => {
    render(<App />)
    expect(screen.getByText(/Welcome to React CI\/CD/i)).toBeInTheDocument()
  })

  it('renders count button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /count is/i })).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
    
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument()
  })

  it('displays CI/CD features list', () => {
    render(<App />)
    expect(screen.getByText(/Automated Testing/i)).toBeInTheDocument()
    expect(screen.getByText(/Code Linting/i)).toBeInTheDocument()
    expect(screen.getByText(/Build Verification/i)).toBeInTheDocument()
    expect(screen.getByText(/GitHub Actions Workflow/i)).toBeInTheDocument()
  })
})

