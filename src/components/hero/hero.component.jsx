import './hero.styles.css'

const Hero = () => {
    return (<div className=" hero-container ">
        <section id="hero" >
        <div className="hero-content " >
          <h1>Welcome to Our Recruitment Platform</h1>
          <h3>Find the best talent for your company</h3>
          <button className='btn'> <a href="#" className="button-28">Get Started</a></button>
        </div>
      </section>

      <section className="features" >
        <div className="feature">
          <h3>Global Reach</h3>
          <p>Connect with talented professionals from around the world. Hire the best regardless of location.</p>
        </div>
        <div className="feature">
          <h3>Specialized Job Categories</h3>
          <p>Find software engineers, product managers, data scientists, and more in specific industries.</p>
        </div>
        <div className="feature">
          <h3>Advanced Search</h3>
          <p>Use our powerful search filters to narrow down candidates based on skills, experience, and more.</p>
        </div>
        </section>
        </div>

    )
}

export default Hero;