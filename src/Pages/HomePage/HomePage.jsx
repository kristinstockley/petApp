import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <div className="hero-image">
        <img src="/images/heroPlaceholder2.jpg" alt="Hero" width="100%" height="100%" />
        <div className="container">
          <div className="hero-text">
            <h2 className="home-h1">Welcome to re
              <span className="gradient-text">furr</span>ed
            </h2>
            <h3 className="home-p">
              Discover the perfect companion for your family. Browse through a variety
              of dog breeds and find the ideal furry friend to join your household.
            </h3>
          </div>
        </div>
      </div>
      <br /> <br />



      <section className="features">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Find Your Match with Our Breed Selector.<span className="text-body-secondary"> Discover Your Perfect Breed.</span></h2>
            <p className="lead">Not sure which breed is right for you? Take our fun and interactive breed selector quiz. Answer a few questions about your lifestyle and preferences, and we'll recommend dog breeds that match your personality and living situation.</p>
          </div>
          <div className="col-md-5">
            <img src="/images/pawraise.jpg" alt="pawraise" className="img-fluid" width="575" height="440" />
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Discover Breed Traits.<span className="text-body-secondary"> Get to Know Them.</span></h2>
            <p className="lead">Learn about the unique qualities of different dog breeds. From size and energy level to grooming needs and compatibility with children, our breed profiles provide valuable insights to help you make an informed decision.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src="/images/dogcomputer.jpg" alt="dogcomputer" className="img-fluid" width="575" height="420" />
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Browse for your buddy.<span className="text-body-secondary"> Explore Breeds.</span></h2>
            <p className="lead">Access a wide range of dog breeds, each with unique characteristics and traits. Whether you're looking for a playful companion or a loyal guardian, refurred has the perfect match for you.</p>

          </div>
          <div className="col-md-5">
            <img src="/images/dogmagazine.jpg" alt="dogmagazine" className="img-fluid" width="575" height="440" />
          </div>
        </div>
      </section>


      <hr className="featurette-divider"></hr>

      <div className="container marketing">
        <h1 className="team-title">Meet the Team</h1>
        <div className="row">
          <div className="col-lg-4">
            <img src="/images/jason.jpeg" alt="jason" className="rounded-circle" width="140" height="140" />
            <h2 className="fw-normal">Jason McGrath</h2>
            <p>Architecture/Backend/Full Stack</p>
            <p><a className="btn btn-dark" href="https://www.github.com/jnomad21">Github &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img src="/images/kristin.jpeg" alt="kristin" className="rounded-circle" width="140" height="140" />
            <h2 className="fw-normal">Kristin Stockley</h2>
            <p>Design/UI/UX/Full Stack</p>
            <p><a className="btn btn-dark" href="https://www.github.com/kristinstockley">Github &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img src="/images/joel.png" alt="joel" className="rounded-circle" width="140" height="140" />
            <h2 className="fw-normal">Joel Fuelling</h2>
            <p>Architecture/Backend/Full Stack</p>
            <p><a className="btn btn-dark" href="https://www.github.com/joelfuelling">Github &raquo;</a></p>
          </div>
        </div>
      </div>

      <hr className="featurette-divider"></hr>

      <footer className="container">
        <p className="float-end"><a href="/#" className="btn btn-dark">Back to top</a></p>
        <p>&copy; 2023 refurred</p>
      </footer>
    </>

  )



}