SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6

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

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '1c4378b0-222c-42c4-8dbc-b96fb87b1d31', '{"action":"user_signedup","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"google"}}', '2024-11-21 15:46:43.464737+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ba93fb38-af24-430c-a94b-194df5d338b5', '{"action":"login","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"google"}}', '2024-11-21 15:46:43.482122+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd4c1424e-1965-4aa9-a083-c6fc42b12a6c', '{"action":"login","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2024-11-21 15:46:45.374509+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fb9de25f-9aea-4c3d-8bba-ef9e3f48b0f1', '{"action":"login","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"google"}}', '2024-11-21 15:46:45.384233+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b1709b47-bf43-485d-bdcb-00f713a962c7', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:35:11.517061+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ac696884-28bf-4bd1-ba56-c54704897396', '{"action":"token_revoked","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:35:11.518519+00', ''),
	('00000000-0000-0000-0000-000000000000', '5ca1e536-0367-4d57-86e4-71f58a188d25', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:35:11.542255+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ef644378-aec1-4385-83af-e74f6e52b6ef', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:35:11.551851+00', ''),
	('00000000-0000-0000-0000-000000000000', '2d7dec49-684e-446d-ab0a-1f084a1997fb', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:35:21.646352+00', ''),
	('00000000-0000-0000-0000-000000000000', '0b8e450f-bc8b-48ad-ba2a-00dceb3ea3c0', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:35:21.660498+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a870a173-fe6f-431c-8047-c33216ab0b18', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:35:21.674666+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e2200eb5-01f6-41d7-ad31-2a416c522a51', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:46:49.832211+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c2d27e0d-4885-4b34-94ea-5a691d438502', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:46:49.845077+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f5434899-f564-4e09-a488-497e6184320f', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:46:49.876555+00', ''),
	('00000000-0000-0000-0000-000000000000', '10e449b2-8975-4f51-a63a-8e78043675b5', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:48:40.361448+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a75c4c07-8f13-42a6-babc-644bdc35b90f', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:48:40.376044+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ead0b144-80b1-46f3-9815-fe38682ec3a4', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:48:40.404435+00', ''),
	('00000000-0000-0000-0000-000000000000', '27644774-42e9-432c-bb43-88cd1bbc07f3', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:50:51.435854+00', ''),
	('00000000-0000-0000-0000-000000000000', '67fac293-036e-4033-adeb-fb07bca4e3c4', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:50:51.448416+00', ''),
	('00000000-0000-0000-0000-000000000000', '8213dd9e-9048-4b92-9e2b-e6a8b06a8a37', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:50:51.464044+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eb1a6fbd-ec6e-4365-b861-2dd82157356c', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:50:55.952537+00', ''),
	('00000000-0000-0000-0000-000000000000', '1dc95d30-842b-464e-a46c-87c5d40955a7', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:50:55.965413+00', ''),
	('00000000-0000-0000-0000-000000000000', '91b459d4-b0b5-4e8a-b882-7eb648574649', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:50:55.983345+00', ''),
	('00000000-0000-0000-0000-000000000000', '039ee2ee-33eb-4b1d-ad98-d8ae882ff252', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:52:08.204764+00', ''),
	('00000000-0000-0000-0000-000000000000', '53397895-8f81-4687-afae-ff5db68bae0b', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:52:08.217125+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e239f468-57d7-4826-807a-7b70f11c9be4', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:52:08.23746+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4ed4c3a-8dc4-478b-9e2e-b18074f9260b', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:53:41.682668+00', ''),
	('00000000-0000-0000-0000-000000000000', '3b4f465f-180e-4b73-b8c2-c66262244380', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:53:41.710011+00', ''),
	('00000000-0000-0000-0000-000000000000', '400327a3-c833-492c-96ba-5b03783a4d79', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:53:41.734144+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a7e40b4b-e7e2-4224-9611-e1269d9d297d', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:55:12.626403+00', ''),
	('00000000-0000-0000-0000-000000000000', '71a48887-c1c6-4566-997f-8bd6d0831d69', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:55:12.640155+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0727b43-fc8a-4df0-b520-67c45b4b5d74', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:55:12.67203+00', ''),
	('00000000-0000-0000-0000-000000000000', '296961a5-17b3-4cb9-80d5-d8babb742a19', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:55:43.429199+00', ''),
	('00000000-0000-0000-0000-000000000000', '46f05496-1edd-4299-aebb-06736b1d196b', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:21.716657+00', ''),
	('00000000-0000-0000-0000-000000000000', '456f26b0-25da-4ecf-803b-056a7d7ad4e6', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:21.729931+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fd14fc6d-c864-46c5-8daf-a5749f8953d6', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:21.789371+00', ''),
	('00000000-0000-0000-0000-000000000000', '416604d4-1dd0-4452-944b-86f346f71d57', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:25.327504+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ab185f71-be5d-41b0-a19c-40cbdd829124', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:32.566892+00', ''),
	('00000000-0000-0000-0000-000000000000', '13626908-a1bd-4979-ad7a-e71f39bb6501', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:32.576916+00', ''),
	('00000000-0000-0000-0000-000000000000', '339ef5f3-e6c5-4574-9286-ea72dcb771b6', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:32.588336+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd99e518b-7c9b-4e88-bb76-af8a740ab2a2', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:32.601532+00', ''),
	('00000000-0000-0000-0000-000000000000', 'abea1fc8-ccfb-409d-a013-db5ca7a4b64d', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:55:43.443018+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa0bd3c4-e6e8-4632-917b-cb7eb6fbf74c', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:55:43.461788+00', ''),
	('00000000-0000-0000-0000-000000000000', '1ba313af-b8d3-4e41-af99-f0bbf4b295bf', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:56:09.351755+00', ''),
	('00000000-0000-0000-0000-000000000000', '42e87852-ee5b-44cb-9bab-9978e0486f06', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:56:09.363757+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dd275d2b-b2a1-4217-bee9-9b15f5570b8f', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:56:09.392166+00', ''),
	('00000000-0000-0000-0000-000000000000', '5c08f15b-e95c-4dc2-ad0a-b11cf92eac62', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:21.747665+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cc660a3f-73fd-42f8-ad88-00747913a776', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:21.767683+00', ''),
	('00000000-0000-0000-0000-000000000000', '67fb8f94-6d7f-4f7c-bd13-22fe3319512e', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:25.339712+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd31f311b-c836-42cf-96bc-e687f3e0a2e3', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:25.355828+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ff0101d8-ff8c-42fb-b165-e82f9f196201', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:25.367281+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b0f4f2f-fcaa-492e-8a38-7d8b1c696ac0', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:25.397766+00', ''),
	('00000000-0000-0000-0000-000000000000', '6489ae8c-a6db-4eb2-ab2c-ab4325bbe1bf', '{"action":"token_refreshed","actor_id":"32984ee0-f456-41bf-a77c-adce4f3c14c6","actor_name":"Uchiyama Ryota (Atoyr)","actor_username":"lessironglance@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-11-22 03:58:32.554953+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '32984ee0-f456-41bf-a77c-adce4f3c14c6', 'authenticated', 'authenticated', 'lessironglance@gmail.com', NULL, '2024-11-21 15:46:43.465462+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-11-21 15:46:45.384681+00', '{"provider": "google", "providers": ["google"]}', '{"iss": "https://accounts.google.com", "sub": "113457075330280710879", "name": "Uchiyama Ryota (Atoyr)", "email": "lessironglance@gmail.com", "picture": "https://lh3.googleusercontent.com/a/ACg8ocLQ35A554wwFUHZDObT6h6ceK8iYT0ZI5TOw2xq5ncOyqj13Cbf=s96-c", "full_name": "Uchiyama Ryota (Atoyr)", "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ35A554wwFUHZDObT6h6ceK8iYT0ZI5TOw2xq5ncOyqj13Cbf=s96-c", "provider_id": "113457075330280710879", "email_verified": true, "phone_verified": false}', NULL, '2024-11-21 15:46:43.457481+00', '2024-11-22 03:35:11.520542+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('113457075330280710879', '32984ee0-f456-41bf-a77c-adce4f3c14c6', '{"iss": "https://accounts.google.com", "sub": "113457075330280710879", "name": "Uchiyama Ryota (Atoyr)", "email": "lessironglance@gmail.com", "picture": "https://lh3.googleusercontent.com/a/ACg8ocLQ35A554wwFUHZDObT6h6ceK8iYT0ZI5TOw2xq5ncOyqj13Cbf=s96-c", "full_name": "Uchiyama Ryota (Atoyr)", "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLQ35A554wwFUHZDObT6h6ceK8iYT0ZI5TOw2xq5ncOyqj13Cbf=s96-c", "provider_id": "113457075330280710879", "email_verified": true, "phone_verified": false}', 'google', '2024-11-21 15:46:43.462075+00', '2024-11-21 15:46:43.4621+00', '2024-11-21 15:46:45.373058+00', '0750f372-8b8b-4d60-9e0e-b004a2259d1a');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('b7ed755a-d45a-4a96-adae-32a8ebe2704a', '32984ee0-f456-41bf-a77c-adce4f3c14c6', '2024-11-21 15:46:43.48264+00', '2024-11-21 15:46:43.48264+00', NULL, 'aal1', NULL, NULL, 'node', '172.18.0.1', NULL),
	('ef5f1a8b-fa5c-47f8-a37f-e980b46c768a', '32984ee0-f456-41bf-a77c-adce4f3c14c6', '2024-11-21 15:46:45.384718+00', '2024-11-22 03:58:32.602367+00', NULL, 'aal1', NULL, '2024-11-22 03:58:32.602332', 'node', '172.18.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('b7ed755a-d45a-4a96-adae-32a8ebe2704a', '2024-11-21 15:46:43.485054+00', '2024-11-21 15:46:43.485054+00', 'oauth', 'afc1ad7e-afba-4b7e-909e-79ec69b81263'),
	('ef5f1a8b-fa5c-47f8-a37f-e980b46c768a', '2024-11-21 15:46:45.386127+00', '2024-11-21 15:46:45.386127+00', 'oauth', '4637eca6-f0ea-4a4d-a387-dc60c2075a22');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, 'holyvCkKmnLvJ00AbnVu0g', '32984ee0-f456-41bf-a77c-adce4f3c14c6', false, '2024-11-21 15:46:43.483599+00', '2024-11-21 15:46:43.483599+00', NULL, 'b7ed755a-d45a-4a96-adae-32a8ebe2704a'),
	('00000000-0000-0000-0000-000000000000', 2, 'Hb2bB_RQt_5Ged2abIm6sA', '32984ee0-f456-41bf-a77c-adce4f3c14c6', true, '2024-11-21 15:46:45.38525+00', '2024-11-22 03:35:11.518969+00', NULL, 'ef5f1a8b-fa5c-47f8-a37f-e980b46c768a'),
	('00000000-0000-0000-0000-000000000000', 3, 'odzyH80F_uWBaewFeYC_wA', '32984ee0-f456-41bf-a77c-adce4f3c14c6', false, '2024-11-22 03:35:11.519505+00', '2024-11-22 03:35:11.519505+00', 'Hb2bB_RQt_5Ged2abIm6sA', 'ef5f1a8b-fa5c-47f8-a37f-e980b46c768a');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: bookmark_gorup_definition_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: spaces; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."spaces" ("created_at", "is_private", "name", "version", "id") VALUES
	('2024-11-21 15:46:45.418178+00', true, 'Uchiyama Ryota (Atoyr)', 1, '35d21583-eae9-44d4-a01a-d2a989f1559b');


--
-- Data for Name: bookmark_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."bookmark_groups" ("name", "created_at", "version", "id", "space_id") VALUES
	('デフォルトグループ', '2024-11-21 15:46:45.447537+00', 1, '77e9c363-247a-4ae0-93cf-82c83ed01e7d', '35d21583-eae9-44d4-a01a-d2a989f1559b');


--
-- Data for Name: bookmark_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("user_id", "email", "username", "avatar_url", "created_at", "version", "id") VALUES
	('32984ee0-f456-41bf-a77c-adce4f3c14c6', 'lessironglance@gmail.com', 'Uchiyama Ryota (Atoyr)', NULL, '2024-11-21 15:46:45.4', 1, '142dff73-9f93-4ddd-bfd2-a7322a838d3d');


--
-- Data for Name: bookmarks; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: space_members; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."space_members" ("created_at", "user_id", "version", "role", "id", "space_id") VALUES
	('2024-11-21 15:46:45.4308+00', '32984ee0-f456-41bf-a77c-adce4f3c14c6', 1, 'owner', 'f863ac75-6088-4821-adf9-c97ebb6fe5d1', '35d21583-eae9-44d4-a01a-d2a989f1559b');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 3, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
