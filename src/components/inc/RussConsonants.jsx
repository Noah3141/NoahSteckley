import React from "react";
import { Link } from "react-router-dom";

function RussConsonants() {
  return (
    <table
      className="wikitable table-sm border border-info border-4 table-dark table-bordered table"
      style={{ textAlign: "center" }}
    >
      <caption className="bg-dark border border-4 border-top-0 border-info ps-2">
        <i>
          <Link
            target="_blank"
            to="https://en.wikipedia.org/wiki/Russian_phonology"
          >
            Wikipedia Source
          </Link>
        </i>
      </caption>
      <tbody>
        <tr>
          <th rowspan="2" colspan="2"></th>
          <th colspan="2" className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Labial_consonant"
              title="Labial consonant"
            >
              Labial
            </Link>
          </th>
          <th colspan="2" className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Dental_consonant"
              title="Dental consonant"
            >
              Dental
            </Link>
            <br />
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Alveolar_consonant"
              title="Alveolar consonant"
            >
              Alveolar
            </Link>
          </th>
          <th className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Postalveolar_consonant"
              title="Postalveolar consonant"
            >
              Post-
              <br />
              alveolar
            </Link>
          </th>
          <th>
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Palatal_consonant"
              title="Palatal consonant"
            >
              Palatal
            </Link>
          </th>
          <th colspan="2" className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Velar_consonant"
              title="Velar consonant"
            >
              Velar
            </Link>
          </th>
        </tr>
        <tr style={{ fontSize: "small" }}>
          <th className="border border-2 border-info">
            <span style={{ fontSize: "85%" }}>hard</span>
          </th>
          <th className="border border-2 border-info">
            <span style={{ fontSize: "85%" }}>soft</span>
          </th>
          <th className="border border-2 border-info">
            <span style={{ fontSize: "85%" }}>hard</span>
          </th>
          <th className="border border-2 border-info">
            <span style={{ fontSize: "85%" }}>soft</span>
          </th>
          <th className="border border-2 border-info">
            <span style={{ fontSize: "85%" }}>hard</span>
          </th>
          <th className="border border-2 border-info">
            <span style={{ fontSize: "85%" }}>soft</span>
          </th>
          <th className="border border-2 border-info">
            <span style={{ fontSize: "85%" }}>hard</span>
          </th>
          <th className="border border-2 border-info">
            <span style={{ fontSize: "85%" }}>soft</span>
          </th>
        </tr>
        <tr>
          <th colspan="2" className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Nasal_consonant"
              title="Nasal consonant"
            >
              Nasal
            </Link>
          </th>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_bilabial_nasal"
                title="Voiced bilabial nasal"
              >
                m
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              mʲ
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_dental_nasal"
                className="mw-redirect"
                title="Voiced dental nasal"
              >
                n
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              nʲ
            </span>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th rowspan="2" className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Stop_consonant"
              className="mw-redirect"
              title="Stop consonant"
            >
              Stop
            </Link>
          </th>
          <th className="border border-2 border-info">
            <small>voiceless</small>
          </th>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_bilabial_plosive"
                title="Voiceless bilabial plosive"
              >
                p
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              pʲ
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_dental_plosive"
                className="mw-redirect"
                title="Voiceless dental plosive"
              >
                t
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              tʲ
            </span>
          </td>
          <td></td>
          <td></td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_velar_plosive"
                title="Voiceless velar plosive"
              >
                k
              </Link>
            </span>
          </td>
          <td>
            (
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              kʲ
            </span>
            )
          </td>
        </tr>
        <tr>
          <th className="border border-2 border-info">
            <small>voiced</small>
          </th>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_bilabial_plosive"
                title="Voiced bilabial plosive"
              >
                b
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              bʲ
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_dental_plosive"
                className="mw-redirect"
                title="Voiced dental plosive"
              >
                d
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              dʲ
            </span>
          </td>
          <td></td>
          <td></td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_velar_plosive"
                title="Voiced velar plosive"
              >
                ɡ
              </Link>
            </span>
          </td>
          <td>
            (
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              ɡʲ
            </span>
            )
          </td>
        </tr>
        <tr>
          <th colspan="2" className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Affricate_consonant"
              className="mw-redirect"
              title="Affricate consonant"
            >
              Affricate
            </Link>
          </th>
          <td></td>
          <td></td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_dental_affricate"
                className="mw-redirect"
                title="Voiceless dental affricate"
              >
                t͡s
              </Link>
            </span>
          </td>
          <td>
            (
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              t͡sʲ
            </span>
            )
          </td>
          <td></td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_alveolo-palatal_affricate"
                title="Voiceless alveolo-palatal affricate"
              >
                t͡ɕ
              </Link>
            </span>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th rowspan="2" className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Fricative_consonant"
              className="mw-redirect"
              title="Fricative consonant"
            >
              Fricative
            </Link>
          </th>
          <th className="border border-2 border-info">
            <small>voiceless</small>
          </th>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_labiodental_fricative"
                title="Voiceless labiodental fricative"
              >
                f
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              fʲ
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_dental_sibilant_fricative"
                className="mw-redirect"
                title="Voiceless dental sibilant fricative"
              >
                s
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              sʲ
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_retroflex_fricative"
                title="Voiceless retroflex fricative"
              >
                ʂ
              </Link>
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_alveolo-palatal_fricative"
                title="Voiceless alveolo-palatal fricative"
              >
                ɕː
              </Link>
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiceless_velar_fricative"
                title="Voiceless velar fricative"
              >
                x
              </Link>
            </span>
          </td>
          <td>
            (
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              xʲ
            </span>
            )
          </td>
        </tr>
        <tr>
          <th className="border border-2 border-info">
            <small>voiced</small>
          </th>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_labiodental_fricative"
                title="Voiced labiodental fricative"
              >
                v
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              vʲ
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_dental_sibilant_fricative"
                className="mw-redirect"
                title="Voiced dental sibilant fricative"
              >
                z
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              zʲ
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_retroflex_fricative"
                title="Voiced retroflex fricative"
              >
                ʐ
              </Link>
            </span>
          </td>
          <td>
            (
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_alveolo-palatal_fricative"
                title="Voiced alveolo-palatal fricative"
              >
                ʑː
              </Link>
            </span>
            )
          </td>
          <td>
            (
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_velar_fricative"
                title="Voiced velar fricative"
              >
                ɣ
              </Link>
            </span>
            )
          </td>
          <td></td>
        </tr>
        <tr>
          <th colspan="2" className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Approximant_consonant"
              className="mw-redirect"
              title="Approximant consonant"
            >
              Approximant
            </Link>
          </th>
          <td></td>
          <td></td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Velarized_alveolar_lateral_approximant"
                className="mw-redirect"
                title="Velarized alveolar lateral approximant"
              >
                ɫ
              </Link>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              lʲ
            </span>
          </td>
          <td></td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_palatal_approximant"
                title="Voiced palatal approximant"
              >
                j
              </Link>
            </span>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th colspan="2" className="border border-2 border-info">
            <Link
              target="_blank"
              to="https://en.wikipedia.org/wiki/Trill_consonant"
              title="Trill consonant"
            >
              Trill
            </Link>
          </th>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              rʲ
            </span>
          </td>
          <td>
            <span className="IPA" lang="und-fonipa">
              <Link
                target="_blank"
                to="https://en.wikipedia.org/wiki/Voiced_postalveolar_trill"
                className="mw-redirect"
                title="Voiced postalveolar trill"
              >
                r
              </Link>
            </span>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default RussConsonants;
