import React from "react";


const About = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="text-center font-extrabold text-blue-900 text-3xl  md:text-4xl mb-6">System Repair World</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why create an "About Me" page?</h2>
            <p className="text-lg font-semibold mb-4">
              Creating an "About Me" page for your portfolio, blog or website can help you develop your professional brand. It's a personalized way to connect with potential employers and provide context for your work, which can help you differentiate yourself from other candidates during your job search. An "About Me" page may also help you develop relationships with potential clients and encourage them to work with you. Consider that because an "About Me" page is one of the first places many website visitors go to, it can be a great way to establish a good first impression of your brand.
            </p>
            <h3 className="text-xl font-bold mt-4 mb-2">1. Consider your audience</h3>
            <p className="text-lg font-semibold mb-4">
              As you begin to write your "About Me" page, consider who your target audience is. Understanding your target audience can help you use the appropriate language and provide information that's relevant to the reader. Consider that you might write this page for not only people familiar with your brand but also completely new readers. While the tone you use can vary based on your audience, a standard principle is to sound professional yet personal. You might also minimize the use of unnecessary jargon.
            </p>
            <p className="text-lg font-semibold mb-4">
              For instance, an independent photographer who's looking for more clients might target people who want professional pictures for their wedding. The photographer might focus their "About Me" page on their wedding photography experience to assure potential clients of their expertise. They can also express their passion for supporting couples in this milestone to improve their credibility.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="image/sliderimg-removebg-preview.png"
              alt="About Me Image"
              className="rounded-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;






 {/* <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white h-screen items-center">
        <div className="p-10">
          <div className="mt-10 text-4xl font-bold">
            Software Training Institute
          </div>
          <div className="mt-4">
            For Python training, Core Java, Corporate Java, Mobile App
            Development Training, PHP Training in Indore..
          </div>
          <div>
            <button className='py-2 px-4 rounded-full mt-12 bg-white text-2xl text-black font-bold'>contact</button>
          </div>
        </div>

        <div className="flex justify-center items-center  ">
          <img
            src="image/sliderimg-removebg-preview.png "
            alt="Slider Image"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div> */}