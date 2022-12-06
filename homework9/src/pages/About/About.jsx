import React from "react";
import GoogleMapReact from "google-map-react";

import ImageIcon from "../../components/ImageIcon/imageIcon";

import mapIcon from "../../assets/img/map.svg";
import phoneIcon from "../../assets/img/phone.svg";
import fbIcon from "../../assets/img/facebook.svg";
import instaIcon from "../../assets/img/instagram.svg";
import twitterIcon from "../../assets/img/twitter.svg";

import "./about.styles.css";

const About = () => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 39.826279, lng: -75.180313 },
      map,
      title: "Hello World!",
    });
    return marker;
  };

  return (
    <div className="content about-content">
      <section className="content--one">
        <div className="content--one__left">
          <h3>Who we are?</h3>
          <div className="content--one__left--info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              nulla ornare lacus, accumsan purus sem donec. Vitae ornare sit
              rhoncus vitae id neque. Non vitae et, pellentesque lacus. Nunc, eu
              sollicitudin massa senectus eu diam pharetra. Sit nisl quisque
              eget arcu cursus scelerisque. Aliquam et urna tellus blandit sit
              nulla nec. Ultricies sapien sit lorem aliquet. Phasellus enim
              feugiat sed parturient elementum varius ut in vel. Neque egestas
              magna sed orci, consequat. Sit magnis nunc consequat id proin
              tortor egestas arcu ac. At faucibus leo et, nisi, sollicitudin.
              Malesuada sagittis massa, viverra tempor etiam hendrerit eget
              amet. Odio magna ultrices diam, facilisis. Habitant diam eros
              molestie pretium. <br />
              <br /> Viverra parturient eu tincidunt sem. Aliquet ultrices
              volutpat orci tristique. Sit eleifend donec bibendum sed
              fermentum. Amet, sagittis, libero, at nullam vestibulum. Fusce et
              sit maecenas urna orci felis sodales. Dignissim aliquam at id duis
              gravida. Nunc sit arcu lectus lorem libero vel vitae adipiscing
              amet. In cras sed tristique nisl, amet accumsan urna quis.
              Condimentum laoreet a convallis sit pellentesque laoreet at
              fringilla. Porttitor ut mi nec cras. Nunc, sit non ipsum aliquam
              enim. Blandit dictum nunc duis ac faucibus neque feugiat vitae.
              Quis ac malesuada pulvinar ac cras mollis dictum ullamcorper
              pretium. Pellentesque ac nunc, eu fermentum erat nunc vel natoque
              volutpat. <br />
              <br /> Et ac a leo et rhoncus montes, enim viverra. Nulla aliquam
              ut massa, praesent viverra integer massa justo. Vitae pellentesque
              quis sit neque. Facilisis aliquam dolor habitant commodo
              ultricies. Lacus pellentesque ultricies viverra curabitur at
              fermentum tincidunt aliquet. Mi congue sed turpis ligula egestas
              odio tincidunt libero vitae. Amet pellentesque aliquam quam
              viverra proin urna vitae egestas turpis. Enim, dictum nisl, dictum
              sed velit. Aliquam dignissim orci auctor ipsum ac ultrices at. Et,
              nisl, egestas id eget. Nisl diam et scelerisque at consectetur.
            </p>
          </div>
        </div>
        <div className="content--one__right contact-location">
          {/* <img src={parisImg} alt="Paris Eiffel Tower" /> */}
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={{ lat: 39.826279, lng: -75.180313 }}
            defaultZoom={16}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          ></GoogleMapReact>
          <div className="contact-location-box">
            <div className="contact-location-box--1">
              <ImageIcon
                icon={mapIcon}
                title="2464 Royal Ln. Mesa, New Jersey 45463"
              />
              <ImageIcon icon={phoneIcon} title="(208) 555-0112" />
            </div>
            <div className="contact-location-box--2">
              <ImageIcon icon={fbIcon} />
              <ImageIcon icon={instaIcon} />
              <ImageIcon icon={twitterIcon} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
