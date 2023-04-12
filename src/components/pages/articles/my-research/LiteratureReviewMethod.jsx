import React from "react";
import Title from "../../../inc/Title";

function LiteratureReviewMethod() {
  return (
    <div className="container">
      <Title title="Literature Review for the Whole Person" />
      <h4>Is a meta-review meta enough?</h4>
      <h5>"A review is the highest form of evidence"</h5>
      <p>
        In my meta-reviews, I was quite dismayed by the evident lack of research
        shown in many articles. Particularly those with highly muted conclusions
        about the effects of ketosis demonstrated often showing none of their
        methodological work, which is still relevant even in theoretical and
        review articles, and these studies frequently made claims that were
        missing the preponderance of evidence known elsewhere, offering
        suspected mechanisms which might be regarded as severely out of date
        given the recency of the publication, or theoretically incommensurate
        with knowledge from other disciplines.
      </p>
      <p>
        This unfortunate state appears commonplace for hot-topic questions which
        have received a lot of research attention. One hypothesis is that this
        is a natural consequence of attentional primacy exceeding informational
        organization. Because research tends to be organized randomly,
        accessible in only a small number of formats and sorted by relatively
        benign factors, when a question becomes the center of a large amount of
        research, that research becomes increasingly proliferated, without
        corresponding increases in hierarchical sorting. Reviews and
        meta-reviews attempt to combat this, but their success is wildly
        variable, and has a relatively low maximum.
      </p>
      <p>
        Because of this strain, integrative science is almost unheard of. I
        define integrative science as literature which attempts mechanistic and
        logical review of experimental and theoretical data, respectively,
        together. Such a review includes relevant research by placing it not
        just within abstract and hypothetical "limitations," but uses specific,
        nameable factors in each study's methodology to pinpoint and assert
        testable hypotheses regarding differences in causal chains which led to
        differences in findings. This results in a concretized, causal analysis
        asserting differential support for some competing hypotheses above
        others, in a manner which naturally implies further research, not with
        an imprecise call for an infinite regress towards larger, more
        controlled, more expensive studies, but rather with a call for the next
        in a narrow sequence of hypothesis-testing discriminations. This kind of
        review is unbelievably resource intensive, is far less brief, and is
        very difficult to do comprehensively for a question that has received so
        much attention.
      </p>
      <p>
        When the mechanisms of theorizing are hidden, empiricism is forced to
        take up slack that it cannot fulfill, and the unrevealed biases in our
        theorizing generate calls for further empiricism in order to protect
        themselves from discovery, while the evidence, theoretical and
        empirical, may already be impressive for the primacy of one hypothesis,
        yet in a form which is the result of that theoretical
        neglect—incomprehensible because not comprehended. The downstream effect
        of this in health sciences is health recommendations which make people
        sicker than they need to be, because a complex field of practitioners
        cannot parse out the burgeoning novel direction as a stronger
        perspective than stasis in the <i>status quo</i>.
      </p>
      <p>
        We cross our fingers and hope that our review literature is effective,
        systematic, informed, and detailed, and that genuinely discriminatory
        hypothesis-testing experimental data is not lost between the cracks. We
        risk, however, outsourcing the scientific method so much that
        responsibility for it becomes diffused.
      </p>
      <h5>
        What types of reviews are we <i>actually</i> conducting?
      </h5>
      <h4>How can we organize research better?</h4>
      <h5>Hierarchy of Evidence</h5>
      <h5>A Higher Standard</h5>

      <h4 className="mt-5">References</h4>
      <ul style={{ listStyle: "none" }}>
        <li>
          Page, M. J., Sterne, J. A., Higgins, J. P., & Egger, M. (2021).
          Investigating and dealing with publication bias and other reporting
          biases in meta‐analyses of health research: A review. Research
          synthesis methods, 12(2), 248-259.
        </li>
      </ul>
    </div>
  );
}

export default LiteratureReviewMethod;
