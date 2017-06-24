import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

import '../css/main.css'

class Template extends React.Component {

  render() {
    const { location, children } = this.props
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        
        <nav className="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative">

          { /* my comment here */ }
				    <a href="/" className="flex-none">
					    <img src={require('./logo.png')} alt="Farnborough Guide logo" className="br0 db mb0 w-100"/>
				    </a>
              <ul className="flex b grey-3">
                  <li>
                    <a href="/" className="pa3 no-underline db">Home</a>
                  </li>
                  <li>
                    <a href="/about/" className="pa3 no-underline db">About Us</a>
                  </li>
                  <li className="current">
                    <a href="/contact/" className="pa3 no-underline db">Contact</a>
                  </li>
              </ul>
          </nav>

          {children}
        </div>
      
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template