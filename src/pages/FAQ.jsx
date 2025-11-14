import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: 'General Questions',
      icon: '❓',
      questions: [
        {
          question: 'What is insurance and why do I need it?',
          answer: 'Insurance is a contract that provides financial protection against unexpected losses. It helps protect you, your family, and your assets from financial hardship due to accidents, illness, natural disasters, or other unforeseen events. Having insurance gives you peace of mind knowing you\'re covered when life\'s uncertainties arise.'
        },
        {
          question: 'How do I choose the right insurance coverage?',
          answer: 'Choosing the right coverage depends on your specific needs, lifestyle, and budget. Consider factors like your assets, dependents, income, health status, and risk tolerance. Our insurance experts can help you assess your needs and recommend appropriate coverage levels. Start by getting a free quote to see personalized options.'
        },
        {
          question: 'Can I bundle multiple insurance policies?',
          answer: 'Yes! We offer multi-policy discounts when you bundle different types of insurance like home and auto insurance. Bundling can save you up to 25% on your premiums while simplifying your insurance management with a single provider and one convenient payment.'
        },
        {
          question: 'What factors affect my insurance premium?',
          answer: 'Premiums are determined by various factors including your age, location, coverage amount, deductible, claim history, credit score (where applicable), and specific risk factors related to what you\'re insuring. Living a healthy lifestyle, maintaining a good driving record, and choosing higher deductibles can help lower your premiums.'
        }
      ]
    },
    {
      category: 'Claims & Coverage',
      icon: '📋',
      questions: [
        {
          question: 'How do I file a claim?',
          answer: 'Filing a claim is easy! You can file online through your account portal, via our mobile app, or by calling our 24/7 claims hotline at +1 (234) 567-890. You\'ll need to provide details about the incident, relevant documentation (photos, police reports, medical records), and your policy number. Our claims team will guide you through the entire process.'
        },
        {
          question: 'How long does it take to process a claim?',
          answer: 'Most straightforward claims are processed within 3-5 business days. Complex claims may take longer depending on the investigation required. We offer fast-track processing for urgent cases, with approvals possible in as little as 24 hours. You can track your claim status online or through our mobile app at any time.'
        },
        {
          question: 'What is a deductible and how does it work?',
          answer: 'A deductible is the amount you pay out-of-pocket before your insurance coverage kicks in. For example, if you have a $1,000 deductible and file a $5,000 claim, you pay the first $1,000 and we cover the remaining $4,000. Higher deductibles typically result in lower monthly premiums, while lower deductibles mean higher premiums but less out-of-pocket expense when filing a claim.'
        },
        {
          question: 'What\'s not covered by my insurance?',
          answer: 'Coverage exclusions vary by policy type, but common exclusions include intentional damage, wear and tear, certain natural disasters (unless specifically covered), and pre-existing conditions (for health insurance). Always review your policy documents for specific exclusions, or contact our team to discuss what is and isn\'t covered under your plan.'
        },
        {
          question: 'Can I add or remove coverage after purchasing a policy?',
          answer: 'Yes! You can modify your coverage at any time by contacting us. Changes may take effect immediately or at your next renewal date, depending on the type of adjustment. Keep in mind that increasing coverage may require additional underwriting, and changes will affect your premium.'
        }
      ]
    },
    {
      category: 'Payment & Billing',
      icon: '💳',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, bank transfers (ACH), and electronic checks. You can set up automatic payments to ensure you never miss a payment and maintain continuous coverage.'
        },
        {
          question: 'Can I pay my premium monthly or do I have to pay annually?',
          answer: 'We offer flexible payment options! You can choose to pay monthly, quarterly, semi-annually, or annually. While monthly payments offer convenience, paying annually often comes with a discount. Choose the payment schedule that works best for your budget.'
        },
        {
          question: 'What happens if I miss a payment?',
          answer: 'We understand that life happens. Most policies include a grace period (typically 10-30 days) after your payment due date. During this time, your coverage remains active. If payment isn\'t received within the grace period, your policy may be cancelled. We\'ll send multiple reminders before any cancellation occurs. Contact us immediately if you\'re having trouble making a payment.'
        },
        {
          question: 'Are there any discounts available?',
          answer: 'Yes! We offer numerous discounts including multi-policy bundling (up to 25% off), safe driver discounts, home security system discounts, good student discounts, loyalty discounts, paperless billing discounts, and more. Contact us to see which discounts you qualify for.'
        }
      ]
    },
    {
      category: 'Policy Management',
      icon: '📄',
      questions: [
        {
          question: 'How do I update my policy information?',
          answer: 'You can update your policy information through your online account portal, mobile app, by calling our customer service at +1 (234) 567-890, or by emailing us at info@puzzelinsurance.com. Important changes like address updates, vehicle changes, or adding/removing covered individuals should be reported immediately to ensure proper coverage.'
        },
        {
          question: 'Can I cancel my policy at any time?',
          answer: 'Yes, you can cancel your policy at any time. Depending on when you cancel and your policy terms, you may receive a refund for the unused portion of your premium. Some policies may have a cancellation fee. We recommend contacting us before cancelling to discuss your options, as there may be better solutions like adjusting your coverage.'
        },
        {
          question: 'What happens when my policy is up for renewal?',
          answer: 'We\'ll notify you 30-60 days before your policy expiration with renewal information and any rate changes. Your policy will automatically renew unless you notify us otherwise. This is a great time to review your coverage, update information, and ensure you have the protection you need.'
        },
        {
          question: 'How do I access my policy documents?',
          answer: 'All your policy documents are available 24/7 through your online account or mobile app. You can view, download, or print your policy declarations, coverage details, payment history, and claim information anytime. If you need a physical copy, contact us and we\'ll mail it to you.'
        }
      ]
    },
    {
      category: 'Specific Insurance Types',
      icon: '🏠',
      questions: [
        {
          question: 'What\'s the difference between term and whole life insurance?',
          answer: 'Term life insurance provides coverage for a specific period (10, 20, or 30 years) and is generally more affordable. Whole life insurance provides lifelong coverage and includes a cash value component that grows over time. Term is ideal for temporary needs like mortgage protection, while whole life offers permanent protection and can serve as an investment vehicle.'
        },
        {
          question: 'Do I need renters insurance if I don\'t own my home?',
          answer: 'Yes! While your landlord\'s insurance covers the building, it doesn\'t protect your personal belongings or provide liability coverage for accidents in your rental unit. Renters insurance is affordable (typically $15-30/month) and covers your possessions, temporary living expenses if your rental becomes uninhabitable, and liability protection.'
        },
        {
          question: 'What\'s the difference between collision and comprehensive auto insurance?',
          answer: 'Collision coverage pays for damage to your vehicle from accidents with other vehicles or objects, regardless of fault. Comprehensive coverage protects against non-collision events like theft, vandalism, fire, natural disasters, and animal strikes. Both are typically required if you have a car loan or lease.'
        },
        {
          question: 'Does health insurance cover preventive care?',
          answer: 'Yes! Under the Affordable Care Act, all health insurance plans must cover preventive services like annual check-ups, vaccinations, screenings, and certain tests at no cost to you (no copay or deductible). This helps you stay healthy and catch potential issues early.'
        },
        {
          question: 'What does business insurance typically cover?',
          answer: 'Business insurance typically includes general liability (protects against third-party injuries and property damage), property insurance (covers business assets), workers\' compensation (covers employee injuries), business interruption (covers lost income), and professional liability (protects against errors and negligence). The exact coverage depends on your business type and needs.'
        }
      ]
    },
    {
      category: 'Digital Services',
      icon: '📱',
      questions: [
        {
          question: 'Do you have a mobile app?',
          answer: 'Yes! Our mobile app is available for iOS and Android devices. With our app, you can view policy information, make payments, file claims, access digital ID cards, contact support, and manage your account on the go. Download it from the App Store or Google Play Store.'
        },
        {
          question: 'Is my personal information secure?',
          answer: 'Absolutely. We use bank-level encryption and security protocols to protect your personal and financial information. Our systems are regularly audited and comply with industry security standards. We never sell your information to third parties, and you can trust that your data is safe with us.'
        },
        {
          question: 'Can I manage everything online?',
          answer: 'Yes! Our digital platform allows you to handle most insurance needs online including getting quotes, purchasing policies, making payments, updating information, filing claims, and accessing documents. However, our human support team is always available if you prefer to speak with someone directly.'
        }
      ]
    }
  ];

  return (
    <div className="faq">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-content fade-in-up">
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about our insurance products, claims process, 
              payments, and more. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="faq-content">
        <div className="container">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.category}</h2>
              </div>
              <div className="faq-list">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div 
                      key={questionIndex} 
                      className={`faq-item ${isOpen ? 'active' : ''}`}
                    >
                      <button 
                        className="faq-question"
                        onClick={() => toggleQuestion(globalIndex)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <svg 
                          className="faq-icon" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none"
                        >
                          <path 
                            d="M19 9l-7 7-7-7" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Still Have Questions?</h2>
            <p>
              Our support team is available 24/7 to help answer any questions you may have. 
              We're here to make insurance simple and accessible.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary btn-large">
                Contact Support
              </a>
              <a href="tel:+1234567890" className="btn btn-secondary btn-large">
                Call: +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <div className="container">
          <h2>Popular Resources</h2>
          <div className="quick-links-grid">
            <a href="/quote" className="quick-link-card">
              <span className="quick-link-icon">💡</span>
              <h3>Get a Quote</h3>
              <p>Receive a personalized insurance quote in minutes</p>
            </a>
            <a href="/services" className="quick-link-card">
              <span className="quick-link-icon">📊</span>
              <h3>View All Services</h3>
              <p>Explore our comprehensive insurance offerings</p>
            </a>
            <a href="/contact" className="quick-link-card">
              <span className="quick-link-icon">💬</span>
              <h3>Live Chat</h3>
              <p>Chat with our support team in real-time</p>
            </a>
            <a href="/about" className="quick-link-card">
              <span className="quick-link-icon">ℹ️</span>
              <h3>About Us</h3>
              <p>Learn more about our company and values</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

