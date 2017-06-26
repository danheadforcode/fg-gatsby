import React from 'react'

class footer extends React.Component {
  render() {

    return (
	<div className="mw7 center pt3">

		<div className="measure-narrow center mb4">

		<div className="flex-ns justify-between">

			<div>
				<h3 className="f4 b lh-title mb1 primary">Farnborough Guide</h3>
				<ul className="mb3">
					<li><a href="/" className="link">Home</a></li>
					<li><a href="/about-us" className="link">About</a></li>
					<li><a href="#" className="link">Nav 3</a></li>
					<li><a href="#" className="link">Nav 4</a></li>
					<li><a href="#" className="link">Nav 5</a></li>
				</ul>
			</div>

			<div>
				<h3 className="f4 b lh-title mb1 primary">Section 2</h3>
				<ul className="mb3">
					<li><a href="#" className="link">Link 1</a></li>
				</ul>
			</div>

			<div>
				<h3 className="f4 b lh-title mb2 primary">Social media</h3>
                    
				<ul className="mhn2">
				</ul>
			</div>
            </div>
            </div>
		</div>

    )
  }
}

export default footer