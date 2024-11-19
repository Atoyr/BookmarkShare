create type "public"."color" as enum ('red', 'blue', 'green', 'yellow', 'cyan', 'magenta');

create type "public"."space_role" as enum ('owner', 'member');

create table "public"."bookmark_gorup_definition_tags" (
    "name" text not null,
    "created_at" timestamp with time zone not null default now(),
    "version" bigint not null default '1'::bigint,
    "color" color not null,
    "id" uuid not null default gen_random_uuid(),
    "bookmark_group_id" uuid not null default gen_random_uuid()
);


alter table "public"."bookmark_gorup_definition_tags" enable row level security;

create table "public"."bookmark_groups" (
    "name" text not null,
    "created_at" timestamp with time zone not null default now(),
    "version" bigint not null default '1'::bigint,
    "id" uuid not null default gen_random_uuid(),
    "space_id" uuid not null default gen_random_uuid()
);


alter table "public"."bookmark_groups" enable row level security;

create table "public"."bookmark_tags" (
    "created_at" timestamp with time zone not null default now(),
    "version" bigint not null default '1'::bigint,
    "id" uuid not null default gen_random_uuid(),
    "bookmark_group_id" uuid not null default gen_random_uuid(),
    "bookmark_id" uuid not null default gen_random_uuid(),
    "tag_id" uuid not null default gen_random_uuid()
);


alter table "public"."bookmark_tags" enable row level security;

create table "public"."bookmarks" (
    "title" text not null default ''::text,
    "url" text not null default ''::text,
    "create_user_id" uuid not null default auth.uid(),
    "last_update_user_id" uuid not null default auth.uid(),
    "created_at" timestamp with time zone not null default now(),
    "modified_at" timestamp with time zone not null default now(),
    "version" bigint not null default '1'::bigint,
    "id" uuid not null default gen_random_uuid(),
    "bookmark_group_id" uuid not null default gen_random_uuid()
);


alter table "public"."bookmarks" enable row level security;

create table "public"."profiles" (
    "user_id" uuid not null default auth.uid(),
    "email" text not null default ''::text,
    "username" text not null default ''::text,
    "avatar_url" text,
    "created_at" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "version" bigint not null default '1'::bigint,
    "id" uuid not null default gen_random_uuid()
);


alter table "public"."profiles" enable row level security;

create table "public"."space_members" (
    "created_at" timestamp with time zone not null default now(),
    "user_id" uuid not null default auth.uid(),
    "version" bigint not null default '1'::bigint,
    "role" space_role not null default 'member'::space_role,
    "id" uuid not null default gen_random_uuid(),
    "space_id" uuid not null default gen_random_uuid()
);


alter table "public"."space_members" enable row level security;

create table "public"."spaces" (
    "created_at" timestamp with time zone not null default now(),
    "is_private" boolean not null default false,
    "name" text not null default ''::text,
    "version" bigint not null default '1'::bigint,
    "id" uuid not null default gen_random_uuid()
);


alter table "public"."spaces" enable row level security;

CREATE UNIQUE INDEX "Profiles_auth_id_key1" ON public.profiles USING btree (user_id);

CREATE UNIQUE INDEX bookmark_gorup_definition_tags_pkey ON public.bookmark_gorup_definition_tags USING btree (id);

CREATE UNIQUE INDEX bookmark_groups_pkey ON public.bookmark_groups USING btree (id);

CREATE UNIQUE INDEX bookmark_tags_pkey ON public.bookmark_tags USING btree (id);

CREATE UNIQUE INDEX bookmarks_pkey ON public.bookmarks USING btree (id);

CREATE INDEX idx_profiles_user_id ON public.profiles USING btree (user_id);

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id);

CREATE UNIQUE INDEX space_members_pkey ON public.space_members USING btree (id);

CREATE UNIQUE INDEX spaces_pkey ON public.spaces USING btree (id);

alter table "public"."bookmark_gorup_definition_tags" add constraint "bookmark_gorup_definition_tags_pkey" PRIMARY KEY using index "bookmark_gorup_definition_tags_pkey";

alter table "public"."bookmark_groups" add constraint "bookmark_groups_pkey" PRIMARY KEY using index "bookmark_groups_pkey";

alter table "public"."bookmark_tags" add constraint "bookmark_tags_pkey" PRIMARY KEY using index "bookmark_tags_pkey";

alter table "public"."bookmarks" add constraint "bookmarks_pkey" PRIMARY KEY using index "bookmarks_pkey";

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."space_members" add constraint "space_members_pkey" PRIMARY KEY using index "space_members_pkey";

alter table "public"."spaces" add constraint "spaces_pkey" PRIMARY KEY using index "spaces_pkey";

alter table "public"."profiles" add constraint "Profiles_auth_id_key1" UNIQUE using index "Profiles_auth_id_key1";

grant delete on table "public"."bookmark_gorup_definition_tags" to "anon";

grant insert on table "public"."bookmark_gorup_definition_tags" to "anon";

grant references on table "public"."bookmark_gorup_definition_tags" to "anon";

grant select on table "public"."bookmark_gorup_definition_tags" to "anon";

grant trigger on table "public"."bookmark_gorup_definition_tags" to "anon";

grant truncate on table "public"."bookmark_gorup_definition_tags" to "anon";

grant update on table "public"."bookmark_gorup_definition_tags" to "anon";

grant delete on table "public"."bookmark_gorup_definition_tags" to "authenticated";

grant insert on table "public"."bookmark_gorup_definition_tags" to "authenticated";

grant references on table "public"."bookmark_gorup_definition_tags" to "authenticated";

grant select on table "public"."bookmark_gorup_definition_tags" to "authenticated";

grant trigger on table "public"."bookmark_gorup_definition_tags" to "authenticated";

grant truncate on table "public"."bookmark_gorup_definition_tags" to "authenticated";

grant update on table "public"."bookmark_gorup_definition_tags" to "authenticated";

grant delete on table "public"."bookmark_gorup_definition_tags" to "service_role";

grant insert on table "public"."bookmark_gorup_definition_tags" to "service_role";

grant references on table "public"."bookmark_gorup_definition_tags" to "service_role";

grant select on table "public"."bookmark_gorup_definition_tags" to "service_role";

grant trigger on table "public"."bookmark_gorup_definition_tags" to "service_role";

grant truncate on table "public"."bookmark_gorup_definition_tags" to "service_role";

grant update on table "public"."bookmark_gorup_definition_tags" to "service_role";

grant delete on table "public"."bookmark_groups" to "anon";

grant insert on table "public"."bookmark_groups" to "anon";

grant references on table "public"."bookmark_groups" to "anon";

grant select on table "public"."bookmark_groups" to "anon";

grant trigger on table "public"."bookmark_groups" to "anon";

grant truncate on table "public"."bookmark_groups" to "anon";

grant update on table "public"."bookmark_groups" to "anon";

grant delete on table "public"."bookmark_groups" to "authenticated";

grant insert on table "public"."bookmark_groups" to "authenticated";

grant references on table "public"."bookmark_groups" to "authenticated";

grant select on table "public"."bookmark_groups" to "authenticated";

grant trigger on table "public"."bookmark_groups" to "authenticated";

grant truncate on table "public"."bookmark_groups" to "authenticated";

grant update on table "public"."bookmark_groups" to "authenticated";

grant delete on table "public"."bookmark_groups" to "service_role";

grant insert on table "public"."bookmark_groups" to "service_role";

grant references on table "public"."bookmark_groups" to "service_role";

grant select on table "public"."bookmark_groups" to "service_role";

grant trigger on table "public"."bookmark_groups" to "service_role";

grant truncate on table "public"."bookmark_groups" to "service_role";

grant update on table "public"."bookmark_groups" to "service_role";

grant delete on table "public"."bookmark_tags" to "anon";

grant insert on table "public"."bookmark_tags" to "anon";

grant references on table "public"."bookmark_tags" to "anon";

grant select on table "public"."bookmark_tags" to "anon";

grant trigger on table "public"."bookmark_tags" to "anon";

grant truncate on table "public"."bookmark_tags" to "anon";

grant update on table "public"."bookmark_tags" to "anon";

grant delete on table "public"."bookmark_tags" to "authenticated";

grant insert on table "public"."bookmark_tags" to "authenticated";

grant references on table "public"."bookmark_tags" to "authenticated";

grant select on table "public"."bookmark_tags" to "authenticated";

grant trigger on table "public"."bookmark_tags" to "authenticated";

grant truncate on table "public"."bookmark_tags" to "authenticated";

grant update on table "public"."bookmark_tags" to "authenticated";

grant delete on table "public"."bookmark_tags" to "service_role";

grant insert on table "public"."bookmark_tags" to "service_role";

grant references on table "public"."bookmark_tags" to "service_role";

grant select on table "public"."bookmark_tags" to "service_role";

grant trigger on table "public"."bookmark_tags" to "service_role";

grant truncate on table "public"."bookmark_tags" to "service_role";

grant update on table "public"."bookmark_tags" to "service_role";

grant delete on table "public"."bookmarks" to "anon";

grant insert on table "public"."bookmarks" to "anon";

grant references on table "public"."bookmarks" to "anon";

grant select on table "public"."bookmarks" to "anon";

grant trigger on table "public"."bookmarks" to "anon";

grant truncate on table "public"."bookmarks" to "anon";

grant update on table "public"."bookmarks" to "anon";

grant delete on table "public"."bookmarks" to "authenticated";

grant insert on table "public"."bookmarks" to "authenticated";

grant references on table "public"."bookmarks" to "authenticated";

grant select on table "public"."bookmarks" to "authenticated";

grant trigger on table "public"."bookmarks" to "authenticated";

grant truncate on table "public"."bookmarks" to "authenticated";

grant update on table "public"."bookmarks" to "authenticated";

grant delete on table "public"."bookmarks" to "service_role";

grant insert on table "public"."bookmarks" to "service_role";

grant references on table "public"."bookmarks" to "service_role";

grant select on table "public"."bookmarks" to "service_role";

grant trigger on table "public"."bookmarks" to "service_role";

grant truncate on table "public"."bookmarks" to "service_role";

grant update on table "public"."bookmarks" to "service_role";

grant delete on table "public"."profiles" to "anon";

grant insert on table "public"."profiles" to "anon";

grant references on table "public"."profiles" to "anon";

grant select on table "public"."profiles" to "anon";

grant trigger on table "public"."profiles" to "anon";

grant truncate on table "public"."profiles" to "anon";

grant update on table "public"."profiles" to "anon";

grant delete on table "public"."profiles" to "authenticated";

grant insert on table "public"."profiles" to "authenticated";

grant references on table "public"."profiles" to "authenticated";

grant select on table "public"."profiles" to "authenticated";

grant trigger on table "public"."profiles" to "authenticated";

grant truncate on table "public"."profiles" to "authenticated";

grant update on table "public"."profiles" to "authenticated";

grant delete on table "public"."profiles" to "service_role";

grant insert on table "public"."profiles" to "service_role";

grant references on table "public"."profiles" to "service_role";

grant select on table "public"."profiles" to "service_role";

grant trigger on table "public"."profiles" to "service_role";

grant truncate on table "public"."profiles" to "service_role";

grant update on table "public"."profiles" to "service_role";

grant delete on table "public"."space_members" to "anon";

grant insert on table "public"."space_members" to "anon";

grant references on table "public"."space_members" to "anon";

grant select on table "public"."space_members" to "anon";

grant trigger on table "public"."space_members" to "anon";

grant truncate on table "public"."space_members" to "anon";

grant update on table "public"."space_members" to "anon";

grant delete on table "public"."space_members" to "authenticated";

grant insert on table "public"."space_members" to "authenticated";

grant references on table "public"."space_members" to "authenticated";

grant select on table "public"."space_members" to "authenticated";

grant trigger on table "public"."space_members" to "authenticated";

grant truncate on table "public"."space_members" to "authenticated";

grant update on table "public"."space_members" to "authenticated";

grant delete on table "public"."space_members" to "service_role";

grant insert on table "public"."space_members" to "service_role";

grant references on table "public"."space_members" to "service_role";

grant select on table "public"."space_members" to "service_role";

grant trigger on table "public"."space_members" to "service_role";

grant truncate on table "public"."space_members" to "service_role";

grant update on table "public"."space_members" to "service_role";

grant delete on table "public"."spaces" to "anon";

grant insert on table "public"."spaces" to "anon";

grant references on table "public"."spaces" to "anon";

grant select on table "public"."spaces" to "anon";

grant trigger on table "public"."spaces" to "anon";

grant truncate on table "public"."spaces" to "anon";

grant update on table "public"."spaces" to "anon";

grant delete on table "public"."spaces" to "authenticated";

grant insert on table "public"."spaces" to "authenticated";

grant references on table "public"."spaces" to "authenticated";

grant select on table "public"."spaces" to "authenticated";

grant trigger on table "public"."spaces" to "authenticated";

grant truncate on table "public"."spaces" to "authenticated";

grant update on table "public"."spaces" to "authenticated";

grant delete on table "public"."spaces" to "service_role";

grant insert on table "public"."spaces" to "service_role";

grant references on table "public"."spaces" to "service_role";

grant select on table "public"."spaces" to "service_role";

grant trigger on table "public"."spaces" to "service_role";

grant truncate on table "public"."spaces" to "service_role";

grant update on table "public"."spaces" to "service_role";

create policy "Enable insert for authenticated users only"
on "public"."bookmark_groups"
as permissive
for insert
to authenticated
with check ((space_id IN ( SELECT space_members.space_id
   FROM space_members
  WHERE (space_members.user_id = auth.uid()))));


create policy "Enable users to view their own data only"
on "public"."bookmark_groups"
as permissive
for select
to authenticated
using (true);


create policy "Enable insert for authenticated users only"
on "public"."profiles"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable select for authenticated users only"
on "public"."profiles"
as permissive
for select
to authenticated
using (true);


create policy "Enable insert for authenticated and new space only"
on "public"."space_members"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for space users"
on "public"."space_members"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "public"."spaces"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for space users"
on "public"."spaces"
as permissive
for select
to public
using (true);



