import { render, screen } from '@testing-library/react'
import TestPage from './testPage'


describe('TestPage', () => {
  test('renders test page', () => {
    render(<TestPage />)
    const testButton = screen.getByTestId('test-button')
    expect(testButton).toBeInTheDocument()
  })
})