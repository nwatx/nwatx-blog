import React from "react";
import NavBarLayout from "../layouts/NavBarLayout";

export default function aboutme() {
  return (
    <NavBarLayout>
      <div className="flex w-full max-w-7xl px-3 justify-center">
        <div className="flex w-full">
          <p>
            Hello. I'm Neo. My routine goes something like wake up, sleep,
            repeat. But intermittently, I'll make things like robots, websites,
            blogs (like this one), and games. I also enjoy learning about
            algorithms and design patterns. I will update this later. If you want to contact me, you can reach me through my email: neowangatx@gmail.com
          </p>
        </div>
      </div>
    </NavBarLayout>
  );
}
