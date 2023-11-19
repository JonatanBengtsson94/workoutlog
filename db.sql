--
-- PostgreSQL database dump
--

-- Dumped from database version 15.5 (Debian 15.5-0+deb12u1)
-- Dumped by pg_dump version 15.5 (Debian 15.5-0+deb12u1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bodyparts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bodyparts (
    bodypart_id integer NOT NULL,
    name character varying(10)
);


ALTER TABLE public.bodyparts OWNER TO postgres;

--
-- Name: bodyparts_bodypart_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bodyparts_bodypart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bodyparts_bodypart_id_seq OWNER TO postgres;

--
-- Name: bodyparts_bodypart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bodyparts_bodypart_id_seq OWNED BY public.bodyparts.bodypart_id;


--
-- Name: exercises; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exercises (
    exercise_id integer NOT NULL,
    name character varying(50),
    bodypart_id integer
);


ALTER TABLE public.exercises OWNER TO postgres;

--
-- Name: exercises_exercise_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exercises_exercise_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exercises_exercise_id_seq OWNER TO postgres;

--
-- Name: exercises_exercise_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exercises_exercise_id_seq OWNED BY public.exercises.exercise_id;


--
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO postgres;

--
-- Name: sets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sets (
    set_id integer NOT NULL,
    reps integer,
    exercise_id integer,
    workout_id integer,
    weight integer
);


ALTER TABLE public.sets OWNER TO postgres;

--
-- Name: sets_set_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sets_set_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sets_set_id_seq OWNER TO postgres;

--
-- Name: sets_set_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sets_set_id_seq OWNED BY public.sets.set_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(20),
    hash character varying(200),
    salt character varying(200)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: workouts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workouts (
    workout_id integer NOT NULL,
    date date,
    user_id integer
);


ALTER TABLE public.workouts OWNER TO postgres;

--
-- Name: workouts_workout_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.workouts_workout_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.workouts_workout_id_seq OWNER TO postgres;

--
-- Name: workouts_workout_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.workouts_workout_id_seq OWNED BY public.workouts.workout_id;


--
-- Name: bodyparts bodypart_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bodyparts ALTER COLUMN bodypart_id SET DEFAULT nextval('public.bodyparts_bodypart_id_seq'::regclass);


--
-- Name: exercises exercise_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercises ALTER COLUMN exercise_id SET DEFAULT nextval('public.exercises_exercise_id_seq'::regclass);


--
-- Name: sets set_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sets ALTER COLUMN set_id SET DEFAULT nextval('public.sets_set_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Name: workouts workout_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workouts ALTER COLUMN workout_id SET DEFAULT nextval('public.workouts_workout_id_seq'::regclass);


--
-- Data for Name: bodyparts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bodyparts (bodypart_id, name) FROM stdin;
1	Back
2	Chest
3	Legs
4	Arms
5	Shoulders
\.


--
-- Data for Name: exercises; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exercises (exercise_id, name, bodypart_id) FROM stdin;
1	Deadlift	1
5	Pull-ups	1
3	Benchpress	2
2	Squat	3
4	Hipthrusters	3
\.


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.session (sid, sess, expire) FROM stdin;
\.


--
-- Data for Name: sets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sets (set_id, reps, exercise_id, workout_id, weight) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, username, hash, salt) FROM stdin;
\.


--
-- Data for Name: workouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.workouts (workout_id, date, user_id) FROM stdin;
\.


--
-- Name: bodyparts_bodypart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bodyparts_bodypart_id_seq', 5, true);


--
-- Name: exercises_exercise_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exercises_exercise_id_seq', 5, true);


--
-- Name: sets_set_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sets_set_id_seq', 14, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 2, true);


--
-- Name: workouts_workout_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.workouts_workout_id_seq', 8, true);


--
-- Name: bodyparts bodyparts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bodyparts
    ADD CONSTRAINT bodyparts_pkey PRIMARY KEY (bodypart_id);


--
-- Name: exercises exercises_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT exercises_pkey PRIMARY KEY (exercise_id);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- Name: sets sets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sets
    ADD CONSTRAINT sets_pkey PRIMARY KEY (set_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: workouts workouts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workouts
    ADD CONSTRAINT workouts_pkey PRIMARY KEY (workout_id);


--
-- Name: IDX_session_expire; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_session_expire" ON public.session USING btree (expire);


--
-- Name: exercises exercises_bodypart_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT exercises_bodypart_id_fkey FOREIGN KEY (bodypart_id) REFERENCES public.bodyparts(bodypart_id);


--
-- Name: sets sets_exercise_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sets
    ADD CONSTRAINT sets_exercise_id_fkey FOREIGN KEY (exercise_id) REFERENCES public.exercises(exercise_id);


--
-- Name: sets sets_workout_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sets
    ADD CONSTRAINT sets_workout_id_fkey FOREIGN KEY (workout_id) REFERENCES public.workouts(workout_id);


--
-- Name: workouts workouts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workouts
    ADD CONSTRAINT workouts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

