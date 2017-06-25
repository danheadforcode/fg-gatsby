# Components

I have broken down the components into their individual directories, this is mainly for tidyness and to make it easier to see at a glance what belongs with what or to what!

## You could...

I have already done an extra thing under the headforcode project and that is to add an index.js file at this level, alongside this README. The additional index file can be set up to import all sub-folders and then export all of them as default.

The advantage of doing that is when importing components in other parts of the app you can condense the imports down to one single line of code.

So....

import EventsList from 'components/EventsList'
import JumboTron from 'components/JumboTron'
import IntroBlock from 'components/IntroBlock'

Becomes...

import{ EventsList, JumboTron, IntroBlock } from 'components'

You can then remove the ones you don't want as and when you need