import React from "react";
import Title from "../inc/Title";

function About() {
  return (
    <div className=" container-fluid bg-info" style={{ paddingBottom: "10%" }}>
      <div className="container">
        <Title title="Noah Steckley" className="text-light" />
        <h4 className="text-light">Past</h4>
        <p className="text-light">
          I graduated from University of Montana with a Bachelor's in
          Psychology, and a minor in Russian.
        </p>
        <p className="text-light">
          I am very interested in clinical psychology, especially efforts to
          unite the field both theoretically and practically. I believe the
          creation of a unified theory may be the key to radical impreovement in
          public mental health. I have read works by Sigmund Freud, Carl Jung,
          Carl Rogers, and Erich Neumann, and have been trying to integrate
          these models together with the models of evolution, neuroscience, and
          comparative religion, which offers the theories found in oral
          traditions amongst tribal peoples, and the theories in ancient
          religious texts, such as the biblical corpus or the Popol Vuh (the
          so-called "Mayan Bible").
        </p>
        <p className="text-light">
          I am also interested in linguistics, having studied many languages
          from Nahuatl to Mongolian. I am highly proficient in Russian and
          Spanish, and am grammatically and phonologically experienced with
          German, Polish, Swedish, and Mandarin.
        </p>
        <p className="text-light">
          I was advised to learn to program in order to bolster my applications
          to Clinical Psychology PhD programs. In two months, I learned enough
          to build a full-stack web application that uses Python and MySQL to
          provide dictionary-form coversion of Russian text. During this period,
          I also gained experience with the Google Sheets at my workplace, and
          subsequently have created about a dozen Google Sheets which perform
          various levels of data processing. One of these was used to feed a
          MATLAB script I had written to run statistical analyses on datasets I
          personally collected.
        </p>
        <h4 className="text-light">Present</h4>
        <p className="text-light">
          I am currently building up this website, in order to aggregate all my
          work into one place, and add a number of articles on psychology and
          physiology, including a number of datasets and experiments of my own
          doing.
        </p>
        <h4 className="text-light">Future</h4>
        <p className="text-light">
          My hope is to follow the thread of interest where it takes me, which
          currently leads to Clinical Psychology PhD programs, and programming,
          so that I can gain the experience and credentials necessary to make
          big moves for the field... Perhaps with bigger and better web apps :)
        </p>
      </div>
    </div>
  );
}

export default About;
