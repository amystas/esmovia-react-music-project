import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    // Inject custom toast styles once
    if (!document.getElementById('custom-toast-style')) {
      const style = document.createElement('style');
      style.id = 'custom-toast-style';
      style.innerHTML = `
        .custom-toast {
          background-color: #007bff !important;
          border: none;
          box-shadow: 0 4px 16px 0 rgba(0,123,255,0.15);
          transition: transform 0.3s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.3s;
          animation: toast-in 0.4s cubic-bezier(.68,-0.55,.27,1.55);
          position: fixed;
          top: 1rem;
          right: 1rem;
          z-index: 9999;
        }
        .custom-toast.plop-out {
          animation: plop 0.35s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes toast-in {
          0% {
            transform: translateX(120%) scale(0.9);
            opacity: 0.2;
          }
          60% {
            transform: translateX(-10%) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        @keyframes plop {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          60% {
            transform: scale(1.15);
            opacity: 1;
          }
          100% {
            transform: scale(0.7);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const validateAndSend = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    const nameRegex = /^[A-Za-zÀ-ÿ '-]{2,40}$/;
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (
      !nameRegex.test(name) ||
      !emailRegex.test(email) ||
      message.length < 10 ||
      message.length > 500
    ) {
      showToast('Please fill out the form correctly.', 'danger');
      return;
    }

    showToast('Email sent!', 'success');
  };

  const showToast = (message, type) => {
    const container = document.getElementById('toast-container');
    if (container) container.innerHTML = '';

    const toast = document.createElement('div');
    toast.className = `toast show custom-toast text-white`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.style.minWidth = '200px';
    toast.style.fontSize = '1rem';
    toast.innerHTML = `<div class="toast-body">${message}</div>`;

    if (container) {
      container.appendChild(toast);
      setTimeout(() => {
        toast.classList.add('plop-out');
        setTimeout(() => {
          toast.classList.remove('show');
          toast.classList.add('hide');
        }, 350);
      }, 2500);
    }
  };

  return (
    <div className="bg-dark text-light" data-bs-theme="dark">
      <main className="container">
        <section className="mb-5">
          <h1 className="display-4 mb-3">Our team</h1>
          <div className="banner-box">
            <img src="main_page_images/Us.jpg" alt="Banner" className="img-fluid rounded" />
          </div>
          <h2 className="h4 text-secondary mb-4">We’re building the future of music communities.</h2>
          <div className="card bg-secondary text-light mb-4">
            <div className="card-body">
              <p className="lead mb-0">
                Pinguinos Music is on a mission to empower music lovers, artists, and creators to connect, collaborate, and grow together. We believe in the power of community and technology to unlock new opportunities for everyone passionate about music.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h3 className="mb-3">Our Values</h3>
          <div className="row">
            {[
              { title: 'Community First', desc: 'Everything we do starts with our users and their needs.' },
              { title: 'Creativity', desc: 'We celebrate originality and encourage new ideas.' },
              { title: 'Transparency', desc: 'We build trust through openness and honesty.' },
              { title: 'Empowerment', desc: 'We give people the tools and support to achieve more.' },
            ].map((val, i) => (
              <div className="col-md-6 mb-3" key={i}>
                <div className="card bg-dark border-secondary h-100">
                  <div className="card-body">
                    <strong>{val.title}:</strong> {val.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <h3 className="mb-3">Why Pinguinos Music?</h3>
          <div className="card bg-secondary text-light">
            <div className="card-body">
              We’re passionate about making music discovery and collaboration accessible to all. Whether you’re an artist looking to share your work or a fan searching for your next favorite track, Pinguinos Music is here to help you connect and thrive.
            </div>
          </div>
        </section>

        <section className="my-5">
          <h3 className="mb-3">Contact Us</h3>
          <form id="contactForm" onSubmit={validateAndSend}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control bg-dark text-light border-secondary" id="name" name="name" placeholder="Enter your name" required minLength="2" maxLength="40" pattern="^[A-Za-zÀ-ÿ '-]{2,40}$" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control bg-dark text-light border-secondary" id="email" name="email" placeholder="Enter your email" required maxLength="60" pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control bg-dark text-light border-secondary" id="message" name="message" rows="4" placeholder="Type your message" required minLength="10" maxLength="500" />
            </div>
            <div className="mt-5">
              <button type="submit" className="btn btn-primary custom-btn">Send</button>
            </div>
          </form>
          <div id="toast-container"></div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;