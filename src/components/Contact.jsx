/* eslint-disable */
import { useRef, useState } from 'react'
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { SectionWrapper } from "../hoc"
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'

const emailjsSecret = import.meta.env.VITE_APP_EMAILJS
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: { value: "", error: false },
    email: { value: "", error: false },
    message: { value: "", error: false }
  })
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = false;

    switch (name) {
      case 'name':
        error = value.trim() < 4;
        break;
      case 'email':
        error = !value.trim() || !/\S+@\S+\.\S+/.test(value);
        break;
      case 'message':
        error = value.trim() < 10;
        break;
      default:
        error = false;
    }

    setForm(prev => ({ ...prev, [name]: { value: value, error: error } }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;
    if (form.name.value.trim().length < 3) {
      setForm(prev => ({ ...prev, name: { ...prev["name"], error: true } }))
      error = true;
    }
    if (!form.email.value.trim() || !/\S+@\S+\.\S+/.test(form.email.value)) {
      setForm(prev => ({ ...prev, email: { ...prev["email"], error: true } }))
      error = true;
    }
    if (!form.message.value.trim().length < 10) {
      setForm(prev => ({ ...prev, message: { ...prev["message"], error: true } }))
      error = true;
    }
    if (error) return;

    setLoading(true);
    emailjs.send("service_ogiikmk",
      "template_yq11m4u",
      {
        from_name: form.name,
        to_name: "Kaushal",
        from_email: form.email,
        to_email: "kaushalchaunah1474@gmail.com",
        message: form.message
      },
      emailjsSecret || ""
    )
      .then(() => {
        setLoading(false);
        alert("Thank you! I will get back to you soon.");
        setForm({
          name: { value: "", error: false },
          email: { value: "", error: false },
          message: { value: "", error: false }
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Somethig went wrong")
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className='p-8 rounded-2xl bg-black-100 flex-[0.75]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input
              name="name"
              value={form.name.value}
              onChange={handleChange}
              placeholder="What's your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-secondary border-opacity-50 font-medium'
            />
            {form.name.error && <div className='text-red-400'>Minimum 3 Characters are required</div>}

          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              name="email"
              type="email"
              value={form.email.value}
              onChange={handleChange}
              placeholder="What's your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-secondary border-opacity-50 font-medium'
            />
            {form.email.error && <div className='text-red-400'>Please enter valid email</div>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
              name="message"
              value={form.message.value}
              row={7}
              onChange={handleChange}
              placeholder="What do you want say"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-secondary border-opacity-50 font-medium'
            />
            {form.message.error && <div className='text-red-400'>Minimum 10 Characters are required</div>}

          </label>

          <button type='submit'
            className='py-3 px-8 outline-none w-fit text-white bg-tertiary font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")