drop policy "Enable insert for space users only" on "public"."bookmark_groups";

drop policy "Enable users to view their own data only" on "public"."bookmark_groups";

drop policy "Enable insert for authenticated users only" on "public"."profiles";

drop policy "Enable select for authenticated users only" on "public"."profiles";

drop policy "Policy with update my profile" on "public"."profiles";

drop policy "Enable insert for authenticated and new space only" on "public"."space_members";

drop policy "Enable read access for space users" on "public"."space_members";

drop policy "Enable updte for space owner" on "public"."space_members";

drop policy "Enable delete for users based on user_id" on "public"."spaces";

drop policy "Enable read access for space owner" on "public"."spaces";

drop policy "Enable read access for space users" on "public"."spaces";

alter table "public"."bookmark_tags" drop constraint "bookmark_tags_tag_id_fkey";

alter table "public"."bookmarks" drop constraint "bookmarks_bookmark_group_id_fkey";

alter table "public"."bookmarks" drop constraint "bookmarks_create_user_id_fkey";

alter table "public"."bookmark_gorup_definition_tags" drop constraint "bookmark_gorup_tags_pkey";

alter table "public"."profiles" drop constraint "Profiles_pkey";

alter table "public"."spaces" drop constraint "spaces_pkey";

drop index if exists "public"."Profiles_pkey";

drop index if exists "public"."bookmark_gorup_tags_pkey";

drop index if exists "public"."spaces_pkey";

alter table "public"."bookmark_gorup_definition_tags" alter column "bookmark_group_id" set default gen_random_uuid();

alter table "public"."bookmark_gorup_definition_tags" alter column "bookmark_group_id" set data type uuid using "bookmark_group_id"::uuid;

alter table "public"."bookmark_gorup_definition_tags" alter column "id" set default gen_random_uuid();

alter table "public"."bookmark_gorup_definition_tags" alter column "id" drop identity;

alter table "public"."bookmark_gorup_definition_tags" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."bookmark_groups" alter column "id" set default gen_random_uuid();

alter table "public"."bookmark_groups" alter column "id" drop identity;

alter table "public"."bookmark_groups" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."bookmark_groups" alter column "name" set default ''''''::text;

alter table "public"."bookmark_groups" alter column "space_id" set default gen_random_uuid();

alter table "public"."bookmark_groups" alter column "space_id" set data type uuid using "space_id"::uuid;

alter table "public"."bookmark_tags" alter column "bookmark_group_id" set default gen_random_uuid();

alter table "public"."bookmark_tags" alter column "bookmark_group_id" set data type uuid using "bookmark_group_id"::uuid;

alter table "public"."bookmark_tags" alter column "bookmark_id" set default gen_random_uuid();

alter table "public"."bookmark_tags" alter column "bookmark_id" set data type uuid using "bookmark_id"::uuid;

alter table "public"."bookmark_tags" alter column "id" set default gen_random_uuid();

alter table "public"."bookmark_tags" alter column "id" drop identity;

alter table "public"."bookmark_tags" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."bookmark_tags" alter column "tag_id" set default gen_random_uuid();

alter table "public"."bookmark_tags" alter column "tag_id" set data type uuid using "tag_id"::uuid;

alter table "public"."bookmarks" alter column "bookmark_group_id" set default gen_random_uuid();

alter table "public"."bookmarks" alter column "bookmark_group_id" set data type uuid using "bookmark_group_id"::uuid;

alter table "public"."bookmarks" alter column "id" set default gen_random_uuid();

alter table "public"."bookmarks" alter column "id" drop identity;

alter table "public"."bookmarks" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."profiles" alter column "id" set default gen_random_uuid();

alter table "public"."profiles" alter column "id" drop identity;

alter table "public"."profiles" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."space_members" drop column "uid";

alter table "public"."space_members" alter column "id" set default gen_random_uuid();

alter table "public"."space_members" alter column "id" drop identity;

alter table "public"."space_members" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."space_members" alter column "space_id" set default gen_random_uuid();

alter table "public"."space_members" alter column "space_id" set data type uuid using "space_id"::uuid;

alter table "public"."spaces" drop column "uid";

alter table "public"."spaces" alter column "id" set default gen_random_uuid();

alter table "public"."spaces" alter column "id" drop identity;

alter table "public"."spaces" alter column "id" set data type uuid using "id"::uuid;

drop sequence if exists "public"."Profiles_id_seq";

CREATE UNIQUE INDEX bookmark_gorup_definition_tags_pkey ON public.bookmark_gorup_definition_tags USING btree (id);

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id);

CREATE UNIQUE INDEX space_members_pkey ON public.space_members USING btree (id);

alter table "public"."bookmark_gorup_definition_tags" add constraint "bookmark_gorup_definition_tags_pkey" PRIMARY KEY using index "bookmark_gorup_definition_tags_pkey";

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."space_members" add constraint "space_members_pkey" PRIMARY KEY using index "space_members_pkey";

create policy "Enable insert for authenticated users only"
on "public"."bookmark_groups"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."bookmark_groups"
as permissive
for select
to authenticated
using (true);


create policy "Enable insert for users based on user_id"
on "public"."profiles"
as permissive
for insert
to public
with check ((( SELECT auth.uid() AS uid) = user_id));


create policy "Enable read access for auth users"
on "public"."profiles"
as permissive
for select
to authenticated
using (true);


create policy "Enable insert for authenticated users only"
on "public"."space_members"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."space_members"
as permissive
for select
to authenticated
using (true);


create policy "Enable read access for auth users"
on "public"."spaces"
as permissive
for select
to authenticated
using (true);



