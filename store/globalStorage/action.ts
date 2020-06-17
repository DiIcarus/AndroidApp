import {
    SET_IMAGE_USER_URL,
    SET_IMAGE_CUSTOM,
    SET_IMAGE_TEMPLATE,
    SET_IMAGE_USER,
    SET_PROCESSING,
    SET_INDEX_STYLE_PICKER,
    SET_SWITCH_MODE,
    SwitchModeType
} from './type';

export function setIndexStylePicker(state:number[]){
    return {
        type: SET_INDEX_STYLE_PICKER,
        payload: state
    }
}
export function setImageUserUrl(url_img:string){
    return {
        type:SET_IMAGE_USER_URL,
        payload:url_img
    }
}
export function setImageCustom(list_img:File[]){
    return {
        type:SET_IMAGE_CUSTOM,
        payload: list_img
    };
}

export function setImageTemplate(list_img:string[]){
    return {
        type:SET_IMAGE_TEMPLATE,
        payload: list_img
    };
}

export function setImageUser(img:File){
    return {
        type:SET_IMAGE_USER,
        payload: img
    };
}

export function setProcessing(state:boolean){
    return {
        type:SET_PROCESSING,
        payload: state
    };
}

export function setSwitchMode(mode:SwitchModeType){
    return {
        type:SET_SWITCH_MODE,
        payload: mode
    };
}