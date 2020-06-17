import * as actiontype__ from './../../config/actionType';

export type SwitchModeType = typeof actiontype__.StyleSheet | typeof actiontype__.Custom;

export interface GlobalState {
  image_user: File,
  image_user_url:string,
  image_template: string[],
  image_custom: File[],
  switch_mode: SwitchModeType,
  processing: boolean,
  index_style_picker: number[],

}

export const SET_IMAGE_USER = "SET_IMAGE_USER";
export const SET_IMAGE_TEMPLATE = "SET_IMAGE_TEMPLATE";
export const SET_IMAGE_CUSTOM = "SET_IMAGE_CUSTOM";
export const SET_SWITCH_MODE = "SET_SWITCH_MODE";
export const SET_PROCESSING = "SET_PROCESSING";
export const SET_IMAGE_USER_URL = "SET_IMAGE_USER_URL";
export const SET_INDEX_STYLE_PICKER = "SET_INDEX_STYLE_PICKER";

interface setIndexStylePicker{
  type:typeof SET_INDEX_STYLE_PICKER,
  payload: number[]
}
interface setImageUser{
  type: typeof SET_IMAGE_USER,
  payload: File
}

interface setImageUserUrl{
  type: typeof SET_IMAGE_USER_URL,
  payload: string
}

interface setImageTemplate{
  type:typeof SET_IMAGE_TEMPLATE,
  payload: string[]
}

interface setImageCustom{
  type:typeof SET_IMAGE_CUSTOM,
  payload: File[]
}

interface setSwitchMode{
  type:typeof SET_SWITCH_MODE,
  payload: SwitchModeType
}

interface setProcessing{
  type:typeof SET_PROCESSING,
  payload:boolean
}

export type GlobalStateActionType = 
  | setImageCustom
  | setImageTemplate
  | setImageUser
  | setProcessing
  | setSwitchMode
  | setImageUserUrl
  | setIndexStylePicker