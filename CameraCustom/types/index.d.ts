

/**
* Global object StatusBar.
*/
interface cordova {
    CameraCustom: CameraCustom;
}


/**
* The StatusBar object provides some functions to customize the iOS and Android StatusBar.
*/
interface CameraCustom {
    /**
    * On iOS 7, make the statusbar overlay or not overlay the WebView.
text, for light backgrounds).
    */
    coolMethod: () => void;

    /**
    * Use the lightContent statusbar (light text, for dark backgrounds).
    */
    showAlert: () => void;

    /**
    * Use the blackTranslucent statusbar (light text, for dark backgrounds).
    */
    getMsg: () => void;

    /**
    * Use the blackOpaque statusbar (light text, for dark backgrounds).
    */
   

    /**
    * Read this property to see if the statusbar is visible or not.
    */
}

declare var CameraCustom: CameraCustom;