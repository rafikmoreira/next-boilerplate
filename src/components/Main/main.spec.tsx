import { render } from '@/utils/test-wrapper'

import { RenderResult } from '@testing-library/react'
import Main from './main'

const renderComponent = (): RenderResult => {
  return render(<Main />)
}

describe('Main', () => {
  it('should render correct page title', () => {
    const title = 'React + TypeScript + SWC'

    const component = renderComponent()

    const page = component.getByRole('main')

    expect(page).toHaveTextContent(title)
  })

  it('should render correct page description', () => {
    const description = 'TypeScript, ReactJs, NextJs e Styled Components'

    const component = renderComponent()

    const page = component.getByRole('main')

    expect(page).toHaveTextContent(description)
  })

  it('should render correct page image', () => {
    const imageAlt = 'Um desenvolvedor de frente para uma tela com código'

    const component = renderComponent()

    const image = component.getByAltText(imageAlt)

    expect(image).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderComponent()

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })

  it('should match snapshot', () => {
    const component = renderComponent()

    expect(component.container.firstChild).toMatchSnapshot()
  })
})
