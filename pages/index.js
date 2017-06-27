import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from 'react-helmet'
import { config } from 'config'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import include from 'underscore.string/include'
import footer from 'components/Footer'
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
     // Sort pages.
      console.log(this.props)
    const sortedPages = sortBy(this.props.route.pages, 'data.date')
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') && get(page, 'data.type' === 'event' ) || get(page, 'data.date')
    ))
    return (
      <div>

        { /* add our pages components */ }
        <JumboTron />
        <IntroBlock />

        { /* DAN: uncomment the line below to activate the code */ }

        <EventsList />

         <div className="db dt-ns mw9 center">
            <div className="pa4 pa4-m">
                <h3 className="f3">Featured Events</h3>
            </div>
		

            {visiblePages.map((page) => (
              <div key={page.path} className="fl-m fl-l w-25-m w-25-l">
                <div className="pa4 pa4-m">
                    <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
                    <img src={ prefixLink(page.path) + get(page, 'data.image', page.path)} alt="carbon-trust.jpg" />
                </Link>
             
                </div>
            </div>
             
              
              
          ))}

     <div className="fl-m fl-l w-25-m w-25-l">
                <div className="pa4 pa4-m">
                    <a href="/events/"><img src={require('./number3.png')} alt="See more events or add your own" /></a>
                </div>
            </div>
        </div>
      </div>



      
    )
    
  }
}
<Footer />
Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index