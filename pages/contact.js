import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
     <div> 
      <p class="pa2"> Want to get in touch with us?</p>
<h2 class="underlined pa2">Contact Us!</h2>

<form class="pa5"name="contact-form" method="post"><input type="hidden" name="form-name" value="contact-form">
    <div class="flex-l mhn1-l">
          
      <div class="ph1-l w-25-l">
        <fieldset>
          <input type="text" id="name" placeholder="Name" class="w-100 mb2" name="name">
          <label for="name">Name</label>
        </fieldset>
      </div>
          
      <div class="ph1-l w-25-l">
        <fieldset>
          <input type="email" id="email" placeholder="Email" class="w-100 mb2" name="email">
          <label for="email">Email</label>
        </fieldset>
      </div>
    </div>

        
    <fieldset>
      <textarea placeholder="Your message" rows="8" cols="80" id="message" class="w-50" name="message"></textarea>
      <label for="message">Your message</label>
    </fieldset>
        
    <div class="float-left">
      <button type="submit" class="btn w-50 w-auto-ns raise">Submit</button>
    </div>
  </form>
  </div>
    )
  }
}
