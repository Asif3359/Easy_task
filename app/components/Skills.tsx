import React from "react";

const skills = [
  { label: "UI/UX Design", value: 95 },
  { label: "Photography", value: 90 },
  { label: "Creativity", value: 80 },
  { label: "Team Work", value: 95 },
  { label: "Web Design", value: 95 },
];

function Skills() {
  return (
    <section className="mt-12 px-3 md:px-8 sm:mt-16 md:ml-18">
      <section className="w-full lg:w-3/4 lg:ml-auto">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="space-y-5 text-sm">
          {skills.map((skill) => (
            <div key={skill.label}>
              <div className="flex justify-between mb-1">
                <span>{skill.label}</span>
                <span className="text-gray-300">{skill.value}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#262827] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)]"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Skills;
