import React from "react";
import CustomerFeedback from "../CustomerFeedback";
import Image from "next/image";
import profile1 from "@/components/images/profil1.png";
import profile2 from "@/components/images/profile2.png";
import profile3 from "@/components/images/profile3.png";

const Testinomials = () => {
  return (
    <div className="section_spacing bg-[#f2f2f2]">
      <div className="flex flex-col gap-9 justify-center items-center wrapper">
        {/* text area */}
        <div>
          <p className="text-[16px] text-[#00B207] uppercase text-center">
            Testimonals
          </p>
          <h1 className="text-center">What Our Customer Says</h1>
        </div>

        {/* content area */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CustomerFeedback
            desc="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
            profileimg={<Image src={profile1} alt="profile" />}
            name="Robert Fox"
          />
          <CustomerFeedback
            desc="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
            profileimg={<Image src={profile2} alt="profile" />}
            name="Dianne Russell"
          />
          <CustomerFeedback
            desc="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
            profileimg={<Image src={profile3} alt="profile" />}
            name="Eleanor Pena"
          />
        </div>
      </div>
    </div>
  );
};

export default Testinomials;
