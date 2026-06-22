import { Typography } from "@/components/ui/typography";

export default function SignInLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex h-screen flex-col items-center">
      <header className="flex h-16 w-screen items-center px-20 py-4 shadow-md">
        <Typography variant="h1" className="text-primary">
          BookingApp
        </Typography>
      </header>
      <main className="flex w-md flex-col px-4 py-8">{children}</main>
    </div>
  );
}
