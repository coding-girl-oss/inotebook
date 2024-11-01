

const About = () => {
 
  return (
    <>
    <h1 className="text-5xl text-center text-black my-10 font-creepster">About iNotebook</h1>
    <div className="max-w-[40vw] mx-auto my-20">

    <div className="collapse collapse-arrow bg-[#1a6e84] border-[2px] border-black text-black">
    <input type="radio" name="my-accordion-2" defaultChecked />
    <div className="collapse-title text-xl font-medium font-creepster ">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[#1a6e84]  text-black border-[2px] border-black">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium font-creepster">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[#1a6e84]  text-black border-[2px] border-black">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium font-creepster">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
    </div>
    </>
  )
}

export default About
