import { useState, useRef } from "react";
import ArrowIcon from "../resources/images/arrowBlack.svg";
import "../styles/qaAccordion.css";

type SectionItem = {
  title: string;
  items?: string[];
  paragraph?: string;
};

type Props = {
  sections: SectionItem[];
};

const SectionAccordion: React.FC<Props> = ({ sections }) => {
  const [openStates, setOpenStates] = useState<boolean[]>(() =>
    sections.map(() => false)
  );

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="qa-wrapper">
      {sections.map((section, index) => {
        const isOpen = openStates[index];

        return (
          <div className="qa-item" key={index}>
            <button
              className="qa-question"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{section.title}</span>

              <img
                src={ArrowIcon}
                className={`qa-icon ${isOpen ? "open" : ""}`}
                alt="toggle"
              />
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="qa-answer"
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
              }}
            >
              {section.items && (
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.paragraph && <p>{section.paragraph}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionAccordion;
