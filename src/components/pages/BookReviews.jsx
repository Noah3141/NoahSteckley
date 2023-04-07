import React from "react";
import Title from "../inc/Title";
import BookReviewCard from "../inc/BookReviewCard";
import Background from "../inc/Background";

function BookReviews() {
  return (
    <>
      <Background className="bg-success" />
      <div className="container pb-4">
        <Title title="Book Reviews" />
        <h4 className="mt-4">Clinical Psychology</h4>
        <BookReviewCard
          title="The discovery of the unconscious: The history and evolution of dynamic psychiatry (Vol. 1, pp. 280-281)"
          alt_title="The Discovery of the Unconscious: The History and Evolution of Dynamic Psychiatry"
          author="Ellenberger, H. F."
          year="1970"
          review="While I wouldn't say it's a good way to learn the theories themselves, it's an indispensible tome for understanding their underlying context. "
        />

        <BookReviewCard
          title="A clinical introduction to Freud"
          alt_title="A Clinical Introduction to Freud"
          author="Fink, B."
          year=""
          review=""
        />
        <BookReviewCard
          title="An outline of psycho-analysis"
          alt_title="An Outline of Psycho-analysis"
          author="Freud, S."
          year="1938"
          review=""
        />
        <BookReviewCard
          title="Dreams:(From Volumes 4, 8, 12, and 16 of the Collected Works of CG Jung)(New in Paper)"
          alt_title="Dreams"
          author="Jung, C. G."
          year="2010"
          publisher="Princeton University Press"
          review=""
        />
        <BookReviewCard
          title="Man and his symbols"
          alt_title="Man and His Symbols"
          author="Jung, C. G."
          year="1964"
          review=""
        />
        <BookReviewCard
          title="Two essays on analytical psychology"
          alt_title="Two Essays on Analytical Psychology"
          author="Jung, C. G."
          year="2014"
          review="Contains 'Relations between the Ego and the Unconscious' and "
        />
        <BookReviewCard
          title="Modern man in search of a soul"
          alt_title="Modern Man in Search of a Soul"
          author="Jung, C. G."
          year="1931"
          review=""
        />
        <BookReviewCard
          title="The interpretation of dreams. (A. A. Brill, Trans.)"
          alt_title="The Interpretation of Dreams"
          author="Freud, S."
          year="1899"
          review=""
        />
        <BookReviewCard
          title="The origins and history of consciousness"
          alt_title="The Origins and History of Consciousness"
          author="Neumann, E."
          year="1949"
          publisher="Princeton University Press"
          review=""
        />
        <BookReviewCard
          title="The undiscovered self: With symbols and the interpretation of dreams (Vol. 37)"
          alt_title="The Undiscovered Self: With Symbols and the Interpretation of Dreams (Vol. 37)"
          author="Jung, C. G."
          year="1961"
          review=""
        />
        <BookReviewCard
          title="On becoming a person: A therapist's view of psychotherapy"
          alt_title="On Becoming a Person: A Therapist's View of Psychotherapy"
          author="Rogers, C. R."
          year="1961"
          review=""
        />
        <BookReviewCard
          title="Group psychology and the analysis of the ego"
          alt_title="Group Psychology and the Analysis of the Ego"
          author="Freud, S."
          year="1989"
          review=""
        />
        <BookReviewCard
          title="Carl Rogers on encounter groups"
          alt_title="Carl Rogers on Encounter Groups"
          author="Rogers, C. R."
          year="1970"
          review=""
        />
        <BookReviewCard
          title="A way of being"
          alt_title="A Way of Being"
          author="Rogers, C. R."
          year="1995"
          review=""
        />
        <BookReviewCard
          title="Depth psychology and a new ethic"
          alt_title="Depth Psychology and a New Ethic"
          author="Neumann, E., & Rolfe, E."
          year="1969"
          review=""
        />
        <BookReviewCard
          title="Sex and fantasy: Patterns of male and female development"
          alt_title="Sex and Fantasy: Patterns of Male and Female Development"
          author="May, R."
          year="1980"
          review=""
        />
        <BookReviewCard
          title="Maps of meaning: The architecture of belief"
          alt_title="Maps of Meaning: The Architecture of Belief"
          author="Peterson, J. B."
          year="1999"
          review=""
        />
        <BookReviewCard
          title="12 rules for life: An antidote to chaos"
          alt_title="12 Rules for Life: An Antidote to Chaos"
          author="Peterson, J. B."
          year="2018"
          review=""
        />

        <h4 className="mt-4">Classics</h4>
        <BookReviewCard
          title="Faust I & II (Vol. 2)"
          alt_title="Faust"
          author="Goethe"
          year="1994"
          publisher="Princeton University Press"
          review=""
        />
        <BookReviewCard
          title="1984"
          alt_title="1984"
          author="Orwell, G."
          year="1948"
          citation=""
          review=""
        />
        <BookReviewCard
          title="Animal farm"
          alt_title="Animal Farm"
          author="Orwell, G."
          year="2021"
          publisher="Oxford University Press"
          review=""
        />
        <BookReviewCard
          title="Brave new world"
          alt_title="Brave New World"
          author="Huxley, A."
          year=""
          review=""
        />

        <h4 className="mt-4">History</h4>
        <BookReviewCard
          title="Ordinary men: Reserve police battalion 101 and the final solution in Poland"
          alt_title="Ordinary Men: Reserve Police Battalion 101 and the Final Solution in Poland"
          author="Browning, C."
          year="1992"
          citation=""
          review=""
        />
        <BookReviewCard
          title="The rape of nanking: The forgotten holocaust of world war II"
          alt_title="The Rape of Nanking: The Forgotten Holocaust of World War II"
          author="Chang, I."
          year="1997"
          review=""
        />
        <BookReviewCard
          title="The road to wigan pier"
          alt_title="The Road to Wigan Pier"
          author="Orwell, G."
          year="1937"
          review=""
        />
      </div>
    </>
  );
}

export default BookReviews;
