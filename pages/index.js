import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import EventsList from 'compoments/EventsList'
// Import components needed for this page
// - to learn more about what the following components do, just take a
// - look at the their own files under the components folder in the project
import JumboTron from 'components/JumboTron'
import IntroBlock from 'components/IntroBlock'

// The following line is commented out because the component it imports
// has not been created yet

// DAN: 'uncomment' the line below, so that we import the new EventsList component
// import IntroBlock from 'components/EventsList'

// The Home page component
export default class Index extends React.Component {
  render() {
    return (
      <div>

        { /* add our pages components */ }
        <JumboTron />
        <IntroBlock />

        { /* DAN: uncomment the line below to activate the code */ }

        { /* <EventsList /> */ }

      </div>
      
    )
  }
}
