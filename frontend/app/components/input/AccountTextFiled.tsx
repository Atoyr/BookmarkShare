// import Link from "next/link"
import { Link } from "@remix-run/react";

import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

interface AccountTextFieldProps {
  // children: React.ReactNode;
  type: string;
  placeholder?: string;
};

export function AccountTextField(props: AccountTextFieldProps) {

  return (
            <Input
              id={props.type}
              type="email"
              placeholder="m@example.com"
              required
            />
  );
}


