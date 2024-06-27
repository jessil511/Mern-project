import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">
                            ABOUT US
                            <span className="subheading">The only thing we are serious about is food.</span>
                        </h1>
                    </div>
                    <p className='mid'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit eum ullam ipsum architecto odio vitae ipsam? Nam quis veniam odit animi consectetur quam. Blanditiis facere corrupti unde alias quibusdam aut at, ipsum nemo laudantium non facilis, deserunt itaque, labore nam. Possimus harum blanditiis similique earum maiores in quam saepe.
                    </p>
                    <Link to={"/"} className="explore-menu-link">
                        Explore Menu <span><HiOutlineArrowNarrowDown /></span>
                    </Link>
                </div>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </section>
    );
};

export default About;

