import logoStyles from "./Logo.module.css";
import headerStyles from "./HomeHeader.module.css";

const HomeHeader = () => {
	return (
		<div className={headerStyles.header}>
			<div className={logoStyles.logo}>VERMUNDO</div>
			<div className={headerStyles.centralText}>VOYAGE RESPONSABLE</div>
		</div>
	);
};

export default HomeHeader;
