import Title from "../../inc/Title";
import { useState } from "react";
import { Link } from "react-router-dom";

function RussSentencer() {
  const [sentence, setSentence] = useState(null);
  const [trans, setTrans] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inputField = event.target.querySelector("input[type='text']");
    const inputValue = inputField.value;

    const secret = process.env.REACT_APP_CHATGPT_API_KEY;
    const { Configuration, OpenAIApi } = require("openai");
    const config = new Configuration({ apiKey: secret });
    const openai = new OpenAIApi(config);

    function GPT3(userPrompt) {
      const response = openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userPrompt }],
        temperature: 1.3,
        max_tokens: 100,
      });

      response.then((res) => {
        console.log(res);
        console.log(res.data.choices[0].message.content);

        const outputLine = res.data.choices[0].message.content;
        {
          /* This is written in a very volatile manner. Any change in ChatGPT's whim-like habits will completely break the gadget. Currently requires that it continue to end responses with English in parentheses (which the prompt does not explicitly ask)*/
        }
        const russOutput = outputLine.split(" (")[0];
        const engOutput = outputLine
          .split(" (")[1]
          .replace("(", "")
          .replace(")", "");

        console.log(engOutput);
        setSentence(russOutput);
        let engTrans = document.getElementById("engTrans");
        if (engTrans.classList.contains("text-success")) {
          engTrans.classList.remove("text-success");
          engTrans.classList.add("text-info");
        }
        setTrans(engOutput);
      });
    }

    GPT3(
      `Write me an example Russian sentence that uses the word ${inputValue}, followed by the English translation in parentheses.`
    );
  };

  function switchShow() {
    let engTrans = document.getElementById("engTrans");
    if (engTrans === null) {
      console.log("Couldn't find English Translation!");
    }

    if (engTrans.classList.contains("text-info")) {
      engTrans.classList.remove("text-info");
      engTrans.classList.add("text-success");
    } else {
      engTrans.classList.remove("text-success");
      engTrans.classList.add("text-info");
    }
  }

  return (
    <div className="container">
      <Title title="Russian Example Sentence Generator" />

      {/* Alert pop up about Russian Lister */}
      <div
        className="alert alert-warning alert-dismissible fade show mt-4"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-info-circle me-2"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        This tool pairs nicely with my{" "}
        <Link
          className="alert-link"
          target="_blank"
          to="http://RussianVocabularyListMaker.com/rubit"
        >
          <u>Russian Vocabulary Lists</u>
        </Link>{" "}
        site, which has complete lists of Russian verbs, and allows you to
        generate vocabulary lists from study material!
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      {/* Gadget Card */}
      <div className="card bg-info border border-dark border-3 shadow p-4 mt-4">
        <form
          className="card-header"
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: "1rem" }}
        >
          <input type="text" maxlength="25"></input>
          <button className="btn btn-primary btn-sm" type="submit">
            Generate
          </button>
        </form>
        <div id="engTrans" className="card-body  text-info">
          {sentence && <h3 className="text-primary my-3">{sentence}</h3>}
          {trans && (
            <>
              <h3 className="p-1">
                <span>{trans}</span>
              </h3>
              <button onClick={switchShow} className="btn btn-success">
                Toggle English
              </button>
            </>
          )}
        </div>
        <br />
        <p className="text-light card-footer pb-1 mb-0">
          The outline contains the English translation.
          <br /> Keep in mind, this version of ChatGPT is not terribly good at
          Russian grammar. While it provides good example sentences, they tend
          to contain grammatical errors in case, gender, number etc.!
        </p>
      </div>
    </div>
  );
}

export default RussSentencer;
