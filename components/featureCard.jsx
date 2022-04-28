import Link from "next/link";
import React from "react";

const FeatureCard = ({ title, icon, link }) => {
  return (
    <div
      style={{
        width: "90%",
      }}
    >
      <Link href={link}>
        <a>
          <div className="card bg-white border-light shadow-soft text-center h-100">
            <div className="card-body p-5 shadow-hover hover-pointer card-lift-hover">
              <h4 className="mb-5 h-25">{title}</h4>
              {icon && (
                <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                  <i className={icon}></i>
                </div>
              )}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default FeatureCard;
