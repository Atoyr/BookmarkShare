"use client"
import {
  Outlet,
  useLoaderData,
  useLocation,
  useMatches,
} from "@remix-run/react";

import { redirect, type LoaderFunction } from "@remix-run/node";

import * as React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "~/components/ui/breadcrumb"
import { Separator } from "~/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar"


import { getProfileAndSpacesByUserId } from "~/services/Profile.server";

import { useAuth } from '~/hooks/useAuth';
import { getUser } from '~/utils/supabase/auth.server';
import { AppSidebar } from './AppSidebar';
import { profile, space } from "./types";

export let loader: LoaderFunction = async ({request}) => {

  const user = await getUser(request);
  if (!user) {
    return redirect("/auth");
  }

  const { profile, spaces } = await getProfileAndSpacesByUserId(request, user.id);

  const data = {
    profile: {
      name: profile?.username,
      email: profile?.email ?? user.email,
      avatar: profile?.avatar_url, 
    },
    spaces: spaces.map(x => { 
      return {
        id: x.id,
        name: x.name,
        isPrivate: x.is_private,
        bookmarkGroups: x.bookmark_groups
      }
    })
  }

  return ({
    data, 
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  });
};

interface titleProps {
  title: string | undefined;
}


function Layout({ children }: { children: React.ReactNode }) {
  const { data } = useLoaderData<{ data: {profile: profile, spaces: space[]} }>();

  // 子コンポーネントのLoaderの結果を取得する
  const matches = useMatches();
  const location = useLocation(); 
  const currentMatch = matches.find((match) => match.pathname === location.pathname);
  const childData = currentMatch?.data as titleProps;

  return (
    <SidebarProvider>
      <AppSidebar data={data}/>
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>{ childData?.title ?? data.profile.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        {/* TODO: メインコンテンツ */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default function app() {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = useLoaderData<{SUPABASE_URL: string, SUPABASE_ANON_KEY: string}>();
  const { signOut} = useAuth({url: SUPABASE_URL, key: SUPABASE_ANON_KEY});

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
