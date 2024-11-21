alter table "public"."bookmark_groups" add constraint "bookmark_groups_space_id_fkey" FOREIGN KEY (space_id) REFERENCES spaces(id) not valid;

alter table "public"."bookmark_groups" validate constraint "bookmark_groups_space_id_fkey";

alter table "public"."bookmarks" add constraint "bookmarks_bookmark_group_id_fkey" FOREIGN KEY (bookmark_group_id) REFERENCES bookmark_groups(id) not valid;

alter table "public"."bookmarks" validate constraint "bookmarks_bookmark_group_id_fkey";

alter table "public"."bookmarks" add constraint "bookmarks_create_user_id_fkey" FOREIGN KEY (create_user_id) REFERENCES profiles(user_id) not valid;

alter table "public"."bookmarks" validate constraint "bookmarks_create_user_id_fkey";

alter table "public"."bookmarks" add constraint "bookmarks_last_update_user_id_fkey" FOREIGN KEY (last_update_user_id) REFERENCES profiles(user_id) not valid;

alter table "public"."bookmarks" validate constraint "bookmarks_last_update_user_id_fkey";

alter table "public"."space_members" add constraint "space_members_space_id_fkey" FOREIGN KEY (space_id) REFERENCES spaces(id) not valid;

alter table "public"."space_members" validate constraint "space_members_space_id_fkey";

alter table "public"."space_members" add constraint "space_members_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(user_id) not valid;

alter table "public"."space_members" validate constraint "space_members_user_id_fkey";


