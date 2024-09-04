import React from 'react'
import { FrontSide } from 'three'
import SkillDataProvider from './sub/SkillDataProvider'
import SkillText from './sub/SkillText'

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20'
    style={{transform:"scale(0.9)"}}>
        <SkillText />

        {/* div 1 */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
       <img src="/html.png" alt="html" height={66} width={66} />
       <img src="/css.png" alt="css" height={77} width={77} />
       <img src="/js.png" alt="js" height={54} width={54} />
       <img src="/ts.png" alt="ts" height={54} width={54} />
       <img src="/vsc.png" alt="vsc" height={53} width={53} />
       <img src="/next.png" alt="next" height={57} width={57} />
       <img src="/mysql.png" alt="mysql" height={63} width={63} />
       <img src="/node-js.png" alt="node-js" height={58} width={58} />
       <img src="/gitwhite.png" alt="gitwhite" height={58} width={58} />
       <img src="/git.png.png" alt="git.png" height={68} width={68} />
       <img src="/powerbi.png" alt="powerbi" height={90} width={90} />
       <img src="/php.png" alt="php" height={63} width={63} />
       <img src="/bootstrap.png" alt="bootstrap" height={61} width={61} />
       <img src="/jquery.png" alt="jquery" height={60} width={60} />
      </div>

        {/* div 2 */}
         <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        
         <img src="/csharp.png" alt="csharp" height={65} width={65} />
         <img src="/dbmssm.png" alt="dbmssm" height={78} width={78} />
         <img src="/skype.png" alt="skype" height={50} width={50} />
         <img src="/json.png" alt="json" height={88} width={88} />
         <img src="/angular.png" alt="angular" height={101} width={101} />
         <img src="/vs.png" alt="vs" height={75} width={75} />
         <img src="/xml.png" alt="xml" height={51} width={51} /> 
         <img src="/mvc.png" alt="mvc" height={121} width={121} />
         <img src="/access.png" alt="access" height={48} width={48} /> 
         <img src="/azure.png" alt="azure" height={68} width={68} />    
         </div> 
 
        {/* div 3 */}
         <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
         <img src="/Jira.png" alt="Jira" height={78} width={78} />    
         <img src="/word.png" alt="word" height={48} width={48} />
         <img src="/excel.png" alt="excel" height={88} width={88} />
         <img src="/ppt.png" alt="ppt" height={58} width={58} />
         <img src="/onenote.png" alt="onenote" height={58} width={58} />
         <img src="/outlook.png" alt="outlook" height={58} width={58} />
         <img src="/seo.png" alt="seo" height={97} width={97} />
         <img src="/agile.png" alt="agile" height={66} width={66} />  
          </div>


        {/* div 4 */}
         <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
         <img src="/tailwind.png" alt="tailwind" height={71} width={71} />
         <img src="/figma.png" alt="figma" height={40} width={40} />
         <img src="/cl.png" alt="cl" height={55} width={55} />  
         <img src="/canva.png" alt="canva" height={53} width={53} />

         </div>

        {/* div 5 */}
         <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
         <img src="/laravel.png" alt="laravel" height={278} width={270} />


        </div>
        

        <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
