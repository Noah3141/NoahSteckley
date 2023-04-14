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
        <h4 className="my-4">Clinical Psychology</h4>
        <BookReviewCard
          title="The discovery of the unconscious: The history and evolution of dynamic psychiatry"
          alt_title="The Discovery of the Unconscious: The History and Evolution of Dynamic Psychiatry"
          author="Ellenberger, H. F."
          year="1970"
          review="While I wouldn't say it's a good way to learn the theories themselves, it's an indispensible tome for understanding their underlying context. Ellenberger presents depth psychology in its most classic sense. Beginning the chronological narrative with a foray into ancient traditions and shamanism, he ties together distant historical threads into a sharp image of the development of depth psychological perspectives. He provides a refreshingly sober summary and analysis of the life-story of Freud, Adler, and Jung, touching on hundreds of works and authors along the way. His book is a prime example of how `context` can be as valuable as the `content` itself."
        />
        <BookReviewCard
          title="The origins and history of consciousness"
          alt_title="The Origins and History of Consciousness"
          author="Neumann, E."
          year="1949"
          publisher="Princeton University Press"
          review="A monumental corpus of Analytical Psychology. Following the metaphor that `[psychological] ontogeny is a modified recapitulation of phylogeny,` through disorienting stretches of historical, religious and symbolic analysis, Neumann paints a total developmental picture, milestoned with stunning blocks of abstract delineations of robust psychological patterns, which tie together Jung's model `in the way he wished he had managed.` A strong knowledge of Analytical Psychology and of history are necessary to follow critically, and much of the book is, for most people, `inaccessibly Jungian` in its terminology, but if one is willing to translate Jungianism into modern, atheoretical psychological terminology, it contains many singular paragraphs of unmatched summation of the dynamics of the psyche. "
        />
        <BookReviewCard
          title="Maps of meaning: The architecture of belief"
          alt_title="Maps of Meaning: The Architecture of Belief"
          author="Peterson, J. B."
          year="1999"
          review="There is no better way of understanding Jungian psychology, or perhaps clinical psychology itself, than to understand this book. I have never seen any other paragraph written in the manner this entire book is written: double embedded parentheticals, frequent em-dash interjections, and the most painstakingly, relentlessly, hearteningly precise phrasing at all times. It is not an easy book. It is neither easy to understand, nor pleasant at all times when you've done so. A first portion of the book details the neurophysiology underlying his model, it then transitions into further expanding upon the model and revealing it within historical religious perspectives, and finally shades into philosophical, psychological takeaways of the model, and its implication for personal and societal ethics, religion, psychological development, and existence as a species. The author said it took him 15 years to write, and another 15 just to figure out how to explain it – which is both evident and justifiable to anyone who has read it. Within a few years of `figuring out how to explain it,` he exploded into global fame. As a model, Maps of Meaning trumps any of the classic pillars of clinical theory alone, and as a unificationist model it incorporates evolutionary theory, neuroscience, humanism and thorough existentialism, depth psychological theory across the board, and buttresses and develops beyond the funamental cognitive-behavioral approaches we see researched today. Bursting at the seams with citations in neuroscience, philosophy, psychology, religion, and classical literature in its over 500 pages of small print, large page writing—interspersed with a progressively complexifying and refining visual schematic model of the psyche—this book ought to have sparked a new generation of psychotherapy, and perhaps it has done so – just, outside the therapy office."
        />

        <BookReviewCard
          title="A clinical introduction to Freud"
          alt_title="A Clinical Introduction to Freud"
          author="Fink, B."
          year=""
          review="Many presentations of Freud's ideas look and sound so unlike what Freud actually wrote that it can be quite confusing where they got that understanding of him from. This book is not like that. It is evident from the outset that Fink has collected a heavy-weight summary of Freudian ideas, emphasizing, for instance, `tracing the story of a symptom to its origins` as a primary dictum of Freudian analysis, not misbegotten (whether Freud's fault or not) interpretations of the Oedipus Complex. Freud, despite his genius and insight, is not easy to read. His ideas are provocative, and his presentation squirrely and inconsistent (beyond what should be expected of a lifelong thinker). Fink's presentation effectively clears away the deciduous aspects of Freud's presentation of his ideas, and offers an impressive synopsis of Freud's most useful ideas, as much as his most presumptively misled."
        />
        <BookReviewCard
          title="On becoming a person: A therapist's view of psychotherapy"
          alt_title="On Becoming a Person: A Therapist's View of Psychotherapy"
          author="Rogers, C. R."
          year="1961"
          review="The first word that comes to mind with Rogers' writing is `refreshing.` Any of Rogers' books are freeing, humanizing, deep, and highly informative on emotional expression and meek, clear, helpful perception of oneself and others. Neither Rogers' model nor his writing is overly complex, and throughout is accessible. However, what Rogers' attempts in his writing is no simple task. He attempts a deceptively difficult abstractive feat: to boil a humanistic person-centered therapy approach into just three basic concepts. Obviously, this is something he worked on for a long time, but it appears that his formulation was founded on an imperfect parsing of concepts, which led to a misleading presentation of his third principle `acceptance.` Psychoanalytically, we can deduce this from the fact that his verbal descriptions of the principle buckle down into metaphor far more than for the other two principles, indicating difficulty to nail the concept down to something concrete. I suspect the problem is that, в конце концов (`in the end of ends`), the third principle is, as he has said at times, really more of a humanist philosophy distillation or catchall, than a bare, unitary attitude like the other two. As a result, one's humanist philosophy, and the process they use to distill that philosophy, produces varience in the interpretation, emphasis, and boundaries of the third concept. Despite this, I feel confident that this book, and many of his others, serves as an excellent introduction to clinical psychology theory and practice, is accessible to all interested audiences, and benefits the lay reader quickly and deeply. As a result, either this book or his very similar other, A Way of Being, is my go-to first book recommendation."
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
          title="The undiscovered self: With symbols and the interpretation of dreams (Vol. 37)"
          alt_title="The Undiscovered Self: With Symbols and the Interpretation of Dreams (Vol. 37)"
          author="Jung, C. G."
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
          title="12 rules for life: An antidote to chaos"
          alt_title="12 Rules for Life: An Antidote to Chaos"
          author="Peterson, J. B."
          year="2018"
          review=""
        />

        <h4 className="my-4">Classics</h4>
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
        <BookReviewCard
          title="Пикник на обочине"
          alt_title="Пикник на обочине"
          author="Аркадий и Борис Стругацкие"
          year="1972"
          review=""
        />

        <h4 className="my-4">History & Atrocity</h4>
        <BookReviewCard
          title="Ordinary men: Reserve police battalion 101 and the final solution in Poland"
          alt_title="Ordinary Men: Reserve Police Battalion 101 and the Final Solution in Poland"
          author="Browning, C."
          year="1992"
          citation=""
          review="I recommend this book to understand the details of what leads a person to becoming a Nazi executioner. One thing worth knowing is that the soldiers were given the choice to opt out of the early directives to execute certain portions of a captured city. Few did, out of shame for the idea of `leaving their compatriots to have to do the dirty work.` Camaraderie. Dutifulness. Civic concern. Not hatred, at least not at first. Hatred became useful to shield themselves from the affective alarms to their own actions, but at first they were deeply remorseful—horrified—but trying not to `shirk their responsibility.` It turns out it's actually not that easy to execute someone in cold blood—you have to practice and learn how to do it right. What does this teach us about the character necessary to prevent such atrocities? Perhaps that character has less a flavor of kindness and selflessness, and more of brutalistic, personal honesty, at odds with `the community.`"
        />
        <BookReviewCard
          title="The rape of nanking: The forgotten holocaust of world war II"
          alt_title="The Rape of Nanking: The Forgotten Holocaust of World War II"
          author="Chang, I."
          year="1997"
          review="This book is recommended as a right of passage. Its contents are horrifying enough to make one nauseous."
        />
        <BookReviewCard
          title="Panzram: A journal of murder"
          alt_title="Panzram: A Journal of Murder"
          author="Gaddis, T. E."
          year="2002"
          review="An autobiographical daily journal written by a serial rapist, murderer, arsonist etc. As a psychological education, few pieces of writing could possibly be better for grounding an existentialist theory. Evil lies in bed with resentment. The stronger the resentment, the more the personality is pulled towards identification with Satan, rather than some hypothetical good. This is not a metaphor. If you read the writings of mass murderers, they are frequently highly religious. They just feel that they ought to be on the side of Evil. Panzram's personality was possessed of a spirit (a psychophysiological organizing principality, a subpersonality), so to speak, a spirit which comes with its own feelings, actions, and explicit philosophy, which advocated such ideas as `Humans are fundamentally evil, even me; it would be better if no one [survived from me]` or describing his travels, `I've been all over the world and seen it all, and I don't like what I've seen of it` or his first murder `I pointed the gun at him right between the horns and pulled the trigger.` or describing his, by this point, well-established identity as `190 pounds of rotten hell-wrought steel imbued with all manner of satanic meanness possible.` Panzram felt he had `the good beaten out of him` in his repeatedly sexually-abused childhood, and those beatings came from a variety of sources, from parents, to authority figures, to strangers. There is much to learn from this book about what it means to be a good person, given that the roots of such `spiritual` warping are present in all of us. One thing to point out is that, although he was deeply untrusting, he reported having glimpses (as if yearning to have a revelation of his opposite) where someone's earnest, kind treatment, would bend him a bit, even just months before his execution. The severity of his `condition`, unfortunately, led any slight breach in that budding relation to result in total dismissal of the person, the relationship, and any hope in good that had been gestating within it. He placed himself as judge of Being, and tortured and killed in the name of `Justice.`"
        />
        <BookReviewCard
          title="The road to wigan pier"
          alt_title="The Road to Wigan Pier"
          author="Orwell, G."
          year="1937"
          review="A great insight into the day to day life of people living in an industrializing nation, the contrast between that life and today. It ends with an essay on what some takeaways might be about that poverty, and how the political movements of the time should react."
        />
      </div>
    </>
  );
}

export default BookReviews;
