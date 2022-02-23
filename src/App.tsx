import * as React from 'react'
import BasicDrawer from './components/BasicDrawer'
import SubmitFormInDrawer from './components/SubmitFormInDrawer'
import '@tail-kit/tail-kit/dist/tail-kit.css'

export const App = () => (
  <div>
    <BasicDrawer />
    <SubmitFormInDrawer />
  </div>
)
