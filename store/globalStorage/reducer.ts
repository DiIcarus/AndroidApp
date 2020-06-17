import {
  GlobalState,
  SET_IMAGE_CUSTOM,
  SET_IMAGE_TEMPLATE,
  SET_IMAGE_USER,
  SET_PROCESSING,
  SET_SWITCH_MODE,
  GlobalStateActionType,
  SwitchModeType,
  SET_IMAGE_USER_URL,
  SET_INDEX_STYLE_PICKER,
} from "./type";
import {default_img_user} from './../../config/variable';
const initState: GlobalState = Object.freeze({
  image_user:{} as  File,
  image_user_url: default_img_user as string,
  image_template: [] as string[],
  image_custom:[] as File[],
  switch_mode:"StyleSheet" as SwitchModeType,
  processing:false as boolean,
  index_style_picker: [],
});

export function GlobalStateReducer(
  previousState = initState,
  action:GlobalStateActionType
):GlobalState{
  switch (action.type) {
    case SET_IMAGE_CUSTOM:
      return {
        ...previousState,
        image_custom: action.payload,
      };
    case SET_IMAGE_TEMPLATE:
      return {
        ...previousState,
        image_template: action.payload
      };
    case SET_IMAGE_USER:
      return {
        ...previousState,
        image_user: action.payload
      };
    case SET_PROCESSING:
      return {
        ...previousState,
        processing: action.payload
      };
    case SET_SWITCH_MODE:
      return {
        ...previousState,
        switch_mode: action.payload
      };
    case SET_IMAGE_USER_URL:
      return {
        ...previousState,
        image_user_url: action.payload 
      }
    case SET_INDEX_STYLE_PICKER:
      return {
        ...previousState,
        index_style_picker: action.payload
      }
    default:
      return {
        ...previousState
      }
  }
}
