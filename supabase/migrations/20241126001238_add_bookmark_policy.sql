create policy "insert bookmark"
on "public"."bookmarks"
as permissive
for insert
to public
with check ((EXISTS ( SELECT space_members.created_at,
    space_members.user_id,
    space_members.version,
    space_members.role,
    space_members.id,
    space_members.space_id
   FROM space_members
  WHERE ((space_members.space_id = bookmarks.space_id) AND (space_members.user_id = auth.uid())))));



