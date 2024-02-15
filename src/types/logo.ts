export interface LogoProps {
    onClickButton?: () => void;
    onClickLogo?: () => void;
}

export enum ScreenWidth {
    mobileWidth = 320,
    tabletWidth = 740,
    desktopWidth = 1200
}