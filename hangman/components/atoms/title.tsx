import React, { FC } from "react";

type PropsTypes = {
	size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	color?: "primary" | "secondary" | "tertiary";
	text: string;
	underline?: boolean;
};

const Title: FC<PropsTypes> = ({
	size = "h1",
	color = "primary",
	text,
	underline = false,
}) => {
	const className = `title title--${size} ${underline ? "title--underline" : ""}`;

	switch (size) {
		case "h1":
			return <h1 className={className}>{text}</h1>;
		case "h2":
			return <h2 className={className}>{text}</h2>;
		case "h3":
			return <h3 className={className}>{text}</h3>;
		case "h4":
			return <h4 className={className}>{text}</h4>;
		case "h5":
			return <h5 className={className}>{text}</h5>;
		default:
			return <h6 className={className}>{text}</h6>;
	}
};

export default Title;
