import { StyleSheet } from 'react-native';
import { isIOS, SCREEN_WIDTH } from './util';

export const hairlineWidth = StyleSheet.hairlineWidth;

export const color = {
    white: '#ffffff',
    offWhite: '#d9d9d9',
    black: '#000001',
    blackHighlight: '#383838',
    lighterGray: '#8d8e92',
    lightGray: '#62676f',
    warmGray: '#383838',
    gray: '#2e2a2a',
    darkGray: '#1b1c1e',
    red: '#ff3e2d',
    border: '#26272a',
    chrome: '#1c1d1e',
};

export const opacity = {
    full: { opacity: 1 },
    half: { opacity: 0.5 },
};

export const spacing = {
    minuscule: 2,
    tiny: 4,
    small: 8,
    medium: 12,
    large: 24,
    huge: 64,
};

export const bg = StyleSheet.create({
    transparent: { backgroundColor: 'transparent' },
    white: { backgroundColor: color.white },
    black: { backgroundColor: color.black },
    lightGray: { backgroundColor: color.lightGray },
    warmGray: { backgroundColor: color.warmGray },
    gray: { backgroundColor: color.gray },
    darkGray: { backgroundColor: color.darkGray },
    blackHighlight: { backgroundColor: color.blackHighlight },
    red: { backgroundColor: color.red },
});

export const border = StyleSheet.create({
    b: { borderBottomWidth: 1, borderBottomColor: color.border },
    t: { borderTopWidth: 1, borderTopColor: color.border },
});

export const flex = StyleSheet.create({
    expand: { flex: 1 },
    row: { flexDirection: 'row' },
    selfCenter: { alignSelf: 'center' },
    selfStart: { alignSelf: 'flex-start' },
    selfEnd: { alignSelf: 'flex-end' },
    itemsCenter: { alignItems: 'center' },
    itemsStart: { alignItems: 'flex-start' },
    itemsEnd: { alignItems: 'flex-end' },
    justifyCenter: { justifyContent: 'center' },
    justifyBetween: { justifyContent: 'space-between' },
    justifyAround: { justifyContent: 'space-around' },
    justifyEnd: { justifyContent: 'flex-end' },
    wrap: { flexWrap: 'wrap' },
});

export const font = StyleSheet.create({
    medium: { fontWeight: '600' },
    bold: { fontWeight: '700' },
});

export const h = StyleSheet.create({
    input: { height: 44 },
    full: { height: '100%' },
});

export const w = StyleSheet.create({
    input: { width: 275 },
    full: { width: '100%' },
    screen: { width: SCREEN_WIDTH },
});

export const image = StyleSheet.create({
    large: {
        borderColor: color.border,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 4,
    },
});

export const p = StyleSheet.create({
    none: { padding: 0 },
    px: { padding: 1 },
    xxs: { padding: spacing.minuscule },
    xs: { padding: spacing.tiny },
    sm: { padding: spacing.small },
    md: { padding: spacing.medium },
    lg: { padding: spacing.large },
    xl: { padding: spacing.huge },
});

export const pb = StyleSheet.create({
    none: { paddingBottom: 0 },
    px: { paddingBottom: 1 },
    xxs: { paddingBottom: spacing.minuscule },
    xs: { paddingBottom: spacing.tiny },
    sm: { paddingBottom: spacing.small },
    md: { paddingBottom: spacing.medium },
    lg: { paddingBottom: spacing.large },
    xl: { paddingBottom: spacing.huge },
});

export const pl = StyleSheet.create({
    none: { paddingLeft: 0 },
    px: { paddingLeft: 1 },
    xxs: { paddingLeft: spacing.minuscule },
    xs: { paddingLeft: spacing.tiny },
    sm: { paddingLeft: spacing.small },
    md: { paddingLeft: spacing.medium },
    lg: { paddingLeft: spacing.large },
    xl: { paddingLeft: spacing.huge },
});

export const pr = StyleSheet.create({
    none: { paddingRight: 0 },
    px: { paddingRight: 1 },
    xxs: { paddingRight: spacing.minuscule },
    xs: { paddingRight: spacing.tiny },
    sm: { paddingRight: spacing.small },
    md: { paddingRight: spacing.medium },
    lg: { paddingRight: spacing.large },
    xl: { paddingRight: spacing.huge },
});

export const pt = StyleSheet.create({
    none: { paddingTop: 0 },
    px: { paddingTop: 1 },
    xxs: { paddingTop: spacing.minuscule },
    xs: { paddingTop: spacing.tiny },
    sm: { paddingTop: spacing.small },
    md: { paddingTop: spacing.medium },
    lg: { paddingTop: spacing.large },
    xl: { paddingTop: spacing.huge },
});

export const px = StyleSheet.create({
    none: { paddingHorizontal: 0 },
    px: { paddingHorizontal: 1 },
    xxs: { paddingHorizontal: spacing.minuscule },
    xs: { paddingHorizontal: spacing.tiny },
    sm: { paddingHorizontal: spacing.small },
    md: { paddingHorizontal: spacing.medium },
    lg: { paddingHorizontal: spacing.large },
    xl: { paddingHorizontal: spacing.huge },
});

export const py = StyleSheet.create({
    none: { paddingVertical: 0 },
    px: { paddingVertical: 1 },
    xxs: { paddingVertical: spacing.minuscule },
    xs: { paddingVertical: spacing.tiny },
    sm: { paddingVertical: spacing.small },
    md: { paddingVertical: spacing.medium },
    lg: { paddingVertical: spacing.large },
    xl: { paddingVertical: spacing.huge },
    listItem: { paddingVertical: 10 },
});

export const m = StyleSheet.create({
    auto: { margin: 'auto' },
    px: { margin: 1 },
    xs: { margin: spacing.tiny },
    sm: { margin: spacing.small },
    md: { margin: spacing.medium },
    lg: { margin: spacing.large },
    xl: { margin: spacing.huge },
});

export const mb = StyleSheet.create({
    auto: { marginBottom: 'auto' },
    px: { marginBottom: 1 },
    xs: { marginBottom: spacing.tiny },
    sm: { marginBottom: spacing.small },
    md: { marginBottom: spacing.medium },
    lg: { marginBottom: spacing.large },
    xl: { marginBottom: spacing.huge },
});

export const ml = StyleSheet.create({
    auto: { marginLeft: 'auto' },
    px: { marginLeft: 1 },
    xs: { marginLeft: spacing.tiny },
    sm: { marginLeft: spacing.small },
    md: { marginLeft: spacing.medium },
    lg: { marginLeft: spacing.large },
    xl: { marginLeft: spacing.huge },
});

export const mr = StyleSheet.create({
    auto: { marginRight: 'auto' },
    px: { marginRight: 1 },
    xs: { marginRight: spacing.tiny },
    sm: { marginRight: spacing.small },
    md: { marginRight: spacing.medium },
    lg: { marginRight: spacing.large },
    xl: { marginRight: spacing.huge },
});

export const mt = StyleSheet.create({
    auto: { marginTop: 'auto' },
    px: { marginTop: 1 },
    xs: { marginTop: spacing.tiny },
    sm: { marginTop: spacing.small },
    md: { marginTop: spacing.medium },
    lg: { marginTop: spacing.large },
    xl: { marginTop: spacing.huge },
});

export const mx = StyleSheet.create({
    auto: { marginHorizontal: 'auto' },
    px: { marginHorizontal: 1 },
    xs: { marginHorizontal: spacing.tiny },
    sm: { marginHorizontal: spacing.small },
    md: { marginHorizontal: spacing.medium },
    lg: { marginHorizontal: spacing.large },
    xl: { marginHorizontal: spacing.huge },
});

export const my = StyleSheet.create({
    px: { marginVertical: 1 },
    xs: { marginVertical: spacing.tiny },
    sm: { marginVertical: spacing.small },
    md: { marginVertical: spacing.medium },
    lg: { marginVertical: spacing.large },
    xl: { marginVertical: spacing.huge },
});

export const position = StyleSheet.create({
    absolute: { position: 'absolute' },
    inset: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
    insetTop: { position: 'absolute', top: 0 },
    insetRight: { position: 'absolute', right: 0 },
    insetBottom: { position: 'absolute', bottom: 0 },
    insetLeft: { position: 'absolute', left: 0 },
});

export const radius = StyleSheet.create({
    some: { borderRadius: 8 },
    full: { borderRadius: 999 },
});

export const text = StyleSheet.create({
    title: {
        fontSize: isIOS ? 17 : 20,
        color: color.white,
        fontWeight: '600',
    },

    left: { textAlign: 'left' },
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },

    xs: { fontSize: 12 },
    sm: { fontSize: 13 },
    md: { fontSize: 15 },
    lg: { fontSize: 17 },
    xl: { fontSize: 20 },
    xxl: { fontSize: 23 },

    black: { color: color.black },
    white: { color: color.white },
    offWhite: { color: color.offWhite },
    faded: { color: color.lighterGray },
    red: { color: color.red },
});

export const z = StyleSheet.create({
    1: { zIndex: 1 },
    5: { zIndex: 5 },
    10: { zIndex: 10 },
    15: { zIndex: 15 },
});

export const shadow = StyleSheet.create({
    sm: {
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
