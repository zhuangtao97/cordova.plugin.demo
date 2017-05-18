//
//  CDVCamera.h
//  MyApp
//
//  Created by zhuangtao on 2017/5/17.
//
//

//#import <Cordova/Cordova.h>
#import <Cordova/CDVPlugin.h>
#import <Cordova/CDVInvokedUrlCommand.h>
@interface CDVCameraCustom : CDVPlugin
+(void)getMsg:(CDVInvokedUrlCommand*)command;
+(void)showAlert:(CDVInvokedUrlCommand*)command;
-(void)coolMethod:(CDVInvokedUrlCommand*)command;
@end
