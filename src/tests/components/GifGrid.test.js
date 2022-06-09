import { render, screen } from '@testing-library/react'
import GifGrid from '../../components/GifGrid'
//Fingimos la llamada a userFetchGifs
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test sobre componente GifGrid', () => {

    const category = 'Dragon ball';
    // indicamos que valores devuelve useFetchGif para la simulación
    const gifs = [
        {
            id: 'abc',
            url: 'http://localhost/gif1.gif',
            title: 'Cualquier cosa'

        }
    ]
    const setup = () => {
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const utils = render(<GifGrid category={category} />)
        return {
            utils
        }
    }



    test('debe renderizar componente y mostrar gif', async () => {
        const { utils } = setup()
        const heading3 = screen.getByRole('heading', { level: 3 })

        expect(heading3.textContent).toBe(category);
        expect(screen.getAllByRole('img').length > 0).toBe(true);
        expect(await screen.findByText(gifs[0].title)).toBeInTheDocument(true);
    })


})