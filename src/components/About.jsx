import React from 'react'

function About() {
   return (
     <div className="about py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
  <h1 className="text-center font-bold text-3xl md:text-4xl text-gray-900 mb-10">
    About Us
  </h1>

  <div className="flex flex-col lg:flex-row items-center gap-8">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 h-auto">
      <img
        className="w-full h-auto max-h-[50vh] object-cover rounded-2xl shadow-lg"
        src="https://cdn.prod.website-files.com/63d9fc8cbe1160c2ab59759d/64aed170f7367ae0cf48d6c8_MicrosoftTeams-image%20(31).png"
        alt="Team"
      />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2 text-gray-700 text-lg md:text-xl leading-relaxed">
      <p>
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        facere ipsam perferendis consequatur unde harum ea voluptatem modi quam
        fuga eius delectus vel optio, consequuntur recusandae expedita totam!
        Iusto illo necessitatibus vitae ex debitis impedit alias perspiciatis
        esse quisquam. Perspiciatis, deserunt placeat. Excepturi, possimus
        soluta quaerat impedit reiciendis esse nam culpa illum maiores illo eos
        vel."
      </p>
    </div>
  </div>
</div>
   )
}

export default About