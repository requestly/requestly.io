import React from "react";

export default function CustomerStoryTestimonial({
  testimonial,
  mugshot,
  name,
  title,
  companyLogo,
}) {
  const imgAlt = `${name}, ${title}`;

  return (
    <div
      className="p-4 d-flex flex-column justify-content-center align-items-center gap-2 text-center rounded-xl"
      style={{
        background: "#f0f4f7",
        color: "#333",
        maxWidth: "640px",
        margin: "2rem auto",
      }}
    >
      <h5 className="mb-0 display-6">{testimonial}</h5>
      <img
        className="rounded-circle my-4"
        style={{ height: "6rem", width: "6rem" }}
        src={mugshot}
        alt={imgAlt}
      />
      <div className="d-flex justify-content-between align-items-center w-100">
        <p className="mb-0 lead text-gray text-left" style={{ width: "65%" }}>
          <span className="text font-weight-bold">{name}, </span>
          <span>{title}</span>
        </p>
        <img
          style={{ width: "8rem", height: "1.8rem", margin: "0" }}
          src={companyLogo}
          alt={imgAlt}
        />
      </div>
    </div>
  );
}
