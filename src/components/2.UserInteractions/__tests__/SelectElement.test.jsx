import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SelectElement from '../components/SelectElement'

test("Select options changing", () => {
    render(<SelectElement/>)
    userEvent.selectOptions(
        screen.getByRole('combobox'),
        'Chennai'
    )
    expect(screen.getByRole('combobox')).toHaveValue('Chennai')
})

test("City Name header rendering", () => {
    render(<SelectElement/>)
    userEvent.selectOptions(
        screen.getByRole('combobox'),
        'Bangalore'
    )
    expect(screen.getByRole('heading', { name: /bangalore/i})).toBeInTheDocument();
})  
