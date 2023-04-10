import React from "react";
import { Link } from "react-router-dom";

function RussVowels() {
  return (
    <table
      className="wikitable gap-0  table-bordered table border border-info border-4 table-dark "
      style={{ textAlign: "center" }}
    >
      <caption className="bg-dark border border-4 border-top-0 border-info ps-2">
        <i>
          <Link to="https://en.wikipedia.org/wiki/Russian_phonology">
            Wikipedia Source
          </Link>
        </i>
      </caption>
      <tbody>
        <tr style={{ fontSize: "small" }}>
          <th>Phoneme</th>
          <th>
            Letter
            <br />
            (typically)
          </th>
          <th>
            Phonemic
            <br />
            position
          </th>
          <th>Stressed</th>
          <th>Reduced</th>
        </tr>
        <tr>
          <td rowspan="2">
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              /i/
            </span>
          </td>
          <td>
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%98" className="mw-redirect" title="И">
                  и
                </Link>
              </span>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              (Cʲ)i
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Close_front_unrounded_vowel"
                title="Close front unrounded vowel"
              >
                i
              </Link>
              ]
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Near-close_near-front_unrounded_vowel"
                title="Near-close near-front unrounded vowel"
              >
                ɪ
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%AB" className="mw-redirect" title="Ы">
                  ы
                </Link>
                , и
              </span>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              Ci
            </span>
          </td>
          <td colspan="2">
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Close_central_unrounded_vowel"
                title="Close central unrounded vowel"
              >
                ɨ
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              /e/
            </span>
          </td>
          <td rowspan="3">
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%AD" className="mw-redirect" title="Э">
                  э
                </Link>
              </span>
            </span>
            ,{" "}
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%95" className="mw-redirect" title="Е">
                  е
                </Link>
              </span>
            </span>
            †
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              (C)e(C)
            </span>
          </td>
          <td colspan="2">
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Open-mid_front_unrounded_vowel"
                title="Open-mid front unrounded vowel"
              >
                ɛ
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              (C)eCʲ
            </span>
          </td>
          <td rowspan="2">
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Close-mid_front_unrounded_vowel"
                title="Close-mid front unrounded vowel"
              >
                e
              </Link>
              ]
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Open-mid_front_unrounded_vowel"
                title="Open-mid front unrounded vowel"
              >
                ɛ
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              Cʲe
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Near-close_near-front_unrounded_vowel"
                title="Near-close near-front unrounded vowel"
              >
                ɪ
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              /a/
            </span>
          </td>
          <td>
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%90" className="mw-redirect" title="А">
                  а
                </Link>
              </span>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              (C)a
            </span>
          </td>
          <td rowspan="2">
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Open_front_unrounded_vowel"
                title="Open front unrounded vowel"
              >
                a
              </Link>
              ]
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Open-mid_back_unrounded_vowel"
                title="Open-mid back unrounded vowel"
              >
                ʌ
              </Link>
              ]
            </span>
            ,{" "}
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link to="/wiki/Mid_central_vowel" title="Mid central vowel">
                ə
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%AF" className="mw-redirect" title="Я">
                  я
                </Link>
              </span>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              Cʲa(C)
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Near-close_near-front_unrounded_vowel"
                title="Near-close near-front unrounded vowel"
              >
                ɪ
              </Link>
              ]
            </span>
            ,{" "}
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link to="/wiki/Mid_central_vowel" title="Mid central vowel">
                ə
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              CʲaCʲ
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Near-open_front_unrounded_vowel"
                title="Near-open front unrounded vowel"
              >
                æ
              </Link>
              ]
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Near-close_near-front_unrounded_vowel"
                title="Near-close near-front unrounded vowel"
              >
                ɪ
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              /o/
            </span>
          </td>
          <td>
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%9E" className="mw-redirect" title="О">
                  о
                </Link>
              </span>
            </span>
          </td>
          <td rowspan="1">
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              (C)o
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Close-mid_back_rounded_vowel"
                title="Close-mid back rounded vowel"
              >
                o
              </Link>
              ]
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Open-mid_back_unrounded_vowel"
                title="Open-mid back unrounded vowel"
              >
                ʌ
              </Link>
              ]
            </span>
            ,{" "}
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link to="/wiki/Mid_central_vowel" title="Mid central vowel">
                ə
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%81" className="mw-redirect" title="Ё">
                  ё
                </Link>
              </span>
            </span>
            *
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              Cʲo
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Close-mid_central_rounded_vowel"
                title="Close-mid central rounded vowel"
              >
                ɵ
              </Link>
              ]
            </span>
          </td>
          <td>
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Near-close_near-front_unrounded_vowel"
                title="Near-close near-front unrounded vowel"
              >
                ɪ
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              /u/
            </span>
          </td>
          <td>
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%A3" className="mw-redirect" title="У">
                  у
                </Link>
              </span>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              (C)u
            </span>
          </td>
          <td rowspan="2">
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Close_back_rounded_vowel"
                title="Close back rounded vowel"
              >
                u
              </Link>
              ]
            </span>
          </td>
          <td rowspan="2">
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Near-close_near-back_rounded_vowel"
                title="Near-close near-back rounded vowel"
              >
                ʊ
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <span title="Russian-language text">
              <span lang="ru">
                <Link to="/wiki/%D0%AE" className="mw-redirect" title="Ю">
                  ю
                </Link>
              </span>
            </span>
          </td>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              Cʲu(C)
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span
              title="Representation in the International Phonetic Alphabet (IPA)"
              className="IPA"
              lang="und-Latn-fonipa"
            >
              CʲuCʲ
            </span>
          </td>
          <td colspan="2">
            <span
              className="IPA nowrap"
              lang="und-fonipa"
              title="Representation in the International Phonetic Alphabet (IPA)"
            >
              [
              <Link
                to="/wiki/Close_central_rounded_vowel"
                title="Close central rounded vowel"
              >
                ʉ
              </Link>
              ]
            </span>
          </td>
        </tr>
        <tr>
          <td colspan="5" style={{ textAlign: "left" }}>
            <dl>
              <dd>"C" represents a hard consonant only.</dd>
              <dd>
                "(C)" represents a hard consonant, a vowel,
                <br />
                /j/, or an utterance boundary.
              </dd>
              <dd>
                * Reduced <span className="nowrap">⟨ё⟩</span> is written as{" "}
                <span className="nowrap">⟨е⟩</span>.
              </dd>
              <dd>
                † <span className="nowrap">⟨е⟩</span> after a hard consonant is
                used
                <br />
                mostly in loanwords (except if word-initial).
                <br />
                <span className="nowrap">⟨э⟩</span> is always (C)V.
              </dd>
            </dl>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default RussVowels;
