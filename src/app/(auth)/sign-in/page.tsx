import { ArrowRight, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";

// TODO: field errors + descriptions / validations
// TODO: password reset page

export default function SignInPage() {
  return (
    <>
      <div className="mb-8 flex flex-col gap-2 text-center">
        <Typography variant="h1" as="h2">
          Welcome back
        </Typography>
        <Typography variant="lead">Enter your details to manage your schedule.</Typography>
      </div>
      <Card className="p-8 pt-10 shadow-md">
        <CardContent className="flex flex-col gap-6">
          <form className="flex flex-col gap-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  icon={<Mail />}
                  size="lg"
                  placeholder="name@company.com"
                ></Input>
              </Field>
              <Field>
                <div className="flex justify-between">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link href="/" className="text-primary text-xs">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  icon={<Lock />}
                  size="lg"
                  placeholder="••••••••"
                ></Input>
              </Field>
            </FieldGroup>
            <Button type="submit" size="lg" className="font-semibold">
              Sign in <ArrowRight />
            </Button>
          </form>
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <Typography variant="muted" className="whitespace-nowrap">
              or continue with
            </Typography>
            <Separator className="flex-1" />
          </div>
          <Button variant="outline" size="lg">
            <FcGoogle /> Google
          </Button>
        </CardContent>
      </Card>
      <Typography className="mt-2 text-center">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-primary">
          Sign up
        </Link>
      </Typography>
    </>
  );
}
