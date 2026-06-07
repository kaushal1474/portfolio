/* eslint-disable */

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../utils/constants';
import { SectionWrapper } from "../hoc"
import { textVariant } from '../utils/motion';

const ExperianceCard = ({ index, experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center h-full w-full'>
          <img src={experience.icon} alt={experience.company_name}
            className='h-[75%] w-[75%] rounded-full scale-125'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        {experience.role &&<h3 className='text-white text-[18px] font-bold'>{experience.role}</h3>}
        <p className='text-secondary text-base font-semibold !m-0'>{experience.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) =>
          <li
            key={`experience-points-${index}`}
            className='text-white-100 pl-1 text-sm tracking-wider'
          >
            {point}
          </li>
        )}

      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>
          Work Experiance.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperianceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")