import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

//import { it, expect, describe } from 'vitest'
import UserAccount from '../components/UserAccount'
import { User } from '../entities'

const user:User = {
    id: 1,
    name: "novel",
    isAdmin: true
}
describe('to render namename', () => {
    it('should render name novel', () => {
       
        render(<UserAccount user={user} />)
        const hello = screen.getByText(/Novel/i)
        expect(hello).toBeInTheDocument()
    })

    it('should render the edit button if you are an admin', () => {
        render(<UserAccount user={user} />)
        //const button = screen.getByText(/edit/i)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/edit/i)
    })

    it('should not render edit button is user is not admin', () => {
        const user:User = {
            id: 2,
            name: "novel",
            isAdmin: false
        }
        render(<UserAccount user={user} />)
        //const hello = screen.getByText(/edit/i)
        const hello = screen.queryByRole("button")

        expect(hello).not.toBeInTheDocument()
    })
})