//
//  CDVCamera.m
//  MyApp
//
//  Created by zhuangtao on 2017/5/17.
//
//

#import "CDVCameraCustom.h"

@implementation CDVCameraCustom

+(void)getMsg:(CDVInvokedUrlCommand *)command{
    NSLog(@"this is camera phone plugin, talk is cheap,show me the code");
    NSLog(@"%@---%@",command.arguments[0],command.arguments[1]);
}

+(void)showAlert:(CDVInvokedUrlCommand *)command{
    
    UIAlertView *alert =[ [UIAlertView  alloc] initWithTitle:@"提示" message:@"talk is cheap,show me the code" delegate:self cancelButtonTitle:@"取消" otherButtonTitles:@"确定", nil];
    
    [alert show];

}
-(void)coolMethod:(CDVInvokedUrlCommand*)command{

    NSLog(@"this is camera phone plugin, talk is cheap,show me the code");
    NSLog(@"%@---%@",command.arguments[0],command.arguments[1]);
}

@end
