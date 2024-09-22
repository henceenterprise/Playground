import '../css/min/designSystem.min.css';
import design_system_concept from '../assets/design_system_concept.webp';

function DesignSystem() {
    return (
        <div className="DesignSystem">
            <img className='img-design_system_concept' src={design_system_concept} alt="" />
        </div>
    );
}

export default DesignSystem;