import { screen, render, fireEvent } from '@testing-library/react'
import { SortControl } from './SortControl'
import { vi } from 'vitest'

describe('testing sortControl component', () => {
    test('should render normally with default value', () => {
        render(<SortControl />)
        const selectElement = screen.getByDisplayValue('Title')
        expect(selectElement).toBeInTheDocument();
    })
    test('should receive change the sort order by Release Date', () => {
        render(<SortControl />)
        const selectElement = screen.getByRole('combobox')
        //change releaseDate by releease (invalid option)
        fireEvent.change(selectElement, {target: { value: 'releaseDate'}})
        expect(selectElement).toHaveValue('releaseDate');
        expect(selectElement.selectedOptions[0].value).toBe('releaseDate');
        expect(selectElement.selectedOptions[0].textContent).toBe('Release Date');
    })
    test('should receive change the sort order by Release Date and fire onSortChange', () => {
        const mockChange = vi.fn();
        render(<SortControl onSortChange={mockChange}/>)
        const selectElement = screen.getByRole('combobox')
        fireEvent.change(selectElement, {target: { value: 'releaseDate'}})
        expect(selectElement).toHaveValue('releaseDate');
        expect(mockChange).toHaveBeenCalled(1)
        expect(mockChange).toHaveBeenCalledWith('releaseDate')
    })
})