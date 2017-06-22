import React from 'react'
import imageUrl from './NIC_0713.2af54be6.jpg'

class JumboTron extends React.Component {
  render() {
    let imageStyle = { backgroundImage: 'url(' + imageUrl + ')' };
    return (
        <div className="pv5 pv6-l ph3 bg-center cover" style={imageStyle}>
            <div className="mw7 center ph3">
                <div className="db mb3">
                    <div className="mw7 relative bg-fix-primary mb3">
                        <h1 className="f2 f1-l b di lh-title mb3 white mw6 bg-primary">
                            Farnborough Guide
                        </h1>
                    </div>
                    <div className="mw7 relative bg-fix-primary">
            
                        <p className="b f4 di lh-title mb3 white mw6 bg-primary">
                            The definitive guide to your town.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default JumboTron