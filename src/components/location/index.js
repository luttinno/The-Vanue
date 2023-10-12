import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.695221524593!2d44.982388615608215!3d41.554195868893885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044014bb35e84ab%3A0xa55ad0561c9b17e7!2z4YOb4YOQ4YOZ4YOT4YOd4YOc4YOQ4YOa4YOT4YOh4YOY!5e0!3m2!1ska!2sge!4v1696514274323!5m2!1ska!2sge"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="gglemaps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="location_tag">
        <div>location</div>
      </div>
    </div>
  );
};

export default Location;
