import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const NotFoundPage = () => (
  <>
    <PageBanner
      title={<><span>404</span> <span className="italic font-light">Not Found</span></>}
      crumbs={[{ label: '404' }]}
    />
    <section className="py-24 text-center">
      <p className="text-[#4b4753] mb-6">The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn-dark">Back to Home</Link>
    </section>
  </>
);

export default NotFoundPage;
