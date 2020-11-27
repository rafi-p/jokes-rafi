import { render, screen, fireEvent } from '@testing-library/react';
import {Provider} from 'react-redux'
import App from './App.js';
import store from './store'
import Home from './pages/Home.js'

describe('Testing App Component', () => {
  test('should render Title jokes correctly', () => {
    const { getByTestId, debug } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const title = getByTestId('jokes-title')
    // debug()
    expect(title).toBeInTheDocument()
  })

  test('should render category page when trigger category-link', () => {
    const { getByTestId, debug } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const categoryLink = getByTestId('category-link')

    fireEvent.click(categoryLink)

    const title = getByTestId('category-title')
    // debug()
    expect(title).toBeInTheDocument()
  })

  test('should render favorite page when trigger favorite-link', () => {
    const { getByTestId, debug } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const favoriteLink = getByTestId('favorite-link')

    fireEvent.click(favoriteLink)

    const title = getByTestId('favorite-title')
    // debug()
    expect(title).toBeInTheDocument()
  })

  test('should render home page when trigger home-link', () => {
    const { getByTestId, debug } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const homeLink = getByTestId('home-link')

    fireEvent.click(homeLink)

    const title = getByTestId('jokes-title')
    // debug()
    expect(title).toBeInTheDocument()
  })
})
