import UIKit

@objc(IconsViewManager)
class IconsViewManager: RCTViewManager {

  override func view() -> (IconsView) {
    return IconsView()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}

class IconsView: UIImageView {
	@objc var propName: String = "" {
		didSet {
			self.updateImage()
		}
	}
	
	@objc var propColor: UIColor? {
		didSet {
			self.updateImage()
		}
	}
	
	@objc var isMulticolor: Bool = false {
		didSet {
			self.updateImage()
		}
	}
	
	@objc var weight: String? {
		didSet {
			self.updateImage()
		}
	}
	
	@objc var scale: String? {
		didSet {
			self.updateImage()
		}
	}
	
	@objc var size: NSNumber? {
		didSet {
			self.updateImage()
		}
	}
	
	@objc var propContentMode: String? {
		didSet {
			self.updateImage()
		}
	}
	
	func updateImage() {
		if #available(iOS 13.0, *) {
			self.contentMode = .scaleToFill
			
			if self.propContentMode == "scale-to-fill" {
				self.contentMode = .scaleToFill
			} else if self.propContentMode == "scale-aspect-fit" {
				self.contentMode = .scaleAspectFit
			} else if self.propContentMode == "scale-aspect-fill" {
				self.contentMode = .scaleAspectFill
			} else if self.propContentMode == "redraw" {
				self.contentMode = .redraw
			} else if self.propContentMode == "center" {
				self.contentMode = .center
			} else if self.propContentMode == "top" {
				self.contentMode = .top
			} else if self.propContentMode == "bottom" {
				self.contentMode = .bottom
			} else if self.propContentMode == "left" {
				self.contentMode = .left
			} else if self.propContentMode == "right" {
				self.contentMode = .right
			} else if self.propContentMode == "top-left" {
				self.contentMode = .topLeft
			} else if self.propContentMode == "top-right" {
				self.contentMode = .topRight
			} else if self.propContentMode == "bottom-left" {
				self.contentMode = .bottomLeft
			} else if self.propContentMode == "bottom-right" {
				self.contentMode = .bottomRight
			}
			
			var weight: UIImage.SymbolWeight = .unspecified
			var scale: UIImage.SymbolScale = .default
			var size: CGFloat = UIFont.systemFontSize

			if let sizeValue = self.size as? CGFloat {
				size = sizeValue
			}
	
			if self.weight == "ultralight" {
				weight = .ultraLight
			} else if self.weight == "light" {
				weight = .light
			} else if self.weight == "thin" {
				weight = .thin
			} else if self.weight == "regular" {
				weight = .regular
			} else if self.weight == "medium" {
				weight = .medium
			} else if self.weight == "semibold" {
				weight = .semibold
			} else if self.weight == "bold" {
				weight = .bold
			} else if self.weight == "heavy" {
				weight = .heavy
			}

			if self.scale == "small" {
				scale = .small
			} else if self.scale == "medium" {
				scale = .medium
			} else if self.scale == "large" {
				scale = .large
			}

			let configuration = UIImage.SymbolConfiguration(pointSize: size, weight: weight, scale: scale)
			if let image = UIImage(systemName: self.propName, withConfiguration: configuration) {
				self.image = image
			} else {
				self.image = UIImage(systemName: self.propName)
			}

			if self.isMulticolor {
				self.tintColor = nil
				if let iconColor = self.propColor {
					self.image = self.image?.withTintColor(iconColor, renderingMode: .alwaysOriginal)
				} else {
					self.image = self.image?.withRenderingMode(.alwaysOriginal)
				}
			} else {
				self.tintColor = self.propColor
				self.image = self.image?.withRenderingMode(.alwaysTemplate)
			}
		}
	}
}
