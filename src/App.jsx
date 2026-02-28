import Project from "./Project.jsx"
import reactScreenshot from "./assets/react-screenshot.png"
import reactLogo from "./assets/react.svg"

export default function App() {

  return (
    <div className="container">
      <Project
        title="React Components Learning Project"
        description="This is a self-guided practice space for learning about components in React."
        teacher="Bob Ziroll"
        background={reactScreenshot}
        alt="code on screen"
      />
      <Project
        title="Understanding Reusability"
        description="Components, props, and more."
        teacher="Jad Joubran"
        background={reactLogo}
        alt="react logo"
      />
    </div>
  )
}
