import * as React from "react"

import { Link } from "@remix-run/react";

import {
  BadgeCheck,
  BookMarked, 
  Bell,
  ChevronRight,
  ChevronsUpDown,
  LogOut,
  House, 
  Plus,
  MoreHorizontal,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "~/components/ui/sidebar";
import { Button } from "~/components/ui/button"

import type { profile, space } from "./types";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data : {
    profile: profile, 
    spaces: space[], 
  }
}

function avatarFallbackString(name: string) {
  const words = name.split(" ");
  return words.slice(0, 2).map(str => str.charAt(0)).join('');
}

export function AppSidebar({ data, ...props }: AppSidebarProps){
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser profile={data.profile} />
      </SidebarHeader>
      {/* TODO: メニューの修正 */}
      <SidebarContent>
        <SidebarSeparator className="mx-0" />
        <Spaces spaces={data.spaces} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>新規スペースの作成</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

function Home() {
  const key="__home__";
  return(
    <React.Fragment key={key}>
      <SidebarGroup key={key} className="py-0">
        <Collapsible
          defaultOpen={true}
          className="group/collapsible"
        >
          <SidebarGroupLabel
            asChild
            className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <CollapsibleTrigger >
              <Link to={'home'} className="flex flex-row gap-1 text-base flex-grow">
                <div className="flex items-center justify-center">
                  <House className="mr-1 size-4"/>
                </div>
                {"ホーム"}
              </Link>
            </CollapsibleTrigger>
          </SidebarGroupLabel>
        </Collapsible>
      </SidebarGroup>
      <SidebarSeparator className="mx-0" />
    </React.Fragment>
  );
}

function Spaces({
  spaces,
}: {
  spaces: space[]
}) {
  return (
    <>
      <Home />
      {spaces.map((space, index) => (
        <React.Fragment key={space.name}>
          <SidebarGroup key={space.name} className="py-0">
            <Collapsible
              defaultOpen={index === 0}
              className="group/collapsible" >
              <SidebarGroupLabel
                asChild
                className="group/label group w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex gap-2" >
                <CollapsibleTrigger >
                  <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  <div className="flex-1 ">
                    <p className="text-start">{space.isPrivate ? "プライベート" : space.name}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="invisible group-hover/label:visible shrink-0" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {space.bookmarkGroups.map((bookmarkGroup) => (
                      <SidebarMenuItem key={bookmarkGroup.id}>
                        <SidebarMenuButton className="flex items-center ">
                          <Link to={`/s/${space.id}/bg/${bookmarkGroup.id}`} className="flex flex-row gap-1 text-base flex-grow">
                          <div className="ml-3 flex items-center justify-center">
                            <BookMarked className="size-4" />
                          </div>
                          {bookmarkGroup.name}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
          <SidebarSeparator className="mx-0" />
        </React.Fragment>
      ))}
    </>
  )
}

function NavUser({
  profile,
}: {
  profile: profile
}) {
  const { isMobile } = useSidebar()
  const fallbackName = avatarFallbackString(profile.name ?? "A")
  const name = profile.name ?? "Anonymous";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={profile.avatarUrl ?? ""} alt={name} />
                <AvatarFallback className="rounded-lg">{fallbackName}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{name}</span>
                <span className="truncate text-xs">{profile.email ?? ""}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="start"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={profile.avatarUrl ?? ""} alt={name} />
                  <AvatarFallback className="rounded-lg">{fallbackName}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{name}</span>
                  <span className="truncate text-xs">{profile.email ?? ""}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}


