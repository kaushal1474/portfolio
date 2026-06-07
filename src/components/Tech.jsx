import BallCanvas from "./canvas/Ball"
import { SectionWrapper } from "../hoc"
import { technologies } from "../utils/constants"


const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((tech) =>
        <div className="w-28 h-28 text-center" key={tech.name}>
          <BallCanvas icon={tech.icon} />

          <span className="text-secondary text-center w-full">{tech.name}</span>
        </div>
      )}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")