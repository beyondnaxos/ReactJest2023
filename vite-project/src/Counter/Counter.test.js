import { render } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('le compteur doit afficher la valeur initiale correcte', () => {
    const {getAllByTestId} = render(<Counter initialCount={0} />)
    const countValue = getAllByTestId('count').textContent
    expect(countValue).toEqual('0');

  })
}) 


