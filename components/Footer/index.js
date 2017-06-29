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
  <svg><symbol id="Facebook" viewBox="0 0 32 32"><path d="M30.7 0H1.3C.6 0 0 .6 0 1.3v29.3c0 .8.6 1.4 1.3 1.4H17V20h-4v-5h4v-4c0-4.1 2.6-6.2 6.3-6.2 1.8 0 3.3.2 3.7.2v4.3h-2.6c-2 0-2.5 1-2.5 2.4V15h5l-1 5h-4l.1 12h8.6c.7 0 1.3-.6 1.3-1.3V1.3C32 .6 31.4 0 30.7 0z"/></symbol><symbol id="instagram" viewBox="0 0 32 32"><path d="M28.2 0H3.8C1.7 0 0 1.7 0 3.8v24.4C0 30.3 1.7 32 3.8 32h24.4c2.1 0 3.8-1.7 3.8-3.8V3.8C32 1.7 30.3 0 28.2 0zM24 4h3c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm-8 5.9c3.4 0 6.2 2.7 6.2 6.1 0 3.4-2.8 6.1-6.2 6.1-3.4 0-6.2-2.7-6.2-6.1.1-3.4 2.8-6.1 6.2-6.1zM28 29H4c-.6 0-1-.4-1-1V13h4c-.5.8-.7 2.1-.7 3 0 5.4 4.4 9.7 9.7 9.7 5.4 0 9.7-4.4 9.7-9.7 0-.9-.1-2.3-.8-3h4v15c.1.6-.3 1-.9 1z"/></symbol><symbol id="twitter" viewBox="0 0 32 32"><path d="M32 6.1c-1.2.5-2.4.9-3.8 1 1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2 1.6C25.7 3.8 24 3 22.2 3c-3.6 0-6.6 2.9-6.6 6.6 0 .5.1 1 .2 1.5-5.5-.3-10.3-2.9-13.6-6.9-.6 1-.9 2.1-.9 3.3 0 2.3 1.2 4.3 2.9 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.8 5.3 6.4-.6.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.6 3.3 4.5 6.1 4.6-2.2 1.8-5.1 2.8-8.2 2.8-.5 0-1.1 0-1.6-.1 3 1.8 6.5 2.9 10.2 2.9 12.1 0 18.7-10 18.7-18.7v-.8c1.2-1 2.3-2.1 3.2-3.4z"/></symbol><symbol id="vimeo" viewBox="0 0 32 32"><path d="M32 8.6c-.1 3.1-2.3 7.4-6.5 12.8-4.4 5.7-8 8.5-11 8.5-1.9 0-3.4-1.7-4.7-5.2-.9-3.2-1.7-6.3-2.6-9.5-1-3.4-2-5.2-3.1-5.2-.2 0-1.1.5-2.5 1.5L0 9.6c1.6-1.4 3.1-2.8 4.7-4.2 2.1-1.8 3.7-2.8 4.7-2.9 2.5-.2 4 1.5 4.6 5.1.6 3.9 1.1 6.4 1.3 7.3.7 3.3 1.5 4.9 2.4 4.9.7 0 1.7-1.1 3-3.2s2.1-3.7 2.2-4.8c.2-1.8-.5-2.7-2.2-2.7-.8 0-1.6.2-2.4.5 1.6-5.2 4.6-7.7 9-7.5 3.3.2 4.9 2.3 4.7 6.5z"/></symbol></svg>

</footer>


    )
  }
}

export default Footer