import React from 'react'
import Logo from '../../pages/logo.png'

class Footer extends React.Component {
  render() {

    return (
	<footer className="bg-black ph3 pv4 white">

	<div className="mw7 center pt3">

		<div className="measure-narrow center mb4">

			<img src={Logo} alt="Kaldi logo" className="db w4 center mb4 br0" />

			

		</div>

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
				    <li className="dib ph2 raise">
                      <a href="https://www.facebook.com/farnboroughguide" target="_blank" className="link bg-white black db relative br-100 pa2">
                        <svg width="16px" height="16px" className="db">
                          <use href="#Facebook"></use>
                        </svg>
                      </a>
                    </li>
                     <li className="dib ph2 raise">
                      <a href="https://twitter.com/fboroguide" target="_blank" className="link bg-white black db relative br-100 pa2">
                        <svg width="16px" height="16px" className="db">
                          <use href="#twitter"></use>
                        </svg>
                      </a>
                    </li>
                    
				<ul className="mhn2">
				</ul>
			</div>

		</div>
	</div>

</footer>

    )
  }
}

export default Footer