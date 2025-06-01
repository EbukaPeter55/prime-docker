import React from "react";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
    const baseStyles = "rounded-2xl bg-white shadow p-4";

    return <div className={`${baseStyles} ${className}`}>{children}</div>;
};

export default Card;
