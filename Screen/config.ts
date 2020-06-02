export const HomeScreen:string = "MainScreen";
export const SignInScreen:string = "SignInScreen";
export const LoadingScreen:string = "LoadingScreen";
export const RegisterScreen:string = "RegisterScreen";
export const MainFeature:string = "MainFeature";
export const DetailNote:string = "DetailNode";
export const CardItemBordered:string = "CardItemBordered";
export const Alarm:string = "Alarm";
export const AddNote:string = "AddNote";
//ScreenComponent
// import * as screen__ from './../../config';
export const goTo = (navigation:any,screen_name:string)=>{
  navigation.navigate(screen_name)
}