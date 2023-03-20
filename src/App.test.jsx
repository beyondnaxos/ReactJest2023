import App from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
        it('should have headline', () => {
            render(<App />)
            expect(screen.getByText(/Vitest/i)).toBeInTheDocument()
        })
})