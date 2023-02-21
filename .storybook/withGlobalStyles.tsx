import React from 'react'
import GlobalStyles from '../src/styles/global'

export const withGlobalStyles = (Story) => {
  return (
    <>
      <GlobalStyles />
      {<Story />}
    </>
  )
}
