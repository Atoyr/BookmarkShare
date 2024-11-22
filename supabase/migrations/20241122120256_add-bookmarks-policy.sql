alter table "public"."bookmarks" add column "space_id" uuid not null default gen_random_uuid();

alter table "public"."bookmarks" add constraint "bookmarks_space_id_fkey" FOREIGN KEY (space_id) REFERENCES spaces(id) not valid;

alter table "public"."bookmarks" validate constraint "bookmarks_space_id_fkey";

create policy "Enable read access for all users"
on "public"."bookmarks"
as permissive
for select
to public
using ((EXISTS ( SELECT space_members.created_at,
    space_members.user_id,
    space_members.version,
    space_members.role,
    space_members.id,
    space_members.space_id
   FROM space_members
  WHERE ((space_members.user_id = auth.uid()) AND (bookmarks.space_id = space_members.space_id)))));



