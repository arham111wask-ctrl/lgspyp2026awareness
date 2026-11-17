CREATE TABLE public.survey_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  device_access text NOT NULL CHECK (device_access IN ('yes','shared','no')),
  internet_reliable text NOT NULL CHECK (internet_reliable IN ('always','sometimes','rarely')),
  uses_tech text NOT NULL CHECK (uses_tech IN ('daily','sometimes','never')),
  preference text NOT NULL CHECK (preference IN ('traditional','digital','both')),
  challenge text NOT NULL CHECK (challenge IN ('connectivity','devices','distraction','skills','cost')),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.survey_responses TO anon, authenticated;
GRANT ALL ON public.survey_responses TO service_role;
ALTER TABLE public.survey_responses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit" ON public.survey_responses FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.get_survey_summary()
RETURNS TABLE(question text, answer text, total bigint)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT 'device_access', device_access, count(*) FROM survey_responses GROUP BY 2
  UNION ALL SELECT 'internet_reliable', internet_reliable, count(*) FROM survey_responses GROUP BY 2
  UNION ALL SELECT 'uses_tech', uses_tech, count(*) FROM survey_responses GROUP BY 2
  UNION ALL SELECT 'preference', preference, count(*) FROM survey_responses GROUP BY 2
  UNION ALL SELECT 'challenge', challenge, count(*) FROM survey_responses GROUP BY 2
$$;
GRANT EXECUTE ON FUNCTION public.get_survey_summary() TO anon, authenticated;