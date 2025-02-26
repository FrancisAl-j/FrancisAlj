import React, { useCallback, useEffect, useState } from "react";
import "./skill.css";
import { position_data } from "../../assets/Data";

const Skills = () => {
  const [skills] = useState(position_data);
  const [cur, setCur] = useState(0);

  const len = skills.length;

  const next = useCallback(() => {
    setCur(cur + 1 > len - 1 ? 0 : cur + 1);
  }, [cur, len]);

  useEffect(() => {
    const interval = setTimeout(() => {
      next();
    }, 3000);

    return () => clearTimeout(interval);
  }, [next]);

  return <p className="skills glow">{skills[cur]}</p>;
};

export default Skills;
