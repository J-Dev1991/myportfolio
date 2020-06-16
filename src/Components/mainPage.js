import React, { useState } from "react";

import "./nav.css";
import { Data } from "./workData";
import { GiDatabase } from "react-icons/gi";
import { FaCode, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineClose } from "react-icons/ai";

export default function mainPage({
  handleOpen,
  openbtn
}) {
  return (
    <div>
      <div className="welcome-page" id="home">
        <div className="myname-wrap name-wrap">
          <div className="myname name-title">
            <h4 className="fullname"> ajibola oshikoya</h4>
            <h4 className="field">software engineer</h4>
          </div>

          <div className="button-wrap">
            <a href="#portfolio">
              {" "}
              <button
                type="button"
                className="btn btn-info pageBtn myportfolio"
              >
                portfolio
              </button>
            </a>

            <button
              type="button"
              className="btn btn-secondary pageBtn"
              onClick={handleOpen}
            >
              about me
            </button>
          </div>
        </div>

        {/* about-main */}
        <div className={openbtn ? "aboutmain" : "close"}>
          <div className="about-text">
            <p className="my-content">
              My name is Ajibola Oshikoya and I am a Front-End Software Engineer
              . I bagged a barchelor degree in computer engineering from Vistula
              University Warsaw Poland. I am a sport enthusiast and i also was a
              professional football player. The love for designs, neated
              structures and captivating color appearances as always been my
              passion.
            </p>
          </div>
        </div>
      </div>

      <section className="portfolio-section" id="portfolio">
        <div className="title-wrap">
          <h2 className="title-title">work | projects</h2>
        </div>

        <div className="portfolio-wrap">
          <div className="work-img-display">
            {Data.map((item) => {
              return (
                <Card key={item.id} className="cards">
                  <Card.Title className="img-title">{item.title}</Card.Title>
                  <Card.Img className="imgs" src={item.img} />
                  <Card.Body className="all">
                    <Button className="btns" variant="light">
                      <a className="linkk" href={item.code}>
                        Source Code
                      </a>
                    </Button>

                    <Button className="btns" variant="light">
                      <a target="_blank" className="linkk" href={item.code}>
                        view
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="skill-main">
        <div className="title-wrap">
          <h2 className="title-title">skills</h2>
        </div>
        <div className="skills-body">
          <div className="skills-main">
            <div className="language-wrap">
              <h2 className="language-title">
                <FaCode /> fundamental language
              </h2>
              <ul className="type-wrap">
                <h3 className="language-type">java</h3>
                <h3 className="language-type">javascript</h3>
              </ul>

              <div className="main-skill">
                <h2 className="ff">
                  <GiDatabase />
                  front-end development tools
                </h2>
                <ul className="tools-list">
                  <li>html</li> <li>react js</li> <li>styled-components</li>{" "}
                  <li>css/less</li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="title-wrap">
          <h2 className="title-title">contact</h2>
        </div>
        {/* start close btn */}
        <div className="contact-container">
          <div className="container-child">
            <span>
              <a
                className="contact-logo"
                target="_blank"
                href="https://www.linkedin.com/feed"
              >
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a
                className="contact-logo"
                target="_blank"
                href="https://twitter.com/home"
              >
                <FaTwitter />
              </a>
            </span>
            <span>
              <a
                className="contact-logo"
                target="_blank"
                href="https://github.com/"
              >
                <FaGithub />
              </a>
            </span>
          </div>
          <p className="email-text">
            <span className="texts">
              {" "}
              you can also contact me via my e-mail
            </span>
            <a
              className="contact-email"
              target="_blank"
              href="mailto: ade_ola1991@yahoo.com"
            >
              ade_ola1991@yahoo.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
