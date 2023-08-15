import React from 'react'
import { skills } from '../data'
import Skill from './Skill'

const Jobs = () => {
  return (
    <div className='my-[3rem] '>
        <div className='container mx-auto'>
            <h1 className='text-slate-900 font-bold text-[2rem]'>You need it, we've got it</h1>
            <div className='flex flex-wrap gap-10 mx-auto justify-around py-[2rem]'>
                {skills.map(skill => (
                    <Skill img={skill.img} key={skill.id} title={skill.title} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Jobs