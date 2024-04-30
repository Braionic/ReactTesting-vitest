import { render, screen } from "@testing-library/react"
import TermsAndConditions from "../components/TermsAndConditions"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

describe('check if the page renders test and checkbox is working as espected', () => {
    it('should render the h1', () => {
        render(<TermsAndConditions />)
        const h1 = screen.getByRole("heading")
        expect(h1).toBeInTheDocument()
    })
    it('should render the checkbox unchecked', () => {
        render(<TermsAndConditions />)
        const checkBox = screen.getByRole("checkbox")
        expect(checkBox).toBeInTheDocument()
        expect(checkBox).not.toBeChecked()
    })

    it('check if button is dissabled', () => {
        render(<TermsAndConditions />)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
        expect(button).toBeDisabled()
    })

    it('should enable the button when checkbox is clicked', async() => {
        const user = userEvent.setup()

        render(<TermsAndConditions />)

        const checkBox = screen.getByRole("checkbox")
        const button = screen.getByRole("button")


        await user.click(checkBox)
        expect(checkBox).toBeEnabled()
        expect(button).toBeEnabled()
        
        
    })
})