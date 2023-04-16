import Experiment_01 from "../../../images/Sunburn_Exp_01.png";
import Background from "../../../inc/Background";

function ThermogenicErythemaHyp() {
  return (
    <div className="container pb-4">
      <Background className="bg-primary-subtle" />
      <h3 className="mt-4 mb-2">Experiment 1 (4/11/2023)</h3>
      <h4>Initial observations on data patterns and experimental procedures</h4>
      <p>
        A Google sheet was prepared with a hypothetically teneble set of data to
        collect at various points of time. Sun exposure started at the zenith,
        and was applied to two areas of skin. UV index, skin temperature, and
        ambient measures were taken at key timepoints. Skin temperature was
        allowed to raise unto 100°F, as measured by turkey thermometer. After
        staying at 101 for about a minute, one zone (intervention) was moved
        into the shade, while the other (control) was left exposed to the sun.
      </p>
      <p>
        Multiple things were learned about this paradigm and certain data
        tendencies. Ambient temperature varied within 2°F and does not need
        frequent sampling. Humidity did not vary and does not need frequent
        sampling. Temperature measuring devices varied greatly, with turkey
        thermometer appearing to be the most likely to be accurate, due to its
        local sampling, and quick refresh period, whereas app data (Google
        Weather or Dminder) and the humidity sensor are non-local, and
        slow-updating, respectively. UV index measures varied moderately, with
        Google Weather giving 8 while Dminder gave 10. Since UV index ratings
        are a linear scale, this difference is hypothetically the same as a 4
        compared to a 6, which previous experience shows is powerful enough to
        determine burn. For the current series of experiments, however, absolute
        levels are not particularly relevant, so it's only important that one
        measurement be chosen between the two. On the assumption that Dminder is
        using slightly more accurate data (such as sun angle given latitude),
        Dminder will be used hereon out.
      </p>
      <p>
        The method of control shade was unable to be the same as intervention's
        shade, and so a solution was improvised, wherein the control area was
        covered with a bundle of dark cloth, which blocked the sun, leading to a
        heat trapping effect. This made measures of skin temp for the control
        area not fall as they normally would have.
      </p>
      <p>What do we know? </p>
      <p>
        Skin temperature raised approximately 9°F in 4 minutes following
        exposure to UV index of approximately 8, and fell back to a pre-sun
        exposure temperature in just 5 minutes. This was much quicker than
        expected, causing the experimental paradigm to be less ergonomically
        teneble than ideal. Further experiments need fewer measures of stable
        data, and should use the current data to inform a more precise research
        question. Measures need to be limited in order to make teneble a longer
        experimental period capable of inducing differential sunburn.
      </p>
      <p>
        Photos show no evidence of sunburn nor tanning in either zone during a
        total exposure time for both of approximately 9 minutes.
      </p>

      <img width="100%" src={Experiment_01} alt="Table for experiment 1" />

      <h3 className="mt-5 mb-2">Experiment 2 (4/ /2023)</h3>
      <p>
        Based on observations in the previous experiment, UV index, ambient
        temperature, ambient humidity were all collected in the 5 minutes
        preceding sun exposure.
      </p>
      <p>
        In this experiment, a turkey thermometer was used to measure skin
        temperature during prolonged sun exposure. Whenever skin temperature
        reached 102°F, all right side skin was moved to covered with shade, and
        left side was allowed to remain exposed. Care was taken that
        corresponding body parts maintained equivilant position relative to the
        sun, since previous experience has shown that angle to the sun is a
        powerful contributing factor to sunburn. (Calibrating shade based on the
        temperature of an area less direct to the sun than another, all else
        being equal, can lead to sunburn in the more direct skin)
      </p>
      <p>
        This design is intended to show that the model of temperature tracking
        is sufficient to prevent sunburn (although it may be more strict than
        what is necessary). This may be because skin temperature is a proxy for
        UV radiation exposure, or because skin temperature is a necessary
        ingredient in the etiology of sunburn.
      </p>

      <p>
        Experiments were only conducted on cloudless days, to avoid any
        interrupting involuntary shade. More on this later.
      </p>
    </div>
  );
}

export default ThermogenicErythemaHyp;
