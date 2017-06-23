import React from 'react'

// DAN: This component will work once you import it in the index.js file
class EventsList extends React.Component {
  render() {
    return (
        
        <div className="db dt-ns mw9 center">
            <div className="pa4 pa4-m">
                <h3 className="f3">Featured Events</h3>
            </div>
		    <div className="fl-m fl-l w-25-m w-25-l">
                <div className="pa4 pa4-m">
                    <a href="/events/carbon-trust/"><img src={require('./carbon-trust.jpg')} alt="carbon-trust.jpg" /></a>
                </div>
            </div>
	        <div className="fl-m fl-l w-25-m w-25-l">
                <div className="pa4 pa4-m">
                    <a href="/events/"><img src={require('./number3.png')} alt="See more events or add your own" /></a>
                </div>
            </div>
        </div>
    )}
}

export default EventsList