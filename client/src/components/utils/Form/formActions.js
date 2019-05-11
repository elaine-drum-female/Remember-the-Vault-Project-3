export const validate = (element, formData = []) => {
    let error = [true, ''];

    if(element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required' : ''}`;
        error = !valid ? [valid, message] : error;
    }

    return error;
}

export const update = (element, formData, formName) => {
    const newFormdata = {
        ...formData
    }

    const newElement = {
        ...newFormdata[element.id]
    }

    newElement.value = element.event.target.value;

    //Check is the info is valid
    if(element.blur) {
        let validData = validate(newElement, formData);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
        newFormdata[element.id] = newElement;
    }

    newElement.touched = element.blur;
    newFormdata[element.id] = newElement;

    return newFormdata;
}