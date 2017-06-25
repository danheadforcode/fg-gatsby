# _template.js

This JS component acts as a wrapper for the entire page and includes the navigation, header and footer. In between that we pass through the {children} and that is where the page content appears.

# wrappers

In the folder above is a folder called wrappers and currently it contains one file called md.js, that is an important piece of code because it wraps each of the markdown pages you see. It sits inside of _tamplate.js as a child of that component.

Any pages that are React components inherit characteristics of their parent page objects, such as route, page title and others.