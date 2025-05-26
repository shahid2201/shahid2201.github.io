import React from "react";
import "./../styles/about.css";
import profilePhoto from "../assets/profile.jpg";

const About = () => (
  <section className="about-section redesigned">
    <div className="about-header">
      <img
        src={profilePhoto}
        alt="Mohammad Shahid"
        className="about-profile-photo"
      />
      <div>
        <h2 className="about-title">From Punjab to Programming: My Journey Unfolded</h2>
        <p className="about-location">Ludhiana, Punjab • Born Jan 2003</p>
      </div>
    </div>
    <div className="about-story">
      <h3>Early Beginnings: My First Love, Mathematics</h3>
      <p>
        I was born in Ludhiana, Punjab in January 2003. Growing up, I was captivated by numbers. While most saw math solely as a subject, I found it to be a playground of creativity—a series of puzzles waiting to be solved. Every problem was a challenge, and I eagerly dove into each one, often driven by a deep-rooted desire to push my own limits.
      </p>
      <h3>The Unexpected Turn: Discovering Web Development</h3>
      <p>
        Even though my heart beat for mathematics, life had a twist in store. Under a bit of parental pressure, I started exploring web development. Initially, it wasn’t exactly my passion. Yet, as I began to write code and see ideas come to life on the screen, I realized there was art in this logic-filled realm. I found joy in both the delicate work of front-end design and the intricate demands of back-end programming—each line of code telling a part of my evolving story.
      </p>
      <h3>New Horizons: Moving to Canada and Embracing Change</h3>
      <p>
        After high school, I took a leap of faith and moved to Canada. Arriving in a new country was both exciting and intimidating. I quickly learned that being an international student meant navigating a whole new set of challenges. I had to adjust to a different culture, grapple with a more rigorous academic system, and face financial pressures on my own. There were moments when I felt lost in translation—both literally and metaphorically—but Canada also opened doors I hadn’t imagined. I gained access to world-class educational resources, connected with a vibrant, multicultural community, and discovered opportunities that fueled my personal and professional growth.
      </p>
      <h3>Learning Through Setbacks: Finding Strength in Adversity</h3>
      <p>
        Not everything went smoothly. I experienced my share of setbacks—distractions derailed my focus, and low grades crept in during a crucial period of my academic life. It was a hard pill to swallow, especially when those grades didn’t reflect my true potential. Instead of letting these challenges defeat me, I decided to prove to myself what I was truly capable of. I started dedicating my time to personal projects, refining my skills, and building a portfolio that spoke louder than any transcript ever could. Each setback became a lesson, molding me into a more focused, disciplined, and resilient individual.
      </p>
      <h3>Today and Beyond: Living My Passion as a Freelance Developer</h3>
      <p>
        Now, I proudly call myself a freelance web developer. Every project I work on is a fresh chance to combine creativity with technical skill, and I thrive on tackling unique challenges head-on. The journey from a kid in Ludhiana falling in love with numbers to an international student seizing the opportunities in Canada has been anything but ordinary. Every hurdle, every success has added a new chapter to my story—one where I continue to grow, innovate, and live out my passion for coding. for coding.
      </p>
    </div>
    <div className="about-cta redesigned-cta">
      <span role="img" aria-label="Handshake">🤝</span>
      <p>
        <strong>Let’s build something amazing together!</strong> I’m open to freelance work and collaborations—if you have an idea, <a href="/#/contact">let’s connect</a>!
      </p>
    </div>
  </section>
);

export default About;