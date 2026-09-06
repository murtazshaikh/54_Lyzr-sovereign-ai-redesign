export interface Testimonial {
  quote: string;
  role: string;
  org: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We refuse to share our underwriting handbook with any shared infrastructure. Lyzr gave us the first credible answer, not a policy promise, an architectural one.",
    role: "Chief Information Officer",
    org: "Global Insurance Enterprise",
  },
  {
    quote:
      "Every quarter we watched our AI spend escalate with no ceiling. Owning our inference hardware was the only way to break that curve. Optimus is that answer.",
    role: "Chief Financial Officer",
    org: "Enterprise Financial Services",
  },
  {
    quote:
      "The conversation shifted from how do we use AI to how do we own the AI that runs our business. Lyzr is the only platform where that is actually possible end to end.",
    role: "Chief Digital Officer",
    org: "Global Technology Enterprise",
  },
];
