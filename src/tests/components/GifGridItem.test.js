import '@testing-library/jest-dom/extend-expect';
import {  render, screen } from '@testing-library/react'
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas en GifGridItem', () => {
    const img = {
        id: 1,
        title: 'prueba',
        url: 'http://www.google.es/'
    }
    test('renderiza el GifGridItem', () => {
        render(<GifGridItem  {...img} />);
        screen.getByText(img.title);
        // expect(screen.getByText(img.title)).toBeInTheDocument();

    })
    test('Probando que exista una imagen por rol', () => {
        render(<GifGridItem {...img} />);
        const image = screen.getByRole('img', { src: img.url });
        expect(image.src).toBe(img.url);
    })

    test('should have animate__animated', async() => {
        render(<GifGridItem {...img} />);
        const div = screen.getByTestId('div-class-name');
        expect (div.className).toContain('animate__animated');

    })


})