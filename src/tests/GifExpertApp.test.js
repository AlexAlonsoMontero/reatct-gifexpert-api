import { render, screen } from "@testing-library/react"
import GifExpertApp from "../GifExpertApp"


describe('Test gifExperapp', () => {

    const utils = render(<GifExpertApp />,);
    const h2Text = 'GiffExpertApp';
    
    test('Debe renderizar componente, verifico etiquetah', async () => {
        expect(await screen.findByText(h2Text)).toBeVisible(true);
        
    })
})