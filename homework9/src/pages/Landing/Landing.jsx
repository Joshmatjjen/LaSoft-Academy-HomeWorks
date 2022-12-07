import React from "react";

import Button from "../../components/Button";

import Subscribe from "../../modal/Subscribe";

import parisImg from "../../assets/img/paris.png";
import artOnArtImg from "../../assets/img/artOnArt.png";
import ImageBackground from "../../components/ImageBackground";

const Landing = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="content">
      <Subscribe modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <section className="content--one">
        <div className="content--one__left">
          <h3>Desperate to learn drawing? We’ll teach you!</h3>
          <div className="content--one__left--info">
            <p>
              Our school has more than 20 years of experience in teaching people
              who always thought that they don’t have even a slightest hint of a
              talent. Some other descriptive stuff that I’m too lazy to make up.
            </p>
            <p>With us you will get:</p>

            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Vestibulum commodo id amet non facilisis in.</li>
              <li>
                Est eros, vestibulum cursus luctus luctus aenean molestie.
              </li>
              <li>
                Augue ultricies non tristique malesuada justo neque mi,
                pellentesque lacus.
              </li>
            </ul>

            <Button title="Apply now" classes="apply-btn" route="/apply" />
          </div>
        </div>
        <ImageBackground
          className="content--one__right"
          image={parisImg}
          alt="Paris Eiffel Tower"
        />
      </section>
      <section className="content--two">
        <ImageBackground
          className="content--two__left"
          image={artOnArtImg}
          alt="Art on Art"
        />

        <div className="content--two__right">
          <h4>Interested but currently have other plans?</h4>
          <p>
            Subscribe to our newsletter to stay tuned and get hottest updates
            and deals
          </p>
          <Button
            title="Subscribe"
            classes="content--two__right--btn"
            type="button"
            onClick={() => openModal()}
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;
