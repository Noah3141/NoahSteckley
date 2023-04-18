import Background from "../../../inc/Background";

function ThermogenicErythemaHyp() {
    return (
        <div className="container pb-4">
            <Background className="bg-primary-subtle" />
            <h3 className="mt-4 mb-2">Experiment 1 (4/11/2023)</h3>
            <h4>Initial observations on data patterns and experimental procedures</h4>
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

            <h3 className="mt-5 mb-2">Experiment 2 (4/18/2023)</h3>
            <h4>Approaching a more robust data collection paradigm</h4>
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
                    frameborder="0"
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

            <h2>Background</h2>
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
        </div>
    );
}

export default ThermogenicErythemaHyp;
