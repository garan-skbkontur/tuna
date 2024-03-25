import './Properties.scss';
import Layers from "../layers/Layers";

export default function Properties() {
    return (
        <aside className="properties">
            <div className="settings">
                <div className="property-settings">
                    <p className="property-settings__title">Common</p>
                </div>
            </div>
            <div className="settings-layers-divider"></div>
            <div className="layers">
                <div className="property-settings">
                    <p className="property-settings__title">layers</p>
                    <div className="property-settings__body">
                        <Layers />
                    </div>
                </div>
            </div>
        </aside>
    );
}