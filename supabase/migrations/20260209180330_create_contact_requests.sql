/*
  # Create contact_requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `full_name` (text, not null) - Name of the person requesting contact
      - `email` (text, not null) - Email address
      - `phone` (text) - Optional phone number
      - `service` (text) - The service they're interested in
      - `message` (text, not null) - Their message
      - `created_at` (timestamptz) - When the request was made

  2. Security
    - Enable RLS on `contact_requests` table
    - Add INSERT policy for anonymous users (public form submissions)
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact request"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND
    email IS NOT NULL AND
    message IS NOT NULL
  );
