/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react"
import AddCategory from "../../components/AddCategory"
import '@testing-library/jest-dom';


describe('Tests componente add category', () => {
    const setCategories = jest.fn();
    const setup = () => {
        const utils = render(<AddCategory setCategories={setCategories} />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const input = utils.getByLabelText('cost-input');
        const submit = utils.getByText('Buscar')
        return {
            input,
            submit,
            ...utils,
        }
    }

    test('debe simular chaange en el input llamar a set categories 3 veces y limpiar textbox', () => {
        const value = "Hola mundo";
        const { input, submit } = setup();
        //simular el input change
        fireEvent.change(input, { target: { value } });
        expect(input.value).toBe(value);
        //simular el sumit
        fireEvent.click(submit, {preventDefault(){}});
        // setCategories se debe haber llamado
        expect (setCategories).toHaveBeenCalled()
        // setCategories debe ser llamado por  lo menos una ved
        expect (setCategories).toHaveBeenCalledTimes(1);
        // setCategories se  haya llamado con u na función
        expect (setCategories).toHaveBeenCalledWith(expect.any(Function))
    })


    test('No debe postear la información con submit', () => {
        const { submit } = setup();
        // Simulate.submit()
        fireEvent.click(submit, {
            preventDefault() { }

        })
        //no se ha llamado a la función set categories
        expect(setCategories).not.toHaveBeenCalled()
    })

})