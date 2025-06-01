"use client";

import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           type = "button",
                                           variant = "primary",
                                           className = "",
                                           disabled = false,
                                       }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200";

    const variantStyles =
        variant === "primary"
            ? "bg-black text-white hover:bg-gray-800"
            : variant === "secondary"
                ? "bg-gray-100 text-black hover:bg-gray-200"
                : "border border-black text-black hover:bg-gray-100";

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
