import React from 'react';
import "../Form/styles/InputButton.css";


const FormField = ({formData, change, id}) => {
const renderTemplate = () => {
    let formTemplate = null;

    switch(formData.element) {
        case('input'):
        formTemplate = (
            <div className="inputButton">
                <input
                    {...formData.config}
                    value={formData.value}
                    onBlur={(event) => change({event, id, blur: true})}
                    onChange={(event) => change({event, id})}
                />
            </div>
        )
        break;
        default:
            formTemplate = null;
    }
    return formTemplate;
}

    return (
        <div>
            {renderTemplate ()}
        </div>
    );
};

export default FormField;