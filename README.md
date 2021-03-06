# csh-react-lib
CSH Themed React Library to make frontend applications easier to stand-up.

## Overview 
This is written using React, and *INSERT HERE WHAT EXISTING LIB WILL BE USED* with styling from Sass

## Usage of the library
### Installation
```sh
npm install csh-react-lib
```

Using the library would look something like this:

```js
import { Button } from 'csh-react-lib';
...

<Button kind="primary" onClick={() => console.log('Hello World'))} />
```

## Local Development

### Prerequesites
- Node [found here](https://nodejs.org/en/download/)

### Testing a newly created component
*THIS WILL BE UPDATED ONCE A PATTERN IS DEVELOPED*

## Current Component Road Map:
- [ ] Buttons
  - [ ] Checkbox
  - [ ] Login Button
  - [ ] General Use Buttons (primary, secondary, etc)
  - [ ] Radio
  - [ ] Toggle (Slider)
- [ ] Displaying
  - [ ] Alert
  - [ ] Header (CSH General)
  - [ ] Headings (h1-h7)
  - [ ] Images
  - [ ] Loading
  - [ ] Modal / Movable notification
  - [ ] Popover / Tooltips
  - [ ] Tags
- [ ] Inputs
  - [ ] Dropdown
  - [ ] File upload (maybe not really needed)
  - [ ] Form (formats contained inputs)
  - [ ] Text Input 
    - [ ] Number 
    - [ ] Date
    - [ ] Blurred for hidden data 
- [ ] Layout
  - [ ] Cards
    - [ ] Image Card
    - [ ] Text Card with Title and description
    - [ ] etc
  - [ ] General Content wrapper
  - [ ] Grid
    - [ ] Col 
    - [ ] Row 
  - [ ] List
  - [ ] Table
  - [ ] Tabs
- [ ] Navigation
  - [ ] Affix
  - [ ] Anchor
  - [ ] Back to Top
  - [ ] Pagination
