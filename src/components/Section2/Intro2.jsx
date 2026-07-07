import React from "react";

const Intro2 = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-2/3 p-10">
            <h1 className="text-4xl font-medium text-center">
                LET ME <span className="text-blue-900">INTRODUCE</span> MYSELF
            </h1>

            <div className="mt-8 space-y-6 text-2xl opacity-80">
                <p>
                    I'm an aspiring Software Engineer and Electronics Engineering
                    student passionate about building modern web applications and
                    learning new technologies.
                </p>

                <p>
                    I enjoy working with{" "}
                    <span className="font-bold text-blue-900">
                    React.js, Node.js, Express.js, MongoDB, and C++
                    </span>{" "}
                    and I'm constantly improving my skills through hands-on projects.
                </p>

                <p>
                    My goal is to create impactful digital solutions while growing as a
                    full-stack developer.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Intro2;
