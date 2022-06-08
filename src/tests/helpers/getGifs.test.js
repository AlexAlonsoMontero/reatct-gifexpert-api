import { getGifs } from '../../helpers/getGifs'


describe('Pruebas en getGifs fetch',()=>{
    test('debe de traer 10 elementos',async()=>{
        const gifs = await getGifs('Dragon ball')
        expect( gifs.length ).toBe( 10 );
    })
})