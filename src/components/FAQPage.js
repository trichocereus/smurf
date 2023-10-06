import React from 'react';
import '../nav.css';

function FAQPage() {
  return (
    <div className="faq-page">
      {/* Your FAQ page content here */}
      <h1>Frequently Asked Questions</h1>
      <a className='nav' onClick={() => {window.location.href="./home"}}>back</a>
    </div>
  );
}

export default FAQPage;