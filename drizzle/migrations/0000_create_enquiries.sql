CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  occasion text,
  creation text,
  message text NOT NULL
);

GRANT INSERT ON public.enquiries TO anon;
GRANT INSERT ON public.enquiries TO authenticated;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
ON public.enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) between 1 and 100
  AND length(email) between 3 and 255
  AND length(message) between 1 and 2000
  AND (phone IS NULL OR length(phone) <= 40)
  AND (occasion IS NULL OR length(occasion) <= 120)
  AND (creation IS NULL OR length(creation) <= 120)
);