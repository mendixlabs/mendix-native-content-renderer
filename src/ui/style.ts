import { ViewStyle } from "react-native";
import { Style } from "@mendix/pluggable-widgets-tools";
import { MixedStyleDeclaration } from "react-native-render-html";
import { Theme } from "react-base16-styling";

export interface CustomStyle extends Style {
    html: {
        container: ViewStyle;
        base: MixedStyleDeclaration;
        tags: Record<string, MixedStyleDeclaration>;
        ids: Record<string, MixedStyleDeclaration>;
        classes: Record<string, MixedStyleDeclaration>;
    };
    json: {
        container: ViewStyle;
        theme: Theme;
    };
}

export const defaultContentRendererStyle: CustomStyle = {
    html: {
        container: {
            // flex: 1,
            // height: "100%",
            // minHeight: 300
        },
        base: {
            color: "#444"
        },
        tags: {
            p: {
                marginTop: 0,
                marginBottom: 3
            }
        },
        ids: {},
        classes: {}
    },
    json: {
        container: {
            flex: 1
            // height: "100%",
            // minHeight: 300
        },
        theme: {
            base00: "#000000",
            base01: "#303030",
            base02: "#505050",
            base03: "#b0b0b0",
            base04: "#d0d0d0",
            base05: "#e0e0e0",
            base06: "#f5f5f5",
            base07: "#ffffff",
            base08: "#fb0120",
            base09: "#fc6d24",
            base0A: "#fda331",
            base0B: "#a1c659",
            base0C: "#76c7b7",
            base0D: "#6fb3d2",
            base0E: "#d381c3",
            base0F: "#be643c"
        }
    }
};
