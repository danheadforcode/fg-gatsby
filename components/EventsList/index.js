import React from 'react'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

// DAN: This component will work once you import it in the index.js file
class EventsList extends React.Component {
  render() {
      // Sort pages.      
    const sortedPages = sortBy(this.props.route.pages, 'data.date')    
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && get(page, 'data.type' === 'event' ) || get(page, 'data.date')
    ))
    return (
        
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
    )}
}

EventsList.propTypes = {
    route: React.PropTypes.object,
}
export default EventsList