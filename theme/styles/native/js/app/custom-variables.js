import { NativeModules, Platform } from "react-native";
import adjustFont from "../core/helpers/_functions/adjustfont";
import { anyColorToRgbString, setColorBasedOnBackground, setContrastScale, } from "../core/helpers/_functions/convertcolors";
/*

==> You can find a copy of the core variables below. (From styles/native/core/variables.js)
==> You can freely change any value in this file.
==> DO NOT change the core variable file (or any other file in core), as that makes updating Atlas a lot harder in the future.

//Siemens brand
export const brand = {
    primary: "#009999",
    secondary: "#005f87",
    success: "#aab414",
    warning: "#ffb900",
    danger:  "#af235f",
    primaryLight: `rgba(${anyColorToRgbString("#009999")}, 0.14)`,
    successLight: `rgba(${anyColorToRgbString("#aab414")}, 0.14)`,
    warningLight: `rgba(${anyColorToRgbString("#ffb900")}, 0.14)`,
    dangerLight: `rgba(${anyColorToRgbString("#af235f")}, 0.14)`,
    backgroundColor: "#fff",
    textColor: "#3c464b",
    navigationColor: "#009999",
};
//
*/
//== Global variables
//## Variables to be used during styling
//-------------------------------------------------------------------------------------------------------------------//

// Brand Style
export const brand = {
    primary: "#009999",
    secondary: "#005f87",
    success: "#aab414",
    warning: "#ffb900",
    danger:  "#af235f",
    primaryLight: `rgba(${anyColorToRgbString("#009999")}, 0.14)`,
    successLight: `rgba(${anyColorToRgbString("#aab414")}, 0.14)`,
    warningLight: `rgba(${anyColorToRgbString("#ffb900")}, 0.14)`,
    dangerLight: `rgba(${anyColorToRgbString("#af235f")}, 0.14)`,
    backgroundColor: "#fff",
    textColor: "#3c464b",
    navigationColor: "#009999",
};

// Dark Mode - Inherits OS theme if possible
export const darkMode = NativeModules && NativeModules.RNDarkMode && NativeModules.RNDarkMode.initialMode
    ? NativeModules.RNDarkMode.initialMode === "dark"
    : false;
//
// Background Colors
const backgroundColor = brand.backgroundColor;
const backgroundSecondaryContrast = "#000";
const barStyle = 'dark-content';

//
export const background = {
    primary: backgroundColor,
    secondary: "#becdd7",
    gray: "#879baa",
    brandPrimary: brand.primary,
    brandSuccess: brand.success,
    brandWarning: brand.warning,
    brandDanger: brand.danger,
};
//
// Contrast (Gray) colors based on background.primary
export const contrast = {
    highest: setContrastScale(0.95, background.primary),
    higher: setContrastScale(0.8, background.primary),
    high: setContrastScale(0.65, background.primary),
    regular: setContrastScale(0.5, background.primary),
    low: setContrastScale(0.35, background.primary),
    lower: setContrastScale(0.2, background.primary),
    lowest: setContrastScale(0.05, background.primary),
};
//
// Border Style
export const border = {
    color: setContrastScale(0.17, background.primary),
    width: 1,
    radius: 0,
};
//
// Font Styles
export const font = {
    size: Platform.select({ ios: adjustFont(12), android: adjustFont(14)}),
    sizeSmall: Platform.select({ ios: adjustFont(10), android: adjustFont(12)}),
    sizeLarge: Platform.select({ ios: adjustFont(14), android: adjustFont(18)}),
    sizeH1: Platform.select({ ios: adjustFont(26), android: adjustFont(31)}),
    sizeH2: Platform.select({ ios: adjustFont(20), android: adjustFont(26)}),
    sizeH3: Platform.select({ ios: adjustFont(18), android: adjustFont(24)}),
    sizeH4: Platform.select({ ios: adjustFont(14), android: adjustFont(18)}),
    sizeH5: Platform.select({ ios: adjustFont(12), android: adjustFont(14)}),
    sizeH6: Platform.select({ ios: adjustFont(10), android: adjustFont(12)}),
    color: setColorBasedOnBackground(background.primary),
    weightLight: "100",
    weightNormal: "normal",
    weightSemiBold: "600",
    weightBold: "bold",
    family: Platform.select({ ios: "System", android: "normal" }),
};
//
// Spacing
export const spacing = {
    smallest: 5,
    smaller: 10,
    small: 15,
    regular: 20,
    large: 25,
    larger: 30,
    largest: 40,
};
//
// Button Styles
export const button = {
    fontSize: font.sizeSmall,
    fontSizeLarge: font.size,
    fontWeight: font.weightBold,
    fontSizeIcon: font.sizeSmall,
    fontSizeIconLarge: font.size,
    borderRadius: border.radius,
    paddingVertical: spacing.smaller,
    paddingHorizontal: spacing.regular,
    header: {
        color: contrast.highest,
        borderColor: "transparent",
        backgroundColor: "transparent",
        fontSize: font.sizeSmall,
        fontSizeIcon: font.sizeSmall,
        paddingLeft: 0,
        paddingRight: 10,
    },
    primary: {
        color: "#FFF",
        borderColor: brand.primary,
        backgroundColor: brand.primary,
    },
    secondary: {
        color: "#fff",
        borderColor: brand.secondary,
        backgroundColor: brand.secondary,
    },
    success: {
        color: "#FFF",
        borderColor: brand.success,
        backgroundColor: brand.success,
    },
    warning: {
        color: "#000",
        borderColor: brand.warning,
        backgroundColor: brand.warning,
    },
    danger: {
        color: "#FFF",
        borderColor: brand.danger,
        backgroundColor: brand.danger,
    },
};
//
// Input Styles
export const input = {
    // Colors
    color: font.color,
    errorColor: brand.danger,
    labelColor: font.color,
    borderColor: contrast.lower,
    backgroundColor: background.primary,
    disabledBackgroundColor: contrast.lowest,
    selectionColor: contrast.lower,
    placeholderTextColor: contrast.regular,
    underlineColorAndroid: "transparent",
    // Sizes
    fontSize: font.size,
    fontFamily: font.family,
    borderWidth: border.width,
    borderRadius: border.radius,
    // Alignment
    textAlign: "left",
    paddingHorizontal: spacing.smaller,
    paddingVertical: spacing.small,
};
//
// Navigation Styles
export const navigation = {
    statusBar: {
        backgroundColor: background.primary,
        barStyle: barStyle,
    },
    topBar: {
        backgroundColor: background.primary,
        backButtonColor: contrast.highest,
        titleColor: contrast.highest,
        titleFontSize: Platform.select({ android: font.sizeH4, ios: font.sizeH5 }),
    },
    bottomBar: {
        color: contrast.high,
        selectedTextColor: contrast.high,
        selectedIconColor: brand.primary,
        backgroundColor: background.primary,
        fontSize: font.sizeSmall,
        iconSize: font.sizeSmall,
    },
    progressOverlay: {
        color: font.color,
        activityIndicatorColor: font.color,
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        containerBackgroundColor: background.secondary,
        shadowColor: "#000",
        fontSize: font.size,
    },
};
//
// Tabcontainer Styles
export const tabContainer = {
    tabBar: {
        pressColor: contrast.lower,
        backgroundColor: background.primary,
        borderBottomWidth: 2,
        borderBottomColor: background.gray,
    },
    indicator: {
        backgroundColor: brand.navigationColor,
        height: Platform.select({ ios: 4, android: 4 }),
    },
    label: {
        color: brand.textColor,
        fontWeight: font.weightBold,
        textTransform: "uppercase",
    },
    activeLabel: {
        color: brand.navigationColor,
        fontWeight: font.weightBold,
        textTransform: "uppercase",
    },
};
//
// ListView Styles
export const listView = {
    border: {
        color: border.color,
        width: border.width,
    },
};
//
// Layoutgrid Styles
export const layoutGrid = {
    gutterSize: 15,
};
//
//
//== Pluggable Widgets
//-------------------------------------------------------------------------------------------------------------------//
// Badge Styles
export const badge = {
    fontWeight: font.weightBold,
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: spacing.smaller,
    default: {
        color: contrast.higher,
        backgroundColor: contrast.lower,
    },
    primary: {
        color: brand.primary,
        backgroundColor: brand.primaryLight,
    },
    success: {
        color: brand.success,
        backgroundColor: brand.successLight,
    },
    warning: {
        color: brand.warning,
        backgroundColor: brand.warningLight,
    },
    danger: {
        color: brand.danger,
        backgroundColor: brand.dangerLight,
    },
};
