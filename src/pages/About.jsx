import './About.css';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Customer First',
      description: 'Every decision we make puts our customers\' needs and satisfaction at the forefront.'
    },
    {
      icon: '🔒',
      title: 'Trust & Integrity',
      description: 'We build lasting relationships through honesty, transparency, and ethical practices.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We continuously improve our services using cutting-edge technology and creative solutions.'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'We\'re committed to giving back and making a positive impact in the communities we serve.'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Founded',
      description: 'Started as a small local insurance agency with a vision to revolutionize customer service.'
    },
    {
      year: '2013',
      title: 'Digital Transformation',
      description: 'Launched our online platform, making insurance accessible 24/7.'
    },
    {
      year: '2016',
      title: 'National Expansion',
      description: 'Grew to serve customers across all 50 states with localized expertise.'
    },
    {
      year: '2019',
      title: '100K Customers',
      description: 'Reached a major milestone of serving 100,000 satisfied customers.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Introduced AI-powered claims processing for faster, more accurate service.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as one of the top insurance providers with 500K+ customers.'
    }
  ];

  const team = [
    {
      name: 'Jennifer Martinez',
      role: 'Chief Executive Officer',
      image: '👩‍💼'
    },
    {
      name: 'David Thompson',
      role: 'Chief Technology Officer',
      image: '👨‍💻'
    },
    {
      name: 'Priya Patel',
      role: 'Chief Financial Officer',
      image: '👩‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'Chief Operations Officer',
      image: '👨‍💼'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content fade-in-up">
            <h1>Protecting families and businesses since 2010</h1>
            <p>
              At Puzzel Insurance, we believe that insurance should be simple, transparent, 
              and accessible to everyone. Our mission is to provide comprehensive protection 
              while delivering exceptional customer service that exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h2>Our Mission</h2>
              <p>
                To empower individuals and businesses with insurance solutions that provide 
                true peace of mind. We strive to make insurance accessible, understandable, 
                and tailored to each customer's unique needs.
              </p>
            </div>
            <div className="mission-card">
              <h2>Our Vision</h2>
              <p>
                To become the most trusted insurance provider by reimagining the insurance 
                experience through innovation, transparency, and unwavering commitment to 
                our customers' well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>These principles guide everything we do and every decision we make.</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>From humble beginnings to industry leadership, here's our story.</p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Leadership</h2>
            <p>Led by industry veterans committed to innovation and excellence.</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.image}</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <h3>500K+</h3>
              <p>Active Customers</p>
            </div>
            <div className="stat-box">
              <h3>$50B+</h3>
              <p>Coverage Provided</p>
            </div>
            <div className="stat-box">
              <h3>99.8%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-box">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

