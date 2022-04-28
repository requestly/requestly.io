import Link from "next/link";

export default function CustomerStoryCard({
  name,
  title,
  mugshot,
  testimonial,
  companyLogo,
  companyName,
  href,
}) {
  const mugshotAlt = `${name}, ${title}`;
  const companyLogoAlt = `${companyName} logo`;

  return (
    <Link href={href}>
      <a
        className="customer-story-card"
        style={{ maxWidth: "640px", padding: "0" }}
      >
        <div
          className="p-4 d-flex flex-column align-items-center gap-2 text-center shadow-lg rounded-xl"
          style={{
            background: "#f0f4f7",
            color: "#333",
            maxWidth: "640px",
            height: "100%",
            margin: "0 auto",
          }}
        >
          <div className="d-flex justify-content-between align-items-center w-100 mb-4">
            <img
              className="rounded-circle"
              style={{ height: "4rem", width: "4rem" }}
              src={mugshot}
              alt={mugshotAlt}
            />
            <img
              style={{ width: "8rem", height: "2rem" }}
              src={companyLogo}
              alt={companyLogoAlt}
            />
          </div>
          <p className="mb-0 display-6 text-gray w-100 text-left">
            <span className="text font-weight-bold">{name}, </span>
            <span>{title}</span>
          </p>
          <h5 className="mb-0 mt-2 lead text-left text-gray">
            “{testimonial}”
          </h5>
        </div>
      </a>
    </Link>
  );
}
