export const HomeScreen:string = "MainScreen";
export const SignInScreen:string = "SignInScreen";
export const MainList:string = "MainList";
export const RegisterScreen:string = "RegisterScreen";
export const MainFeature:string = "MainFeature";
export const DetailNote:string = "DetailNode";
export const CardItemBordered:string = "CardItemBordered";
export const Alarm:string = "Alarm";
export const AddNote:string = "AddNote";
export const MainTask:string = "MainTask";
export const MainDetail:string = "MainDetail";
export const MainProfile:string = "MainProfile";
export const AddGroup:string = "AddGroup";
export const AddList:string = "AddList";
//ScreenComponent
// import * as screen__ from './../../config';
export const goTo = (navigation:any,screen_name:string)=>{
  navigation.navigate(screen_name)
}