import { useState } from 'react'
import { marked } from 'marked';
import './App.css'

marked.setOptions({
  breaks: true
})

function App() {
  const [markdown, setMarkdown] = useState(`# This is the result of your markdown!
## Here are some examples of markdown:
1. ***Bold*** and *italic* text
2. A code block (for multi-line code):
    \`\`\` 
    function codeBlock() {
    return code;
    } 
    \`\`\`
3. Inline code: \`function inlineCode() {return code;}\`
4. A link: [Google.com](https\\google.com)
5. A block quote and image:
    > This is a block quote, and below is an image:

    ![earth](https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif)
`)

 const handleChange = (e) => {
    setMarkdown(e.target.value);
  }

  return (
    <>
      <div className="markdown-window">
          <h2>Markdown Editor</h2>
          <textarea id='editor' value={markdown} onChange={handleChange}></textarea>
        </div>
        <div className="preview-window">
          <h2>Markdown Preview</h2>
          <div id='preview' dangerouslySetInnerHTML={{
          __html: marked(markdown)
        }} ></div>
        </div>
    </>
  )
}

export default App
