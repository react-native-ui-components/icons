#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(IconsViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(propName, NSString)
RCT_EXPORT_VIEW_PROPERTY(propColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(isMulticolor, BOOL)
RCT_EXPORT_VIEW_PROPERTY(size, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(scale, NSString)
RCT_EXPORT_VIEW_PROPERTY(propContentMode, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(weight, NSString)

@end
