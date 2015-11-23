//
//  LoginScreen.h
//  ASIAInspection
//
//  Created by Maxim Guzun on 8/29/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "AppDelegate.h"
#import "LoginProtocol.h"
#import "AlertPrompt.h"
#import "GAI.h"

#define LASTLOGINUSER   @"LASTUSER"
#define FIRSTLOGIN      @"FIRSRLOGIN"

#define USERNAME        @"  Username"
#define PASSWORD        @"  Password"
#define ACCOUNT         @"Access your account"
#define INSERTEMAIL     @"Please enter the email address you registered with and your login security details will be sent to it:"

@class SplashScreen;
@class HomePageScreen;

@interface LoginScreen : GAITrackedViewController <UITextFieldDelegate, UIAlertViewDelegate, UIWebViewDelegate, UITableViewDelegate, UITableViewDataSource>{

    IBOutlet UITextField        *m_username;
    IBOutlet UITextField        *m_password;
    
    IBOutlet UIButton          *m_webRestorePassword;
    
    CGRect                      m_frame;
    BOOL                        m_keyboardElevated;
    BOOL                        m_fastLogin;
    id<LoginProtocol>           m_delegate;
    SplashScreen                *m_splashScreen;
    id<GAITracker>              m_tracker;
    
    
    NSInteger               ios6_7delta;
}
@property (unsafe_unretained, nonatomic) IBOutlet UIImageView *bgImgView;
@property (nonatomic, assign) IBOutlet UIImageView    *m_statusBackground;
@property (nonatomic, assign) BOOL shouldMakeAnimationWhenDismiss;
@property (nonatomic, assign) HomePageScreen *homePage;

- (id) initWithDelegate:(id<LoginProtocol>)pDelegate startLogin:(BOOL)start tracker:(id<GAITracker>)pTracker;
- (IBAction)onLogin:(id)sender;
- (IBAction)onForgotPassword:(id)sender;
- (IBAction)onBackButton:(id)sender;
- (void)performSilentLogin;
@end