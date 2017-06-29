import React from 'react'


import { rhythm } from 'utils/typography'
import Helmet from 'react-helmet'
import { config } from 'config'
import EventsList from 'components/EventsList'
// Import components needed for this page
// - to learn more about what the following components do, just take a
// - look at the their own files under the components folder in the project
import JumboTron from 'components/JumboTron'
import IntroBlock from 'components/IntroBlock'

// The following line is commented out because the component it imports
// has not been created yet

// DAN: 'uncomment' the line below, so that we import the new EventsList component


// The Home page component
class Index extends React.Component {
  render() {
    
    return (
      <div>

        { /* add our pages components */ }
        <JumboTron />
        <IntroBlock />

        { /* DAN: uncomment the line below to activate the code */ }

        <EventsList route={this.props.route} />
        

         
        
      </div>



      
    )
    
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index