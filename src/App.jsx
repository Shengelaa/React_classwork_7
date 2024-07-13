import React, { useState } from "react";

const Array = () => {
  const answers = [
    "დარწმუნებული ვარ.",
    "დიახ.",
    "უდაოდ.",
    "შესაძლებელია.",
    "სავარაუდოდ კი.",
    "პასუხის გაცემა მიჭირს, ახლიდან მკითხე.",
    "სჯობს ახლა არ გითხრა.",
    "არა.",
    "არასდროს.",
    "ცუდი იდეაა.",
    "არ გარისკო!",
  ];
  const [randomName, setRandomName] = useState("");

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setRandomName(answers[randomIndex]);
  };

  return (
    <div>
      <input type='text' />
      <button onClick={generateRandomName}>Answer</button>
      {randomName && <h1> {randomName}</h1>}
    </div>
  );
};

export default Array;
