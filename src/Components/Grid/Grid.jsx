import React from 'react'
import Footer from '../Footer/Footer'
import ProjectList from '../Projects/ProjectList'
import styled from 'styled-components'
import { Header, GridBox } from './Header'


function Grid() {
  return (
    <GridBox>
        <Header>Some Of My Achievements:</Header>
<ProjectList />
<Footer />

    </GridBox>
  )
}

export default Grid