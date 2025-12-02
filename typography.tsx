import { cn } from "@/lib/utils";
import { ReactNode, ElementType } from "react";

export type TypographyVariant =
  | "display01_400"
  | "display01_600"
  | "heading01_400"
  | "heading01_600"
  | "heading02_400"
  | "heading02_600"
  | "heading03_400"
  | "heading03_600"
  | "heading04_400"
  | "heading04_600"
  | "heading05_400"
  | "heading05_600"
  | "body_xxl"
  | "body_xl"
  | "body_lg"
  | "body_md"
  | "body_sm"
  | "body_xs";

export type TypographyAlign = "left" | "center" | "right" | "justify";

export type BodyFontWeight = "normal" | "medium" | "semibold";

export type TypographyColor =
  | "softPrimary"
  | "primary"
  | "hardPrimary"
  | "warning"
  | "danger"
  | "white"
  | "gray9"
  | "gray8"
  | "gray7"
  | "gray6"
  | "gray5"
  | "gray4"
  | "gray3"
  | "gray2"
  | "gray1"
  | "gray.5"
  | "greenGray9"
  | "greenGray8"
  | "greenGray7"
  | "greenGray6"
  | "greenGray5"
  | "greenGray4"
  | "greenGray3"
  | "greenGray2"
  | "greenGray1"
  | "greenGray.5";

interface TypographyProps {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  color?: TypographyColor;
  children: ReactNode;
  className?: string;
  weight?: BodyFontWeight;
}

export function Typography({
  variant = "body_md",
  align = "left",
  color = "gray9",
  children,
  className,
  weight = "normal",
}: TypographyProps) {
  const baseStyles: Record<TypographyVariant, string> = {
    display01_400: "text-[72px] leading-[120%]",
    display01_600: "text-[72px] leading-[120%]",
    heading01_400: "text-[56px] leading-[120%]",
    heading01_600: "text-[56px] leading-[120%]",
    heading02_400: "text-[48px] leading-[120%]",
    heading02_600: "text-[48px] leading-[120%]",
    heading03_400: "text-[40px] leading-[120%]",
    heading03_600: "text-[40px] leading-[120%]",
    heading04_400: "text-[36px] leading-[120%]",
    heading04_600: "text-[36px] leading-[120%]",
    heading05_400: "text-[32px] leading-[120%]",
    heading05_600: "text-[32px] leading-[120%]",
    body_xxl: "text-[20px] leading-[150%]",
    body_xl: "text-[18px] leading-[150%]",
    body_lg: "text-[16px] leading-[150%]",
    body_md: "text-[14px] leading-[150%]",
    body_sm: "text-[12px] leading-[150%]",
    body_xs: "text-[10px] leading-[150%]",
  };

  const weightMap: Record<TypographyVariant, string> = {
    display01_400: "font-normal",
    display01_600: "font-semibold",
    heading01_400: "font-normal",
    heading01_600: "font-semibold",
    heading02_400: "font-normal",
    heading02_600: "font-semibold",
    heading03_400: "font-normal",
    heading03_600: "font-semibold",
    heading04_400: "font-normal",
    heading04_600: "font-semibold",
    heading05_400: "font-normal",
    heading05_600: "font-semibold",
    body_xxl:
      weight === "normal"
        ? "font-normal"
        : weight === "medium"
        ? "font-medium"
        : "font-semibold",
    body_xl:
      weight === "normal"
        ? "font-normal"
        : weight === "medium"
        ? "font-medium"
        : "font-semibold",
    body_lg:
      weight === "normal"
        ? "font-normal"
        : weight === "medium"
        ? "font-medium"
        : "font-semibold",
    body_md:
      weight === "normal"
        ? "font-normal"
        : weight === "medium"
        ? "font-medium"
        : "font-semibold",
    body_sm:
      weight === "normal"
        ? "font-normal"
        : weight === "medium"
        ? "font-medium"
        : "font-semibold",
    body_xs:
      weight === "normal"
        ? "font-normal"
        : weight === "medium"
        ? "font-medium"
        : "font-semibold",
  };

  const alignClasses: Record<TypographyAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const colorClasses: Record<TypographyColor, string> = {
    softPrimary: "text-[#84D187]",
    primary: "text-[#00B207]",
    hardPrimary: "text-[#2C742F]",
    warning: "text-[#FF8A00]",
    danger: "text-[#EA4B48]",
    white: "text-[#FFFFFF]",

    gray9: "text-[#1A1A1A]",
    gray8: "text-[#333333]",
    gray7: "text-[#4D4D4D]",
    gray6: "text-[#666666]",
    gray5: "text-[#808080]",
    gray4: "text-[#999999]",
    gray3: "text-[#B3B3B3]",
    gray2: "text-[#CCCCCC]",
    gray1: "text-[#E6E6E6]",
    "gray.5": "text-[#D9D9D9]",

    greenGray9: "text-[#1B2F1B]",
    greenGray8: "text-[#2C452C]",
    greenGray7: "text-[#3D593D]",
    greenGray6: "text-[#4E6E4E]",
    greenGray5: "text-[#5F835F]",
    greenGray4: "text-[#708670]",
    greenGray3: "text-[#819981]",
    greenGray2: "text-[#92AC92]",
    greenGray1: "text-[#A3BFA3]",
    "greenGray.5": "text-[#95C095]",
  };

  const tagMap: Record<TypographyVariant, ElementType> = {
    display01_400: "div",
    display01_600: "div",
    heading01_400: "div",
    heading01_600: "div",
    heading02_400: "div",
    heading02_600: "div",
    heading03_400: "div",
    heading03_600: "div",
    heading04_400: "div",
    heading04_600: "div",
    heading05_400: "div",
    heading05_600: "div",
    body_xxl: "p",
    body_xl: "p",
    body_lg: "p",
    body_md: "p",
    body_sm: "p",
    body_xs: "p",
  };

  const Tag = tagMap[variant];

  return (
    <Tag
      className={cn(
        "font-poppins",
        baseStyles[variant],
        weightMap[variant],
        alignClasses[align],
        colorClasses[color],
        className
      )}
    >
      {children}
    </Tag>
  );
}

export const Display01_400 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="display01_400" {...p} />
);
export const Display01_600 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="display01_600" {...p} />
);
export const Heading01_400 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading01_400" {...p} />
);
export const Heading01_600 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading01_600" {...p} />
);
export const Heading02_400 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading02_400" {...p} />
);
export const Heading02_600 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading02_600" {...p} />
);
export const Heading03_400 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading03_400" {...p} />
);
export const Heading03_600 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading03_600" {...p} />
);
export const Heading04_400 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading04_400" {...p} />
);
export const Heading04_600 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading04_600" {...p} />
);
export const Heading05_400 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading05_400" {...p} />
);
export const Heading05_600 = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="heading05_600" {...p} />
);
export const BodyXXL = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="body_xxl" {...p} />
);
export const BodyXL = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="body_xl" {...p} />
);
export const BodyLG = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="body_lg" {...p} />
);
export const BodyMD = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="body_md" {...p} />
);
export const BodySM = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="body_sm" {...p} />
);
export const BodyXS = (p: Omit<TypographyProps, "variant">) => (
  <Typography variant="body_xs" {...p} />
);
