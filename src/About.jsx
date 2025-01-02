import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-title">À propos</div>
			<div className="about-content">
				<img
					src="/images/maeJeanJacket.JPG"
					alt="Profile"
					className="profile-image"
				/>
				<p>
					Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Aliquam vitae convallis
					ex. Sed ut nulla id magna consectetur
					tincidunt. Quisque rhoncus ipsum ut
					iaculis iaculis. Nunc non vestibulum
					justo, in hendrerit tellus. Vestibulum
					ac vulputate nulla. Duis id eros orci.
					Morbi sem sapien, varius sit amet lorem
					tincidunt, pulvinar viverra ex. Aliquam
					feugiat odio sem, non semper augue
					malesuada cras.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Aliquam vitae convallis
					ex. Sed ut nulla id magna consectetur
					tincidunt.
				</p>
			</div>
			<div className="instagram-section">
				<p>Retrouve-nous sur Instagram !</p>
				<a
					href="https://www.instagram.com/vermundo_ch"
					target="_blank"
					rel="noopener noreferrer"
					className="instagram-link"
				>
					@vermundo_ch
					<img
						className="instagram-icon"
						src="/images/instagram-symbol.png"
						alt="Instagram Icon"
					/>
				</a>
			</div>
		</div>
	);
};

export default About;
