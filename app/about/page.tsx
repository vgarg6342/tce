
import AboutCoverSection from "@/component/AboutCoverSection";
import Skills from "@/component/Skills";
import Link from "next/link";
import InsightRoll from "@/component/InsightRoll";
import FeaturedBlog from "@/component/blog/featuredBlog";

const insights = [
    "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
    "20K+ Subscribers",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
    "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
    "20K+ Subscribers",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
     "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
    "20K+ Subscribers",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
  ];


export default function About() {
  return (
    <>
     <InsightRoll insights={insights} />
      <AboutCoverSection />
      <Skills />
      <FeaturedBlog />
    </>
  );
}