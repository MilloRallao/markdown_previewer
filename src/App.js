import React, { useState } from 'react';
import MDReactComponent from 'markdown-react-js';

function App (){
  const defaultText = `# Header H1!

## Sub-Header H2

Inline code: \`<div></div>\`

Link: [GitHub](http://github.com)

Code Block:
\`\`\`
const awesome = (isAwesome) => {
  return {
    <div>{isAwesome}</div>
  }
}
\`\`\`

Lists: 
- One
  - One.One
    - One.One.One
  - One.Two
    - One.Two.One
  - One.Three
- Two

Blockquote:

> We're living the future so
> the present is our past.

Image:

![Image example](https://avatars.githubusercontent.com/u/18715312?v=4)

Bolded text:

**Texto en negrita**

__Texto alternativo en negrita__
`
  const [textRaw, setTextRaw] = useState(defaultText);
  
  const handleChange = (e) => {
    const {value} = e.target
    setTextRaw(value);
  }
  
  const rawMarkup = (text) => {
    return (
      <div className="col p-2 bg-light border border-2 border-secondary">
        <label htmlFor="preview" className="form-label fw-bold">Preview</label>
        <div id="preview">
          <MDReactComponent text={text} />
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <div className="row row-cols-3 justify-content-center">
        <div className="col p-2 bg-light border border-2 border-primary">
          <label htmlFor="editor" className="form-label fw-bold">Example textarea</label>
          <textarea value={textRaw} onChange={handleChange} className="form-control" id="editor" rows="6"></textarea>
        </div>
      </div>
      <div className="row row-cols-3 my-5 justify-content-center">
        {rawMarkup(textRaw)}
      </div>
    </div>
  )
}

export default App;