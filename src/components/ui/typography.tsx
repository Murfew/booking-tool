import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-balance font-semibold text-3xl tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-base text-muted-foreground",
      muted: "text-muted-foreground text-sm",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

const elementMap = {
  h1: "h1",
  p: "p",
  lead: "p",
  muted: "p",
} as const;

type TypographyProps = VariantProps<typeof typographyVariants> &
  React.HTMLAttributes<HTMLElement> & {
    as?: keyof React.JSX.IntrinsicElements;
  };

export function Typography({ variant = "p", as, className, children, ...props }: TypographyProps) {
  const Tag = (as ?? elementMap[variant!]) as keyof React.JSX.IntrinsicElements;
  return (
    <Tag className={cn(typographyVariants({ variant }), className)} {...(props as object)}>
      {children}
    </Tag>
  );
}
