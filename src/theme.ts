import { ThemeFamilyContent } from "./zed-theme";
import opacity from "hex-color-opacity";

const colors = {
  black: "#000",
  white: "#fff",
  green: "#c2ff0e",
  gray: "#8e8e8e",
  orange: "#ff5502",
  blue: "#4009ff",
  epic: "#ba3bff",
  rare: "#5da2f5",
  uncommon: "#72ed9a",
  common: "#c7c7c7",
  cyberAcme: "#01ff03",
  nuCaloric: "#fe0961",
  traxus: "#ff7701",
  sekiguchi: "#95f7c4",
  arachne: "#ff0200",
  mida: {
    yellow: "#dae74e",
    blue: "#90e0e9",
  },
  blueGray: "#344255",
};

const bg = (color: string) => {
  return opacity(color, 0.1);
};

const ui = {
  warning: colors.traxus,
  warningBg: bg(colors.traxus),
  error: colors.arachne,
  errorBg: bg(colors.arachne),
  new: colors.cyberAcme,
  updated: colors.rare,
  deleted: colors.orange,
  background: colors.black,
  foreground: opacity(colors.white, 0.8),
  primary: colors.green,
  secondary: colors.blue,
  accent: colors.white,
  border: opacity(colors.white, 0.4),
};

export const theme: ThemeFamilyContent = {
  $schema: "https://zed.dev/schema/themes/v0.2.0.json",
  name: "Marathon Theme",
  author: "Zev Ross",
  themes: [
    {
      name: "Marathon Dark",
      appearance: "dark",
      style: {
        background: ui.background,
        border: ui.border,
        "border.disabled": opacity(ui.border, 0.5),
        "border.focused": ui.primary,
        "border.transparent": opacity(ui.border, 0.5),
        "border.variant": ui.border,
        conflict: ui.error,
        "conflict.background": ui.errorBg,
        "conflict.border": ui.error,
        created: ui.new,
        "created.background": bg(ui.new),
        "created.border": ui.new,
        deleted: ui.deleted,
        "deleted.background": bg(ui.deleted),
        "deleted.border": ui.deleted,
        "drop_target.background": opacity(colors.blueGray, 0.5),
        "editor.active_line_number": ui.primary,
        "editor.active_line.background": bg(ui.primary),
        "editor.background": ui.background,
        "editor.document_highlight.bracket_background": opacity(
          ui.secondary,
          0.8,
        ),
        "editor.document_highlight.read_background": opacity(ui.primary, 0.2),
        "editor.document_highlight.write_background": colors.blue,
        "editor.foreground": ui.foreground,
        "editor.gutter.background": ui.background,
        "editor.highlighted_line.background": bg(ui.primary),
        "editor.invisible": bg(ui.foreground),
        "editor.line_number": opacity(ui.foreground, 0.4),
        "editor.subheader.background": colors.blueGray,
        "editor.wrap_guide": bg(ui.foreground),
        "element.active": ui.accent,
        "element.background": colors.blueGray,
        "element.disabled": bg(colors.blueGray),
        "element.hover": opacity(ui.primary, 0.5),
        "element.selected": bg(ui.primary),
      },
    },
    {
      name: "Marathon Light",
      appearance: "light",
      style: {},
    },
  ],
};
