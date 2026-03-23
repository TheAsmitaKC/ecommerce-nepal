import Image from "next/image";
import CustomerFeedback from "@/components/CustomerFeedback";
import Section from "@/components/Section";
import profile1 from "@/components/images/profil1.png";
import profile2 from "@/components/images/profile2.png";
import profile3 from "@/components/images/profile3.png";

const feedbacks = [
  { image: profile1, name: "Robert Fox" },
  { image: profile2, name: "Dianne Russell" },
  { image: profile3, name: "Eleanor Pena" },
];

const feedbackDesc =
  "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget";

function Testinomials() {
  return (
    <Section
      label="Testimonials"
      title="What Our Customer Says"
      bgColor="bg-[#f2f2f2]"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((feedback) => (
          <CustomerFeedback
            key={feedback.name}
            desc={feedbackDesc}
            profileimg={<Image src={feedback.image} alt="profile" />}
            name={feedback.name}
          />
        ))}
      </div>
    </Section>
  );
}

export default Testinomials;
