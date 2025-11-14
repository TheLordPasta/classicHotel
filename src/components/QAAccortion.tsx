import { useState } from "react";
import ArrowIcon from "../resources/images/arrowBlack.svg";
import "../styles/qaAccordion.css";

interface QAItem {
  question: string;
  answer: string;
}

interface QAAccordionProps {
  items: QAItem[];
}

const QAAccordion: React.FC<QAAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="qa-wrapper">
      {items.map((item: QAItem, index: number) => (
        <div className="qa-item" key={index}>
          <button className="qa-question" onClick={() => toggle(index)}>
            <span>{item.question}</span>
            <img
              src={ArrowIcon}
              className={`qa-icon ${openIndex === index ? "open" : ""}`}
              alt="toggle"
            />
          </button>

          <div
            className="qa-answer"
            style={{ maxHeight: openIndex === index ? "200px" : "0" }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QAAccordion;
