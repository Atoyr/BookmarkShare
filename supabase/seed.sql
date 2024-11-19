

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE TYPE "public"."color" AS ENUM (
    'red',
    'blue',
    'green',
    'yellow',
    'cyan',
    'magenta'
);


ALTER TYPE "public"."color" OWNER TO "postgres";


CREATE TYPE "public"."space_role" AS ENUM (
    'owner',
    'member'
);


ALTER TYPE "public"."space_role" OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."bookmark_gorup_definition_tags" (
    "name" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "version" bigint DEFAULT '1'::bigint NOT NULL,
    "color" "public"."color" NOT NULL,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "bookmark_group_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);


ALTER TABLE "public"."bookmark_gorup_definition_tags" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."bookmark_groups" (
    "name" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "version" bigint DEFAULT '1'::bigint NOT NULL,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "space_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);


ALTER TABLE "public"."bookmark_groups" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."bookmark_tags" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "version" bigint DEFAULT '1'::bigint NOT NULL,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "bookmark_group_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "bookmark_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tag_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);


ALTER TABLE "public"."bookmark_tags" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."bookmarks" (
    "title" "text" DEFAULT ''::"text" NOT NULL,
    "url" "text" DEFAULT ''::"text" NOT NULL,
    "create_user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "last_update_user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "modified_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "version" bigint DEFAULT '1'::bigint NOT NULL,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "bookmark_group_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);


ALTER TABLE "public"."bookmarks" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "email" "text" DEFAULT ''::"text" NOT NULL,
    "username" "text" DEFAULT ''::"text" NOT NULL,
    "avatar_url" "text",
    "created_at" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "version" bigint DEFAULT '1'::bigint NOT NULL,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);


ALTER TABLE "public"."profiles" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."space_members" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "version" bigint DEFAULT '1'::bigint NOT NULL,
    "role" "public"."space_role" DEFAULT 'member'::"public"."space_role" NOT NULL,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "space_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);


ALTER TABLE "public"."space_members" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."spaces" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "is_private" boolean DEFAULT false NOT NULL,
    "name" "text" DEFAULT ''::"text" NOT NULL,
    "version" bigint DEFAULT '1'::bigint NOT NULL,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);


ALTER TABLE "public"."spaces" OWNER TO "postgres";


ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "Profiles_auth_id_key1" UNIQUE ("user_id");



ALTER TABLE ONLY "public"."bookmark_gorup_definition_tags"
    ADD CONSTRAINT "bookmark_gorup_definition_tags_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."bookmark_groups"
    ADD CONSTRAINT "bookmark_groups_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."bookmark_tags"
    ADD CONSTRAINT "bookmark_tags_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."bookmarks"
    ADD CONSTRAINT "bookmarks_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."space_members"
    ADD CONSTRAINT "space_members_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."spaces"
    ADD CONSTRAINT "spaces_pkey" PRIMARY KEY ("id");



CREATE INDEX "idx_profiles_user_id" ON "public"."profiles" USING "btree" ("user_id");



CREATE POLICY "Enable insert for authenticated and new space only" ON "public"."space_members" FOR INSERT TO "authenticated" WITH CHECK (true);



CREATE POLICY "Enable insert for authenticated users only" ON "public"."bookmark_groups" FOR INSERT TO "authenticated" WITH CHECK (("space_id" IN ( SELECT "space_members"."space_id"
   FROM "public"."space_members"
  WHERE ("space_members"."user_id" = "auth"."uid"()))));



CREATE POLICY "Enable insert for authenticated users only" ON "public"."profiles" FOR INSERT TO "authenticated" WITH CHECK (true);



CREATE POLICY "Enable insert for authenticated users only" ON "public"."spaces" FOR INSERT TO "authenticated" WITH CHECK (true);



CREATE POLICY "Enable read access for space users" ON "public"."space_members" FOR SELECT USING (true);



CREATE POLICY "Enable read access for space users" ON "public"."spaces" FOR SELECT USING (true);



CREATE POLICY "Enable select for authenticated users only" ON "public"."profiles" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "Enable users to view their own data only" ON "public"."bookmark_groups" FOR SELECT TO "authenticated" USING (true);



ALTER TABLE "public"."bookmark_gorup_definition_tags" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."bookmark_groups" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."bookmark_tags" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."bookmarks" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."space_members" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."spaces" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";



































































































































































































GRANT ALL ON TABLE "public"."bookmark_gorup_definition_tags" TO "anon";
GRANT ALL ON TABLE "public"."bookmark_gorup_definition_tags" TO "authenticated";
GRANT ALL ON TABLE "public"."bookmark_gorup_definition_tags" TO "service_role";



GRANT ALL ON TABLE "public"."bookmark_groups" TO "anon";
GRANT ALL ON TABLE "public"."bookmark_groups" TO "authenticated";
GRANT ALL ON TABLE "public"."bookmark_groups" TO "service_role";



GRANT ALL ON TABLE "public"."bookmark_tags" TO "anon";
GRANT ALL ON TABLE "public"."bookmark_tags" TO "authenticated";
GRANT ALL ON TABLE "public"."bookmark_tags" TO "service_role";



GRANT ALL ON TABLE "public"."bookmarks" TO "anon";
GRANT ALL ON TABLE "public"."bookmarks" TO "authenticated";
GRANT ALL ON TABLE "public"."bookmarks" TO "service_role";



GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";



GRANT ALL ON TABLE "public"."space_members" TO "anon";
GRANT ALL ON TABLE "public"."space_members" TO "authenticated";
GRANT ALL ON TABLE "public"."space_members" TO "service_role";



GRANT ALL ON TABLE "public"."spaces" TO "anon";
GRANT ALL ON TABLE "public"."spaces" TO "authenticated";
GRANT ALL ON TABLE "public"."spaces" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";






























RESET ALL;
