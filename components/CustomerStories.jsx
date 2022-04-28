import React from "react";
import CustomerStoryCard from "./CustomerStoryCard";
import stories from "../utils/json/customerStoryLinks.json";

export default function CustomerStories() {
  return (
    <div className="w-100 customer-stories">
      {stories.map(
        (
          { name, title, mugshot, testimonial, companyLogo, companyName, href },
          idx
        ) => (
          <CustomerStoryCard
            key={idx}
            name={name}
            title={title}
            mugshot={mugshot}
            companyLogo={companyLogo}
            companyName={companyName}
            testimonial={testimonial}
            href={href}
          />
        )
      )}
    </div>
  );
}
