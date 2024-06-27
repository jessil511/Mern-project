import React from "react";
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <>
      <section className="notFound" id="notFound">
        <img src="/notFound.svg" alt="notFound" />
        <h1>Looks like you're lost</h1>
        <p>We can't seem to find the page you are looking for!</p>
        <Link to={'/'}>
          Back to Home <span><HiOutlineArrowRight /></span>
        </Link>
      </section>
    </>
  );
}

export default NotFound;
