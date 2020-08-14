import React from 'react';
import Header from '../Header'
import SectionCover from '../SectionCover'
import Section from '../Section'
import Footer from '../Footer'
const HomeComponent = (props) => {
  return  (
    <div>
      <Header />
      <main>
        <SectionCover />
        <Section />
      </main>
      <Footer />
    </div>
  )
}
export default HomeComponent;