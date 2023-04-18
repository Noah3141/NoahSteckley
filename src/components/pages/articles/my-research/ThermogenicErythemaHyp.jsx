import Background from "../../../inc/Background";
import BurnTimeGraph from "../../../images/TimeToBurnGraph.png";
import BurnTimeGraph2 from "../../../images/TimeToBurnGraph2.png";
import { Link } from "react-router-dom";

function ThermogenicErythemaHyp() {
    return (
        <div className="container pb-4 text-light">
            <Background className="bg-dark" />

            <h3 className="text-danger">Preamble</h3>
            <p>To start out, let me provide some background research.</p>
            <div className=" mb-4">
                <iframe
                    width="100%"
                    height="600"
                    src="https://www.youtube.com/embed/B9SNfrE7P1s"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="border border-2 border-dark"
                ></iframe>

                <p>
                    In this video, Dr. Heaney presents a beautiful example of concilliatory
                    measurement: using multiple different types of measurement to triangulate a
                    construct (if it looks like a duck, that's only one sensory mode, but if it also{" "}
                    <i>sounds</i> like a duck, well...). We want to know the levels of vitamin D
                    that were probably the norm for our evolutionary history, because other systems
                    in our bodies are likely adaptively calibrated—axiomatically predicated—on those
                    levels. This means when we are deficient in a way our ancestors rarely were, we
                    predict that failsafes and low-cost compensations for this state are unlikely to
                    exist. And <i>that</i> means if your levels are outside of evolutionary ranges,
                    you may experience negative health conditions that are entirely caused by a
                    deviation from evolutionary patterns or "hypernovelty." (See{" "}
                    <i>A Hunter Gatherer's Guide to the 21st Century</i> in{" "}
                    <Link target="_blank" to="/book-reviews">
                        Book Reviews
                    </Link>
                    )
                </p>
                <p>
                    Among these, curiously enough, might be sunburn or "ultraviolet-induced
                    erythema." Skin tanning is clear to everyone, I believe: it's an evolutionary
                    mechanism provided by your body, as a means to adapt to higher levels of sun,
                    and keep you protected. That sentence alone makes recommendations to "limit sun
                    exposure" by staying inside, covering up, and using sunscreen a bit...
                    Contradictory.
                </p>
            </div>
            <div className=" mb-4">
                <iframe
                    width="100%"
                    height="600"
                    src="https://www.youtube.com/embed/8LFkWiNP1wQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="border border-2 border-dark"
                    allowfullscreen
                ></iframe>
                <p>
                    This video touches on many topics, including a detailed refutation of worries
                    about the possibility of vitamin D overdose.
                </p>
            </div>
            <div className=" mb-4">
                <iframe
                    width="100%"
                    height="600"
                    className="border border-2 border-dark"
                    src="https://www.youtube.com/embed/oAAlMYWtF_s"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>

            <h3 className="text-danger mt-4 mb-2">Experiment 1 (4/11/2023)</h3>
            <h4 className="text-success">
                Initial observations on data patterns and experimental procedures
            </h4>
            <p>
                A Google sheet was prepared with a hypothetically teneble set of data to collect at
                various points of time. Sun exposure started at the zenith, and was applied to two
                areas of skin. UV index, skin temperature, and ambient measures were taken at key
                timepoints. Skin temperature was allowed to raise unto 100°F, as measured by turkey
                thermometer. After staying at 101 for about a minute, one zone (intervention) was
                moved into the shade, while the other (control) was left exposed to the sun.
            </p>
            <p>
                Multiple things were learned about this paradigm and certain data tendencies.
                Ambient temperature varied within 2°F and does not need frequent sampling. Humidity
                did not vary and does not need frequent sampling. Temperature measuring devices
                varied greatly, with turkey thermometer appearing to be the most likely to be
                accurate, due to its local sampling, and quick refresh period, whereas app data
                (Google Weather or Dminder) and the humidity sensor are non-local, and
                slow-updating, respectively. UV index measures varied moderately, with Google
                Weather giving 8 while Dminder gave 10. Since UV index ratings are a linear scale,
                this difference is hypothetically the same as a 4 compared to a 6, which previous
                experience shows is powerful enough to determine burn. For the current series of
                experiments, however, absolute levels are not particularly relevant, so it's only
                important that one measurement be chosen between the two. On the assumption that
                Dminder is using slightly more accurate data (such as sun angle given latitude),
                Dminder will be used hereon out.
            </p>
            <p>
                The method of control shade was unable to be the same as intervention's shade, and
                so a solution was improvised, wherein the control area was covered with a bundle of
                dark cloth, which blocked the sun, leading to a heat trapping effect. This made
                measures of skin temp for the control area not fall as they normally would have.
            </p>
            <p>What do we know? </p>
            <p>
                Skin temperature raised approximately 9°F in 4 minutes following exposure to UV
                index of approximately 8, and fell back to a pre-sun exposure temperature in just 5
                minutes. This was much quicker than expected, causing the experimental paradigm to
                be less ergonomically teneble than ideal. Further experiments need fewer measures of
                stable data, and should use the current data to inform a more precise research
                question. Measures need to be limited in order to make teneble a longer experimental
                period capable of inducing differential sunburn.
            </p>
            <p>
                Photos show no evidence of sunburn nor tanning in either zone during a total
                exposure time for both of approximately 9 minutes.
            </p>
            <div>
                <iframe
                    title="Experiment 1 Datatable"
                    width="100%"
                    height="450"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS572mdivntGBCxBJZU7wJMMaFN0-XmP1MljWDPNEUpB4BX7--pp-QpavXHPQxORKho024lsakv0r1m/pubhtml?gid=1529021233&amp;single=true&amp;widget=true&amp;headers=false"
                ></iframe>
            </div>
            <h3 className=" text-danger mt-5 mb-2">Experiment 2 (4/18/2023)</h3>
            <h4 className="text-success">Approaching a more robust data collection paradigm</h4>
            <p>
                Based on observations in the previous experiment, UV index, ambient temperature,
                ambient humidity were all collected in the 5 minutes preceding sun exposure.
            </p>
            <p>
                In this experiment, a turkey thermometer was used to measure skin temperature during
                prolonged sun exposure. Whenever skin temperature reached 103°F, all skin was moved
                to covered with shade but the left leg, which was allowed to remain exposed. Care
                was taken that the right leg maintained equivilant position relative to the sun,
                since previous experience has shown that angle to the sun is a powerful contributing
                factor to sunburn. (Calibrating shade based on the temperature of an area less
                direct to the sun than another, all else being equal, can lead to sunburn in the
                more direct skin)
            </p>
            <p>
                Temperatures at various time point were collected in order to get preliminary
                understanding of the curve of skin temperature when switching from shade to sun.
                Skin starts around 92°F, warms quickly to 97°F in strong sun, and climbs slowly to
                103°F. At this point, switching to shade causes a fast drop to 97°F again, but skin
                does not continue to cool below this very quickly. Subsequent reexposre to sun
                brings skin back up to 100-102°F, and the rise beyond that occurs slowly, again.
                This points to three key points in the temperature scale: 92°F, 97°F, and 103°F,
                potentially corresponding to an underlying temperature shunting system at "idle",
                "active", and "failing", respectively.
            </p>
            <p>
                This trial further demonstrated that more accurate temperature measures would be
                helpful, as well as more precise time measurements, as all time measures are
                inevitably +-1 off, due to a lack of second marks. The turkey thermometer comes with
                obvious drawbacks, such as its 360° measurement, which requires twisting the
                thermometer repeatedly to get an accurate reading of a surface. In the future, a
                laser thermometer will be used, which lends itself better to the measurement of a
                surface at a distance, and quickly.
            </p>
            <div>
                <iframe
                    width="100%"
                    height="530"
                    seamless
                    style={{ overflow: "scroll" }}
                    title="Skin Temperature Across Sun Exposure vs Shade"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS572mdivntGBCxBJZU7wJMMaFN0-XmP1MljWDPNEUpB4BX7--pp-QpavXHPQxORKho024lsakv0r1m/pubchart?oid=993782227&amp;format=image"
                ></iframe>
            </div>
            <p>
                Measurements appeared to support the idea that bodypart is largely unimportant:
                either the leg, or the abdomen, or the arm, would all have this same curve, and all
                exhibit 103°F upon sustained unprepared sun exposure. Further experiments with more
                precise measurements are needed to confirm this.
            </p>
            <div>
                <iframe
                    title="Experiment 2 Datatable"
                    width="100%"
                    height="650"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS572mdivntGBCxBJZU7wJMMaFN0-XmP1MljWDPNEUpB4BX7--pp-QpavXHPQxORKho024lsakv0r1m/pubhtml?gid=1771881055&amp;single=true&amp;widget=true&amp;headers=false"
                ></iframe>
            </div>
            <p>
                Next experiment needs to use laser thermometer to measure skin temperature, and
                measure time more precisely.
            </p>
            <h4 className="text-success">A brief introduction to the conundrum</h4>
            <p>
                So, skin raises to 103°F during prolonged high UV sun exposure, and lowers back down
                to 97°F when put back into the shade. That's curious, because of the following
                chart:
            </p>
            <div className="row">
                <div className="col-6 p-2">
                    <img
                        width="100%"
                        height="auto"
                        src={BurnTimeGraph}
                        alt="Time until Burn Graph"
                    />{" "}
                    <span>
                        <Link to="http://www.ncwhomeinspections.com/node/193">
                            http://www.ncwhomeinspections.com/node/193
                        </Link>{" "}
                    </span>
                </div>
                <div className="col-6 p-2">
                    <img
                        width="100%"
                        height="auto"
                        src={BurnTimeGraph2}
                        alt="Time until Burn Graph 2"
                    />{" "}
                </div>
            </div>
            <p>
                Now, you can find many similar graphs online. First degree burns, however, show up a
                good deal less commonly in them. But notice this: the graphs don't represent the
                bottom threshold specifically. They fade out into arbitrarily large amounts of time.
                Generally, these charts aren't <i>for</i> learning about first degree burns, so they
                only touch lightly on the topic.
            </p>
            <p>
                I'll also note that they all vary a bit, and it's not clear what they mean by "pain
                threshold." The psychphysical threshold is obviously a gradient. I'll note, however,
                that 103°F marks a minor threshold, where the sensation changes from 'toasty' to the
                slight singe that makes hot showers enjoyable. This, however, suredly differs
                between individuals at least a degree or two, and I have no data on these
                differences. This entire discussion is limited to my psychophysical setpoints;
                however, that does not detract from the universality of the patterns, only implies
                that they are shifted across different individuals. Finally, while pain threshold is
                relevant, it's important to stick to the fact that pretty much any individual is
                able to refine their understanding of their sensation, and become adept at
                recognizing 103°F (or whatever temperature). Experienced bakers may know that if you
                put your finger in 100°F water a few times, you learn to tell what 100°F feels like,
                and avoid killing your yeast.
            </p>
            <p>
                So, the question is: What do these graphs look like at 100-105°F? If skin is
                reaching 104°F during sun exposure, does that not mean it will develop a heat-based
                first degree burn in somewhere over 30 minutes? It has long been assumed that
                sunburn <i>is</i> a "radiation burn,"" and therefore must come along with the
                concomitant radiation effects, but this data suggests that the sun exposure is
                leading to a normal "heat burn."
            </p>
            <p>
                The implications of this hypothesis are many. First, we'll list the testable
                predictions of the hypothesis, then we'll lay out the downstream implications for
                action and valuation.
            </p>
            <h4 className="text-danger">If sunburns are just heat burns, not radiation burns:</h4>
            <h5 className="text-success"> Predictions</h5>
            <ul>
                <li>
                    We should be able to induce a sunburn-like condition through the application of
                    something other than sun, at 104°F for some amount of time longer than 30-60
                    minutes. (Skin health recommendations often default to "30 minutes")
                </li>
                <li>
                    Sunburn should not occur from sun exposure on skin that has not passed ~103°F in
                    that amount of time.
                </li>
                <li>Artificially cooling the skin during sun exposure should prevent sunburn.</li>
            </ul>
            <h5 className="text-success"> Implications</h5>
            <ul>
                <li>
                    <p>
                        Let's look into the research supporting "DNA damage from the sun" and see
                        what the evidence might say in light of this information. The prediction is
                        that their data will demonstrate the effects of <i>burns</i> on an area of
                        skin (which spends up a finite healing ability tied to telomere length).
                        Their data will demonstrate that <i>lifetime</i> skin exposure to the sun
                        has damaging effects (it is still radiation after all), but not show that
                        acute, large amounts of sunburn cause anything special regarding radiation
                        exposure.
                    </p>
                    <p>
                        We would predict this because there is no such thing as "acute intense sun
                        exposure." <i>Homo sapiens</i> is adapted to an enviornment with a sun.
                        Exposure to that sun is the <i>baseline</i>; lifetime exposure to the sun is
                        the standard. What is not standard is sudden, large increases in exposure to
                        the sun, wherein skin has not had the time to adjust its tanness. At this
                        point we would predict <i>either</i>: (1) Untanned skin lacks radiation
                        protection, and thus burns, or (2) untanned skin lacks something than causes
                        it to get hotter in the sun, leading to the possibility of first degree heat
                        burns.
                    </p>
                    <p>
                        Now, there are many factors hidden in this presentation. The radiation
                        thread of effects can co-exist with a separate thread of heat effects, and
                        their correlation may be complex, having tight correspondance in some areas,
                        while falling completely out of sync in others. A mechanistic picture of
                        both is necessary to sort out that dynamic.
                    </p>
                </li>
            </ul>

            <h3>Angle to Sun Diagram</h3>
            <h2 className="mt-4">Background</h2>
            <p>
                This design is intended to show that the model of temperature tracking is sufficient
                to prevent sunburn (although it may be more strict than what is necessary). This may
                be because skin temperature is a proxy for UV radiation exposure, or because skin
                temperature is a necessary ingredient in the etiology of sunburn.
            </p>
            <p>
                Experiments were only conducted on cloudless days, to avoid any interrupting
                involuntary shade. More on this later.
            </p>
            <p>
                If sunburns are just heat burns, if DNA damage and otherwise is not the product of
                radiation exposure from the sun but rather heat burns, and tan skin doesn't get as
                hot, that implies that the recommendations to stay out of the sun because it is an
                evil death ray are causing harm in more ways than vitamin D deficiency. It means
                that the primary recommendation is the opposite, to get as much sun as you can, as
                frequently as possible (which resolves the vitamin D deficiency problem caused by
                the alternative interpretation), so that your skin stays up-to-date in shade,
                preventing you from ever getting the damaging burns that can cause so many health
                problems. And wouldn't this, that you <i>should</i> be in the sun (like your
                ancestors constantly doing and were adapting to), make much more sense with
                evolutionary theory?
            </p>
            <p>
                That's less skin cancer, less vitamin D deficiency, and more theoretical integrity.
                That sounds like a good deal to me.
            </p>
        </div>
    );
}

export default ThermogenicErythemaHyp;
